import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { IconButton } from '../IconButton/IconButton.styled'
import { ReactComponent as TrashIcon } from '../../assets/trash.svg'
import { Image } from '../Image/Image'
import { maxTextLines } from '../../styles/mixins.styled'
import { Breakpoints, Colors } from '../../styles/styles'
import { ProductCardProps } from '../../models/ProductCardProps'
import { AdaptiveImage } from '../Image/AdaptivImage'

const Container = styled.div`
    display: flex;
    padding: 10px 0px;
    border-bottom: 1px solid ${Colors.primaryLight};

    @media (max-width: ${Breakpoints.md}) {
        flex-wrap: wrap;
        justify-content: space-between;
        row-gap: 20px;
    }
`

const ProductInfo = styled.div`
    display: flex; 
`
const ProductInfoBody = styled.div`
    padding: 0px 20px;
`
const ProductInfoImage = styled.div`
    flex: 0 0 15%;

`
const ProductInfoTitle = styled.div`
    margin-bottom: 10px;
    font-weight: 500;
    line-height: 1.1;
    ${maxTextLines(2)}
`

const Price = styled.div`
    font-weight: 500;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    

    @media (min-width: ${Breakpoints.xs}) {
        flex: 0 0 auto; 
    }

    @media (min-width: ${Breakpoints.md}) {
       flex: 0 0 33%;
    }
`
const DeleteItem = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

interface AdminProductCard extends ProductCardProps {

}

export const AdminProductCard: FC<AdminProductCard> = ({ image, title, price }) => {
    return (
        <Container>
            <ProductInfo>
                <ProductInfoImage>
                <AdaptiveImage src={image} aspectRatio={0.75} />
                </ProductInfoImage>
                <ProductInfoBody>
                    <ProductInfoTitle>{title}</ProductInfoTitle>
                </ProductInfoBody>
            </ProductInfo>
            <Price>${price}</Price>
            <DeleteItem>
                <IconButton>
                    <TrashIcon width={25} height={25} />
                </IconButton>
            </DeleteItem>
        </Container>
    )
}
