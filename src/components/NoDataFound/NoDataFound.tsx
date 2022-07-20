import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import notProductsFoundImage from '../../assets/no-product-found.jpg'
import { AdaptiveImage } from '../Image/AdaptivImage'
import { PageContainer } from '../PageContainer/PageContainer'
import { calcAdaptiveValue } from "../../styles/helpers";
import { screenWidth } from '../../styles/styles'



const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 50%;
    margin-top: 50px;
`

const StyledTitle = styled.h1`
    font-weight: 600;
    ${calcAdaptiveValue('font-size', '12px', '25px', screenWidth.min, screenWidth.max )}
`

const pageContainerStyle = css`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
`

interface NoDataFoundProps {
    title?: string;
}

export const NoDataFound: FC<NoDataFoundProps> = ({ title = 'No Data Found' }) => {
    return (
        <PageContainer containerStyles={pageContainerStyle}>
            <StyledWrapper>
                <AdaptiveImage
                    src={notProductsFoundImage}
                    aspectRatio={2.34}
                />
                <StyledTitle>{title}</StyledTitle>
            </StyledWrapper>
        </PageContainer>





    )
}
