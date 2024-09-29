import { trans } from "@mongez/localization";
import dotchatimg from "assets/images/dotchatimg.svg";
import dotcloudSolution from "assets/images/dotcloudSolution.svg";
import VectorDotCloud from "assets/images/dotcloudvector.svg";
import dotmapSolution from "assets/images/dotmapSolution.svg";
import VectorDotMap from "assets/images/dotmapVector.svg";
import dotpaySolution from "assets/images/dotpaySolution.svg";
import vectorDotChat from "assets/images/VectorDotChat.svg";
import VectorDotPay from "assets/images/VectorPayy.svg";

import "../HomePage.css";
const UpcomingProducts: React.FC = () => {
  return (
    <div>
      <div className="pb-10 m-auto bg-gradient-to-br from-[#deebfe] via-[#fff8d9] to-[#fff8d9] bg-opacity-80 backdrop-blur-3xl w-full">
        <div className="w-11/12 mx-auto">
          {" "}
          {/* Constraining the content width */}
          <h3 className="text-3xl leading-8 font-semibold">
            {trans("Our Solutions")}
          </h3>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#fff8d9] to-neutral-50 bg-opacity-80 w-full">
        <div className="overflow-x-scroll lg:overflow-auto scrollbar-hide w-full">
          <div className="flex lg:grid lg:grid-cols-4 gap-4 w-[90%] lg:w-11/12 m-auto">
            <div className="flex-shrink-0 flex flex-col justify-end bg-blue-50 rounded-2xl w-[75%] lg:w-full">
              <div className="px-5">
                <div className="flex items-center space-x-2 mb-3">
                  <img src={vectorDotChat} alt="" />
                  <p className="font-bold text-xl text-[#0561E9]">DotChat</p>
                </div>
                <p className="text-sky-700 text-base md:w-[48%]">
                  a revolutionally all-in-one app
                </p>
              </div>
              <img
                src={dotchatimg}
                className="w-full h-auto rounded-b-2xl"
                alt=""
              />
            </div>

            <div className="flex-shrink-0 flex flex-col justify-between bg-blue-50 rounded-2xl w-[75%] lg:w-full px-5">
              <div className="mt-5">
                <div className="flex items-center space-x-2 mb-3">
                  <img src={VectorDotPay} alt="" />
                  <p className="font-bold text-xl text-[#0561E9]">DotPay</p>
                </div>
                <p className="text-sky-700 text-base md:w-[48%]">
                  easy pay for all your payments
                </p>
              </div>
              <img
                src={dotpaySolution}
                className="w-full h-auto rounded-b-2xl"
                alt=""
              />
            </div>

            <div className="flex-shrink-0 flex flex-col justify-between bg-blue-50 rounded-2xl w-[75%] lg:w-full px-5">
              <div>
                <div className="flex items-center space-x-2 my-5">
                  <img src={VectorDotCloud} alt="" />
                  <p className="font-bold text-xl text-[#0561E9]">DotCloud</p>
                </div>
                <p className="text-sky-700 text-base">Coming soon</p>
              </div>
              <img
                src={dotcloudSolution}
                className="w-full h-auto rounded-b-2xl"
                alt=""
              />
            </div>

            <div className="flex-shrink-0 flex flex-col justify-between bg-blue-50 rounded-2xl w-[75%] lg:w-full px-5">
              <div>
                <div className="flex items-center space-x-2 my-5">
                  <img src={VectorDotMap} alt="" />
                  <p className="font-bold text-xl text-[#0561E9]">DotMap</p>
                </div>
                <p className="text-sky-700 text-base">Coming soon</p>
              </div>
              <img
                src={dotmapSolution}
                className="w-full h-auto rounded-b-2xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpcomingProducts;
