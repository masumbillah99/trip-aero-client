import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-700" : "text-gray-500"
          }
        >
          Trips
        </NavLink>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>About Aero</summary>
          <ul className="p-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-700" : "text-gray-500"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive ? "text-blue-700" : "text-gray-500"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive ? "text-blue-700" : "text-gray-500"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-700" : "text-gray-500"
          }
        >
          Your Aero Home
        </NavLink>
      </li>
      <li>
        <Link
          to="/login"
          className="btn btn-primary hover:bg-primary hover:text-white text-center pt-3 lg:pt-4 lg:mr-5 mt-2 lg:mt-0"
        >
          Login
        </Link>
      </li>
    </>
  );

  const menuItems = (
    <>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-blue-700" : "text-gray-500"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/user-account"
          className={({ isActive }) =>
            isActive ? "text-blue-700" : "text-gray-500"
          }
        >
          Account
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/help-center"
          className={({ isActive }) =>
            isActive ? "text-blue-700" : "text-gray-500"
          }
        >
          Help Center
        </NavLink>
      </li>
      <li>
        <button className="uppercase">Logout</button>
      </li>
    </>
  );

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-30">
      <div className="max-w-screen-xl mx-auto">
        <div className="navbar">
          {/* mobile view */}
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden mr-5">
                <MenuIcon />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white uppercase mt-3 z-[1] px-2 py-5 shadow rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
            <Link
              to="/"
              className="flex flex-row gap-3 items-center text-xl font-bold ml-16 md:ml-60 lg:ml-0"
            >
              <img src={logo} className="w-9" />{" "}
              <span className="tracking-wider">TripAero</span>
            </Link>
          </div>

          {/* laptop view */}
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 uppercase hover:rounded-xl">
              {navItems}
            </ul>
            <div className="">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="avatar cursor-pointer">
                  <div className="">
                    <AccountCircleIcon sx={{ width: "40px", height: "40px" }} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm uppercase dropdown-content mt-3 z-[1] p-2 shadow bg-slate-200 text-indigo-600 rounded-box w-52 gap-3"
                >
                  {menuItems}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
