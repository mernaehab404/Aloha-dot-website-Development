import { getCurrentLocaleCode, trans } from "@mongez/localization";
import appStore from "assets/images/appStore.svg";
import chatWithFreinds from "assets/images/chatWithFreinds.svg";
import chatWithFreindsRight from "assets/images/chatWithFreindsRight.svg";
import collectMoneyRight from "assets/images/collectMoneyRight.svg";
import collectMoneyScreen from "assets/images/collectMoneyScreen.svg";
import discoverFeed from "assets/images/discoverFeed.svg";
import discoverFeedRight from "assets/images/discoverFeedRight.svg";
import dotchatlogo from "assets/images/dotcaht.png";
import dotchatBGmobile from "assets/images/dotchatBGmobile.png";
import playStore from "assets/images/googlePlay.svg";
import inventoryLeft from "assets/images/inventoryLeft.svg";
import inventoryRight from "assets/images/inventoryRight.svg";
import onlinePaymentRight from "assets/images/onlinePaymentRight.svg";
import payBills from "assets/images/payBills.svg";
import bg from "assets/images/PM70 1.svg";
import qrCode from "assets/images/QR.svg";
import sellProductLeft from "assets/images/sellProductLeft.svg";
import sellProductRight from "assets/images/sellProductRight.svg";
import sendPaymentLeft from "assets/images/sendPaymentLeft.svg";
import sendPaymentRight from "assets/images/sendPaymentRight.svg";
import { useEffect, useState } from "react";
const features = [
  {
    id: 1,
    title: "chatWithFriends",
    description: "chatWithFriendsDesc",
    imgDesktop: chatWithFreinds,
    imgMobile: chatWithFreindsRight,
  },
  {
    id: 2,
    title: "SendPayments",
    description: "SendPaymentsDesc",
    imgDesktop: sendPaymentRight,
    imgMobile: sendPaymentLeft,
  },
  {
    id: 3,
    title: "payBills",
    description: "payBillsDesc",
    imgDesktop: payBills,
    imgMobile: onlinePaymentRight,
  },
  {
    id: 4,
    title: "DiscoverProducts",
    description: "DiscoverProductsDesc",
    imgDesktop: discoverFeedRight,
    imgMobile: discoverFeed,
  },
  {
    id: 5,
    title: "SellProducts",
    description: "SellProductsDesc",
    imgDesktop: sellProductLeft,
    imgMobile: sellProductRight,
  },
  {
    id: 6,
    title: "collectMoney",
    description: "collectMoneyDesc",
    imgDesktop: collectMoneyRight,
    imgMobile: collectMoneyScreen,
  },
  {
    id: 7,
    title: "Inventory",
    description: "InventoryDesc",
    imgDesktop: inventoryLeft,
    imgMobile: inventoryRight,
  },
];

export default function DotChat() {
  const [isArabic, setisArabic] = useState(false);
  useEffect(() => {
    if (getCurrentLocaleCode() == "ar") {
      setisArabic(true);
    }
  }, []);
  return (
    <div className="w-11/12 m-auto">
      {/* Header Section */}
      <header className="flex justify-center items-center mb-4">
        <img
          src={dotchatlogo}
          className="sm:w-1/5 w-1/4 mr-4"
          alt="DotChat Logo"
        />
        <div
          className={`${isArabic ? " border-r-2 " : " border-l-2"} border-red-800 px-6`}
          dangerouslySetInnerHTML={{
            __html: trans("dotchatIntro") as string,
          }}
        />
      </header>

      {/* Background Image Section */}
      <section className=" rounded-2xl p-1">
        <img
          src={bg}
          className="sm:w-full w-0 sm:block hidden"
          alt="DotChat Background"
        />
        <img
          src={dotchatBGmobile}
          className="w-full sm:hidden block"
          alt="DotChat Background"
        />
      </section>

      {/* About Section */}
      <section className="my-12">
        <div
          className="text-3xl my-5"
          dangerouslySetInnerHTML={{
            __html: trans("aboutDotchat") as string,
          }}
        />
        <p className="text-lg text-gray-500 mb-5">{trans("dotChatDesc")}</p>
      </section>

      <hr />

      {/* Features Section */}
      <section className="my-12">
        <div
          className="text-2xl my-5"
          dangerouslySetInnerHTML={{
            __html: trans("dotchatFeatuers") as string,
          }}
        />
        <p className="text-lg text-gray-500 mb-5">
          {trans("dotchatFeaturesList")}
        </p>
        <div>
          {features.map(feature => (
            <li key={feature.id} className="my-12  list-none">
              <section
                className={`flex flex-col md:flex-row items-center justify-around p-5  ${
                  feature.id % 2 === 0 ? "" : "bg-white"
                }`}>
                <div
                  className={`md:w-3/5 w-full sm:block flex items-center justify-center  ${feature.id % 2 === 0 ? "order-1 md:order-2" : ""}`}>
                  <div className="flex items-center sm:justify-start sm:text-3xl text-xl mb-7">
                    <span className="border shadow-md rounded-2xl py-4 px-6  mr-4 ml-4">
                      {feature.id}
                    </span>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: trans(feature.title) as string,
                      }}
                    />
                  </div>
                  <div className="hidden md:block">
                    <div
                      className="text-gray-500 text-sm md:text-base mb-4"
                      dangerouslySetInnerHTML={{
                        __html: trans(feature.description) as string,
                      }}
                    />
                    <img
                      src={feature.imgDesktop}
                      className="hidden md:block"
                      alt={feature.title}
                    />
                  </div>
                </div>

                <div
                  className={`md:ml-10 w-full md:w-auto ${feature.id % 2 === 0 ? "order-2 md:order-1" : ""}`}>
                  <img
                    src={feature.imgMobile}
                    className="w-full h-auto max-w-xs mx-auto"
                    alt={feature.title}
                  />
                </div>
              </section>
              <hr />
            </li>
          ))}
        </div>
      </section>

      {/* Download Section */}
      <section className="my-12">
        <div className="border rounded-xl py-6 md:w-11/12 w-2/3 m-auto flex md:flex-row flex-col items-center justify-center gap-5">
          <img src={qrCode} className="w-28 mb-3 md:mb-0" alt="QR Code" />
          <div className="text-center">
            <p className="md:mb-7 mb-4 md:text-2xl text-xs">
              <strong>{trans("download")}</strong>
              {trans("downloadFrom")}
            </p>
            <div className="flex justify-around">
              <img src={appStore} className="md:w-56 w-32" alt="App Store" />
              <img src={playStore} className="md:w-56 w-32" alt="Play Store" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
