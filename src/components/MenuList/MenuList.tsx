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
    renderItem: (item: T) => ReactNode;
    containerStyle?: FlattenSimpleInterpolation;
    elementStyle?: FlattenSimpleInterpolation;
}

export const MenuList = <T,>({ data, renderItem, containerStyle, elementStyle }: MenuListProps<T>) => {

    return (
        <>
            <StyledUl containerStyle={containerStyle}>
                {data?.map((item, index) => (
                    <React.Fragment key={index}>
                         {renderItem(item)}
                    </React.Fragment>                 
                ))}
            </StyledUl>
        </>
    )
}
