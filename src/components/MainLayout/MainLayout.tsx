import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { ResponsiveAppBar } from '../../components/ResponsiveAppBar/ResponsiveAppBar'
import { CartPage } from '../../pages/CartPage'
import { DropdownMenu } from '../DropdownMenu/DropdownMenu'
import { FormToogle } from '../FormToogle/FormToogle'
import { ItemsList } from '../ItemsList/ItemsList'
import { MainPopup } from '../MainPopup/MainPopup'
import { MenuList } from '../MenuList/MenuList'
import { OverlayingPopup } from '../OverlayingPopup/OverlayingPopup'

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


export const MainLayout = () => {

  return (
    <Wrapper>
      {/* <ResponsiveAppBar />
      <Main>
        <Outlet />
      </Main>
      <footer>Footer</footer> */}
      <DropdownMenu
        data={data}
        renderItem={({name, href}) => {
          return ( <a href={href}>{name}</a>)
        }}
      />

      {/* <MenuList
        data={data}
        renderItem={({ name, href }) => {
          return `${name}`
        }}
      /> */}
    </Wrapper>
  )
}

