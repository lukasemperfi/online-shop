import { useEffect, useState, FC } from 'react'

import * as Styled from './ResponsiveAppBar.styled'
import { mediaQuery, screenWidth } from '../../../styles/styles'
import { PageContainer } from '../PageContainer/PageContainer'
import { Menu } from '../Menu/Menu'
import logo from '../../../assets/logo.png'
import { Image } from '../Image/Image'
import { BurgerBtn } from '../BurgerBtn/BurgerBtn'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { IconButton } from '../IconButton/IconButton'
import  userIcon  from '../../../assets/user.png'
import  cartIcon  from '../../../assets/cart.png'

const items = [{ name: 'Ботинки', href: '#' }, { name: 'Туфли', href: '#' }, { name: 'Кеды', href: '#' }, { name: 'Сланцы', href: '#' },]

interface ResponsiveAppBarProps {
    reference?: any;
    ResponsiveAppBarHeight?: any;
}

export const ResponsiveAppBar:  FC<ResponsiveAppBarProps> = ({reference, ResponsiveAppBarHeight}) => {
    const isMobile = useMediaQuery(mediaQuery.mobile)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    
    return (
        <Styled.ResponsiveAppBar ref={reference}>
            <PageContainer maxWidth={screenWidth.max}>
                <Styled.Top isMobile={isMobile} >
                    <Styled.Col1>
                        {isMobile && <BurgerBtn onClick={handleMenuOpen} />}
                    </Styled.Col1>
                    <Styled.Col2>
                        <a href="/#">
                            <Image imageStyle={Styled.logoStyle} src={logo} />
                        </a>
                    </Styled.Col2>
                    <Styled.Col3>
                        <IconButton width={25} height={25} styles={Styled.iconsStyle}>
                            <img src={userIcon} alt="user-icon" />
                        </IconButton>
                        <IconButton width={25} height={25} styles={Styled.cartStyle}>
                            <img src={cartIcon} alt="cart-icon" />
                            <Styled.CartCountStyle>2</Styled.CartCountStyle>
                        </IconButton>
                    </Styled.Col3>
                </Styled.Top>
                <Menu
                    items={items}
                    isMobile={isMobile}
                    open={isMenuOpen}
                    positionTop={ResponsiveAppBarHeight}
                />
            </PageContainer>
        </Styled.ResponsiveAppBar>
    )
}
