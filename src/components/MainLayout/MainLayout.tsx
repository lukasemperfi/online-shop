import { Outlet } from 'react-router-dom'

import { ResponsiveAppBar } from '../../components/ResponsiveAppBar/ResponsiveAppBar'
import { CartPage } from '../../pages/CartPage'

export const MainLayout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
    </>
  )
}

