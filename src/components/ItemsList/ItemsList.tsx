import React, { ReactNode } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

import * as Styled from './ItemsList.styled';

interface ItemsListProps<T> {
  data: T[];
  renderItem: (item: T, index?: number) => ReactNode;
  keyExtractor: (item: T) => string;
  containerStyles?: FlattenSimpleInterpolation;
  columns?: boolean;
  gap?: string;
  listEmptyComponent?: ReactNode;
}

export const ItemsList = <T,>({
  data,
  renderItem,
  keyExtractor,
  containerStyles,
  gap,
  columns,
  listEmptyComponent
}: ItemsListProps<T>) =>
  <>
    {data.length
      ?
      <Styled.Container containerStyles={containerStyles} gap={gap} columns={columns}>
        {data?.map((item, index) => (
          <React.Fragment key={keyExtractor(item)}>
            {renderItem(item, index)}
          </React.Fragment>
        ))}
      </Styled.Container>
      :
      listEmptyComponent
    }
  </>
