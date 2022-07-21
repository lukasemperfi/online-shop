import React, { FC } from 'react'

import { Image } from '../Image/Image'
import { ReactComponent as AddCartIcon } from '../../assets/add-cart.svg'
import { IconButton } from '../IconButton/IconButton'
import * as Styled from './ProductCard.styled'
import styled, { FlattenSimpleInterpolation } from 'styled-components'
import { AdaptiveImage } from '../Image/AdaptivImage'
import { MainButton } from '../MainButton/MainButton'
import { Link, useParams } from 'react-router-dom'
import { ProductsRoutes } from '../../navigation/routeNames'
import { Product } from '../../firebase/models/Product'

interface ProductCardProps {
    item: Product;
    containerStyles?: FlattenSimpleInterpolation;
}

type ParamsProps = {
    gender?: string,
}

export const ProductCard: FC<ProductCardProps> = ({ item }) => {
    const { name, price, image, id } = item
    const { gender } = useParams<ParamsProps>()

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
                <Styled.CardPrice>{price} грн</Styled.CardPrice>
                <IconButton
                    styles={Styled.addCartButtonStyles}
                >
                    <AddCartIcon width='25px' height='25px' fill='#ffd800' />
                </IconButton>
            </Styled.CardFooter>
        </Styled.Card>
    )
}
