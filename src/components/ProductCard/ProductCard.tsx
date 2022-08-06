import { FC } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import { Link, useParams } from 'react-router-dom';

import { ReactComponent as AddCartIcon } from '../../assets/add-cart.svg';
import { IconButton } from '../UI/IconButton/IconButton';
import * as Styled from './ProductCard.styled';
import { AdaptiveImage } from '../UI/AdaptivImage/AdaptivImage';
import { Path } from '../../navigation/routeNames';
import { CartItem } from '../../store/cartSlice/models/CartItem';
import { useAppDispatch } from '../../hooks/redux';
import { addItem } from '../../store/cartSlice/cartSlice';
import { formatPrice } from '../../utils/redux';
import { createPath } from '../../navigation/Utils/createPath';

interface ProductCardProps {
    name: string,
    price: number,
    image: string,
    id: string,
    containerStyles?: FlattenSimpleInterpolation,
}

type ParamsProps = {
    gender?: string,
    productType?: string,
}

export const ProductCard: FC<ProductCardProps> = ({
    name,
    price,
    image,
    id
}) => {
    const { gender, productType } = useParams<ParamsProps>()
    const dispatch = useAppDispatch()

    const getPath = () => {
        if (gender && !productType) {
            return createPath({
                path: Path.GenderCategoryDetails,
                params: { gender, id },
            })
        }

        if (gender && productType) {
            return createPath({
                path: Path.ProductTypeDetails,
                params: { gender, productType, id },
            })
        }
        return ''
    }

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
            <Link to={getPath()}>
                <AdaptiveImage
                    src={image}
                    dimensions={{
                        width: 888,
                        height: 1110,
                    }}
                    skeleton
                />
            </Link>
            <Styled.LinkTitle to={getPath()}>
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
