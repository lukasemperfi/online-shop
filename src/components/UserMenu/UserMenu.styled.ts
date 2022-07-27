import styled, { css } from 'styled-components'
import { Breakpoints } from '../../styles/styles'
import { StyledLink } from '../StyledLink/StyledLink.styled'


export const contentContainerStyles = css`
    width: 500px;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;

    @media (min-width: ${Breakpoints.xs}) {
        gap: 10px;
    }

    @media (min-width: ${Breakpoints.sm}) {
        gap: 15px;
    }
`
export const Link = styled(StyledLink)`
    padding: 2px;
    align-self: flex-end;
`

export const CartItemsAmountStyle = styled.span`
    position: absolute;
    right: -3px;
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