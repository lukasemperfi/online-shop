import { useState, FC, memo } from 'react'

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
import { Link } from 'react-router-dom'

const items = [{ name: 'Ботинки', href: '#' }, { name: 'Туфли', href: '#' }, { name: 'Кеды', href: '#' }, { name: 'Сланцы', href: '#' },]

const MemoUserMenu = memo(UserMenu)

export const ResponsiveAppBar: FC = () => {
    const [responsiveAppBarRef, { height: responsiveAppBarHeight }] = useElementSize()
    const isMobile = useMediaQuery(`(max-width: ${Breakpoints.lg})`)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuOpen = () => setIsMenuOpen(!isMenuOpen)

    const renderItem = ({ name, href }: {name: string, href: string}) => (<Styled.MenuLink to={href}>{name}</Styled.MenuLink>)

    return (
        <Styled.ResponsiveAppBar ref={responsiveAppBarRef}>
            <PageContainer>
                <Styled.Top isMobile={isMobile} >
                    <Styled.Col1>
                        {isMobile && <BurgerBtn onClick={handleMenuOpen} />}
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
                    data={items}
                    renderItem={renderItem}
                    isMobile={isMobile}
                    positionTop={responsiveAppBarHeight}
                    isOpen={isMenuOpen}
                />
            </PageContainer>
        </Styled.ResponsiveAppBar>
    )
}
