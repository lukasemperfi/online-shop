import styled from 'styled-components';

import { Breakpoints, Colors } from '../../styles/styles';

export const AdminCard = styled.div`
    display: flex;
    justify-content: space-between;
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

export const CartPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
