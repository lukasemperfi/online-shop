import { Link } from 'react-router-dom';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { maxTextLines } from '../../styles/mixins.styled';
import { Colors } from '../../styles/styles';

interface ProductCardProps {
    containerStyles?: FlattenSimpleInterpolation;
}

export const Card = styled.div<ProductCardProps>`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 10px;
    width: 100%;
    ${({ containerStyles }) => containerStyles}
`

export const LinkTitle = styled(Link)`
    flex: 1 1 auto;
    color: ${Colors.black};
`
export const CardTitle = styled.div`
    font-weight: 500;
    line-height: 1.5;
    ${maxTextLines(2)}
`
export const CardPrice = styled.div`
    font-weight: 600;
`

export const CardFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const imageContainerStyles = css`
    padding: 0px 0px 113% 0px;
    position: relative;
`
export const imageStyles = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`
export const addCartButtonStyles = css`
    width: 33px;
    height: 33px;
    border-radius: 15%;

    &:hover {
        background-color: rgba(233, 198, 8, 0.12);
    }
`