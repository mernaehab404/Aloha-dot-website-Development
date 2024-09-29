import { getCurrentLocaleCode, trans } from "@mongez/localization";
import { current, setCurrent } from "@mongez/react";
import { Link } from "@mongez/react-router";
import {
  Language as LanguageIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import logo from "assets/images/logoNewPng.png";
import vectorDotChat from "assets/images/VectorDotchat.png";
import vectorDotCloud from "assets/images/VectorDotCloud.png";
import vectorDotMap from "assets/images/VectorDotMap.png";
import vectorDotpay from "assets/images/VectorDotPay.png";
import vectorDotShipping from "assets/images/VectorDotShipping.png";
import { useState } from "react";
import Headroom from "react-headroom";
export default function Header() {
  const currentLanguage = getCurrentLocaleCode();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Function to load font directly into document head
  function loadFontLink(href) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  }

  function loadFontBasedOnLanguage() {
    const localeCode = current("localeCode");
    console.log("Locale Code Retrieved:", localeCode); // Debugging log

    try {
      if (localeCode === "ar") {
        // Load Cairo font for Arabic language
        loadFontLink(
          "https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap",
        );
        console.log("Cairo font loaded for Arabic");
      } else {
        console.log("Default font or no font change needed for:", localeCode);
      }
    } catch (error) {
      console.error("Error loading font:", error);
    }
  }

  // Apply font styles directly to body
  function applyFontStyles() {
    const localeCode = current("localeCode");
    if (localeCode === "ar") {
      document.body.style.fontFamily = "'Cairo', sans-serif";
    } else {
      document.body.style.fontFamily = "sans-serif"; // Or any default font
    }
  }

  function changeLanguage() {
    const currentLanguage = current("localeCode");
    const newLanguage = currentLanguage === "ar" ? "en" : "ar";

    if (currentLanguage !== newLanguage) {
      const currentPath = window.location.pathname;
      const newPath = currentPath.replace(
        `/${currentLanguage}`,
        `/${newLanguage}`,
      );

      // Set the new language code
      setCurrent("localeCode", newLanguage);

      // Load the appropriate font based on the new language
      loadFontBasedOnLanguage();

      // Apply font styles
      applyFontStyles();

      // Introduce a slight delay before redirecting
      setTimeout(() => {
        window.location.href = newPath;
      }, 100); // Adjust delay as needed
    }
  }

  // Initial load: Ensure font is correct based on current language
  loadFontBasedOnLanguage();
  applyFontStyles();

  return (
    <div className="bg-gradient-to-br pt-5 from-[#deebfe] to-[#fff8d9]">
      <Headroom>
        <header className="w-11/12 m-auto shadow-lg border border-gray-100 rounded-2xl  bg-white  z-50">
          <div className="mx-auto flex items-center justify-between h-16 px-4">
            <Link to="/">
              <div className="flex items-center">
                <img src={logo} alt="Logo" className="my-1" />
              </div>
            </Link>

            <nav className="hidden sm:flex space-x-4">
              <ul className="grid grid-cols-5 ">
                {/* Home */}
                <li className="py-2 text-xs lg:text-base font-medium">
                  <Link to="/" className="text-blue-600">
                    {trans("home")}
                  </Link>
                </li>

                {/* Solutions with Dropdown */}
                <li className="relative py-2 text-xs lg:text-base font-medium group">
                  <Link to="#" className="text-gray-950 hover:text-blue-600">
                    {trans("solutions")}
                  </Link>

                  {/* Dropdown */}
                  <div className="absolute hidden group-hover:block bg-white w-[508px] shadow-lg rounded-lg mt-2 p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Dotchat */}
                      <div className="flex items-center space-x-3">
                        <img
                          src={vectorDotChat}
                          alt="Dotchat"
                          className="w-10 h-10"
                        />
                        <div>
                          <Link
                            to="/dotchat"
                            className="text-blue-600 font-semibold text-base">
                            Dotchat
                          </Link>
                          <span className="block text-gray-400 text-sm">
                            Innovative all-in-one app
                          </span>
                        </div>
                      </div>
                      {/* DotShipping */}
                      <div className="flex items-center space-x-3">
                        <img
                          src={vectorDotShipping}
                          alt="DotShipping"
                          className="w-10 h-10 opacity-50"
                        />
                        <div>
                          <span className="text-gray-400 font-semibold text-base">
                            DotShipping
                          </span>
                          <span className="block text-gray-400 text-sm">
                            Coming Soon
                          </span>
                        </div>
                      </div>
                      {/* Dotpay */}
                      <div className="flex items-center space-x-3">
                        <img
                          src={vectorDotpay}
                          alt="Dotpay"
                          className="w-10 h-10"
                        />
                        <div>
                          <Link
                            to="/dotpay"
                            className="text-blue-600 font-semibold text-base">
                            Dotpay
                          </Link>
                          <span className="block text-gray-400 text-sm">
                            Easy payment solutions
                          </span>
                        </div>
                      </div>

                      {/* Dotcloud */}
                      <div className="flex items-center space-x-3">
                        <img
                          src={vectorDotCloud}
                          alt="Dotcloud"
                          className="w-10 h-10 opacity-50"
                        />
                        <div>
                          <span className="text-gray-400 font-semibold text-base">
                            Dotcloud
                          </span>
                          <span className="block text-gray-400 text-sm">
                            Coming Soon
                          </span>
                        </div>
                      </div>

                      {/* Dotmap */}
                      <div className="flex items-center space-x-3">
                        <img
                          src={vectorDotMap}
                          alt="Dotmap"
                          className="w-10 h-10 opacity-50"
                        />
                        <div>
                          <span className="text-gray-400 font-semibold text-base">
                            Dotmap
                          </span>
                          <span className="block text-gray-400 text-sm">
                            Coming Soon
                          </span>
                        </div>
                      </div>

                      {/* Dotschool */}
                      <div className="flex items-center space-x-3">
                        <img
                          src={vectorDotShipping}
                          alt="Dotschool"
                          className="w-10 h-10 opacity-50"
                        />
                        <div>
                          <span className="text-gray-400 font-semibold text-base">
                            Dotschool
                          </span>
                          <span className="block text-gray-400 text-sm">
                            Coming Soon
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* About Us */}
                <li className="py-2 text-xs lg:text-base font-medium">
                  <Link
                    to="/about-us"
                    className="text-gray-950 hover:text-blue-600">
                    {trans("about")}
                  </Link>
                </li>

                {/* Language Switcher */}
                <li className="py-2 text-xs lg:text-base font-medium">
                  <div>
                    <LanguageIcon className="mr-1 ml-1" />
                    <a
                      href="#"
                      style={{
                        color: currentLanguage === "en" ? "black" : "gray",
                      }}
                      onClick={() => changeLanguage()}>
                      {trans("EN")}
                    </a>
                    {" | "}
                    <a
                      href="#"
                      style={{
                        color: currentLanguage === "ar" ? "black" : "gray",
                      }}
                      onClick={() => changeLanguage()}>
                      {trans("AR")}
                    </a>
                  </div>
                </li>

                {/* Contact Us */}
                <Link to="/contact-us">
                  <button className="rounded-xl bg-blue-100 px-3 py-2 text-xs lg:text-base font-medium text-blue-600 hover:text-black hover:bg-transparent border hover:border-black">
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
        <div className="flex items-center justify-between p-4 border-b border-gary-200 ">
          <img src={logo} alt="Logo" className="max-h-16 w-1/2" />
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
              <Link
                to="/dotchat"
                className="block text-gray-800 hover:text-blue-600"
                onClick={handleDrawerToggle}>
                {trans("solutions")}
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/about-us"
                className="block text-gray-800 hover:text-blue-600"
                onClick={handleDrawerToggle}>
                {trans("about")}
              </Link>
            </li>

            <li className="py-2 " onClick={handleDrawerToggle}>
              <div>
                <LanguageIcon className="mr-1 ml-1" />

                <a
                  href="#"
                  style={{
                    color: currentLanguage === "en" ? "blue" : "black",
                  }}
                  onClick={() => changeLanguage()}>
                  {trans("EN")}
                </a>
                {" | "}
                <a
                  href="#"
                  style={{
                    color: currentLanguage === "ar" ? "blue" : "black",
                  }}
                  onClick={() => changeLanguage()}>
                  {trans("AR")}
                </a>
              </div>
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
