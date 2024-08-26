import {
  getCurrentLocaleCode,
  setCurrentLocaleCode,
  trans,
} from "@mongez/localization";
import { Link } from "@mongez/react-router";
// import  navigate  from "@mongez/react-router";
import {
  Language as LanguageIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useState } from "react";
import Headroom from "react-headroom";
import logo from "../../../../../shared/assets/images/alohadot.png";

export default function Header() {
  const currentLanguage = getCurrentLocaleCode();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function changeLanguage() {
    const currentLanguage = getCurrentLocaleCode();

    // Determine the new language
    const newLanguage = currentLanguage === "ar" ? "en" : "ar";

    // Get the current URL path and remove the current language segment
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(
      `/${currentLanguage}`,
      `/${newLanguage}`,
    );

    // Set the new language
    setCurrentLocaleCode(newLanguage);

    // Navigate to the new path
    window.location.href = newPath;

    console.log(newLanguage);
  }
  return (
    <div>
      <Headroom>
        <header className="w-full bg-white  z-50 ">
          <div className=" mx-auto flex items-center justify-between h-20 px-4 ">
            <Link to="/">
              <div className="flex items-center">
                <img src={logo} alt="Logo" className="max-h-16 my-2" />
              </div>
            </Link>

            <nav className="hidden sm:flex space-x-4">
              <ul className="flex  justify-center items-center">
                <li className="px-3 py-2 text-xs lg:text-sm font-medium">
                  <Link to="/" className="text-blue-600">
                    {trans("home")}
                  </Link>
                </li>
                <li className="px-3 py-2  text-xs lg:text-sm font-medium">
                  <a href="#" className="text-gray-950 hover:text-blue-600">
                    {trans("solutions")}
                  </a>
                </li>
                <li className="px-3 py-2  text-xs lg:text-sm font-medium">
                  <Link
                    to="/about-us"
                    className="text-gray-950 hover:text-blue-600">
                    {trans("about")}
                  </Link>
                </li>
                <li className="px-3 py-2  text-xs lg:text-sm font-medium">
                  {/* <a
                   onClick={changeLanguage}
                    className="flex items-center text-gray-950 hover:text-blue-600">
                    <LanguageIcon className="mr-1 " />
                    
                    EN | AR
                  </a> */}
                  <div>
                  <LanguageIcon className="mr-1 " />

                    <a
                      href="#"
                      style={{
                        color: currentLanguage === "en" ? "blue" : "black",
                      }}
                      onClick={() => changeLanguage()}>
                      EN
                    </a>
                    {" | "}
                    <a
                      href="#"
                      style={{
                        color: currentLanguage === "ar" ? "blue" : "black",
                      }}
                      onClick={() => changeLanguage()}>
                      AR
                    </a>
                  </div>
                </li>
                <Link to="/contact-us">
                  <button className="rounded-full bg-blue-600 px-3 py-2 text-xs lg:text-sm font-medium text-white hover:text-black hover:bg-transparent border hover:border-black">
                    {trans("contact")}
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
      </Headroom>
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
              <Link
                to="/"
                className="block text-gray-800 hover:text-blue-600"
                onClick={handleDrawerToggle}>
                {trans("home")}
              </Link>
            </li>
            <li className="py-2">
              <a
                href="#"
                className="block text-gray-800 hover:text-blue-600"
                onClick={handleDrawerToggle}>
                {trans("solutions")}
              </a>
            </li>
            <li className="py-2">
              <a
                href="#"
                className="block text-gray-800 hover:text-blue-600"
                onClick={handleDrawerToggle}>
                {trans("about")}
              </a>
            </li>

            <li className="py-2 " onClick={handleDrawerToggle}>
              <Link
                className="block text-gray-800 hover:text-blue-600  items-center "
                // onClick={handleDrawerToggle}
                onClick={changeLanguage}>
                <LanguageIcon className="mr-1" />
                {trans("EN | AR")}
              </Link>
            </li>
            <li className="py-2 ">
              <Link
                to="/contact-us"
                className="block  rounded-full bg-blue-600 py-3 md:px-3 md:py-2 w-1/5 m-auto text-xs  text-white hover:text-black hover:bg-transparent border hover:border-black"
                onClick={handleDrawerToggle}>
                {trans("contact")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
