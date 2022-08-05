import styled, { css } from 'styled-components'

import { Colors } from '../../../styles/styles';

interface BurgerLineProps {
    isActive: boolean;
}

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

export const Burger = styled.div`
    display: inline-flex;
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
    background-color: ${Colors.primary};
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out; 
`

export const Line1 = styled(Line)`
    top: 3px;
    ${({ isActive }) => isActive && line1Active}
`

export const Line2 = styled(Line)`
    top: 12px;
    ${({ isActive }) => isActive && line2Active}
`

export const Line3 = styled(Line)`
    top: 21px;
    ${({ isActive }) => isActive && line3Active}
`
