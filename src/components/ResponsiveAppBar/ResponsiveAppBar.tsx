import { useState, FC, memo, MouseEvent } from 'react'

import * as Styled from './ResponsiveAppBar.styled'
import { Breakpoints, Colors, mediaQuery, screenWidth } from '../../styles/styles'
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
import { StyledLink, StyledMenuLink } from '../StyledLink/StyledLink.styled'
import { TabsPanel } from '../TabsPanel/TabsPanel'
import { ShoesTypeCategories } from '../../firebase/models/ShoesTypeCategories'
import { checkUserIsAdmin } from '../../utils/checkUserIsAdmin'
import { useAdminAuth } from '../../hooks/useAdminAuth'
import { useAppSelector } from '../../hooks/redux'
import { selectUser } from '../../store/userSlice'
import { selectFiltersState } from '../../store/filtersSlice'

const items = [{ name: 'Ботинки', href: '#' }, { name: 'Туфли', href: '#' }, { name: 'Кеды', href: '#' }, { name: 'Сланцы', href: '#' },]


const menuCategories = [
    { id: 'fdhher', name: 'Boots', searchQuery: 'boots' },
    { id: 'fdgjhjktyhher', name: 'Shoes', searchQuery: 'shoes' },
    { id: 'dfgdfghjh', name: 'Sandals', searchQuery: 'sandals' },
]

export const ResponsiveAppBar: FC = () => {
    const { gender } = useParams()
    // const currentUser = useAppSelector(selectUser)
    // const isAdmin = checkUserIsAdmin(currentUser)
    const isAdmin = useAdminAuth()
    const [responsiveAppBarRef, { height: responsiveAppBarHeight }] = useElementSize()
    const isMobile = useMediaQuery(`(max-width: ${Breakpoints.lg})`)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const {genderCategory} = useAppSelector(selectFiltersState)

    // console.log(isAdmin);


    const handleMenuOpen = () => setIsMenuOpen(!isMenuOpen)

    const handleMenuClose = () => setIsMenuOpen(false)


    const renderMenuItem = (item: ShoesTypeCategories, onClick?: () => void) =>
        <StyledMenuLink
            to={`/${genderCategory}/catalog/${item.searchQuery}`}
            onClick={onClick}
            color={Colors.primary}
        >
            {item.name}
        </StyledMenuLink>

    return (
        <Styled.ResponsiveAppBar ref={responsiveAppBarRef}>
            {isAdmin && <Styled.AdminPanel>
                <Styled.AdminPanelContainer>
                    <StyledLink to={`/admin`} color='white'>Admin</StyledLink>
                </Styled.AdminPanelContainer>
            </Styled.AdminPanel>}
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
                        <UserMenu />
                    </Styled.Col3>
                </Styled.Top>
                <Menu
                    data={menuCategories}
                    renderItem={renderMenuItem}
                    keyExtractor={({ id }) => id}
                    isMobile={isMobile}
                    positionTop={responsiveAppBarHeight}
                    isOpen={isMenuOpen}
                    onClick={handleMenuClose}
                />
            </PageContainer>
        </Styled.ResponsiveAppBar>
    )
}
