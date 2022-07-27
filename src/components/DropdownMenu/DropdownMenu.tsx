import React, { ComponentPropsWithRef, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { MenuList, MenuListProps } from '../MenuList/MenuList'
import { Popover, PopoverProps } from '../Popover/Popover'

const StyledDropdowMenu = styled.div`
    background-color: rgb(255, 255, 255);
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
    overflow: hidden auto;
    outline: 0px;
    display: inline-flex;
`
const ulStyle = css`
    margin: 0px;
    padding: 8px 0px;
    position: relative;
    outline: 0px;
`

type DropdownMenuProps<T> = PopoverProps & MenuListProps<T> 

export const DropdownMenu = <T,>({
    data,
    renderItem,
    keyExtractor,
    anchorEl,
    onClose,
    isOpened,
    placement,
    onClick
}: DropdownMenuProps<T>) => {
    
    if (!isOpened) {
        return null
    }

    return (
        <Popover
            anchorEl={anchorEl}
            onClose={onClose}
            isOpened={isOpened}
            placement={placement}
        >
            <StyledDropdowMenu>
                <MenuList
                    data={data}
                    renderItem={renderItem}
                    onClick={onClick}
                    keyExtractor={keyExtractor}
                    containerStyle={ulStyle}
                />
            </StyledDropdowMenu>
        </Popover>

    )
}
