import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import dotchatlogo from "../../../../shared/assets/images/dotcaht.png";

import left2side from "../../../../shared/assets/images/left2.svg"
import left3 from "../../../../shared/assets/images/left3.svg";
import leftside from "../../../../shared/assets/images/Rectangle 57.svg";
import rigth2 from "../../../../shared/assets/images/right2.svg";
import right3 from "../../../../shared/assets/images/right3.svg";
import rightside from "../../../../shared/assets/images/Untitled-1 1.svg";
/**
 * Progress bar is used for lazy loading for modules
 */
const ProgressBar: React.FC<{ id: string; children: React.ReactNode }> = ({
  id,
  children,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.5, // Trigger when 50% of the section is in view
    triggerOnce: true,
  });
  const [isActive, setIsActive] = useState(false);

  React.useEffect(() => {
    if (inView) {
      setIsActive(true);
    }
  }, [inView]);

  return (
    <>
   
    <li
      ref={ref}
      className={`relative mb-10 ms-4 border-s transition-colors duration-800 ease-in-out ${
        isActive ? "border-blue-500" : "border-gray-300 dark:border-gray-700"
      }`}
    >
      <div
        className={`absolute w-6 h-6 rounded-full mt-1.5 -start-2.5 border-2 transition-all duration-700 ease-in-out ${
          isActive ? "bg-blue-500 border-blue-500" : "bg-white border-gray-300"
        }`}
      />
      <div className="content">
        {children}
      </div>
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
              <img src={leftside} className="hidden md:block" alt="" />
            </div>
          </div>
          {/* Right Side: Mobile image */}
          <div className="md:ml-10 w-full md:w-auto">
            <img
              src={rightside}
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
                and securely send your friends or family funds. Verification is
                necessary to gurantee a safe transaction.
              </p>
              <img
                src={rigth2}
                className="hidden md:block"
                alt="Payment process"
              />
            </div>
          </div>

          {/* Left Side: Mobile image */}
          <div className="md:ml-10 w-full md:w-auto order-2 md:order-1">
            <img
              src={left2side}
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
                and securely send your friends or family funds. Verification is
                necessary to gurantee a safe transactio
              </p>
              <img src={left3} className="hidden md:block" alt="" />
            </div>
          </div>
          {/* Right Side: Mobile image */}
          <div className="md:ml-10 w-full md:w-auto">
            <img
              src={right3}
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
