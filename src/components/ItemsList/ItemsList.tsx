import React, { Component, FC, ReactNode } from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { Breakpoints } from '../../styles/styles';
import noProductImage from "../../assets/no-product-found.jpg"
import { NoDataFound } from '../NoDataFound/NoDataFound';


interface ItemsListProps<T> {
  data: T[];
  renderItem: (item: T, index?: number) => ReactNode;
  keyExtractor: (item: T) => string;
  containerStyles?: FlattenSimpleInterpolation;
  columns?: boolean;
  gap?: string;
  listEmptyComponent?: ReactNode;
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

export const ItemsList = <T,>({
  data,
  renderItem,
  keyExtractor,
  containerStyles,
  gap,
  columns,
  listEmptyComponent
}: ItemsListProps<T>) => {

  return (
    <>
      {data.length
        ?
        <Container containerStyles={containerStyles} gap={gap} columns={columns}>
          {data?.map((item, index) => (
            <React.Fragment key={keyExtractor(item)}>
              {renderItem(item, index)}
            </React.Fragment>
          ))}
        </Container>
        :
        listEmptyComponent
      }
    </>

  )
}
