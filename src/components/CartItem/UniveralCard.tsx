import React, { FC, FunctionComponent } from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { IconButton } from '../IconButton/IconButton.styled'
import { ReactComponent as TrashIcon } from '../../assets/trash.svg'
import { ReactComponent as PlusIcon } from '../../assets/plus.svg'
import { ReactComponent as MinusIcon } from '../../assets/minus.svg'
import { Image } from '../Image/Image'
import { maxTextLines } from '../../styles/mixins.styled'
import { Input } from '../Input/Input'
import { Breakpoints, Colors } from '../../styles/styles'
import { ProductCardProps } from '../../models/ProductCardProps'
import { AdaptiveImage } from '../Image/AdaptivImage'
import * as Styled from './Horizontal.styled '
import { ReactComponent as AddCartIcon } from '../../assets/add-cart.svg'


// const Quantity = styled.div`
//     display: flex; 
//     justify-content: center;
//     align-items: center;
// `
// const QuantityBody = styled.div`
//     display: flex;
//     gap: 10px;
// `

// const inputStyles = css`
//     width: 40px;
//     background-color: transparent;
//     text-align: center;
//     border: 1px solid ${Colors.primaryLight};
//     padding: 5px;

//     &:focus {
//         border-color: ${Colors.primary};
//         box-shadow: none;
//     }
// `


export enum CardVariant {   
    horizontal = 'horizontal',
    vertical = 'vertical'
}

interface UniveralCardProps extends ProductCardProps {
    containerStyles?: FlattenSimpleInterpolation;
    variant?: CardVariant;
}

const imageShoes = 'https://lukasemperfi.github.io/Dr.Martens/img/cards/product-card/1461%20SMOOTH%20LEATHER%20OXFORD%20SHOES%20green/26226300.80.jpg'

export const UniveralCard: FC<UniveralCardProps> = ({ image, title, price, variant = CardVariant.horizontal }) => {
    
    const deleteButtons = {
        vertical: <AddCartIcon width={25} height={25} fill='#ffd800' />,
        horizontal: <TrashIcon width={25} height={25} />
    }
    
    return (
        <Styled.Card variant={variant}>
            <Styled.ProductInfo variant={variant}>
                <Styled.ProductInfoImage variant={variant}>
                    <AdaptiveImage src={imageShoes} aspectRatio={0.75} />
                </Styled.ProductInfoImage>
                {/* <Styled.ProductInfoBody variant={variant}> */}
                    <Styled.ProductInfoTitle>{title}</Styled.ProductInfoTitle>
                {/* </Styled.ProductInfoBody> */}
            </Styled.ProductInfo>
            {/* <Quantity>
                <QuantityBody>
                    <IconButton>
                        <MinusIcon width={15} height={15} />
                    </IconButton>
                    <Input
                        defaultValue={1}
                        inputStyle={inputStyles}
                    />
                    <IconButton>
                        <PlusIcon width={15} height={15} />
                    </IconButton>
                </QuantityBody>
            </Quantity> */}
            {/* <Styled.CardFooter variant={variant}> */}
                <Styled.Price variant={variant}>${price}</Styled.Price>
                <IconButton
                    styles={Styled.buttonStyles[variant]}
                >
                    {deleteButtons[variant]}
                </IconButton>
            {/* </Styled.CardFooter> */}
        </Styled.Card>
    )
}
