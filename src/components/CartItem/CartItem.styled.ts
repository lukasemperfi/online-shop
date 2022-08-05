import styled, { css } from 'styled-components';

import { Breakpoints, Colors } from '../../styles/styles';

export const CartItem = styled.div`
    display: flex;
    gap: 20px;
    padding: 10px 0px;
    border-bottom: 1px solid ${Colors.primaryLight};

    @media (max-width: ${Breakpoints.md}) {
        flex-wrap: wrap;
        justify-content: space-between;
        column-gap: 10px;
    }
    
`

export const CartBody = styled.div`
    display: flex;
    gap: 20px;
    flex: 0 0 50%;

    @media (max-width: ${Breakpoints.md}) {
        flex: 0 0 75%;
        gap: 10px;
    }
`

export const CartImage = styled.div`
    flex: 0 0 25%;
`

export const CartTitle = styled.p`
    display: flex;
    justify-content: center;
    align-items: center; 
    font-weight: 600;
    line-height: 1.25;
`

export const CartCount = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1 0 13%;
    @media (max-width: ${Breakpoints.md}) {

    }
`

export const CartPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 33%;  */
    flex: 0 1 33%;
    @media (max-width: ${Breakpoints.md}) {
        justify-content: flex-start;
    }
`

export const CartRemove = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 0 0 4%;
`

export const pagecontainerStyle = css`
    width: 800px;
`

export const inputStyles = css`
    width: 40px;
    background-color: transparent;
    text-align: center;
    border: 1px solid ${Colors.primaryLight};
    padding: 5px;

    &:focus {
        border-color: ${Colors.primary};
        box-shadow: none;
    }
`