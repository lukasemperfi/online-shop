import React, { FC, ReactNode } from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { Breakpoints } from '../../styles/styles';

interface ItemsListProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => ReactNode;
  containerStyles?: FlattenSimpleInterpolation;
  columns?: boolean;
  gap?: string;
}

interface ContainerProps {
  containerStyles?: FlattenSimpleInterpolation;
  columns?: boolean;
  gap?: string;
}

const columnsStyle = css`
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

const Container = styled.div<ContainerProps>`
    display: grid;
    grid-gap: ${({ gap }) => gap};

    @media (min-width: ${Breakpoints.xs}) {
      grid-template-columns: repeat(1, 1fr);
    }

    ${({ columns }) => columns && columnsStyle}

    ${({ containerStyles }) => containerStyles}
`

export const ItemsList = <T,>({ data, renderItem, containerStyles, gap, columns }: ItemsListProps<T>) => {

  return (
    <Container containerStyles={containerStyles} gap={gap} columns={columns}>
      {data?.map(renderItem)}
    </Container>
  )
}
