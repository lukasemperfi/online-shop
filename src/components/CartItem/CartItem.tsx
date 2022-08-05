import { FC } from 'react';

import { AdaptiveImage } from '../UI/AdaptivImage/AdaptivImage';

import { IconButton } from '../UI/IconButton/IconButton';
import { ReactComponent as PlusIcon } from '../../assets/plus.svg';
import { ReactComponent as MinusIcon } from '../../assets/minus.svg';
import { ReactComponent as TrashIcon } from '../../assets/trash.svg';
import { useAppDispatch } from '../../hooks/redux';
import { deleteItem, minusItem, plusItem } from '../../store/cartSlice/cartSlice';
import { formatPrice } from '../../utils/redux';
import * as Styled from './CartItem.styled';

interface CartItem {
    name: string,
    price: number,
    image: string,
    id: string,
    count: number;
}

export const CartItem: FC<CartItem> = ({
    name,
    price,
    image,
    id,
    count
}) => {
    const dispatch = useAppDispatch()

    const onClickMinus = () => {
        dispatch(minusItem(id));
    }

    const onClickPlus = () => {
        dispatch(plusItem(id));
    }

    const onClickDelete = () => {
        dispatch(deleteItem(id))
    }

    return (
        <Styled.CartItem>
            <Styled.CartBody>
                <Styled.CartImage>
                    <AdaptiveImage
                        src={image}
                        dimensions={{
                            width: 888,
                            height: 1110,
                        }}
                        skeleton
                    />
                </Styled.CartImage>
                <Styled.CartTitle >{name}</Styled.CartTitle>
            </Styled.CartBody>
            <Styled.CartCount>
                <IconButton disabled={count === 1} onClick={onClickMinus}>
                    <MinusIcon width={15} height={15} />
                </IconButton>
                <b>{count}</b>
                <IconButton disabled={count === 99} onClick={onClickPlus}>
                    <PlusIcon width={15} height={15} />
                </IconButton>
            </Styled.CartCount>
            <Styled.CartPrice className="cart__item-price">
                <b>{formatPrice(price * count)}</b>
            </Styled.CartPrice>
            <Styled.CartRemove >
                <IconButton onClick={onClickDelete}>
                    <TrashIcon width={25} height={25} />
                </IconButton>
            </Styled.CartRemove>
        </Styled.CartItem>
    )
}
