import { ReactElement } from "react"
import styled, { css } from "styled-components"
import { PageContainer } from "../components/PageContainer/PageContainer"
import { ProductCard } from "../components/ProductCard/ProductCard"
import { ItemsList } from "../components/ItemsList/ItemsList"
import { productsData } from '../productsData'
import { ProductCardProps } from "../models/ProductCardProps"
import { Card } from "../components/Card/Card"
import { auth, db } from "../firebase"

const data = [
    {
        image: 'https://i.insider.com/61d1c0e2aa741500193b2d18?width=1136&format=jpeg',
        title: 'Крутой кот в очках. Босс всех котов на районе ', price: 3500
    },
    {
        image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg',
        title: 'Кот на чиле', price: 45
    },
    {
        image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg',
        title: 'Кот после рабочего дня Кот после рабочего дня Кот после рабочего дня Кот после рабочего дня Кот после рабочего дня', price: 77
    },
    {
        image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg',
        title: 'Кот после рабочего дня 2222', price: 56
    },
    {
        image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg',
        title: 'Кот после рабочего дня 333', price: 56
    },
    {
        image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg',
        title: 'Кот после рабочего дня 4444', price: 444444
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


export const ProductsPage = () => {

    const renderItem = (item: any, index: number) => (
        <ProductCard
            image={item.image}
            title={item.title}
            price={item.price}
            key={index}
        />)

    return (
        <PageContainer>
            <ItemsList
                data={data}
                renderItem={renderItem}
                columns
                gap="20px"
            />
            {/* <Skeleton></Skeleton> */}
        </PageContainer>
    )
}
