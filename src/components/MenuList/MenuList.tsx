import React, { ReactNode } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

import * as Styled from './MenuList.styled';

export interface MenuListProps<T> {
    data: T[];
    renderItem: (item: T, onClick?: () => void, index?: number) => ReactNode;
    keyExtractor: (item: T) => string;
    containerStyle?: FlattenSimpleInterpolation;
    elementStyle?: FlattenSimpleInterpolation;
    onClick?: () => void;
}

export const MenuList = <T,>({
    data,
    renderItem,
    keyExtractor,
    containerStyle,
    onClick
}: MenuListProps<T>) =>
    <Styled.Ul containerStyle={containerStyle}>
        {data?.map((item, index) => (
            <React.Fragment key={keyExtractor(item)}>
                {renderItem(item, onClick, index)}
            </React.Fragment>
        ))}
    </Styled.Ul>
