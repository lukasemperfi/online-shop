import styled, { css } from 'styled-components';
import { Breakpoints } from '../../styles/styles';

export const Details = styled.div`
    display: flex;
    gap: 20px;

    @media (min-width: ${Breakpoints.xs}) {
      flex-direction: column;
    }

    @media (min-width: ${Breakpoints.lg}) {
      flex-direction: row;
    }
`

export const Col1 = styled.div`
  flex: 0 1 50%;
`
export const Col2 = styled.div`
  flex: 0 1 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;
`

export const Title = styled.div`
  font-weight: 600;
  line-height: 1.5;

  @media (min-width: ${Breakpoints.xs}) {
    font-size: 14px;
  }

  @media (min-width: ${Breakpoints.sm}) {
      font-size: 16px;
  }

  @media (min-width: ${Breakpoints.md}) {
    font-size: 21px;
  }
`
export const Price = styled.div`
  font-weight: 600;
  

  @media (min-width: ${Breakpoints.xs}) {
    font-size: 14px;
  }

  @media (min-width: ${Breakpoints.sm}) {
      font-size: 14px;
  }

  @media (min-width: ${Breakpoints.md}) {
    font-size: 18px;
  }
`

export const butonStyle = css`
  margin-top: 50px;
`
