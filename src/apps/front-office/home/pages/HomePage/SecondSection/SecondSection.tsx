import { trans } from "@mongez/localization";

import { Link } from "@mongez/react-router";
import React from "react";
import img2 from "../../../../../../shared/assets/images/dor2.svg";
import img1 from "../../../../../../shared/assets/images/dot1.svg";
import img3 from "../../../../../../shared/assets/images/pngfind.com-play-png-347399 1.svg";
import small1 from "../../../../../../shared/assets/images/smallIMG1.svg";
import small2 from "../../../../../../shared/assets/images/smallimg2.svg";
import box from "../../../../../../shared/assets/images/Rectangle 50.svg";
const SecondSection: React.FC = () => {
  return (
    <>
      {/* <section
        id="chat"
        className="pt-24 w-4/5 m-auto  border-y border-gray-200 overflow-hidden">
        <h4 className="mb-4 text-3xl flex flex-wrap w-1/2">
          <strong className="font-bold w-1/4 ">{trans("dotchat")}</strong>
          <span className="text-sm  sm:text-3xl">
            {` ${trans("chatAppIntro")}`}
          </span>
        </h4>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="order-2 lg:order-1 flex flex-col justify-evenly w-11/12 m-auto">
            <div className="grid grid-cols-2 mb-2 gap-5">
              <p className="border rounded-2xl text-center flex sm:flex-row flex-col items-center justify-center py-3 group hover:shadow-md">
                <img
                  src={iconChat}
                  className="m-4 group-hover:scale-110  transition-all"
                  alt="WE+vodafone"
                />
                <span className="text-xs sm:text-sm">
                  {trans("chatWithFriends")}
                </span>
              </p>
              <p className="border rounded-2xl flex sm:flex-row flex-col items-center justify-center py-3 group  hover:shadow-md">
                <img
                  src={img4}
                  className="w-11 m-4 group-hover:scale-110 transition-all"
                  alt="WE+vodafone"
                />
                <span className="text-xs sm:text-sm">{trans("payBills")}</span>
              </p>
              <p className="border rounded-2xl flex sm:flex-row flex-col items-center justify-center py-4 group  hover:shadow-md">
                <img
                  src={iconMoney}
                  className="m-4 group-hover:scale-110 transition-all"
                  alt="WE+vodafone"
                />
                <span className="text-xs sm:text-sm">
                  {trans("transferMoney")}
                </span>
              </p>
              <p className="border rounded-2xl flex sm:flex-row flex-col items-center justify-center py-3 group  hover:shadow-md">
                <img
                  src={iconBuy}
                  className="w-11 m-4 group-hover:scale-110 transition-all"
                  alt="WE+vodafone"
                />
                <span className="text-xs sm:text-sm">
                  {trans("buyProducts")}
                </span>
              </p>
              <img
                src={img3}
                className=" col-span-2 lg:col-span-1 sm:w-full"
                alt="download"
              />
              <Link to="/dotchat">
                <button className="border rounded-lg py-2 hover:bg-blue-600  col-span-2 lg:col-span-1 mb-5">
                  {trans("learnMore")}
                </button>
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center ">
            <img
              src={img1}
              className="w-1/2 self-end scale-105 hover:scale-110 transition-all"
              alt="Chat Image 1"
            />
            <img
              src={img2}
              className="w-1/2 hover:scale-105 transition-all"
              alt="Chat Image 2"
            />
          </div>
        </div>
      </section> */}
      <section className="pt-24 w-11/12 m-auto overflow-hidden hidden md:flex justify-evenly flex-col items-center md:flex-row">
        <div className="self-start">
          <img
            src={img1}
            className="self-end scale-105 hover:scale-110 transition-all "
            alt="Chat Image 1"
          />
        </div>
        <div className="flex flex-col justify-center  p-3">
          {" "}
          <h4 className="mb-4 lg:text-3xl">
            <strong className=" ">{trans("dotchat")}</strong>
            <span className="">{` ${trans("chatAppIntro")}`}</span>
          </h4>
          <div className="flex  items-center ">
            <img src={img3} className="w-2/3 mr-2" alt="download" />

            <Link to="/dotchat">
              <button className="outline outline-1 outline-blue-500 text-blue-600 lg:px-10 lg:text-base text-xs rounded-lg lg:py-2 ">
                {trans("learnMore")}
              </button>
            </Link>
          </div>
        </div>
        <div className="justify-self-end">
          <img
            src={img2}
            className=" hover:scale-105 transition-all"
            alt="Chat Image 2"
          />
        </div>
      </section>
      <section className=" sm:hidden">
        <div className="py-14 w-4/5 m-auto  border-y border-gray-200 overflow-hidden">
          <h4 className="mb-4 text-3xl flex flex-wrap ">
            <strong className="font-bold">{trans("dotchat")}</strong>
            <span className="text-sm  sm:text-3xl">
              {` a revolutionally chat & payments app`}
            </span>
          </h4>
          <div className="flex justify-center  bg-gray-100 rounded-xl">
            <img src={small1} className="self-end " />
            <img src={small2} className="self-end " />
          </div>
          <div className="pt-8 w-full px-1">
            <img src={img3} className="" alt="download" />

            <Link to="/dotchat">
              <button className="mt-5 py-4 outline outline-1 outline-blue-500 text-blue-600  rounded-lg w-full">
                {trans("learnMore")}
              </button>
            </Link>
          </div>
      
        </div>
      </section>
    </>
  );
};
export default SecondSection;
