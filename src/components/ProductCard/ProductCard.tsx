import React, { FC } from 'react'

import { Image } from '../Image/Image'
import { ReactComponent as AddCartIcon } from '../../assets/add-cart.svg'
import { IconButton } from '../IconButton/IconButton'
import * as Styled from './ProductCard.styled'
import { FlattenSimpleInterpolation } from 'styled-components'
import { ProductCardProps } from '../../models/ProductCardProps'
import { AdaptiveImage } from '../Image/AdaptivImage'
import { MainButton } from '../MainButton/MainButton'
import { Link } from 'react-router-dom'
import { ProductsRoutes } from '../../navigation/routeNames'

interface Props extends ProductCardProps{
    containerStyles?: FlattenSimpleInterpolation;
}

export const ProductCard: FC<Props> = ({ image, title, price}) => {
    const cardId = 5
        
    return (
        <Styled.Card>
            <Link to={`${ProductsRoutes.ProductsPage}/${cardId}`}>
                <AdaptiveImage src={image} aspectRatio={0.75} />
            </Link>
            <Styled.LinkTitle to={`${ProductsRoutes.ProductsPage}/${cardId}`}>
                <Styled.CardTitle >{title}</Styled.CardTitle>
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
