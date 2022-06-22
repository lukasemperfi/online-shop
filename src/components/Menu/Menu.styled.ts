import styled, { css } from 'styled-components'
import { calcAdaptiveValue } from '../../styles/helpers';

import { colors, screenWidth, spacing } from '../../styles/styles';

interface MenuProps {
    positionTop?: number;
    open: boolean;
    isMobile: boolean;
}

interface NavProps {
    isMobile: boolean;
}

const mobileMenu = css<MenuProps>`
    position: fixed;
    top: 0;
    left: 0;
    padding-top: ${({ positionTop }) => positionTop  + 'px'};
    display: block;
    background-color: #FFFFFF;
    height: 100vh;
    width: 100vw;
    opacity: 0;
    transform: translateX(-100%);
    transition: all 0.3s linear;
`
const mobileMenuOpen = css`
    transform: translateX(0);
    opacity: 1;
`

const mobileNav = css`
    ${calcAdaptiveValue('padding', spacing.mobile, spacing.desktop, screenWidth.min, screenWidth.max)}
`

const mobileAnchor = css`
    padding: ${spacing.small} 0px;
`

export const Menu = styled.div<MenuProps>`
    position: relative;
    display: flex;
    justify-content: center;
    background-color: transparent;
    ${({isMobile}) => isMobile &&  mobileMenu}
    ${({isMobile , open}) => (isMobile && open) && mobileMenuOpen}
`

export const Nav = styled.nav<NavProps>`
    display: inline-flex;
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