import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

export enum ButtonColors {
    primary = 'primary',
    secondary = 'secondary',
    text = 'text'
}

interface ButtonProps {
    color: ButtonColors,
    styles?: FlattenSimpleInterpolation;
    width?: string;
}

export const buttonButtonColors = {
    primary: css`
        background-color: #292a2f;
        color: #FFFFFF;
`,
    secondary: css`
        background-color: #FFFFFF;
        color: #292a2f;
`,
    text: css`
        align-items: flex-end;
        background-color: transparent;
        border: none;
        box-shadow: none;
        width: auto;
        height: auto;
        min-height: auto;
        padding: 0;

        &:focus {
            box-shadow: none;
        }

        &:active {
            opacity: 1;
        }
`,
}

export const Button = styled.button<ButtonProps>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline: none;
    width: ${({ width }) => width ? width : '100%'};
    min-height: 42px;
    border: 0;
    border-radius: 4px;
    font-family: inherit;
    font-size: inherit;
    font-weight: 500;
    line-height: inherit;
    cursor: pointer;
    box-shadow: 0 1px 5px 0 rgb(0 0 0 / 20%);
    transition: all 0.3s ease;
    padding: 10px;
    overflow: hidden;

    &:focus {
        box-shadow: 0 0 15px #4285f4;
    }

    &:active {
        opacity: 0.8;
    }

    &:disabled {
        background-color: rgba(0,0,0,0.1);
        opacity: 0.8;
        cursor: auto;
    }

    ${({ color }) => color && buttonButtonColors[color]}
    ${({ styles }) => styles}
`
