import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default MainLayout;
