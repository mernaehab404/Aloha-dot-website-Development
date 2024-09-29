import { trans } from "@mongez/localization";
import img2 from "assets/images/EtisalatLogo.svg";
import img1 from "assets/images/fawryLogo.svg";
import flex from "assets/images/flextock.svg";
import img3 from "assets/images/paymob.svg";
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
    <section className="mt-3 py-5 w-11/12 m-auto">
      <h3 className="text-3xl leading-8 font-semibold">
        {trans("Our Providers")}
      </h3>

      <Slider {...settings} className=" ">
        <div className="sm:w-80 m-auto px-3">
          {" "}
          {/* Adjust  to increase or decrease the gap */}
          <div className="  sm:py-11 sm:h-44  h-24  flex items-center">
            <img src={img1} className="m-auto px-2" />
          </div>
        </div>
        <div className="sm:w-80 m-auto px-3">
          <div className=" sm:py-11 sm:h-44 h-24  flex items-center">
            <img src={img2} className="m-auto px-2" />
          </div>
        </div>
        <div className="sm:w-80 m-auto px-3">
          <div className=" sm:py-11 sm:h-44 h-24 flex items-center">
            <img src={img3} className="m-auto px-2" />
          </div>
        </div>
        <div className="sm:w-80 m-auto px-3">
          <div className=" sm:py-11 sm:h-44 h-24 flex items-center">
            <img src={img4} className="m-auto px-2" />
          </div>
        </div>
        <div className="sm:w-80 m-auto px-3">
          <div className="sm:py-11 sm:h-44 h-24 flex items-center">
            <img src={we} className="m-auto px-2 md:scale-150" />
          </div>
        </div>
        <div className="sm:w-80 m-auto px-3">
          <div className="sm:py-11 sm:h-44 h-24 flex items-center">
            <img src={flex} className="m-auto px-2 md:scale-150" />
          </div>
        </div>
        <div className="sm:w-80 m-auto px-3">
          <div className="sm:py-11 sm:h-44 h-24 flex items-center ">
            <img src={paytabs} className="m-auto px-2 md:scale-150 " />
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default LeadingProviders;
