import styled, { css } from 'styled-components';

import { Colors } from '../../styles/styles';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid ${Colors.primaryLight};
`
export const CartTitle = styled.h2`
    font-weight: 500;
    font-size: 1.5rem;
`

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
`

export const Total = styled.div`
    font-weight: 600;
`

export const Checkout = styled.div`
    display: flex;
    gap: 20px;
`

export const pageContainerStyle = css`
    width: 100%;
`
