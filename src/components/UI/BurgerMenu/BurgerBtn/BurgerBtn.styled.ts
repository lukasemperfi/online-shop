import styled, { css } from 'styled-components'

import { colors } from '../../../../styles/styles';

interface BurgerBtnProps {
    isMobile: boolean;
}

interface BurgerLineProps {
    isActive: boolean;
}

export const Burger = styled.div<BurgerBtnProps>`
    display: ${({ isMobile }) => isMobile ? 'inline-flex' : 'none'};
    width: 35px;
    height: 25px;
    position: relative;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;
`

export const Line = styled.span<BurgerLineProps>`
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: ${colors.primary};
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out; 
`

const line1Active = css`
    transform: rotate(45deg);
    top: 11px;
`
const line2Active = css`
    width: 0%;
    opacity: 0;
`
const line3Active = css`
    transform: rotate(-45deg);
    top: 11px;
`

export const Line1 = styled(Line)`
    top: 2px;
    ${({ isActive }) => isActive && line1Active}
`
export const Line2 = styled(Line)`
    top: 11.5px;
    ${({ isActive }) => isActive && line2Active}
`
export const Line3 = styled(Line)`
    top: 21px;
    ${({ isActive }) => isActive && line3Active}
`