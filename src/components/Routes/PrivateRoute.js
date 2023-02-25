import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const sholudRedirect = !isLoggedIn && !isRefreshing;
  return sholudRedirect ? <Navigate to={redirectTo} /> : Component;
};
