import React, { FC, FunctionComponent } from 'react'
import styled, { css } from 'styled-components'
import { IconButton } from '../IconButton/IconButton.styled'
import { ReactComponent as TrashIcon } from '../../assets/trash.svg'
import { ReactComponent as PlusIcon } from '../../assets/plus.svg'
import { ReactComponent as MinusIcon } from '../../assets/minus.svg'
import { Image } from '../Image/Image'
import { maxTextLines } from '../../styles/mixins.styled'
import { Input } from '../Input/Input'
import { Breakpoints, Colors } from '../../styles/styles'
import { ProductCardProps } from '../../models/ProductCardProps'
import { AdaptiveImage } from '../Image/AdaptivImage'
import { Product } from '../../firebase/models/Product'

const Container = styled.div`
    display: flex;
    padding: 10px 0px;
    border-bottom: 1px solid ${Colors.primaryLight};

    @media (max-width: ${Breakpoints.md}) {
        flex-wrap: wrap;
        justify-content: space-between;
        row-gap: 20px;
    }
`

const ProductInfo = styled.div`
    display: flex; 
`
const ProductInfoBody = styled.div`
    padding: 0px 20px;
`
const ProductInfoImage = styled.div`
    flex: 0 0 15%;

`
const ProductInfoTitle = styled.div`
    margin-bottom: 10px;
    font-weight: 500;
    line-height: 1.1;
    ${maxTextLines(2)}
`

interface PriceProps {
    quantity: boolean;
}


const Quantity = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
`
const QuantityBody = styled.div`
    display: flex;
    gap: 10px;
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

const Price = styled.div<PriceProps>`
    font-weight: 500;
    display: flex; 
    justify-content: ${({quantity}) => quantity ? 'center' : 'flex-start'};
    align-items: center;
    flex: 1 1 15%;
    padding: 10px;

`
const DeleteItem = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

interface CartItem {
    item: Product;
    quantity?: boolean;
    onDelete: (id: string) => void;
}


export const CartItem: FC<CartItem> = ({ item, quantity = false, onDelete }) => {

    const handleDelete = () => {
        onDelete(item.id)
    }

    return (
        <Container>
            <ProductInfo>
                <ProductInfoImage>
                    <AdaptiveImage src={item.image} aspectRatio={0.75} />
                </ProductInfoImage>
                <ProductInfoBody>
                    <ProductInfoTitle>{item.name}</ProductInfoTitle>
                </ProductInfoBody>
            </ProductInfo>
            {quantity && (
                <Quantity>
                    <QuantityBody>
                        <IconButton>
                            <MinusIcon width={15} height={15} />
                        </IconButton>
                        <Input
                            defaultValue={1}
                            inputStyle={inputStyles}
                        />
                        <IconButton>
                            <PlusIcon width={15} height={15} />
                        </IconButton>
                    </QuantityBody>
                </Quantity>
            )}
            <Price quantity={quantity}>${item.price}</Price>
            <DeleteItem>
                <IconButton onClick={handleDelete}>
                    <TrashIcon width={25} height={25} />
                </IconButton>
            </DeleteItem>
        </Container>
    )
}
