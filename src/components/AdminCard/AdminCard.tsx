import { FC } from 'react';

import { AdaptiveImage } from '../UI/AdaptivImage/AdaptivImage';
import { IconButton } from '../UI/IconButton/IconButton';
import { ReactComponent as TrashIcon } from '../../assets/trash.svg';
import { useAppDispatch } from '../../hooks/redux';
import { formatPrice } from '../../utils/redux';
import { deleteProduct } from '../../store/productsSlice/productsSlice';
import * as Styled from './AdminCard.styled';

interface AdminCard {
    name: string,
    price: number,
    image: string,
    id: string,
}

export const AdminCard: FC<AdminCard> = ({
    name,
    price,
    image,
    id
}) => {
    const dispatch = useAppDispatch()

    const onClickDelete = () => {
        dispatch(deleteProduct(id))
    }

    return (
        <Styled.AdminCard>
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
            <Styled.CartPrice>
                <b>{formatPrice(price)}</b>
            </Styled.CartPrice>
            <Styled.CartRemove >
                <IconButton onClick={onClickDelete}>
                    <TrashIcon width={25} height={25} />
                </IconButton>
            </Styled.CartRemove>
        </Styled.AdminCard>
    )
}
