import { MouseEvent, MouseEventHandler, useState } from 'react'

import { IconButton } from '../IconButton/IconButton'
import * as Styled from './UserMenu.styled'
import userIcon from '../../assets/user.png'
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

export interface DropdownMenuItemProps {
    name: string,
    handleClick?: MouseEventHandler
}

export const UserMenu = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const match = useMatch(CartRoutes.Cart)
    const isCartPage = match !== null

    // const user = useAppSelector(selectUser)
    const isLoggedIn = useAppSelector(selectIsLoggedIn)
    // const isLoading = useAppSelector(selectIsLoading)

 
    const [isUserPopupOpen, setIsUserPopupOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const isOpened = Boolean(anchorEl);

    const handleIsUserPopupOpen = (event: MouseEvent<HTMLButtonElement>) => {
        if (isLoggedIn) {
            setAnchorEl(event.currentTarget);
        } else {
            setIsUserPopupOpen(true)
        }

    }

    const handleIsUserPopupClose = () => {
        if (isLoggedIn) {
            setAnchorEl(null);
        } else {
            setIsUserPopupOpen(false)
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
        console.log('loggout');
        handleIsUserPopupClose()
    }

    const dropdownMenuData: DropdownMenuItemProps[] = [
        {
            name: 'Profile',
            handleClick: handleIsUserPopupClose
        },
        {
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
        <>
            <div>
                <IconButton
                    width={25}
                    height={25}
                    styles={Styled.iconsStyle}
                    onClick={handleIsUserPopupOpen}
                >
                    <img src={userIcon} alt="user-icon" />
                </IconButton>
                {isLoggedIn
                    ?
                    <DropdownMenu
                        data={dropdownMenuData}
                        renderItem={renderItem}
                        anchorEl={anchorEl}
                        isOpened={isOpened}
                        onClose={handleIsUserPopupClose}
                        placement={dropdownPlacement}
                    />
                    :
                    <ModalFormToggle
                        isOpened={isUserPopupOpen}
                        onClose={handleIsUserPopupClose}
                    />
                }
            </div>
            <IconButton
                width={25}
                height={25}
                styles={Styled.cartStyle}
                onClick={cartIconOnclick}
            >
                <img src={cartIcon} alt="cart-icon" />
                <Styled.CartCountStyle>2</Styled.CartCountStyle>
            </IconButton>
        </>
    )
}
