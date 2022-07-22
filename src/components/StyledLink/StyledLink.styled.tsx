import { Link } from "react-router-dom";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { screenWidth, spacing } from "../../styles/styles";
import { Colors } from '../../styles/styles';
import { calcAdaptiveValue } from "../../styles/helpers";
import { NavLink } from "react-router-dom";

interface LinkProps {
    color?: string;
}

const linkStyle = css<LinkProps>`
    display: inline-flex;
    padding: ${spacing.tiny} 0;
    color: ${({color}) => color ? color : '#ffffff'};
    position: relative;
    /* width: 100%; */
    font-weight: 500;
`

const linkActiveStyle = css`
    &:after {
        position: absolute;
        content: "";
        width: 0px;
        height: 1.5px;
        bottom: 0px;
        left: 50%;
        right: 0;
        background: #000;
        transition: all 0.4s;
        transform: translateX(-50%);
        overflow: hidden;
    }

    &.active::after {
        width: 100%;
    }
`

export const StyledLink = styled(Link)<LinkProps>`
    ${linkStyle}

    ${calcAdaptiveValue('font-size', '12px', '16px', screenWidth.min, screenWidth.max)}

    &:active {
        opacity: 0.5;
    }
`
export const StyledTabsLink = styled(Link)`
    ${linkStyle}
    ${linkActiveStyle}
    font-weight: 600;
    ${calcAdaptiveValue('font-size', '16px', '18px', screenWidth.min, screenWidth.max)}
`
export const StyledMenuLink = styled(NavLink)`
    ${linkStyle}
    ${linkActiveStyle}
`