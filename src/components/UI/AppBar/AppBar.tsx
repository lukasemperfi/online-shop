import React, { useEffect, useState, useRef } from 'react'
import styled, { css } from 'styled-components'

import { screenWidth, spacing } from '../../../styles/styles'
import { PageContainer } from '../PageContainer/PageContainer'
import { Menu } from './Menu/Menu'
import logo from '../../../assets/logo.png'
import { Image } from '../Image/Image'
import { BurgerBtn } from './BurgerBtn/BurgerBtn'
import { calcAdaptiveValue } from '../../../styles/helpers'
import { useMediaQuery } from '../../../hooks/useMediaQuery'

interface AppBarProps {
    isMobile: boolean;
}

const StyledAppBar = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: #FFFFFF;
    z-index: 9999;
    ${calcAdaptiveValue('padding-top', spacing.mobile, spacing.desktop, screenWidth.min, screenWidth.max)}
    ${calcAdaptiveValue('padding-bottom', spacing.mobile, spacing.desktop, screenWidth.min, screenWidth.max)}
    box-shadow: 0 6px 4px -4px rgb(0 0 0 / 20%);
`
const Header = styled.div<AppBarProps>`
    display: flex;
    align-items: center;
    margin-bottom: ${({ isMobile }) => isMobile ? '0px' : '20px'};
    position: relative;
    z-index: 1;
`
const Col = styled.div`
    flex: 0 1 33.333%;
    display: flex;
`
const Col1 = styled(Col)`
    justify-content: flex-start;
`
const Col2 = styled(Col)`
    justify-content: center;
`

const Col3 = styled(Col)`
    justify-content: flex-end;
`

const logoStyle = css`
    max-width: 100%;
    min-width: 155px;
`

const items = [{ name: 'Ботинки', href: '#' }, { name: 'Туфли', href: '#' }, { name: 'Кеды', href: '#' }, { name: 'Сланцы', href: '#' },]

export const AppBar = () => {
    const isMobile = useMediaQuery('(max-width: 960px)')
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const headerRef = useRef<any>(null)
    const [headerHeight, setHeaderHeight] = useState(0)

    const handleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const resizeHandler = () => {
        const { offsetHeight } = headerRef.current || {};
        setHeaderHeight(offsetHeight);
    };

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        resizeHandler();
        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, [])

    return (
        <StyledAppBar ref={headerRef}>
            <PageContainer maxWidth={screenWidth.max}>
                <Header isMobile={isMobile}>
                    <Col1>
                        {isMobile && <BurgerBtn onClick={handleMenuOpen} />}
                    </Col1>
                    <Col2>
                        <a href="/#">
                            <Image imageStyle={logoStyle} src={logo} />
                        </a>
                    </Col2>
                    <Col3>3</Col3>
                </Header>
                <Menu
                    items={items}
                    isMobile={isMobile}
                    open={isMenuOpen}
                    positionTop={headerHeight}
                />
            </PageContainer>
        </StyledAppBar>
    )
}
