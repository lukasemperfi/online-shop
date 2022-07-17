import { MouseEvent, RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { ResponsiveAppBar } from '../../components/ResponsiveAppBar/ResponsiveAppBar'
import { CartPage } from '../../pages/CartPage'
import { DropdownMenu } from '../DropdownMenu/DropdownMenu'
import { AdaptiveImage } from '../Image/AdaptivImage'
import { ItemsList } from '../ItemsList/ItemsList'
import { MainPopup } from '../MainPopup/MainPopup'
import { Menu } from '../Menu/Menu'
import { MenuList } from '../MenuList/MenuList'
import { OverlayingPopup } from '../OverlayingPopup/OverlayingPopup'
import { Popover } from '../Popover/Popover'

const Main = styled.main`
  flex: 1 1 auto;
  display: flex;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const data = [
  {
    name: 'Profile',
    href: '#'
  },
  {
    name: 'My account',
    href: '#'
  },
  {
    name: 'LogOut',
    href: '#'
  },

]

const SButton = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 100px;
  margin-top: 200px;
`

interface ElementPositionProps {
  top: number | null,
  bottom: number | null,
  left: number | null,
  right: number | null,
}

interface DropDownProps {
  elementPosition: ElementPositionProps;
}

const st = css`
  max-width: 300px;
  max-height: 300px;
`

export const MainLayout = () => {

  return (
    <Wrapper>
      {/* <ResponsiveAppBar /> */}
      <Main>
        <Outlet />
      </Main>
      <footer>Footer</footer>
    </Wrapper>
  )
}

