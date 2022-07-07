import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { ResponsiveAppBar } from '../../components/ResponsiveAppBar/ResponsiveAppBar'
import { useAppDispatch } from '../../hooks/redux'
import { CartPage } from '../../pages/CartPage'
import { logout } from '../../store/testSlice'

const Main = styled.main`
  flex: 1 1 auto;
  display: flex;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const MainLayout = () => {

  // const navigate = useNavigate()

  // useEffect(() => {
  //   navigate('products')
  // }, [])



  return (
    <Wrapper>
      <ResponsiveAppBar />
      <Main>
        <Outlet />
      </Main>
      <footer>Footer</footer>
    </Wrapper>
  )
}

