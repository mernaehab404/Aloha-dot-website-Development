import { trans } from "@mongez/localization";
import EtisalatLogo from "assets/images/EtisalatLogo.svg";
import FawryLogo from "assets/images/fawryLogo.svg";
import flex from "assets/images/flextock.svg";
import paymob from "assets/images/paymob.svg";
import paytabs from "assets/images/paytabs.svg";
import img4 from "assets/images/vodafone.svg";
import we from "assets/images/we.svg";
import React from "react";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 5000,
  cssEase: "linear",

  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

const LeadingProviders: React.FC = () => {
  return (
    <section className="mt-3 py-5  ">
      <div className="pb-14 text-center">
        <h2 className="sm:text-2xl text-lg mb-2 w-2/3  py-5 sm:w-full m-auto ">
          <span>{trans("Wevepartneredwith")}</span>

          <strong> {trans("industryleadingproviders")}</strong>
        </h2>

        <Slider {...settings}>
          <div className="sm:w-80 m-auto sm:px-3 px-2 ">
            {" "}
            <div className="bg-gray-100 border rounded-md sm:rounded-3xl  sm:py-11 sm:h-44  h-24  flex items-center">
              <img src={FawryLogo} className="m-auto px-2" />
            </div>
          </div>
          <div className="sm:w-80 m-auto sm:px-3 px-2">
            <div className="bg-gray-100 border rounded-md  sm:rounded-3xl sm:py-11 sm:h-44 h-24  flex items-center">
              <img src={EtisalatLogo} className="m-auto px-2 " />
            </div>
          </div>
          <div className="sm:w-80 m-auto sm:px-3 px-2">
            <div className="bg-gray-100 border rounded-md  sm:rounded-3xl sm:py-11 sm:h-44 h-24 flex items-center">
              <img src={paymob} className="m-auto px-2" />
            </div>
          </div>
          <div className="sm:w-80 m-auto sm:px-3 px-2">
            <div className="bg-gray-100 border rounded-md  sm:rounded-3xl sm:py-11 sm:h-44 h-24 flex items-center">
              <img src={img4} className="m-auto px-2" />
            </div>
          </div>
          <div className="sm:w-80 m-auto sm:px-3 px-2">
            <div className="bg-gray-100 border rounded-md  sm:rounded-3xl sm:py-11 sm:h-44 h-24 flex items-center">
              <img src={we} className="m-auto px-2 md:scale-150" />
            </div>
          </div>
          <div className="sm:w-80 m-auto sm:px-3 px-2">
            <div className="bg-gray-100 border rounded-md  sm:rounded-3xl sm:py-11 sm:h-44 h-24 flex items-center">
              <img src={flex} className="m-auto px-2 md:scale-150" />
            </div>
          </div>
          <div className="sm:w-80 m-auto sm:px-3 px-2">
            <div className="bg-gray-100 border rounded-md  sm:rounded-3xl sm:py-11 sm:h-44 h-24 flex items-center ">
              <img src={paytabs} className="m-auto px-2 md:scale-150 " />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default LeadingProviders;
