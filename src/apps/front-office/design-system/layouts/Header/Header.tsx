import { trans } from "@mongez/localization";
import {
  Language as LanguageIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import PropTypes from "prop-types";
import { useState } from "react";
import logo from "../../../../../shared/assets/images/alohadot.png";
import { Link } from "@mongez/react-router";

const navItems = ["home", "Solutions", "Use Cases", "EN | AR", "contact us"];

function HideOnScroll({ children }) {
  const [trigger, setTrigger] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setTrigger(true);
    } else {
      setTrigger(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div
      className={`${trigger ? "hidden" : "block"} transition duration-700 ease-in-out`}>
      {children}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      <HideOnScroll>
        <header className=" w-full bg-white d z-50">
          <div className=" mx-auto flex items-center justify-between h-20 px-4">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="max-h-16 my-2" />
            </div>
            <nav className="hidden sm:flex space-x-4">
              <ul className="flex  justify-center items-center">
                <li className="px-3 py-2 text-xs lg:text-sm font-medium">
                  <a href="#" className="text-blue-600">
                    Home
                  </a>
                </li>
                <li className="px-3 py-2  text-xs lg:text-sm font-medium">
                  <a href="#" className="text-gray-950 hover:text-blue-600">
                    Solutions
                  </a>
                </li>
                <li className="px-3 py-2  text-xs lg:text-sm font-medium">
                  <a href="#" className="text-gray-950 hover:text-blue-600">
                    Use Cases
                  </a>
                </li>
                <li className="px-3 py-2  text-xs lg:text-sm font-medium">
                  <a
                    href="#"
                    className="flex items-center text-gray-950 hover:text-blue-600">
                    <LanguageIcon className="mr-1 " />
                    EN | AR
                  </a>
                </li>
                <Link to="/contact-us">
                <button className="rounded-full bg-blue-600 px-3 py-2 text-xs lg:text-sm font-medium text-white hover:text-black hover:bg-transparent border hover:border-black">
                  {trans("contact us")}
                </button>
                </Link>
             
              </ul>
            </nav>
            <button
              className="text-black sm:hidden"
              onClick={handleDrawerToggle}
              aria-label="Open drawer">
              <MenuIcon />
            </button>
          </div>
        </header>
      </HideOnScroll>
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform transform ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } sm:hidden`}>
        <div className="flex items-center justify-between p-4">
          <img src={logo} alt="Logo" className="max-h-16" />
          <button onClick={handleDrawerToggle} aria-label="Close drawer">
            <MenuIcon />
          </button>
        </div>
        <div className="text-center">
          <ul className="mt-2">
            <li className="py-2">
              <a
                href="#"
                className="block text-gray-800 hover:text-blue-600"
                onClick={handleDrawerToggle}>
                {trans("Home")}
              </a>
            </li>
            <li className="py-2">
              <a
                href="#"
                className="block text-gray-800 hover:text-blue-600"
                onClick={handleDrawerToggle}>
                {trans("Solutions")}
              </a>
            </li>
            <li className="py-2">
              <a
                href="#"
                className="block text-gray-800 hover:text-blue-600 "
                onClick={handleDrawerToggle}>
                {trans("Use Cases")}
              </a>
            </li>
            <li className="py-2">
              <a
                href="#"
                className="block text-gray-800 hover:text-blue-600  items-center "
                onClick={handleDrawerToggle}>
                <LanguageIcon className="mr-1" />
                {trans("EN | AR")}
              </a>
            </li>
            <li className="py-2 ">
              <a
                href="#"
                className="block  rounded-full bg-blue-600 py-3 md:px-3 md:py-2 w-1/5 m-auto text-xs  text-white hover:text-black hover:bg-transparent border hover:border-black"
                onClick={handleDrawerToggle}>
                {trans("Contact Us")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};
