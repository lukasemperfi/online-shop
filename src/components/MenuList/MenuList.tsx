import React, { MouseEventHandler, ReactNode } from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'


interface UlProps {
    containerStyle?: FlattenSimpleInterpolation;
}

interface LiProps {
    elementStyle?: FlattenSimpleInterpolation;
}

const StyledUl = styled.ul<UlProps>`
    ${({ containerStyle }) => containerStyle}
`

const StyledLi = styled.li<LiProps>`
     ${({ elementStyle }) => elementStyle}
`

export interface MenuListProps<T> {
    data: T[];
    renderItem: (item: T, onClick?: () => void, index?: number ) => ReactNode;
    keyExtractor: (item: T) => string;
    containerStyle?: FlattenSimpleInterpolation;
    elementStyle?: FlattenSimpleInterpolation;
    onClick?: () => void;
}

export const MenuList = <T,>({ data, renderItem, keyExtractor, containerStyle, onClick }: MenuListProps<T>) => {

    return (
        <>
            <StyledUl containerStyle={containerStyle}>
                {data?.map((item, index) => (
                    <React.Fragment key={keyExtractor(item)}>
                         {renderItem(item, onClick, index)}
                    </React.Fragment>                 
                ))}
            </StyledUl>
        </>
    )
}
