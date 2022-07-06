import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { maxTextLines } from '../../styles/mixins.styled';
import { Breakpoints, Colors } from '../../styles/styles'
import { CardVariant } from './UniveralCard';


interface ProductCardProps {
    containerStyles?: FlattenSimpleInterpolation;
    variant: CardVariant;
}

const cardStyles = {
    vertical: css`
        flex-direction: column;
        gap: 10px;
        position: relative;
        width: 100%;
    `,
    horizontal: css`
        padding-bottom: 10px;
        border-bottom: 1px solid ${Colors.primaryLight};

        @media (max-width: ${Breakpoints.md}) {
            flex-wrap: wrap;
            justify-content: space-between;
            row-gap: 20px;
        }
    `
}

const productInfoStyles = {
    vertical: css`
        flex-direction: column;
    `,
    horizontal: css`
        flex-direction: row;
    `
}

const productInfoImageStyles = {
    vertical: css`
        flex: none;
    `,
    horizontal: css`
        flex: 0 0 15%;
    `
}

const productInfoBodyStyles = {
    vertical: css`
        padding: 0;
    `,
    horizontal: css`
        padding: 0 20px;
    `
}

const footerStyles = {
    vertical: css`
        justify-content: space-between;
    `,
    horizontal: css`
        justify-content: space-around;
    `
}

const priceStyles = {
    vertical: undefined,
    horizontal: css`
        /* display: flex;
        justify-content: center;
        align-items: center; */
    `
}

export const buttonStyles = {
    vertical: css`
        width: 33px;
        height: 33px;
        border-radius: 15%;

    &:hover {
        background-color: rgba(233, 198, 8, 0.12);
    }
    `,
    horizontal: undefined
}


export const Card = styled.div<ProductCardProps>`
    /* display: flex; */

    ${({ variant }) => cardStyles[variant]}

    ${({ containerStyles }) => containerStyles}
`

export const ProductInfo = styled.div<ProductCardProps>`
    display: flex; 

    ${({ variant }) => productInfoStyles[variant]}
`

export const ProductInfoImage = styled.div<ProductCardProps>`
    ${({ variant }) => productInfoImageStyles[variant]}
`
export const ProductInfoTitle = styled.div`
    margin-bottom: 10px;
    font-weight: 500;
    line-height: 1.1;
    ${maxTextLines(2)}
`
export const ProductInfoBody = styled.div<ProductCardProps>`
   ${({ variant }) => productInfoBodyStyles[variant]}
`

export const CardFooter = styled.div<ProductCardProps>`
    display: flex;
    align-items: center;

    ${({ variant }) => footerStyles[variant]}
`

export const Price = styled.div<ProductCardProps>`
    font-weight: 600;

    ${({ variant }) => priceStyles[variant]}
`
export const DeleteItem = styled.div`
    /* display: flex;
    justify-content: flex-end;
    align-items: center; */
`