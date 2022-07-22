import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { screenWidth, spacing } from "../../styles/styles";
import { Colors } from '../../styles/styles';
import { calcAdaptiveValue } from "../../styles/helpers";
import { NavLink } from "react-router-dom";


const linkStyle = css`
    display: inline-flex;
    padding: ${spacing.tiny} 0;
    color: ${Colors.primary};
    position: relative;
    /* width: 100%; */
    font-weight: 500;

    &:active {
        color: inherit;
    }

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



export const StyledTabsLink = styled(Link)`
    ${linkStyle}
    font-weight: 600;
    ${calcAdaptiveValue('font-size', '16px', '18px', screenWidth.min, screenWidth.max)}
`
export const StyledMenuLink = styled(NavLink)`
    ${linkStyle}
`