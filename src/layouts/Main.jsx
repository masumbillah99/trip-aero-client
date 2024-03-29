import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  const loginLayout = location.pathname.includes("login");
  const signUpLayout = location.pathname.includes("sign-up");

  return (
    <div className="">
      <Navbar />
      <Outlet />
      {loginLayout || signUpLayout || <Footer />}
    </div>
  );
};

export default Main;
