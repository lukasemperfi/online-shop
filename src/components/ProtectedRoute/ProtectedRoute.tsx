import React, { FC, ReactNode } from 'react'
import { RouteProps } from 'react-router-dom';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { useAdminAuth } from '../../hooks/useAdminAuth';
import { MainRoutes } from '../../navigation/routeNames';
import { selectIsLoggedIn, selectUser } from '../../store/userSlice';
import { checkUserIsAdmin } from '../../utils/checkUserIsAdmin';


export const ProtectedRoute = ({ children}: {children: JSX.Element}) => {
  const isAdmin = useAdminAuth()

  
  if (!isAdmin) {
    return <Navigate to={MainRoutes.Main} replace />;
  }

  return children ? children : <Outlet />;
};
