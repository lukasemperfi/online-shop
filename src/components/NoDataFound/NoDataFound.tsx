import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import notProductsFoundImage from '../../assets/no-product-found.jpg'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

const StyledTitle = styled.h1`
    font-weight: 600;
    font-size: 25px;
`

const StyledImg = styled.img`
    max-width: 100%;
`

interface NoDataFoundProps {
    title?: string;
}

export const NoDataFound: FC<NoDataFoundProps> = ({title = 'No Data Found'}) => {
    return (
        <StyledContainer>
            <StyledImg src={notProductsFoundImage} alt="" />
            <StyledTitle>{title}</StyledTitle>
        </StyledContainer>
    )
}
