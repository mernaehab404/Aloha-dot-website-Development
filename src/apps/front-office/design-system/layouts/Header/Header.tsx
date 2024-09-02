import { getCurrentLocaleCode, trans } from "@mongez/localization";
import { current, setCurrent } from "@mongez/react";
import { Link } from "@mongez/react-router";
import {
  Language as LanguageIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import logo from "assets/images/AlohaDotLogoNew.svg";
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
    <div className="border-b border-gray-200 ">
      <Headroom>
        <header className="w-full bg-white  z-50 ">
          <div className="mx-auto flex items-center justify-between h-16 px-4 ">
            <Link to="/">
              <div className="flex items-center">
                <img src={logo} alt="Logo" className="w-3/4 my-1" />
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
                  <Link
                    to="/dotchat"
                    className="text-gray-950 hover:text-blue-600">
                    {trans("solutions")}{" "}
                  </Link>
                </li>
                <li className="px-3 py-2  text-xs lg:text-sm font-medium">
                  <Link
                    to="/about-us"
                    className="text-gray-950 hover:text-blue-600">
                    {trans("about")}
                  </Link>
                </li>
                <li className="px-3 py-2  text-xs lg:text-sm font-medium">
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
