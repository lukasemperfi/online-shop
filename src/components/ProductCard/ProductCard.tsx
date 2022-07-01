import React, { FC } from 'react'

import { Image } from '../Image/Image'
import { ReactComponent as AddCartIcon } from '../../assets/add-cart.svg'
import { IconButton } from '../IconButton/IconButton'
import * as Styled from './ProductCard.styled'
import { FlattenSimpleInterpolation } from 'styled-components'
import { ProductCardProps } from '../../models/ProductCardProps'

interface Props extends ProductCardProps{
    containerStyles?: FlattenSimpleInterpolation;
}

export const ProductCard: FC<Props> = ({ image, title, price }) => {
    return (
        <Styled.Card>
            <a href="#">
                <div >
                    <Image
                        src={image}
                        containerStyle={Styled.imageContainerStyles}
                        imageStyle={Styled.imageStyles}
                    />
                </div>
            </a>
            <Styled.LinkTitle href="#">
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
