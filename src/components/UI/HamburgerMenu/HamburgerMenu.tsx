import React, { FC, useState } from 'react'

import styled, { css } from 'styled-components'

interface ListProps {
    isMobile?: boolean;
}


const Nav = styled.nav`
    display: flex;
   `

const List = styled.ul<ListProps>`
    display: flex;
    flex-direction: ${({ isMobile }) => isMobile ? 'column' : 'row'};
    background-color: red;
`
const Anchor = styled.a<ListProps>`
    /* display: flex; */
    width: 100%;
    background-color: blue;
    /* padding: ${({isMobile}) => isMobile ? '10px 0px 10px 0px' : '10px' } ; */
`
const Li = styled.li<ListProps>`
    display: flex;
    /* margin: ${({isMobile}) => isMobile ? '0px 0px 20px 0px' : '0px 0px 0px 20px' } ; */
`

interface HamburgerMenuProps {
    // horizontal?: boolean;
}

export const HamburgerMenu: FC<HamburgerMenuProps> = () => {
    const [isMobile, setIsMobile] = useState(true)
    return (
        <Nav>
            <List isMobile={isMobile}>
                <Li isMobile={isMobile}><Anchor isMobile={isMobile} href="">Ботинки</Anchor></Li>
                <Li isMobile={isMobile}><Anchor isMobile={isMobile} href="">Туфли</Anchor></Li>
                <Li isMobile={isMobile}><Anchor isMobile={isMobile} href="">Рабочая обувь</Anchor></Li>
                <Li isMobile={isMobile}><Anchor isMobile={isMobile} href="">Сандалии</Anchor></Li>
                <Li isMobile={isMobile}><Anchor isMobile={isMobile} href="">Веган</Anchor></Li>
            </List>
        </Nav>
    )
}
