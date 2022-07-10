import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { MenuList } from '../MenuList/MenuList'

const StyledContainer = styled.div`
    background-color: rgb(255, 255, 255);
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
    position: absolute;
    overflow: hidden auto;
    min-width: 16px;
    min-height: 16px;
    max-width: calc(100% - 32px);
    max-height: calc(100% - 32px);
    outline: 0px;
`
const ulStyle = css`
    margin: 0px;
    padding: 8px 0px;
    position: relative;
    outline: 0px;
`

const liStyle = css`
    background-color: transparent;
    outline: 0px;
    border-radius: 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    color: inherit;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    min-height: 48px;
    padding: 6px 16px;
    white-space: nowrap;

    &:hover {
        background-color: rgba(0, 0, 0, 0.04);
    }

    @media (min-width: 600px) {
          min-height: auto;  
    }
`


interface DropdownMenuProps<T> {
    data: T[];
    renderItem: (item: T) => ReactNode;
}

export const DropdownMenu = <T,>({ data, renderItem }: DropdownMenuProps<T>) => {
    return (
        <StyledContainer>
            <MenuList
                data={data}
                renderItem={renderItem}
                containerStyle={ulStyle}
                elementStyle={liStyle}
            />
        </StyledContainer>

    )
}
