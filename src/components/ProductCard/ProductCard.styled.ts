import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { colors } from '../../styles/styles';

interface CardProps {
    containerStyles?: FlattenSimpleInterpolation;
}

export const Card = styled.div<CardProps>`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    ${({ containerStyles }) => containerStyles}
`

export const LinkTitle = styled.a`
    flex: 1 1 auto;
    color: ${colors.black};
`
export const CardTitle = styled.div`
    margin-bottom: 10px;
    font-weight: 500;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -moz-box;
    -moz-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-clamp: 2;
    box-orient: vertical;
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
    margin-bottom: 10px;
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