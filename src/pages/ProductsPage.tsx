import { ChangeEvent, ReactElement, useEffect, useState } from "react"
import styled, { css } from "styled-components"
import { PageContainer } from "../components/PageContainer/PageContainer"
import { ProductCard } from "../components/ProductCard/ProductCard"
import { ItemsList } from "../components/UI/ItemsList/ItemsList"
import { productsData } from '../productsData'
import { ProductCardProps } from "../models/ProductCardProps"
import { auth, db, productsCollection } from "../firebase/firebase"
import { Product } from "../firebase/models/Product"
import { MainButton } from "../components/UI/MainButton/MainButton"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { fetchMore, fetchProductsByCategoryAndOrder, selectProducts, selectProductsState, updateState } from '../store/productsSlice/productsSlice';
import { AdaptiveImage } from "../components/UI/AdaptivImage/AdaptivImage"
import noProductImage from "../assets/no-product-found.jpg"

import { NoDataFound } from "../components/UI/NoDataFound/NoDataFound"
import { useParams } from "react-router-dom"
import { Loader } from "../components/UI/Loaders/Loader/Loader"
import { Select } from "../components/UI/Select/Select"
import { getDocs, limit, orderBy, OrderByDirection, query, where } from "firebase/firestore"
import { selectFiltersState } from "../store/filtersSlice"


const data = [
    {
        image: 'https://i.insider.com/61d1c0e2aa741500193b2d18?width=1136&format=jpeg',
        id: '1',
        name: 'Крутой кот в очках. Босс всех котов на районе ',
        price: 3500
    },
    {
        image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg',
        id: '2',
        name: 'Кот на чиле',
        price: 45
    },
    {
        image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg',
        id: '3',
        name: 'Кот после рабочего дня Кот после рабочего дня Кот после рабочего дня Кот после рабочего дня Кот после рабочего дня',
        price: 77
    },
    {
        image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg',
        id: '4',
        name: 'Кот после рабочего дня 2222',
        price: 56
    },
    {
        image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg',
        id: '5',
        name: 'Кот после рабочего дня 333',
        price: 56
    },
    {
        image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg',
        id: '6',
        name: 'Кот после рабочего дня 4444', price: 444444
    },
]

const Skeleton = styled.span`
    display: block;
    background-color: rgba(0, 0, 0, 0.11);
    height: 1.2em;
    position: relative;
    overflow: hidden;
    mask-image: -webkit-radial-gradient(white, black);
    height: 300px;
    width: 300px;

    &::after {
        animation: animation-wave 1.4s linear 0.5s infinite;
        background: linear-gradient( 90deg, transparent, rgba(0, 0, 0, 0.04), transparent );
        content: '';
        position: absolute;
        transform: translateX(-100%);
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
    }

    @keyframes animation-wave {
        0% {
            transform: translateX(-100%);
        }
        50% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(100%);
        }
}
`

const StyledBtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    min-height: 50px;
    /* background-color: antiquewhite; */
`
const StyledNoMoreData = styled.p`
    font-weight: 600;
    font-size: 20px;
`

const StyledSort = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-end;
`
const pageContainerStyle = css`
   width: 100%;
`


const options = [
    { value: 'asc', name: 'Price (Low to High)' },
    { value: 'desc', name: 'Price (High to Low)' },
]


export const ProductsPage = () => {
    const { isLoading, pagination: {isEmpty, isFetchingMore } } = useAppSelector(selectProductsState)
    const { gender, productType } = useParams()
    const dispatch = useAppDispatch()
    const products = useAppSelector(selectProducts)
    const {genderCategory} = useAppSelector(selectFiltersState)
    const [sortValue, setSortValue] = useState<OrderByDirection>('desc')
    const genderSearchQuery = genderCategory && gender

    
    const isLoadMoreBtnShow = !isFetchingMore && !isEmpty && !isLoading

    useEffect(() => {
        dispatch(fetchProductsByCategoryAndOrder({ gender: genderSearchQuery, category: productType, order: sortValue }))
    }, [sortValue, genderSearchQuery, productType])

    const loadMore = () => {
        dispatch(fetchMore({ gender: genderSearchQuery, category: productType, order: sortValue }))
    }

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSortValue(event.target.value as OrderByDirection)
    }

    const renderItem = (item: Product) => (
        <ProductCard
            name={item.name}
            price={item.price}
            image={item.image}
            id={item.id}
            key={item.id}
        />)


    return (
        <PageContainer containerStyles={pageContainerStyle}>
            <StyledSort>
                <Select
                    options={options}
                    value={sortValue}
                    onChange={handleChange}
                />
            </StyledSort>
            {isLoading
                ?
                <Loader size="10px" margin="60px auto" />
                :
                <ItemsList
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={({ id }) => id}
                    columns
                    gap="20px"
                    listEmptyComponent={
                        <NoDataFound
                            title='Products Is Empty!'
                            src={noProductImage}
                            dimensions={{
                                width: 592,
                                height: 253,
                            }}
                            maxWidth='800px'
                        />
                    }
                />
            }
            <StyledBtnContainer>
                {isLoadMoreBtnShow && <MainButton width="auto" onClick={loadMore}>LOAD MORE</MainButton>}
                {isFetchingMore && <Loader size="5px" margin="0 auto" />}
            </StyledBtnContainer>
        </PageContainer>
    )
}
