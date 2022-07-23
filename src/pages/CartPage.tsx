import React from 'react'
import styled, { css } from 'styled-components'
import { CartItem } from '../components/CartItem/CartItem'
import { ButtonColors, MainButton } from '../components/MainButton/MainButton'
import { PageContainer } from '../components/PageContainer/PageContainer'
import { ItemsList } from '../components/ItemsList/ItemsList'
import { Colors } from '../styles/styles'
import { ProductCardProps } from '../models/ProductCardProps'
import { Product } from '../firebase/models/Product'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { selectCart } from '../store/cartSlice/selectors'
import { CartItem as CartItemType } from '../store/cartSlice/models/CartItem'
import { NoDataFound } from '../components/NoDataFound/NoDataFound'

import emptyCartImage from '../assets/empty-cart.png'
import { clearCart } from '../store/cartSlice/cartSlice'
import { formatPrice } from '../utils/redux'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid ${Colors.primaryLight};
`
const CartTitle = styled.h2`
    font-weight: 500;
    font-size: 1.5rem;
`

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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
    const dispatch = useAppDispatch()
    const { items, totalPrice} = useAppSelector(selectCart)

    const onClickClearCart = () => {
        dispatch(clearCart())
    }

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
                        <MainButton color={ButtonColors.text} onClick={onClickClearCart}>Clear cart</MainButton >
                    </Header>
                    <ItemsList
                        data={items}
                        renderItem={renderItem}
                        keyExtractor={({id}) => id}
                        gap='20px'
                    />
                    <Footer>
                        <Total>Total: {formatPrice(totalPrice)}</Total>
                        <Checkout>
                            {/* <MainButton>Continue shipping</MainButton> */}
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
                />
            }
        </PageContainer >
    )
}
