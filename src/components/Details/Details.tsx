import  { FC } from 'react';

import { Product } from '../../firebase/models/Product';
import { useAppDispatch } from '../../hooks/redux';
import { addItem } from '../../store/cartSlice/cartSlice';
import { CartItem } from '../../store/cartSlice/models/CartItem';
import { formatPrice } from '../../utils/redux';
import { AdaptiveImage } from '../UI/AdaptivImage/AdaptivImage';
import { MainButton } from '../UI/MainButton/MainButton';
import * as Styled from './Details.styled';
import { butonStyle } from './Details.styled';

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
    <Styled.Details>
      <Styled.Col1>
        <AdaptiveImage src={image} />
      </Styled.Col1>
      <Styled.Col2>
        <Styled.Title>{name}</Styled.Title>
        <Styled.Price>{formatPrice(price)}</Styled.Price>
        <MainButton styles={butonStyle} onClick={onClickAdd}>ADD TO CART</MainButton>
      </Styled.Col2>
    </Styled.Details>
  )
}
