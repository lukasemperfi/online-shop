import React, { FC, ReactNode } from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { breakpoints } from '../../styles/styles';

interface ProductsListProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => ReactNode;
  containerStyles?: FlattenSimpleInterpolation;
}

interface ContainerProps {
  containerStyles?: FlattenSimpleInterpolation;
}

const Container = styled.div<ContainerProps>`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;

    @media (max-width: ${breakpoints.lg}) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${breakpoints.md}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${breakpoints.sm}) {
      grid-template-columns: repeat(1, 1fr);
    }

    ${({ containerStyles }) => containerStyles}
`

export const ProductsList = <T,>({ data, renderItem, containerStyles }: ProductsListProps<T>) => {

  return (
    <Container containerStyles={containerStyles}>
      {data?.map(renderItem)}
    </Container>
  )
}
