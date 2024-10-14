import { Route, Routes } from "react-router-dom";
import MainContainer from "./MainContainer";
import Login from "./Login";
import Navbar from "./Navbar"; 
import Upload from "../components/Upload";
import PrivateRoutes from "./Route/PrivateRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContainer Navbar={Navbar} />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<div>Page Not Found</div>} />

      <Route element={<PrivateRoutes/>}>
        <Route path="/upload" element={<Upload/>} />
      </Route>      

    </Routes>
  );
};

export default Router;
