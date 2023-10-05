import { Navigate, Outlet } from 'react-router-dom';
const PrivateRoute = () => {
  // const { user, accessToken } = useAuth((state) => ({
  //   user: state.user,
  //   accessToken: state.accessToken,
  // }));

  return true ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
