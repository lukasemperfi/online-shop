import styled, { css } from 'styled-components'
import { colors, spacing } from '../../../styles/styles';

interface MenuListStyledProps {
    horizontal?: boolean;
}

export const Ul = styled.ul<MenuListStyledProps>`
    display: inline-flex;
    flex-direction: ${ ({horizontal}) => horizontal ? 'row' : 'column'};
`
export const Anchor = styled.a<MenuListStyledProps>`
    display: inline-flex;
    padding: ${spacing.tiny};
    color: ${colors.primary};
    position: relative;
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