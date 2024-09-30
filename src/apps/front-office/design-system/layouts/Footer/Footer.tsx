import { getCurrentLocaleCode, trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { useEffect, useState } from "react";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import logo from "../../../../../shared/assets/images/Aloha-dot-logo-white 1.png";
export default function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [careersOpen, setCareersOpen] = useState(false);
  const [socialsOpen, setSocialsOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [isArabic, setisArabic] = useState(false);
  useEffect(() => {
    if (getCurrentLocaleCode() == "ar") {
      setisArabic(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Define toggle functions for each ul
  const toggleCareers = () => setCareersOpen(!careersOpen);
  const toggleSocials = () => setSocialsOpen(!socialsOpen);
  const toggleHelp = () => setHelpOpen(!helpOpen);
  return (
    <>
      <footer>
        <div className="py-5  m-auto bg-customBlack  text-white">
          <div className="flex flex-col md:flex-row py-6 w-11/12  m-auto">
            <div className="md:w-7/12 ">
              <Link to="/">
                <img
                  src={logo}
                  className="w-1/2  sm:w-1/4 mb-2"
                  alt="alohadot logo"
                />
              </Link>

              <p
                className={`text-gray-100 text-xs ${isArabic ? "text-right" : "text-left "} `}>
                {trans("footerSlogan")}
              </p>
            </div>
            <div className="md:w-1/2  flex flex-col md:flex-row justify-around pt-3 ">
              <ul
                onClick={isMobile ? toggleCareers : undefined}
                className="mb-5 border-b border-b-gray-700 sm:border-none py-4 md:mx-2 ">
                <div className="flex justify-between  items-center">
                  <li className="mb-2 font-bold text-sm lg:text-base  ">
                    {trans("careers")}
                  </li>
                  {isMobile &&
                    (careersOpen ? (
                      <FiMinus className="text-4xl" />
                    ) : (
                      <GoPlus className="text-4xl" />
                    ))}
                </div>
                {(careersOpen || !isMobile) && (
                  <>
                    {/* <Link to="/about-us">
                      <li className="text-xs mb-4 ">{trans("about")}</li>
                    </Link> */}
                    <Link to="/joinUs">
                      <li className="text-xs mb-4">{trans("openPositions")}</li>
                    </Link>
                    {/* <li className="text-xs mb-4 text-gray-300">
                      {trans("API  Documentation")}
                    </li> */}
                  </>
                )}
              </ul>
              <ul
                onClick={isMobile ? toggleSocials : undefined}
                className="mb-4 border-b border-b-gray-700 sm:border-none  py-4 md:mx-2">
                <div className="flex justify-between  items-center">
                  <li className="mb-2 font-bold text-sm lg:text-base ">
                    {trans("socials")}
                  </li>
                  {isMobile &&
                    (socialsOpen ? (
                      <FiMinus className="text-4xl" />
                    ) : (
                      <GoPlus className="text-4xl" />
                    ))}
                </div>

                {(socialsOpen || !isMobile) && (
                  <>
                    <li>
                      {" "}
                      <Link
                        className="hover:underline text-xs mb-4"
                        to="https://www.instagram.com/dotchat_app?igsh=MW92cmpsZ256dmowNQ%3D%3D&utm_source=qr"
                        newTab>
                        {trans("instagram")}
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link
                        className="hover:underline text-xs mb-4"
                        to="https://www.facebook.com/profile.php?id=100080164356285&mibextid=LQQJ4d"
                        newTab>
                        {trans("facebook")}
                      </Link>
                    </li>

                    <li>
                      {" "}
                      <Link
                        className="hover:underline text-xs mb-4"
                        to="https://tiktok.com/@dotchat1?_t=8pM9lEyGRei&_r=1"
                        newTab>
                        {trans("TikTok")}
                      </Link>
                    </li>
                  </>
                )}
              </ul>
              <ul
                onClick={isMobile ? toggleHelp : undefined}
                className="mb-4 py-4 md:mx-2">
                <div className="flex justify-between  items-center">
                  <li className="mb-2 font-bold text-sm lg:text-base  ">
                    {trans("needHelp")}
                  </li>
                  {isMobile &&
                    (helpOpen ? (
                      <FiMinus className="text-4xl" />
                    ) : (
                      <GoPlus className="text-4xl" />
                    ))}
                </div>
                {(helpOpen || !isMobile) && (
                  <div>
                    {" "}
                    <Link to="/contact-us">
                      <li className="text-xs mb-4">{trans("contact")}</li>
                    </Link>
                    {/* <li className="text-xs mb-4">{trans("report")}</li>
                    <li className="text-xs mb-4">{trans("suggest")}</li>{" "} */}
                  </div>
                )}
              </ul>
            </div>
          </div>

          <div className=" w-11/12 m-auto flex justify-between flex-col md:flex-row text-xs py-6 border-t border-gray-700">
            <div className=" flex order-1 md:order-2 mb-3">
              <span className={`${isArabic ? "ml-4" : "mr-4"} text-xs`}>
                {trans("privacy")}
              </span>

              <Link to="/terms-conditions">
                <span className={`${isArabic ? "mr-4" : "ml-4"} text-xs `}>
                  {trans("terms")}
                </span>
              </Link>
            </div>
            <p className="order-2 md:order-1">{trans("rights")}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
