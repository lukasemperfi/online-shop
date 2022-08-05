import { FC } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import { Link, useParams } from 'react-router-dom';

import { ReactComponent as AddCartIcon } from '../../assets/add-cart.svg';
import { IconButton } from '../IconButton/IconButton';
import * as Styled from './ProductCard.styled';
import { AdaptiveImage } from '../AdaptivImage/AdaptivImage';
import { ProductsRoutes } from '../../navigation/routeNames';
import { CartItem } from '../../store/cartSlice/models/CartItem';
import { useAppDispatch } from '../../hooks/redux';
import { addItem } from '../../store/cartSlice/cartSlice';
import { formatPrice } from '../../utils/redux';

interface ProductCardProps {
    name: string,
    price: number,
    image: string,
    id: string,
    containerStyles?: FlattenSimpleInterpolation,
}

type ParamsProps = {
    gender?: string,
}

export const ProductCard: FC<ProductCardProps> = ({
    name,
    price,
    image,
    id
}) => {
    const { gender } = useParams<ParamsProps>()
    const dispatch = useAppDispatch()

    const onClickAdd = () => {
        const item: CartItem = {
            id,
            name,
            price,
            image,
            count: 0,
        }

        dispatch(addItem(item))
    }

    return (
        <Styled.Card>
            <Link to={`${ProductsRoutes.ProductsPage}/${gender}/${id}`}>
                <AdaptiveImage
                    src={image}
                    dimensions={{
                        width: 888,
                        height: 1110,
                    }}
                    skeleton
                />
            </Link>
            <Styled.LinkTitle to={`${ProductsRoutes.ProductsPage}/${gender}/${id}`}>
                <Styled.CardTitle >{name}</Styled.CardTitle>
            </Styled.LinkTitle>
            <Styled.CardFooter>
                <Styled.CardPrice>{formatPrice(price)}</Styled.CardPrice>
                <IconButton
                    styles={Styled.addCartButtonStyles}
                    onClick={onClickAdd}
                >
                    <AddCartIcon
                        width='25px'
                        height='25px'
                        fill='#ffd800'
                    />
                </IconButton>
            </Styled.CardFooter>
        </Styled.Card>
    )
}
