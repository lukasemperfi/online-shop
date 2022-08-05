import { Outlet, } from 'react-router-dom';

import { ResponsiveAppBar } from '../../components/ResponsiveAppBar/ResponsiveAppBar';
import * as Styled from './MainLayout.styled';

export const MainLayout = () =>
  <Styled.Wrapper>
    <ResponsiveAppBar />
    <Styled.Main>
      <Outlet />
    </Styled.Main>
  </Styled.Wrapper>
