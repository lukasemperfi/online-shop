import { memo, MouseEvent, MouseEventHandler, useState } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';

import { IconButton } from '../UI/IconButton/IconButton';
import * as Styled from './UserMenu.styled';
import userIcon from '../../assets/user.png';
import cartIcon from '../../assets/cart.png';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { logOut, selectIsLoggedIn } from '../../store/userSlice';
import { DropdownMenu } from '../UI/DropdownMenu/DropdownMenu';
import { PopoverPlacement } from '../../hooks/usePopoverPosition/models/PopoverPlacement';
import { ModalFormToggle } from '../ModalFormToggle/ModalFormToggle';
import { DropdownMenuItem } from '../UI/DropdownMenu/DropdownMenuItem';
import { selectCartItemsAmount } from '../../store/cartSlice/selectors';
import { useAdminAuth } from '../../hooks/useAdminAuth';
import { createPath } from '../../navigation/Utils/createPath';
import { Path } from '../../navigation/routeNames';

export interface DropdownMenuItemProps {
    id: string,
    name: string,
    handleClick?: MouseEventHandler
}

export const UserMenu = memo(() => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const match = useMatch(Path.Cart)
    const isCartPage = match !== null
    const isLoggedIn = useAppSelector(selectIsLoggedIn)
    const cartItemsAmount = useAppSelector(selectCartItemsAmount)
    const [isModalFormOpen, setIsModalFormOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const isOpened = Boolean(anchorEl);

    const openModalForm = () => setIsModalFormOpen(true);

    const closeModalForm = () => setIsModalFormOpen(false);

    const openDropdownMenu = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);

    const closeDropdownMenu = () => setAnchorEl(null);

    const openModalFormOrDropdownMenu = (event: MouseEvent<HTMLButtonElement>) => {
        if (isLoggedIn) {
            openDropdownMenu(event)
        } else {
            openModalForm()
        }
    }

    const cartIconOnclick = () => {
        if (!isCartPage) {
            navigate(createPath({ path: Path.Cart }))
        }

    }

    const onLogOut = () => {
        dispatch(logOut())
        closeDropdownMenu()
        closeModalForm()
    }

    const dropdownMenuData: DropdownMenuItemProps[] = [
        {
            id: '1',
            name: 'SignOut',
            handleClick: onLogOut
        },

    ]

    const renderItem = ({ name, handleClick }: DropdownMenuItemProps) => {
        return (<DropdownMenuItem onClick={handleClick}>{name}</DropdownMenuItem>)
    }

    const dropdownPlacement: PopoverPlacement = {
        vertical: 'bottom',
        horizontal: 'right'
    }

    return (
        <Styled.Wrapper>
            <IconButton
                onClick={openModalFormOrDropdownMenu}
                width={22}
                height={28}
            >
                <img src={userIcon} alt="user-icon" />
            </IconButton>
            <IconButton
                width={23}
                height={25}
                onClick={cartIconOnclick}
            >
                <img src={cartIcon} alt="cart-icon" />
                <Styled.CartItemsAmountStyle>{cartItemsAmount}</Styled.CartItemsAmountStyle>
            </IconButton>
            {isLoggedIn
                ?
                <DropdownMenu
                    data={dropdownMenuData}
                    renderItem={renderItem}
                    keyExtractor={({ id }) => id}
                    anchorEl={anchorEl}
                    isOpened={isOpened}
                    onClose={closeDropdownMenu}
                    placement={dropdownPlacement}
                />
                :
                <ModalFormToggle
                    isOpened={isModalFormOpen}
                    onClose={closeModalForm}
                />
            }
        </Styled.Wrapper>
    )
})
