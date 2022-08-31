import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '../hooks/redux';
import { Path } from '../navigation/routeNames';
import { selectUser } from '../store/userSlice/selectors';

export const AuthWrapper = ({ children}: {children: JSX.Element}) => {
    const currentUser = useAppSelector(selectUser)
    
  if (currentUser) {
    return <Navigate to={Path.Home} replace />;
  }

  return children ? children : <Outlet />;
};