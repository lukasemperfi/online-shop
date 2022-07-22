import { useState, FC, memo, MouseEvent } from 'react'

import * as Styled from './ResponsiveAppBar.styled'
import { Breakpoints, mediaQuery, screenWidth } from '../../styles/styles'
import { PageContainer } from '../PageContainer/PageContainer'
import { Menu } from '../Menu/Menu'
import logo from '../../assets/logo.png'
import { Image } from '../Image/Image'
import { BurgerBtn } from '../BurgerBtn/BurgerBtn'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useElementSize } from '../../hooks/useElementSize'
import { UserMenu } from '../UserMenu/UserMenu'
import { Link, useParams } from 'react-router-dom'
import { Tabs } from '../Tabs/Tabs'
import { GenderCategory } from '../../firebase/models/GenderCategory'
import { StyledMenuLink } from '../StyledLink/StyledLink.styled'
import { TabsPanel } from '../TabsPanel/TabsPanel'
import { ShoesTypeCategories } from '../../firebase/models/ShoesTypeCategories'

const items = [{ name: 'Ботинки', href: '#' }, { name: 'Туфли', href: '#' }, { name: 'Кеды', href: '#' }, { name: 'Сланцы', href: '#' },]

const MemoUserMenu = memo(UserMenu)

const menuCategories = [
    { id: 'fdhher', name: 'Boots', searchQuery: 'boots' },
    { id: 'fdgjhjktyhher', name: 'Shoes', searchQuery: 'shoes' },
    { id: 'dfgdfghjh', name: 'Sandals', searchQuery: 'sandals' },
]

export const ResponsiveAppBar: FC = () => {
    const { gender } = useParams()
    const [responsiveAppBarRef, { height: responsiveAppBarHeight }] = useElementSize()
    const isMobile = useMediaQuery(`(max-width: ${Breakpoints.lg})`)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuOpen = () => setIsMenuOpen(!isMenuOpen)

    const handleMenuClose = () => setIsMenuOpen(false)


    const renderMenuItem = (item: ShoesTypeCategories) =>
        <StyledMenuLink
            to={`/${gender}/catalog/${item.searchQuery}`}
            onClick={handleMenuClose}
        >
            {item.name}
        </StyledMenuLink>

    return (
        <Styled.ResponsiveAppBar ref={responsiveAppBarRef}>
            <PageContainer>
                <Styled.Top isMobile={isMobile} >
                    <Styled.Col1>
                        {isMobile && <BurgerBtn onClick={handleMenuOpen} isActive={isMenuOpen} />}
                        {!isMobile && <TabsPanel />}
                    </Styled.Col1>
                    <Styled.Col2>
                        <Link to={'/'}>
                            <Image imageStyle={Styled.logoStyle} src={logo} />
                        </Link>
                    </Styled.Col2>
                    <Styled.Col3>
                        <MemoUserMenu />
                    </Styled.Col3>
                </Styled.Top>
                <Menu
                    data={menuCategories}
                    renderItem={renderMenuItem}
                    isMobile={isMobile}
                    positionTop={responsiveAppBarHeight}
                    isOpen={isMenuOpen}
                />
            </PageContainer>
        </Styled.ResponsiveAppBar>
    )
}
