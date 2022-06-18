import styled, { css } from 'styled-components'
import { calcAdaptiveValue } from '../../../../styles/helpers';

import { colors, screenWidth, spacing } from '../../../../styles/styles';

interface MenuProps {
    positionTop?: number;
    open: boolean;
    isMobile: boolean;
}

interface NavProps {
    isMobile: boolean;
}

const mobileMenu = css`
    transform: translateX(-100%);
    transition: all 0.3s linear;
`
const mobileMenuOpen = css`
    transform: translateX(0);
`

const mobileNav = css`
    position: absolute;
    top: 0px;
    left: 0;
    display: block;
    background-color: #FFFFFF;
    border: 2px solid;
    border-radius: 2px;
    height: 100vh;
    width: 100vw;
    z-index: 9999;
    ${calcAdaptiveValue('padding', spacing.mobile, spacing.desktop, screenWidth.min, screenWidth.max)}
`

const mobileAnchor = css`
    padding: ${spacing.small} 0px;
`

export const Menu = styled.div<MenuProps>`
    position: relative;
    top:  ${({ positionTop }) => positionTop ? (positionTop + 'px') : '0px'};
    left: 0;   
    ${({isMobile}) => isMobile &&  mobileMenu}
    ${({isMobile , open}) => (isMobile && open) && mobileMenuOpen}
`

export const Nav = styled.nav<NavProps>`
    display: inline-flex;
    background-color: red;
    ${({ isMobile }) => isMobile && mobileNav}
`

export const Ul = styled.ul<NavProps>`
    display: inline-flex;
    flex-direction: row;
    flex-direction: ${({ isMobile }) => isMobile ? 'column' : 'row'};
`
export const Anchor = styled.a<NavProps>`
    display: inline-flex;
    padding: ${spacing.tiny} ${spacing.medium};
    color: ${colors.primary};
    position: relative;
    width: 100%;
    ${({isMobile}) => isMobile && mobileAnchor}
    &:active {
        color: inherit;
    }
    &:after {
        position: absolute;
        content: "";
        width: 0px;
        height: 1.5px;
        bottom: 0;
        left: 50%;
        right: 0;
        background: #000;
        transition: all 0.4s;
        transform: translateX(-50%);
        overflow: hidden;
    }
    &:hover::after {
        width: 100%;
    }
`