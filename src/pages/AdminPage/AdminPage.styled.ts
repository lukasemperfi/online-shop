import styled, { css } from 'styled-components';

import { Breakpoints } from '../../styles/styles';

export const GridContainer = styled.div`
  display: grid;
  width: 100%;
  border-bottom: 3px solid rgb(0 0 0 / 20%);

  @media (min-width: ${Breakpoints.xs}) {
    grid-template-columns: 100%;
  }

  @media (min-width: ${Breakpoints.md}) {
    grid-template-columns: 15% 85%;
  }

  @media (min-width: ${Breakpoints.xl}) {
    grid-template-columns: 15% 75%;
  }

  @media (min-width: ${Breakpoints.xxl}) {
    grid-template-columns: 15% 65%;
  }
`

export const Aside = styled.aside`

  @media (min-width: ${Breakpoints.md}) {
    border-right: 3px solid rgb(0 0 0 / 20%);
  }
`

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-bottom: 3px solid rgb(0 0 0 / 20%);
`

export const MenuItem = styled.div`
  padding: 20px;
  border-bottom: 3px solid rgb(0 0 0 / 20%);
`
export const Products = styled.main`
  padding: 20px;
`

export const ProductsTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 1.5rem;
`

export const addProductButtonStyles = css`
  margin-bottom: 20px;
  width: auto;
`
