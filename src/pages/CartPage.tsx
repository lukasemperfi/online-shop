import React from 'react'
import styled, { css } from 'styled-components'
import { CartItem } from '../components/CartItem/CartItem'
import { ButtonColors, MainButton } from '../components/MainButton/MainButton'
import { PageContainer } from '../components/PageContainer/PageContainer'
import { ItemsList } from '../components/ItemsList/ItemsList'
import { Colors } from '../styles/styles'
import { ProductCardProps } from '../models/ProductCardProps'
import { Product } from '../firebase/models/Product'
import { useAppSelector } from '../hooks/redux'
import { selectCart } from '../store/cartSlice/selectors'
import { CartItem as CartItemType } from '../store/cartSlice/models/CartItem'
import { NoDataFound } from '../components/NoDataFound/NoDataFound'

import emptyCartImage from '../assets/empty-cart.png'

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

const pageContainerStyle = css`
    width: 100%;
`


export const CartPage = () => {
    const { items, totalPrice} = useAppSelector(selectCart)

    const renderItem = (item: CartItemType) =>
        <CartItem
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            count={item.count}
            key={item.id}
        />

    return (
        <PageContainer containerStyles={pageContainerStyle}>
            {totalPrice
                ?
                < Container >
                    <Header>
                        <CartTitle>Cart</CartTitle>
                    </Header>
                    <ItemsList
                        data={items}
                        renderItem={renderItem}
                        gap='20px'
                    />
                    <Footer>
                        <Total>Total: ${totalPrice}</Total>
                        <Checkout>
                            <MainButton>Continue shipping</MainButton>
                            <MainButton>Checkout</MainButton>
                        </Checkout>
                    </Footer>
                </Container>
                :
                <NoDataFound
                    title='Cart Is Empty!'
                    src={emptyCartImage}
                    dimensions={{
                        width: 600,
                        height: 510,
                    }}
                    maxWidth='500px'
                    skeleton
                />
            }
        </PageContainer >
    )
}
