import appStoreWhite from "assets/images/appStoreWhite.svg";
import googlePlay from "assets/images/googleplayWhite'.svg";
import hands from "assets/images/Handsvg.svg";
// import { useEffect, useState } from "react";
import { FaLandmarkFlag, FaMoneyBills } from "react-icons/fa6";
import { PiHandCoins } from "react-icons/pi";
import { TbDatabaseImport } from "react-icons/tb";
export default function DotChatPage() {
  // const [isArabic, setisArabic] = useState(false);
  // useEffect(() => {
  //   if (getCurrentLocaleCode() == "ar") {
  //     setisArabic(true);
  //   }
  // }, []);

  return (
    <div className="">
      <section className="bg-blue-600 flex flex-col justify-center items-center pt-24 overflow-hidden">
        <div className="">
          <div className="m-auto lg:w-3/5 w-4/5">
            <p className="font-bold text-white lg:text-5xl text-3xl mb-4 leading-10">
              All - in one App for social and payment
            </p>
            <p className="text-white text-lg max-w-2xl mb-8 lg:inline-block hidden">
              social communication app integrates features like payment,
              mini-ecommerce, marketing, and social services.
            </p>

            <div className="flex gap-6 mb-10 justify-center">
              <img src={appStoreWhite} alt="App Store" />
              <img src={googlePlay} alt="Google Play" />
            </div>
          </div>

          <div className="">
            <img src={hands} alt="Hand holding phone" className="" />
          </div>
        </div>
      </section>
      <section className="py-12 w-11/12 m-auto ">
        <h1 className="text-4xl font-bold leading-10 py-5">About Dotchat</h1>
        <p className="text-gray-`600">
          DotChat is an innovative eCommerce social media platform designed for
          both merchants and clients. Here &apos;s what we offer:
        </p>
        <ul className="ml-10 py-4">
          <li className="list-disc text-gray-600">
            <strong>For Merchants:</strong> Full control over your business with
            features to manage products, orders, and interactions with clients.
          </li>
          <li className="list-disc text-gray-600">
            {" "}
            <strong>Social Engagement:</strong> Post updates, share content, and
            keep your customers informed with integrated social media tools.
          </li>
          <li className="list-disc text-gray-600">
            <strong> Direct Communication:</strong> Built-in chat system to
            connect with clients in real-time.
          </li>
          <li className="list-disc text-gray-600">
            <strong> Client Experience:</strong> Customers can explore
            businesses, follow merchants, and communicate easily through chat.
          </li>
          <li className="list-disc text-gray-600">
            <strong>All-in-One Solution:</strong> A seamless blend of eCommerce
            and social interaction to drive business growth Join us at DotChat,
            where commerce meets community.
          </li>
        </ul>
        <p className="text-gray-600 text-sm text-nowrap">
          Join us at DotChat, where commerce meets community.
        </p>
      </section>
      <section className="py-12 w-11/12 m-auto ">
        <p className="text-center pb-10 text-3xl">
          Dotchat In <strong>numbers</strong>
        </p>
        <div className="md:w-3/4 m-auto  grid grid-flow-row-dense lg:grid-cols-3 grid-rows-2 gap-3">
          <div className=" rounded-lg border border-gray-200 p-7">
            <TbDatabaseImport className="text-4xl text-blue-700" />
            <p className="py-3">Earn 5.3% APY*</p>
            <p className="text-xs text-gray-600 mb-10">
              That &apos;s higher than most savings accounts. Stop getting
              ripped off by banks
            </p>
          </div>
          <div className="bg-blue-200 row-span-2 bg-gradient-to-tr from-gray-300 to-slate-50  rounded-lg border border-gray-200 p-7">
            2
          </div>
          <div className="rounded-lg border border-gray-200  p-4">
            <FaLandmarkFlag className="text-4xl text-blue-700" />
            <p className="py-3">
              Backed by the full faith of the US Government
            </p>
            <p className="text-xs text-gray-600 mb-10">
              Treasury Bills are one of the safest assets in the world
            </p>
          </div>
          <div className="rounded-lg border border-gray-200  p-4">
            <FaMoneyBills className="text-4xl text-blue-700" />
            <p className="py-3">Locked-in rate</p>
            <p className="text-xs text-gray-600 mb-10">
              Your interest rate is locked in even if the Fed drops interest
              rates
            </p>
          </div>
          <div className="rounded-lg border border-gray-200  p-4">
            <PiHandCoins className="text-4xl text-blue-700" />
            <p className="py-3">Major Tax Benefits</p>
            <p className="text-xs text-gray-600 mb-10">
              You don &apos;t pay state and local taxes on interest earned,
              unlike savings accounts
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
