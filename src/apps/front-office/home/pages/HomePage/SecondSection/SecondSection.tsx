import { trans } from "@mongez/localization";

import appStore from "assets/images/appStore.svg";
import playStore from "assets/images/googlePlay.svg";
import onlinePayment from "assets/images/onlinePayment.svg";
import onlinePaymentSmall from "assets/images/onlinePaymentSmall.svg";
import qrCode from "assets/images/QR.svg";
import screenChats from "assets/images/screenChats.svg";
import screenChatSmall from "assets/images/screenChatSmall.svg";

import React from "react";
const DotChatSection: React.FC = () => {
  return (
    <div className=" border-y border-gray-200">
      <section className="pt-24 w-11/12 m-auto overflow-hidden hidden md:flex justify-evenly flex-col items-center md:flex-row ">
        <div className="self-start">
          <img
            src={screenChats}
            className="self-end scale-105 hover:scale-110 transition-all "
            alt="Chat Image 1"
          />
        </div>
        <div>
          <h4 className="mb-4 lg:text-2xl text-lg mx-4">
            <strong>{trans("dotchat")}</strong>
            <span>{` ${trans("chatAppIntro")}`}</span>
          </h4>
          <div className="border border-gray-300 rounded-xl py-6 mx-4   ">
            <div className="flex md:flex-row flex-col items-center justify-center gap-5  px-5 w-full">
              <img src={qrCode} className="w-28 mb-8 md:mb-0" alt="QR Code" />
              <div className="text-center overflow-hidden">
                <p className="md:mb-7 mb-4 text-xs lg:text-sm">
                  <strong>{trans("download")}</strong> {trans("downloadFrom")}
                </p>
                <div className="flex justify-around">
                  <img src={appStore} className="w-2/5" alt="App Store" />
                  <img src={playStore} className="w-2/5" alt="Play Store" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="justify-self-end">
          <img
            src={onlinePayment}
            className=" hover:scale-105 transition-all"
            alt="Chat Image 2"
          />
        </div>
      </section>
      {/* mobile size  */}
      <section className=" md:hidden border-y  border-gray-200">
        <div className="py-10 w-5/6  m-auto   overflow-hidden ">
          <h3 className="text-2xl leading-8 mb-2 font-semibold">
            {trans("dotchat")}
          </h3>
          <p className="mb-5 text-gray-600 text-sm ">{trans("chatAppIntro")}</p>
          <div className="flex items-center  bg-gray-100 rounded-xl mb-5 ">
            <img src={screenChatSmall} className="self-end " />
            <img src={onlinePaymentSmall} className="self-end " />
          </div>

          {/* Download Section */}
          <section className="my-10">
            <div className="border rounded-xl py-6  w-11/12 m-auto flex flex-col items-center justify-center gap-5">
              <div>
                <img
                  src={qrCode}
                  className=" mb-3 m-auto w-full"
                  alt="QR Code"
                />
              </div>
              <div className="">
                <p className="md:mb-7 mb-4 md:text-2xl text-sm">
                  <strong>{trans("download")}</strong>
                  {trans("downloadFrom")}
                </p>
                <div className="flex justify-around w-1/2">
                  <img src={appStore} className="w-32" alt="App Store" />
                  <img src={playStore} className="w-32" alt="Play Store" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
export default DotChatSection;
