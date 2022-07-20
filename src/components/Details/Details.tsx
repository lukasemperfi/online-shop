import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { Product } from '../../firebase/models/Product'
import { AdaptiveImage } from '../Image/AdaptivImage'
import { MainButton } from '../MainButton/MainButton'

const StyledDetails = styled.div`
    display: flex;
    gap: 20px;
`

const StyledCol1 = styled.div`
  flex: 0 1 50%;
`
const StyledCol2 = styled.div`
  flex: 0 1 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* background-color: antiquewhite; */
  padding: 0 20px;
`

const StyledTitle = styled.div`
  font-size: 21px;
  font-weight: 600;
  line-height: 1.5;
`
const StyledPrice = styled.div`
  font-weight: 600;
  font-size: 18px;
`

const butonStyle = css`
  margin-top: 50px;
`

interface DetailsProps {
    item: Product
}

export const Details: FC<DetailsProps> = ({item}) => {
    return (
        <StyledDetails>
            <StyledCol1>
                <AdaptiveImage src={item.image} />
            </StyledCol1>
            <StyledCol2>
                <StyledTitle>{item.name}</StyledTitle>
                <StyledPrice>${item.price}</StyledPrice>
                <MainButton styles={butonStyle}>ADD TO CART</MainButton>
            </StyledCol2>
        </StyledDetails>
    )
}
