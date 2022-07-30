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
import { deleteProduct } from '../../store/productsSlice/productsSlice';



const StyledAdminCard = styled.div`
    display: flex;
    justify-content: space-between;
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

const StyledCartPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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

interface AdminCard {
    name: string,
    price: number,
    image: string,
    id: string,
}


export const AdminCard: FC<AdminCard> = ({ name, price, image, id}) => {
    const dispatch = useAppDispatch()

    const onClickDelete = () => {
        dispatch(deleteProduct(id))
    }

    return (
        <StyledAdminCard>

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
            <StyledCartPrice className="cart__item-price">
                <b>{formatPrice(price)}</b>
            </StyledCartPrice>
            <StyledCartRemove >
                <IconButton onClick={onClickDelete}>
                    <TrashIcon width={25} height={25} />
                </IconButton>
            </StyledCartRemove>
        </StyledAdminCard>
    )
}

