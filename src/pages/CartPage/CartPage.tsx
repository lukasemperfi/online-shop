import { CartItem } from '../../components/CartItem/CartItem';
import { MainButton } from '../../components/UI/MainButton/MainButton';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { ItemsList } from '../../components/UI/ItemsList/ItemsList';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectCart } from '../../store/cartSlice/selectors';
import { CartItem as CartItemType } from '../../store/cartSlice/models/CartItem';
import { NoDataFound } from '../../components/UI/NoDataFound/NoDataFound';
import emptyCartImage from '../../assets/empty-cart.png';
import { clearCart } from '../../store/cartSlice/cartSlice';
import { formatPrice } from '../../utils/redux';
import { ButtonColors } from '../../components/UI/MainButton/MainButton.styled';
import * as Styled from './CartPage.styled';

export const CartPage = () => {
    const dispatch = useAppDispatch()
    const { items, totalPrice } = useAppSelector(selectCart)

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
        <PageContainer containerStyles={Styled.pageContainerStyle}>
            {totalPrice
                ?
                < Styled.Container >
                    <Styled.Header>
                        <Styled.CartTitle>Cart</Styled.CartTitle>
                        <MainButton
                            color={ButtonColors.text}
                            onClick={onClickClearCart}
                        >
                            Clear cart
                        </MainButton >
                    </Styled.Header>
                    <ItemsList
                        data={items}
                        renderItem={renderItem}
                        keyExtractor={({ id }) => id}
                        gap='20px'
                    />
                    <Styled.Footer>
                        <Styled.Total>Total: {formatPrice(totalPrice)}</Styled.Total>
                        <Styled.Checkout>
                            <MainButton>Checkout</MainButton>
                        </Styled.Checkout>
                    </Styled.Footer>
                </Styled.Container>
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
