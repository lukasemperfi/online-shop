import { useState } from 'react'

import { IconButton } from '../IconButton/IconButton'
import * as Styled from './UserMenu.styled'
import userIcon from '../../assets/user.png'
import cartIcon from '../../assets/cart.png'
import { FormToogle } from '../FormToogle/FormToogle'
import { Popup } from '../Popup/Popup'

export const UserMenu = () => {

    const [isUserPopupOpen, setIsUserPopupOpen] = useState(false)
    // const [isCartPopupOpen, setIsCartPopupOpen] = useState(false)

    const handleIsUserPopupOpen = () => setIsUserPopupOpen(true)
    const handleIsUserPopupClose = () => setIsUserPopupOpen(false)

    // const handleIsCartPopupOpen = () => setIsCartPopupOpen(true)
    // const handleIsCartPopupClose = () => setIsCartPopupOpen(false)
console.log('render user menu');

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
                <Popup
                    open={isUserPopupOpen}
                    onClose={handleIsUserPopupClose}
                    contentContainerStyles={Styled.contentContainerStyles}
                >
                    <FormToogle />
                </Popup>
            </div>
            <IconButton width={25} height={25} styles={Styled.cartStyle}>
                <img src={cartIcon} alt="cart-icon" />
                <Styled.CartCountStyle>2</Styled.CartCountStyle>
            </IconButton>
        </>
    )
}
