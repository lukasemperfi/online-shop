import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { Product } from '../../firebase/models/Product'
import { useAppDispatch } from '../../hooks/redux'
import { addItem } from '../../store/cartSlice/cartSlice'
import { CartItem } from '../../store/cartSlice/models/CartItem'
import { formatPrice } from '../../utils/redux'
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

export const Details: FC<DetailsProps> = ({ item }) => {
  const {
    id,
    name,
    price,
    image,
  } = item
  const dispatch = useAppDispatch()

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      name,
      price,
      image,
      count: 0,
    }

    dispatch(addItem(item))
  }

  return (
    <StyledDetails>
      <StyledCol1>
        <AdaptiveImage src={image} />
      </StyledCol1>
      <StyledCol2>
        <StyledTitle>{name}</StyledTitle>
        <StyledPrice>{formatPrice(price)}</StyledPrice>
        <MainButton styles={butonStyle} onClick={onClickAdd}>ADD TO CART</MainButton>
      </StyledCol2>
    </StyledDetails>
  )
}
