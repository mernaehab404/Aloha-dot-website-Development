import { trans } from "@mongez/localization";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import img2 from "../../../../../shared/assets/images/Frame 114.svg";
import img1 from "../../../../../shared/assets/images/Frame 115.svg";
import img3 from "../../../../../shared/assets/images/payyymobb.svg";
import img4 from "../../../../../shared/assets/images/vodaaafone.svg";
import we from "../../../../../shared/assets/images/we.svg";
import paytabs from "../../../../../shared/assets/images/paytabs.svg";
import flex from "../../../../../shared/assets/images/flextock.svg";

const images = [
  { src: img1, alt: "fawry" },
  { src: img2, alt: "etisalat" },
  { src: img3, alt: "paymob" },
  { src: img4, alt: "vodafone" },
  { src: we, alt: "we" },
  { src: paytabs, alt: "paytabs" },
  { src: flex, alt: "flex" },
  { src: img1, alt: "vodafone" },
];

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
      breakpoint: 768, // Adjust at tablet sizes (mobile in this case)
      settings: {
        slidesToShow: 3, // Show 3 slides on screens smaller than 768px
        slidesToScroll: 1,
      },
    },
  ],
};

const LeadingProviders: React.FC = () => {
  return (
    <section className="mt-3 py-8  ">
      <div className="pb-14 text-center">
        <h2 className="sm:text-2xl text-lg mb-2 w-2/3  py-5 sm:w-full m-auto ">
        <span className="block py-2">
        {trans("Wevepartneredwith")}
        </span>
      
          <strong className="block sm:inline mb-3"> {trans("industryleadingproviders")}</strong>
        </h2>

        <Slider {...settings} className=" ">
          <div className="sm:w-80 m-auto px-3">
            {" "}
            {/* Adjust  to increase or decrease the gap */}
            <div className="bg-gray-100 border rounded-md sm:rounded-3xl  sm:py-11 sm:h-44  h-24  flex items-center">
              <img src={img1} className="m-auto px-2" />
            </div>
          </div>
          <div className="sm:w-80 m-auto px-3">
            <div className="bg-gray-100 border rounded-md  sm:rounded-3xl sm:py-11 sm:h-44 h-24  flex items-center">
              <img src={img2} className="m-auto px-2" />
            </div>
          </div>
          <div className="sm:w-80 m-auto px-3">
            <div className="bg-gray-100 border rounded-md  sm:rounded-3xl sm:py-11 sm:h-44 h-24 flex items-center">
              <img src={img3} className="m-auto px-2" />
            </div>
          </div>
          <div className="sm:w-80 m-auto px-3">
            <div className="bg-gray-100 border rounded-md  sm:rounded-3xl sm:py-11 sm:h-44 h-24 flex items-center">
              <img src={img4} className="m-auto px-2" />
            </div>
          </div>
          <div className="sm:w-80 m-auto px-3">
            <div className="bg-gray-100 border rounded-md  sm:rounded-3xl sm:py-11 sm:h-44 h-24 flex items-center">
              <img src={we} className="m-auto px-2 md:scale-150" />
            </div>
          </div>
          <div className="sm:w-80 m-auto px-3">
            <div className="bg-gray-100 border rounded-md  sm:rounded-3xl sm:py-11 sm:h-44 h-24 flex items-center">
              <img src={flex} className="m-auto px-2 md:scale-150" />
            </div>
          </div>
          <div className="sm:w-80 m-auto px-3">
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
