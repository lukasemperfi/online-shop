import styled, { css } from 'styled-components'

export const iconsStyle = css`
    margin-left: 15px;
    /* position: fixed;
    left: 0; */
`

export const contentContainerStyles = css`
    width: 500px;
`

export const cartStyle = css`
    ${iconsStyle}
    position: relative;
`

export const CartCountStyle = styled.span`
    position: absolute;
    left: 10px;
    top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    height: 20px;
    border-radius: 50px;
    background-color: #f93c00;
    font-size: 12px;
    font-weight: 500;
    color: #fff;
    padding: 0px 4px;
    line-height: 1;
`