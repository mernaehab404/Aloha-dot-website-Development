import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import chat from "assets/images/chatWithFriends.svg";
import collect from "assets/images/collect'.svg";
import discover from "assets/images/discover.svg";
import sellbuy from "assets/images/sellbuy.svg";
import send from "assets/images/sendmoney.svg";
import Subscribe from "assets/images/subscribe.svg";
import vectorDotChat from "assets/images/VectorDotChat.svg";
import React, { useState } from "react";
const SecondSection: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  // Function to toggle expansion
  const toggleExpansion = () => {
    setExpanded(!expanded);
  };
  return (
    // <div className=" border-y border-gray-200">
    //   <section className="pt-24 w-11/12 m-auto overflow-hidden hidden md:flex justify-evenly flex-col items-center md:flex-row ">
    //     <div className="self-start">
    //       <img
    //         src={screenChats}
    //         className="self-end scale-105 hover:scale-110 transition-all "
    //         alt="Chat Image 1"
    //       />
    //     </div>
    //     <div>
    //       <h4 className="mb-4 lg:text-2xl text-lg mx-4">
    //         <strong>{trans("dotchat")}</strong>
    //         <span>{` ${trans("chatAppIntro")}`}</span>
    //       </h4>
    //       <div className="border border-gray-300 rounded-xl py-6 mx-4   ">
    //         <div className="flex md:flex-row flex-col items-center justify-center gap-5  px-5 w-full">
    //           <img src={qrCode} className="w-28 mb-8 md:mb-0" alt="QR Code" />
    //           <div className="text-center overflow-hidden">
    //             <p className="md:mb-7 mb-4 text-xs lg:text-sm">
    //               <strong>{trans("download")}</strong> {trans("downloadFrom")}
    //             </p>
    //             <div className="flex justify-around">
    //               <img src={appStore} className="w-2/5" alt="App Store" />
    //               <img src={playStore} className="w-2/5" alt="Play Store" />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="justify-self-end">
    //       <img
    //         src={onlinePayment}
    //         className=" hover:scale-105 transition-all"
    //         alt="Chat Image 2"
    //       />
    //     </div>
    //   </section>
    //   {/* mobile size  */}
    //   <section className=" md:hidden border-y  border-gray-200">
    //     <div className="py-10 w-5/6  m-auto   overflow-hidden ">
    //       <h3 className="text-2xl leading-8 mb-2 font-semibold">
    //         {trans("dotchat")}
    //       </h3>
    //       <p className="mb-5 text-gray-600 text-sm ">{trans("chatAppIntro")}</p>
    //       <div className="flex items-center  bg-gray-100 rounded-xl mb-5 ">
    //         <img src={screenChatSmall} className="self-end " />
    //         <img src={onlinePaymentSmall} className="self-end " />
    //       </div>

    //       {/* Download Section */}
    //       <section className="my-10">
    //         <div className="border rounded-xl py-6  w-11/12 m-auto flex flex-col items-center justify-center gap-5">
    //           <div>
    //             <img
    //               src={qrCode}
    //               className=" mb-3 m-auto w-full"
    //               alt="QR Code"
    //             />
    //           </div>
    //           <div className="">
    //             <p className="md:mb-7 mb-4 md:text-2xl text-sm">
    //               <strong>{trans("download")}</strong>
    //               {trans("downloadFrom")}
    //             </p>
    //             <div className="flex justify-around w-1/2">
    //               <img src={appStore} className="w-32" alt="App Store" />
    //               <img src={playStore} className="w-32" alt="Play Store" />
    //             </div>
    //           </div>
    //         </div>
    //       </section>
    //     </div>
    //   </section>
    // </div>

    <div className="bg-gray-100 p-10 w-11/12 m-auto rounded-xl">
      <div className="flex justify-between md:w-11/12 m-auto">
        <div className="flex items-center space-x-2 mb-3">
          <img src={vectorDotChat} className="w-14" />
          <div className="text-xs">
            <p className="font-bold text-xl text-[#0561E9]">DotChat</p>
            <p className="text-sky-700">all-in-one app</p>
          </div>
        </div>
        <div>
          <p className="text-[#0561E9] underline">
            <Link to="/dotchat">
              <span className="md:text-base text-xs">
                {" "}
                {/* <ArrowLongRightIcon /> */}
                Dotchat page
              </span>
            </Link>
          </p>
        </div>
      </div>
      <div className="overflow-x-scroll lg:overflow-auto scrollbar-hide w-full">
        <div className="flex lg:grid lg:grid-cols-3 gap-4 w-[110%] lg:w-11/12 m-auto items-center  mt-6 ">
          <div className="flex-shrink-0 flex flex-col justify-end bg-white rounded-xl text-center">
            <div className="flex flex-col justify-between items-center">
              <p className="py-10 w-full lg:w-1/2">
                {trans("chatWithFriends")}
              </p>
              <img src={chat} className="m-auto" alt="" />
            </div>
          </div>
          <div className="flex-shrink-0 flex flex-col justify-end bg-white rounded-xl text-center">
            <div className="flex flex-col justify-between items-center">
              <p className="py-10 w-full lg:w-1/2">
                {trans("Send money & make payments")}
              </p>
              <img src={send} alt="" />
            </div>
          </div>
          <div className="flex-shrink-0 flex flex-col justify-end bg-white rounded-xl text-center">
            <div className="flex flex-col justify-between items-center">
              <p className="py-10 w-full lg:w-1/2">
                {trans("Subscribe & pay your bills")}
              </p>
              <img src={Subscribe} alt="" />
            </div>
          </div>

          <div className="flex-shrink-0 flex flex-col justify-end bg-white rounded-xl text-center md:hidden ">
            <div className="flex flex-col justify-between items-center">
              <p className="py-10 w-1/2">
                {trans("Discover feed & Post your interst")}
              </p>
              <img src={discover} className="m-auto" alt="discover feeds" />
            </div>
          </div>
          <div className="flex-shrink-0 flex flex-col justify-end bg-white rounded-xl text-center md:hidden ">
            <div className="flex flex-col justify-between items-center">
              <p className="py-12 w-1/2">{trans("Sell & Buy Products")}</p>
              <img src={sellbuy} className="m-auto" alt="Exclusive deals" />
            </div>
          </div>

          <div className="flex-shrink-0 flex flex-col justify-end bg-white rounded-xl text-center md:hidden ">
            <div className="flex flex-col justify-between items-center">
              <p className="py-10 w-1/2">
                {trans("Collect money from customers")}
              </p>
              <img src={collect} className="m-auto" alt="Exclusive deals" />
            </div>
          </div>
        </div>
        <div />
        <div
          className={`transition-all duration-700 ease-in-out overflow-hidden ${
            expanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}>
          <div className="flex lg:grid lg:grid-cols-3 gap-4 w-[90%] lg:w-11/12 m-auto items-center mt-6 ">
            <div className="flex-shrink-0 flex flex-col justify-end bg-white rounded-xl text-center">
              <div className="flex flex-col justify-between items-center">
                <p className="py-10 w-1/2">
                  {trans("Discover feed & Post your interst")}
                </p>
                <img src={discover} className="m-auto" alt="discover feeds" />
              </div>
            </div>
            <div className="flex-shrink-0 flex flex-col justify-end bg-white rounded-xl text-center">
              <div className="flex flex-col justify-between items-center">
                <p className="py-12 w-1/2">{trans("Sell & Buy Products")}</p>
                <img src={sellbuy} className="m-auto" alt="Exclusive deals" />
              </div>
            </div>

            <div className="flex-shrink-0 flex flex-col justify-end bg-white rounded-xl text-center">
              <div className="flex flex-col justify-between items-center">
                <p className="py-10 w-1/2">
                  {trans("Collect money from customers")}
                </p>
                <img src={collect} className="m-auto" alt="Exclusive deals" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={toggleExpansion}
            className="text-[#0561E9] underline focus:outline-none md:inline hidden">
            {expanded ? "Shrink" : "Expand for more"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default SecondSection;
