import { MenuList, MenuListProps } from '../MenuList/MenuList';
import { Popover, PopoverProps } from '../Popover/Popover';
import * as Styled from './DropdownMenu.styled';
import { ulStyle } from './DropdownMenu.styled';

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
            <Styled.DropdowMenu>
                <MenuList
                    data={data}
                    renderItem={renderItem}
                    onClick={onClick}
                    keyExtractor={keyExtractor}
                    containerStyle={ulStyle}
                />
            </Styled.DropdowMenu>
        </Popover>
    )
}
