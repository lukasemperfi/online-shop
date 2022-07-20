import React from 'react'
import styled from 'styled-components'
import { CartItem } from '../components/CartItem/CartItem'
import { ButtonColors, MainButton } from '../components/MainButton/MainButton'
import { PageContainer } from '../components/PageContainer/PageContainer'
import { ItemsList } from '../components/ItemsList/ItemsList'
import { Colors } from '../styles/styles'
import { ProductCardProps } from '../models/ProductCardProps'
import { Product } from '../firebase/models/Product'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Header = styled.div`
    display: flex;
    justify-content: flex-start;
`
const CartTitle = styled.h2`
    width: 100%;
    font-weight: 500;
    font-size: 1.5rem;
    padding-bottom: 10px;
    border-bottom: 1px solid ${Colors.primaryLight};
`
const Footer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Total = styled.div`
    font-weight: 600;
`

const Checkout = styled.div`
    display: flex;
    gap: 20px;
`

const data = [
    {
        id: '1',
        // image: 'https://i.insider.com/61d1c0e2aa741500193b2d18?width=1136&format=jpeg',
        image: '',
        name: 'Крутой кот в очках. Босс всех котов на районе ', price: 3500
    },
    {
        id: '2',
        // image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg',
        image: '',
        name: 'Кот на чиле', price: 45
    },
    {
        id: '3',
        // image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg',
        image: '',
        name: 'Кот после рабочего дня Кот после рабочего дня Кот после рабочего дня Кот после рабочего дня Кот после рабочего дня', price: 77
    },
    {
        id: '4',
        // image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg',
        image: '',
        name: 'Кот после рабочего дня 2222', price: 56
    },
    {
        id: '5',
        // image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg',
        image: '',
        name: 'Кот после рабочего дня 333', price: 56
    },
    {
        id: '6',
        // image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg',
        image: '',
        name: 'Кот после рабочего дня 4444', price: 444444
    },
]

export const CartPage = () => {

    const removeProduct = () => {

    }

    const renderItem = (item: Product, index?: number) =>
        <CartItem
            item={item}
            key={item.id}
            onDelete={removeProduct}
        />

    return (
        <PageContainer>
            <Container>
                <Header>
                    <CartTitle>Cart</CartTitle>
                </Header>
                <ItemsList
                    data={data}
                    renderItem={renderItem}
                    gap='20px'
                />
                <Footer>
                    <Total>Total: 70$</Total>
                    <Checkout>
                        <MainButton>Continue shipping</MainButton>
                        <MainButton>Checkout</MainButton>
                    </Checkout>
                </Footer>
            </Container>
        </PageContainer>
    )
}
