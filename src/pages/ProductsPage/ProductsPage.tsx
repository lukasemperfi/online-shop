import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { OrderByDirection } from "firebase/firestore";

import { PageContainer } from "../../components/PageContainer/PageContainer";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { ItemsList } from "../../components/UI/ItemsList/ItemsList";
import { Product } from "../../firebase/models/Product";
import { MainButton } from "../../components/UI/MainButton/MainButton";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchMore, fetchProductsByCategoryAndOrder } from '../../store/productsSlice/productsSlice';
import noProductImage from "../../assets/no-product-found.jpg";
import { NoDataFound } from "../../components/UI/NoDataFound/NoDataFound";
import { Loader } from "../../components/UI/Loaders/Loader/Loader";
import { Select } from "../../components/UI/Select/Select";
import * as Styled from "./ProductsPage.styled";
import { selectProducts, selectProductsState } from "../../store/productsSlice/selectors";
import { selectFiltersState } from "../../store/filtersSlice/selectors";

const options = [
    { value: 'asc', name: 'Price (Low to High)' },
    { value: 'desc', name: 'Price (High to Low)' },
]

const noDataFoundImageDimensions = {
    width: 592,
    height: 253,
}

export const ProductsPage = () => {
    const { isLoading, pagination: { isEmpty, isFetchingMore } } = useAppSelector(selectProductsState)
    const { gender, productType } = useParams()
    const dispatch = useAppDispatch()
    const products = useAppSelector(selectProducts)
    const { genderCategory } = useAppSelector(selectFiltersState)
    const [sortValue, setSortValue] = useState<OrderByDirection>('desc')
    const genderSearchQuery = genderCategory && gender
    const isLoadMoreBtnShow = !isFetchingMore && !isEmpty && !isLoading

    useEffect(() => {
        dispatch(fetchProductsByCategoryAndOrder({ gender: genderSearchQuery, category: productType, order: sortValue }))
    }, [sortValue, genderSearchQuery, productType])

    const loadMore = () => {
        dispatch(fetchMore({
            gender: genderSearchQuery,
            category: productType,
            order: sortValue
        }))
    }

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSortValue(event.target.value as OrderByDirection)
    }

    const renderItem = (item: Product) =>
        <ProductCard
            name={item.name}
            price={item.price}
            image={item.image}
            id={item.id}
            key={item.id}
        />

    return (
        <PageContainer containerStyles={Styled.pageContainerStyle}>
            <Styled.Sort>
                <Select
                    options={options}
                    value={sortValue}
                    onChange={handleChange}
                />
            </Styled.Sort>
            {isLoading
                ?
                <Loader
                    size="10px"
                    margin="60px auto"
                />
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
                            dimensions={noDataFoundImageDimensions}
                            maxWidth='800px'
                        />
                    }
                />
            }
            <Styled.BtnContainer>
                {isLoadMoreBtnShow &&
                    <MainButton
                        width="auto"
                        onClick={loadMore}
                    >
                        LOAD MORE
                    </MainButton>}
                {isFetchingMore &&
                    <Loader
                        size="5px"
                        margin="0 auto"
                    />}
            </Styled.BtnContainer>
        </PageContainer>
    )
}
