import React, { ComponentPropsWithoutRef, FC } from 'react'
import styled, { css } from 'styled-components'
import notProductsFoundImage from '../../assets/no-product-found.jpg'
import bigImg from '../../assets/bigImg.jpg'
import { AdaptiveImage, AdaptiveImageProps } from '../Image/AdaptivImage'
import { PageContainer } from '../PageContainer/PageContainer'
import { calcAdaptiveValue } from "../../styles/helpers";
import { screenWidth } from '../../styles/styles'



const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    margin-top: 50px;
`

const StyledTitle = styled.h1`
    font-weight: 600;
    ${calcAdaptiveValue('font-size', '12px', '25px', screenWidth.min, screenWidth.max)}
`


interface NoDataFoundProps extends AdaptiveImageProps {
    title?: string;
}

export const NoDataFound: FC<NoDataFoundProps> = ({ title = 'No Data Found', ...imageProps }) => {
    return (
        <StyledWrapper>
            <AdaptiveImage
                {...imageProps}
            />
            <StyledTitle>{title}</StyledTitle>
        </StyledWrapper>
    )
}
