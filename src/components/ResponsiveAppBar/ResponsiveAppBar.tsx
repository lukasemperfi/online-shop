import { useState, FC } from 'react';
import { Link } from 'react-router-dom';

import * as Styled from './ResponsiveAppBar.styled';
import { Breakpoints, Colors } from '../../styles/styles';
import { PageContainer } from '../PageContainer/PageContainer';
import { Menu } from '../UI/Menu/Menu';
import logo from '../../assets/logo.png';
import { BurgerBtn } from '../UI/BurgerBtn/BurgerBtn';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useElementSize } from '../../hooks/useElementSize';
import { UserMenu } from '../UserMenu/UserMenu';
import { StyledLink, StyledMenuLink } from '../StyledLink/StyledLink.styled';
import { TabsPanel } from '../TabsPanel/TabsPanel';
import { ShoesTypeCategories } from '../../firebase/models/ShoesTypeCategories';
import { useAdminAuth } from '../../hooks/useAdminAuth';
import { useAppSelector } from '../../hooks/redux';
import { AdaptiveImage } from '../UI/AdaptivImage/AdaptivImage';
import { createPath } from '../../navigation/Utils/createPath';
import { Path } from '../../navigation/routeNames';
import { selectFiltersState } from '../../store/filtersSlice/selectors';

const menuCategories = [
    { id: '0', name: 'Boots', searchQuery: 'boots' },
    { id: '1', name: 'Shoes', searchQuery: 'shoes' },
    { id: '2', name: 'Sandals', searchQuery: 'sandals' },
]

export const ResponsiveAppBar: FC = () => {
    const isAdmin = useAdminAuth()
    const [responsiveAppBarRef, { height: responsiveAppBarHeight }] = useElementSize()
    const isMobile = useMediaQuery(`(max-width: ${Breakpoints.lg})`)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { genderCategory } = useAppSelector(selectFiltersState)

    const handleMenuOpen = () => setIsMenuOpen(!isMenuOpen)

    const handleMenuClose = () => setIsMenuOpen(false)

    const renderMenuItem = (item: ShoesTypeCategories, onClick?: () => void) =>
        <StyledMenuLink
            to={createPath({
                path: Path.ProductType,
                params: { gender: genderCategory, productType: item.searchQuery },
            })}
            onClick={onClick}
            color={Colors.primary}
        >
            {item.name}
        </StyledMenuLink>

    return (
        <Styled.ResponsiveAppBar ref={responsiveAppBarRef}>
            {isAdmin && <Styled.AdminPanel>
                <Styled.AdminPanelContainer>
                    <StyledLink
                        to={Path.Admin}
                        color='white'
                    >
                        Admin
                    </StyledLink>
                </Styled.AdminPanelContainer>
            </Styled.AdminPanel>}
            <PageContainer>
                <Styled.Top isMobile={isMobile} >
                    <Styled.Col1>
                        {isMobile &&
                            <BurgerBtn
                                onClick={handleMenuOpen}
                                isActive={isMenuOpen}
                            />}
                        {!isMobile && <TabsPanel />}
                    </Styled.Col1>
                    <Styled.Col2>
                        <Link to={'/'}>
                            <AdaptiveImage
                                src={logo}
                                maxWidth='250px'
                                dimensions={{
                                    width: 250,
                                    height: 51,
                                }}
                            />
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
