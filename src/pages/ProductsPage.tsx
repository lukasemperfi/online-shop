import { ReactElement } from "react"
import { css } from "styled-components"
import { PageContainer } from "../components/PageContainer/PageContainer"
import { ProductCard } from "../components/ProductCard/ProductCard"
import { ItemsList } from "../components/ItemsList/ItemsList"
import {productsData} from '../productsData'
import { ProductCardProps } from "../models/ProductCardProps"

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

export const ProductsPage = () => {

    const renderItem = (item: ProductCardProps, index: number) =>
        <ProductCard
            image={item.image}
            title={item.title}
            price={item.price}
            key={index}
        />

    return (
        <PageContainer maxWidth="1200px">
            <ItemsList
                data={data}
                renderItem={renderItem}
                columns
                gap="20px"
            />
        </PageContainer>
    )
}
