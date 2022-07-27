import { memo, MouseEvent, MouseEventHandler, useState } from 'react'

import { IconButton } from '../IconButton/IconButton'
import * as Styled from './UserMenu.styled'
import userIcon from '../../assets/user.png'
import { ReactComponent as UserIcon } from '../../assets/user.svg'
import cartIcon from '../../assets/cart.png'
import { useMatch, useNavigate } from 'react-router-dom'
import { CartRoutes } from '../../navigation/routeNames'
import { ButtonColors, MainButton } from '../MainButton/MainButton'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { logOut, selectIsLoading, selectIsLoggedIn, selectUser } from '../../store/userSlice'
import { MainPopup } from '../MainPopup/MainPopup'
import { Popover } from '../Popover/Popover'
import { DropdownMenu } from '../DropdownMenu/DropdownMenu'
import { PopoverPlacement } from '../../hooks/usePopoverPosition/models/PopoverPlacement'
import { ModalFormToggle } from '../ModalFormToggle/ModalFormToggle'

import { v4 as uuidv4 } from 'uuid';
import { DropdownMenuItem } from '../DropdownMenu/DropdownMenuItem'
import { db, usersCollection } from '../../firebase/firebase'
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore'
import { selectCartItemsAmount } from '../../store/cartSlice/selectors'
import { useAdminAuth } from '../../hooks/useAdminAuth'
import { StyledLink } from '../StyledLink/StyledLink.styled'

export interface DropdownMenuItemProps {
    id: string,
    name: string,
    handleClick?: MouseEventHandler
}

export const UserMenu = memo(() => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const match = useMatch(CartRoutes.Cart)
    const isCartPage = match !== null
    const isAdmin = useAdminAuth()

    // const user = useAppSelector(selectUser)
    const isLoggedIn = useAppSelector(selectIsLoggedIn)
    // const isLoading = useAppSelector(selectIsLoading)

    const cartItemsAmount = useAppSelector(selectCartItemsAmount)

    const [isModalFormOpen, setIsModalFormOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const isOpened = Boolean(anchorEl);


    const openModalForm = () => setIsModalFormOpen(true)
    const closeModalForm = () =>  setIsModalFormOpen(false)

    const openDropdownMenu = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
    const closeDropdownMenu = () =>  setAnchorEl(null);

    const openModalFormOrDropdownMenu = (event: MouseEvent<HTMLButtonElement>) => {
        if (isLoggedIn) {
            openDropdownMenu(event)
        } else {
            openModalForm()
        }
    }

    const cartIconOnclick = () => {
        if (!isCartPage) {
            console.log('navigate');
            navigate(CartRoutes.Cart)
        }

    }

    const onLogOut = () => {
        dispatch(logOut())
        closeDropdownMenu()
        closeModalForm()
        console.log('loggout');
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
                    keyExtractor={({id}) => id}
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
