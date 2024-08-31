import chatWithFreinds from "assets/images/chatWithFreinds.svg";
import chatWithFreindsRight from "assets/images/chatWithFreindsRight.svg";
import dotchatlogo from "assets/images/dotcaht.png";
import onlinePaymentRight from "assets/images/onlinePaymentRight.svg";
import payBills from "assets/images/payBills.svg";
import sendPaymentLeft from "assets/images/sendPaymentLeft.svg";
import sendPaymentRight from "assets/images/sendPaymentRight.svg";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
/**
 * Progress bar is used for lazy loading for modules
 */
const ProgressBar: React.FC<{ id: string; children: React.ReactNode }> = ({
  // id,
  children,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.7, // Trigger when 50% of the section is in view
    triggerOnce: false,
  });
  const [isActive, setIsActive] = useState(false);

  React.useEffect(() => {
    if (inView) {
      setIsActive(true);
    }
  }, [inView]);
  const [scrollPercenage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = (scrollTop / docHeight) * 100;
      setScrollPercentage(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <li ref={ref} className="relative mb-10 ms-4">
        {/* Line that changes color as you scroll */}
        <div
          className={`absolute h-full w-1 left-0 top-0 transition-colors duration-700 ease-in-out ${
            isActive ? "bg-blue-500" : "bg-gray-300"
          }`}
        />

        {/* Dot that changes color */}
        <div
          className={`absolute w-6 h-6 rounded-full mt-1.5 -start-2.5 border-2 transition-all duration-700 ease-in-out ${
            isActive
              ? "bg-blue-500 border-blue-500"
              : "bg-white border-gray-300"
          }`}
        />
        <div className="content ms-8">{children}</div>
      </li>
    </>
  );
};
const Timeline = () => {
  return (
    <>
      <div className="flex justify-center  items-center  mb-4 ">
        <img
          src={dotchatlogo}
          className="sm:w-1/4 w-1/2 mr-4"
          alt="dotchatlogo"
        />

        <p className="border-l-2  border-red-800 px-6">
          <strong>a revolutionally </strong>all-in-one app
        </p>
      </div>
      <ul className="timeline">
        <ProgressBar id="section-1">
          {" "}
          <section
            id="1"
            className="my-12 flex flex-col md:flex-row items-center justify-around p-5 bg-white">
            {/* Left Side: Numbered label and text */}

            <div className="col-span-2 md:w-3/5 w-full ">
              <div className="font-bold sm:text-3xl text-xl mb-7 flex items-center">
                <span className="border rounded-2xl py-4 px-6 font-bold mr-4">
                  1
                </span>
                <p>
                  {" "}
                  <strong>Chat</strong> with friends
                </p>
              </div>
              <div className="hidden md:block ">
                <p className="text-gray-500 text-sm md:text-base mb-4 ">
                  {" "}
                  Chat with your friends, family members or even contact
                  businesses to learn more about their new products, prices,
                  locations or ask any questions you would like!
                </p>
                <img src={chatWithFreinds} className="hidden md:block" alt="" />
              </div>
            </div>
            {/* Right Side: Mobile image */}
            <div className="md:ml-10 w-full md:w-auto">
              <img
                src={chatWithFreindsRight}
                className="w-full h-auto max-w-xs mx-auto"
                alt="Chat with friends"
              />
            </div>
          </section>{" "}
        </ProgressBar>
        <ProgressBar id="section-2">
          {" "}
          <section
            id="2"
            className="my-12 flex flex-col md:flex-row items-center justify-around">
            {/* Right Side: Numbered label and text */}
            <div className="col-span-2 md:w-3/5 w-full order-1 md:order-2">
              <div className="sm:text-3xl text-xl mb-7 flex items-center">
                <span className="border rounded-2xl py-4 px-6 font-bold mr-4">
                  2
                </span>
                <p>
                  <strong> Send </strong> payments
                </p>
              </div>
              <div className="hidden md:block">
                <p className="text-gray-500 text-sm md:text-base mb-4">
                  Payments with dotchat has never been easier! You can instantly
                  and securely send your friends or family funds. Verification
                  is necessary to gurantee a safe transaction.
                </p>
                <img
                  src={sendPaymentRight}
                  className="hidden md:block"
                  alt="Payment process"
                />
              </div>
            </div>

            {/* Left Side: Mobile image */}
            <div className="md:ml-10 w-full md:w-auto order-2 md:order-1">
              <img
                src={sendPaymentLeft}
                className="w-full h-auto max-w-xs mx-auto"
                alt="discover products"
              />
            </div>
          </section>{" "}
        </ProgressBar>
        <ProgressBar id="section-3">
          {" "}
          <section
            id="3"
            className="my-12 flex flex-col md:flex-row items-center justify-around p-5 bg-white">
            {/* Left Side: Numbered label and text */}

            <div className="col-span-2  md:w-3/5 w-full ">
              <div className="sm:text-3xl text-xl mb-7 flex items-center">
                <span className="border rounded-2xl py-4 px-6 font-bold mr-4">
                  3
                </span>
                <p>
                  <strong>Subscribe &</strong> pay your bills
                </p>
              </div>
              <div className="hidden md:block ">
                <p className="text-gray-500 text-sm md:text-base mb-4 ">
                  Payments with dotchat has never been easier! You can instantly
                  and securely send your friends or family funds. Verification
                  is necessary to gurantee a safe transactio
                </p>
                <img src={payBills} className="hidden md:block" alt="" />
              </div>
            </div>
            {/* Right Side: Mobile image */}
            <div className="md:ml-10 w-full md:w-auto">
              <img
                src={onlinePaymentRight}
                className="w-full h-auto max-w-xs mx-auto"
                alt="Subscribe"
              />
            </div>
          </section>
        </ProgressBar>
        {/* Add more sections as needed */}
      </ul>
    </>
  );
};
export default Timeline;
