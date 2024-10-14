import { Navigate, Outlet } from "react-router-dom";
import { getFromLocalStorage } from "../../utils/localstorage.js";

const PrivateRoutes = () => {
    const token = getFromLocalStorage('access_token');
    const auth = { access_token: !!token }; 
  
    return auth.access_token ? <Outlet /> : <Navigate to='/login' />;
  };
  

export default PrivateRoutes
