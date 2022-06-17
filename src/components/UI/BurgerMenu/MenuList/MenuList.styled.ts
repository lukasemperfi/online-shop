import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { calcAdaptiveValue } from '../../../../styles/helpers';

import { colors, screenWidth, spacing } from '../../../../styles/styles';

interface MobileProps {
    isMobile: boolean;
}

interface NavProps extends MobileProps {
    positionTop?: number;
    styles?: FlattenSimpleInterpolation;
}

const mobileNav = css<NavProps>`
        position: fixed;
        top: ${({ positionTop }) => positionTop ? (positionTop + 'px') : '25px'};
        left: 0;
        background-color: red;
        height: 100vh;
        width: 50vw;
        padding: 20px;
        z-index: 9999;
`

const mobileAnchor = css`
        padding: ${spacing.tiny} 0px;
`

export const Nav = styled.nav<NavProps>`
    ${({ isMobile }) => isMobile && mobileNav}
    ${calcAdaptiveValue('padding', spacing.mobile, spacing.desktop, screenWidth.min, screenWidth.max )};
    @media (max-width: 576px) {
        width: 100vw;
    }
    ${({ styles }) => styles}
`

export const Ul = styled.ul<MobileProps>`
    display: inline-flex;
    flex-direction: row;
    flex-direction: ${({ isMobile }) => isMobile ? 'column' : 'row'};
`
export const Anchor = styled.a<MobileProps>`
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