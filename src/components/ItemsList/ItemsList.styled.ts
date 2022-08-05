import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { Breakpoints, Colors } from '../../styles/styles';

interface ContainerProps {
  containerStyles?: FlattenSimpleInterpolation;
  columns?: boolean;
  gap?: string;
}

export const columnsStyle = css`
    @media (min-width: ${Breakpoints.sm}) {
      grid-template-columns: repeat(2, 1fr);
    }    

    @media (min-width: ${Breakpoints.md}) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: ${Breakpoints.lg}) {
      grid-template-columns: repeat(4, 1fr);
    }
`

export const Container = styled.div<ContainerProps>`
    display: grid;
    grid-gap: ${({ gap }) => gap};

    @media (min-width: ${Breakpoints.xs}) {
      grid-template-columns: repeat(1, 1fr);
    }

    ${({ columns }) => columns && columnsStyle}

    ${({ containerStyles }) => containerStyles}
`