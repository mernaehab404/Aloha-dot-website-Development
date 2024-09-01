import { trans } from "@mongez/localization";
import dotCloud from "assets/images/dotCloud.svg";
import dotCloudText from "assets/images/dotCloudText.svg";
import dotMap from "assets/images/dotMap.svg";
import dotMapText from "assets/images/dotMapsText.svg";
import dotPay from "assets/images/dotPay.svg";
import dotPayText from "assets/images/dotPayText.svg";
import dotShipping from "assets/images/dotShipping.svg";
import dotShippingText from "assets/images/dotShippingText.svg";

import "../HomePage.css";
const UpcomingProducts: React.FC = () => {
  return (
    <div className="border-b border-gray-200">
      <div className="py-14 w-4/5 m-auto ">
        <h3 className="text-2xl leading-8 mb-2 font-semibold ">
          {trans("upcomingSolutions")}
        </h3>
        <p className="mb-5 text-gray-600 sm:text-sm text-xs">
          {trans("alohadotplans")}
        </p>

        <div className="lg:flex  lg:gap-7 grid grid-cols-2 gap-2">
          <div className="relative fade-in fade-in-1">
            <img
              src={dotMap}
              className="rounded-2xl object-cover h-full w-full"
              alt="dotMap"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl flex justify-center items-center">
              <img src={dotMapText} className="w-11/12 px-1" alt="dotMapText" />
            </div>
          </div>
          <div className="relative fade-in fade-in-2">
            <img
              src={dotCloud}
              className="rounded-2xl object-cover h-full w-full"
              alt="dotCloud"
            />
            <div className="absolute inset-0 bg-black bg-opacity-65 rounded-2xl flex justify-center items-center">
              <img
                src={dotCloudText}
                className="w-11/12 px-2"
                alt="dotCloudText"
              />
            </div>
          </div>
          <div className="relative fade-in fade-in-3">
            <img
              src={dotShipping}
              className="rounded-2xl object-cover h-full w-full"
              alt="dotShipping"
            />
            <div className="absolute inset-0 bg-black bg-opacity-65 rounded-2xl flex justify-center items-center">
              <img
                src={dotShippingText}
                className="w-11/12 px-1"
                alt="dotShippingText"
              />
            </div>
          </div>
          <div className="relative fade-in fade-in-4">
            <img
              src={dotPay}
              className="rounded-2xl object-cover h-full w-full"
              alt="dotShipping"
            />
            <div className="absolute inset-0 bg-black bg-opacity-65 rounded-2xl flex justify-center items-center">
              <img src={dotPayText} className="w-4/5 px-2" alt="dotPayText" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpcomingProducts;
