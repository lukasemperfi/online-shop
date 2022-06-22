import { ComponentPropsWithoutRef, FC } from 'react'

import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

export enum Colors {
    primary = 'primary',
    secondary = 'secondary',
}

interface MainButtonProps extends ComponentPropsWithoutRef<'button'> {
    color?: Colors,
    styles?: FlattenSimpleInterpolation;
}

interface StyledButtonProps {
    color: Colors,
    styles?: FlattenSimpleInterpolation;
}

const buttonColors = {
    primary: css`
    background-color: #292a2f;
    color: #FFFFFF;
`,
    secondary: css`
    background-color: #FFFFFF;
    color: #292a2f;
`
}

const StyledButton = styled.button<StyledButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    width: 100%;
    min-height: 42px;
    border: 0;
    border-radius: 4px;
    font-family: inherit;
    font-size: inherit;
    font-weight: 500;
    line-height: inherit;
    cursor: pointer;
    margin-bottom: 15px;
    box-shadow: 0 1px 5px 0 rgb(0 0 0 / 20%);
    transition: all 0.3s ease;
    ${({ color }) => color && buttonColors[color]}
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
`

export const MainButton: FC<MainButtonProps> = (
    {
        children,
        color = Colors.primary,
        styles,
        onClick,
        ...buttonProperties
    }) => (
    <StyledButton
        color={color}
        styles={styles}
        onClick={onClick}
        {...buttonProperties}
    >
        {children}
    </StyledButton>
)
