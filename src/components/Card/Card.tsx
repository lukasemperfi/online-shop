import React, { FC } from 'react'

import { Image } from '../Image/Image'
import { ReactComponent as AddCartIcon } from '../../assets/add-cart.svg'
import { IconButton } from '../IconButton/IconButton'
import * as Styled from './Card.styled'
import styled, { FlattenSimpleInterpolation } from 'styled-components'
import { ProductCardProps } from '../../models/ProductCardProps'
import { AdaptiveImage } from '../Image/AdaptivImage'
import { Link } from 'react-router-dom'
import { ProductsRoutes } from '../../navigation/routeNames'

export enum CardVariant {
    primary = 'primary',
    description = 'description'
}

interface Props extends ProductCardProps {
    containerStyles?: FlattenSimpleInterpolation;
    variant?: CardVariant;
}


export const Card: FC<Props> = ({ image, title, price, variant = CardVariant.primary }) => {
    return (
        <Styled.Card>
            <Link to={ProductsRoutes.ProductDetails}>
                <AdaptiveImage src={image} aspectRatio={0.75} />
            </Link>
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
            {/* <Styled.Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illum, in perferendis ab recusandae ad velit possimus iure? 
                Modi fugit quisquam cum a ipsa saepe quam sint officia inventore fuga?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illum, in perferendis ab recusandae ad velit possimus iure? 
                Modi fugit quisquam cum a ipsa saepe quam sint officia inventore fuga?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illum, in perferendis ab recusandae ad velit possimus iure? 
                Modi fugit quisquam cum a ipsa saepe quam sint officia inventore fuga?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illum, in perferendis ab recusandae ad velit possimus iure? 
                Modi fugit quisquam cum a ipsa saepe quam sint officia inventore fuga?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illum, in perferendis ab recusandae ad velit possimus iure? 
                Modi fugit quisquam cum a ipsa saepe quam sint officia inventore fuga?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illum, in perferendis ab recusandae ad velit possimus iure? 
                Modi fugit quisquam cum a ipsa saepe quam sint officia inventore fuga?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illum, in perferendis ab recusandae ad velit possimus iure? 
                Modi fugit quisquam cum a ipsa saepe quam sint officia inventore fuga?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illum, in perferendis ab recusandae ad velit possimus iure? 
                Modi fugit quisquam cum a ipsa saepe quam sint officia inventore fuga?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illum, in perferendis ab recusandae ad velit possimus iure? 
                Modi fugit quisquam cum a ipsa saepe quam sint officia inventore fuga?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illum, in perferendis ab recusandae ad velit possimus iure? 
                Modi fugit quisquam cum a ipsa saepe quam sint officia inventore fuga?
            </Styled.Description> */}
        </Styled.Card>
    )
}
