import { AdaptiveImage } from '../Image/AdaptivImage';
import { PageContainer } from '../PageContainer/PageContainer';
import { maxTextLines } from '../../styles/mixins.styled'

import styled, { css } from 'styled-components';
import { IconButton } from '../IconButton/IconButton';
import { ReactComponent as PlusIcon } from '../../assets/plus.svg'
import { ReactComponent as MinusIcon } from '../../assets/minus.svg'
import { ReactComponent as TrashIcon } from '../../assets/trash.svg'
import { Breakpoints, Colors } from '../../styles/styles';
import { textCut } from '../../styles/helpers';
import { Product } from '../../firebase/models/Product';
import { FC, useEffect, useMemo } from 'react';
import { count } from 'console';
import { useAppDispatch } from '../../hooks/redux';
import { deleteItem, minusItem, plusItem } from '../../store/cartSlice/cartSlice';
import { formatPrice } from '../../utils/redux';



const StyledCartItem = styled.div`
    display: flex;
    gap: 20px;
    padding: 10px 0px;
    border-bottom: 1px solid ${Colors.primaryLight};

    @media (max-width: ${Breakpoints.md}) {
        flex-wrap: wrap;
        justify-content: space-between;
        column-gap: 10px;
    }
    
`

const StyledCartBody = styled.div`
    display: flex;
    gap: 20px;
    flex: 0 0 50%;

    @media (max-width: ${Breakpoints.md}) {
        flex: 0 0 75%;
        gap: 10px;
    }
`

const StyledCartImage = styled.div`
    flex: 0 0 25%;
`
const StyledCartTitle = styled.p`
    display: flex;
    justify-content: center;
    align-items: center; 
    font-weight: 600;
    line-height: 1.25;
`

const StyledCartCount = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1 0 13%;
    @media (max-width: ${Breakpoints.md}) {

    }
`
const StyledCartPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 33%;  */
    flex: 0 1 33%;
    @media (max-width: ${Breakpoints.md}) {
        justify-content: flex-start;
    }
`
const StyledCartRemove = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 0 0 4%;
`

const pagecontainerStyle = css`
    width: 800px;
`

const inputStyles = css`
    width: 40px;
    background-color: transparent;
    text-align: center;
    border: 1px solid ${Colors.primaryLight};
    padding: 5px;

    &:focus {
        border-color: ${Colors.primary};
        box-shadow: none;
    }
`



interface CartItem {
    name: string,
    price: number,
    image: string,
    id: string,
    count: number;
    quantity?: boolean;
}


export const CartItem: FC<CartItem> = ({ name, price, image, id, count, quantity = true }) => {
    const dispatch = useAppDispatch()

    const onClickMinus = () => {
        dispatch(minusItem(id));
    };

    const onClickPlus = () => {
        dispatch(plusItem(id));
    };

    const onClickDelete = () => {
        dispatch(deleteItem(id))
    }

    return (
        <StyledCartItem>

            <StyledCartBody>
                <StyledCartImage>
                    <AdaptiveImage
                        src={image}
                        dimensions={{
                            width: 888,
                            height: 1110,
                        }}
                        skeleton
                    />
                </StyledCartImage>
                <StyledCartTitle >{name}</StyledCartTitle>
            </StyledCartBody>
            {quantity && (
                <StyledCartCount>
                    <IconButton disabled={count === 1} onClick={onClickMinus}>
                        <MinusIcon width={15} height={15} />
                    </IconButton>
                    <b>{count}</b>
                    <IconButton disabled={count === 99} onClick={onClickPlus}>
                        <PlusIcon width={15} height={15} />
                    </IconButton>
                </StyledCartCount>
            )}
            <StyledCartPrice className="cart__item-price">
                <b>{formatPrice(price * count)}</b>
            </StyledCartPrice>
            <StyledCartRemove >
                <IconButton onClick={onClickDelete}>
                    <TrashIcon width={25} height={25} />
                </IconButton>
            </StyledCartRemove>
        </StyledCartItem>
    )
}

