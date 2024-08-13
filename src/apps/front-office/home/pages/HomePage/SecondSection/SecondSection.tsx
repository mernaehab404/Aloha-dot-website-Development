import { trans } from "@mongez/localization";

import { Link } from "@mongez/react-router";
import React from "react";
import iconBuy from "../../../../../../shared/assets/images/Cardboard_Box_PNG_Clip_Art_Image-2761 1.svg";
import img2 from "../../../../../../shared/assets/images/dor2.svg";
import img1 from "../../../../../../shared/assets/images/dot1.svg";
import iconChat from "../../../../../../shared/assets/images/iconChat.svg";
import iconMoney from "../../../../../../shared/assets/images/iconMoney.svg";
import img3 from "../../../../../../shared/assets/images/pngfind.com-play-png-347399 1.svg";
import img4 from "../../../../../../shared/assets/images/we+vodafon.svg";
const SecondSection: React.FC = () => {
  return (
    <>
      <section
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
      </section>
    </>
  );
};
export default SecondSection;
