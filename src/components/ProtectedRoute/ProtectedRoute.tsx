import { Navigate, Outlet } from 'react-router-dom';

import { useAdminAuth } from '../../hooks/useAdminAuth';
import { Path } from '../../navigation/routeNames';

export const ProtectedRoute = ({ children}: {children: JSX.Element}) => {
  const isAdmin = useAdminAuth()

  if (!isAdmin) {
    return <Navigate to={Path.Home} replace />;
  }

  return children ? children : <Outlet />;
};
