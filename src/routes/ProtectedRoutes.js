import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ redirectPath = '/signin' }) => {
  console.log('localStorage.getItem--',localStorage.getItem('token'))
  if (!localStorage.getItem('token')) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};
export default ProtectedRoute;