import { useState, FC, memo } from 'react'

import * as Styled from './ResponsiveAppBar.styled'
import { mediaQuery, screenWidth } from '../../styles/styles'
import { PageContainer } from '../PageContainer/PageContainer'
import { Menu } from '../Menu/Menu'
import logo from '../../assets/logo.png'
import { Image } from '../Image/Image'
import { BurgerBtn } from '../BurgerBtn/BurgerBtn'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useElementSize } from '../../hooks/useElementSize'
import { UserMenu } from '../UserMenu/UserMenu'

const items = [{ name: 'Ботинки', href: '#' }, { name: 'Туфли', href: '#' }, { name: 'Кеды', href: '#' }, { name: 'Сланцы', href: '#' },]

const MemoUserMenu = memo(UserMenu)

export const ResponsiveAppBar: FC = () => {
    const [responsiveAppBarRef, { height: responsiveAppBarHeight }] = useElementSize()
    const isMobile = useMediaQuery(mediaQuery.mobile)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuOpen = () => setIsMenuOpen(!isMenuOpen)
console.log('render resp app bar');

    return (
        <Styled.ResponsiveAppBar ref={responsiveAppBarRef}>
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
                        <MemoUserMenu />
                    </Styled.Col3>
                </Styled.Top>
                <Menu
                    items={items}
                    isMobile={isMobile}
                    open={isMenuOpen}
                    positionTop={responsiveAppBarHeight}
                />
            </PageContainer>
        </Styled.ResponsiveAppBar>
    )
}
