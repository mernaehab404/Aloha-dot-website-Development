import { trans } from "@mongez/localization";
import { useState } from "react";
import { CiLinkedin } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import about from "../../../../../shared/assets/images/about.png";
import flex from "../../../../../shared/assets/images/flextock.svg";
import img2 from "../../../../../shared/assets/images/Frame 114.svg";
import img1 from "../../../../../shared/assets/images/Frame 115.svg";
import history from "../../../../../shared/assets/images/history2.jfif";
import inspire from "../../../../../shared/assets/images/inspire2.jfif";
import paytabs from "../../../../../shared/assets/images/paytabs.svg";
import img3 from "../../../../../shared/assets/images/payyymobb.svg";
import haythem from "../../../../../shared/assets/images/Rectangle 101.png";
import martin from "../../../../../shared/assets/images/Rectangle 105.png";
import dack from "../../../../../shared/assets/images/Rectangle 106.png";
import elemam from "../../../../../shared/assets/images/Rectangle 95.png";
import other from "../../../../../shared/assets/images/Rectangle 96.png";
import img4 from "../../../../../shared/assets/images/vodaaafone.svg";
import we from "../../../../../shared/assets/images/we.svg";
import ValueSection from "./ValueSection";
export default function AboutUs() {
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


  return (
    <div className=" bg-slate-50">
      <div className="w-11/12 md:w-4/5 m-auto">
        <div className="py-8 text-center w-4/5 md:w-11/12   m-auto ">
          <p className="md:text-3xl text-xl md:leading-10 leading-7 pb-2">
            Alohadot is creating <strong>ground breaking</strong> solutions
          </p>
          <p className="md:text-sm text-xs">
            Discover below how Alohadot’s revolutionary vision will change the
            world
          </p>
        </div>
        <div className="relative rounded-3xl border-gray-300  border bg-white flex justify-center items-center
       md:h-[600px] h-52">
          <img src={about} className="absolute top-0  " alt="" />
        </div>
        <div className="ml-3 md:my-20 my-14">
          <p className="text-2xl my-5">About Alohadot</p>
          <p>
            As a company incorporated under the law of the{" "}
            <strong>Arab Republic of Egypt</strong>, Aloha Dot focuses on
            revolutionary solutions in the{" "}
            <strong>technology and fintech fields.</strong> Currently, Aloha
            Dot's business supports the all-in-one app Dotchat, which covers
            four areas: social communication, mobile payments, social media, and
            e-commerce. The company is a multinational enterprise with employees
            from Egypt, Yemen, and China. The business will begin with branches
            in Egypt and Dubai
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-14">
          <div className="relative group">
            <div className="relative">
              <img src={inspire} className=" h-72 w-full rounded-3xl" alt="" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-3xl flex items-center justify-center">
                <div className="text-white text-2xl">Inspiring vision</div>
              </div>
            </div>
            <p className="mt-8">
              <strong> Our vision</strong> is to create a{" "}
              <strong>revolution in the digital landscape</strong> in
              communication, mapping, cloud storage, shipping, and more. We
              aspire to lead a new era of interconnected digital services that
              enhance everyday life and business across every country we serve.
            </p>
          </div>
          <div className="relative group">
            <div className="relative">
              <img src={history} className=" h-72 w-full rounded-3xl" alt="" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-3xl flex items-center justify-center">
                <div className="text-white text-2xl">
                  {" "}
                  History changing Mission
                </div>
              </div>
            </div>

            <p className="mt-8">
              <strong> Our vision</strong> is to create a{" "}
              <strong>revolution in the digital landscape</strong> in
              communication, mapping, cloud storage, shipping, and more. We
              aspire to lead a new era of interconnected digital services that
              enhance everyday life and business across every country we serve.
            </p>
          </div>
        </div>
        {/* start values section */}
      <ValueSection/>
        {/* end values section */}
        {/*start  martin Section */}
        <section className="martin my-10 border pt-20 py-11 px-5 border-gray-300 bg-white rounded-2xl">
          <p className="md:text-2xl text-base md:text-center text-start w-11/12 md:w-3/4 m-auto mb-8 leading-9">
            “Alohadot aims to create a <strong>digital revolution</strong> that
            will transform the everyday lives of millions of people in the
            middle east”
          </p>
          <div className="text-end md:text-base text-sm">
            <p>Co-founder and CTO</p>
            <p>Martin Ma</p>
          </div>
        </section>
        {/*end  martin Section */}

        {/*end  Leders Section */}
        {/*start  Leders Section */}
        <section className="leader my-16 text-center">
          <div className="my-10">
            <h2 className="sm:text-2xl text-lg w-2/3  sm:w-full m-auto ">
              <span className="">{trans("Meet our team of")}</span>

              <strong className=""> {trans(" exceptional leaders.")}</strong>
            </h2>
            <p className="text-sm sm:block hidden">
              Alohadot is backed by top leaders from around the world
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-3/4 m-auto sm:gap-y-5 sm:gap-x-3 gap-4">
            <div>
              <div>
                <div className="relative">
                  <img
                    className="h-auto max-w-full rounded-lg m-auto"
                    src={haythem}
                    alt="Haytham Al-Emam"
                  />
                  <div className="absolute inset-0 flex items-end pl-1 justify-between">
                    <div className="flex flex-col text-gray-100   p-1">
                      <p className="text-white  text-xs text-start">
                        Haytham Al-Emam
                      </p>
                      <p className="text-sm text-gray-300 text-start">
                        Co-founder & CEO
                      </p>
                    </div>
                    <CiLinkedin className="text-5xl text-gray-300 mr-2" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <img
                  className="h-auto max-w-full rounded-lg m-auto"
                  src={martin}
                />
                <div className="absolute inset-0 flex items-end pl-1 justify-between">
                  <div className="flex flex-col text-gray-100   p-1">
                    <p className="text-white text-start text-xs">Martin Ma</p>
                    <p className="text-sm text-gray-300 text-start">
                      Co-founder & CEO
                    </p>
                  </div>
                  <CiLinkedin className="text-5xl text-gray-300 mr-2" />
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <img
                  className="h-auto max-w-full rounded-lg m-auto"
                  src={dack}
                />
                <div className="absolute inset-0 flex items-end pl-1 justify-between">
                  <div className="flex flex-col text-gray-100  p-1">
                    <p className="text-white text-start text-xs">Dack Wei</p>
                    <p className="text-sm text-gray-300 text-start">CTO</p>
                  </div>
                  <CiLinkedin className="text-5xl text-gray-300 mr-2" />
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <img
                  className="h-auto max-w-full rounded-lg m-auto"
                  src={other}
                />
                <div className="absolute inset-0 flex items-end pl-1 justify-between">
                  <div className="flex flex-col text-gray-100   p-1">
                    <p className="text-white text-start text-xs">Leon Maa</p>
                    <p className="text-sm text-gray-300 text-start"> CFO</p>
                  </div>
                  <CiLinkedin className="text-5xl text-gray-300 mr-2" />
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <img
                  className="h-auto max-w-full rounded-lg m-auto"
                  src={elemam}
                />
                <div className="absolute inset-0 flex items-end pl-1 justify-between">
                  <div className="flex flex-col text-gray-100   p-1">
                    <p className="text-white text-start text-xs">Ziad Al-emam</p>
                    <p className="text-sm text-gray-300 text-start">
                      CMO & Co-Founder
                    </p>
                  </div>
                  <CiLinkedin className="text-5xl text-gray-300 mr-2" />
                </div>
              </div>
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg m-auto"
                src={elemam}
              />
            </div>
          </div>
        </section>
        {/*end  Leders Section */}

        {/*start  leading providers Section */}

        <section className="leading mt-2 py-1 ">
          <div className="pb-1 text-center">
            <h2 className="sm:text-lg text-sm mb-1 py-5 sm:w-full m-auto ">
              <span className="">{trans("Backed by")}</span>

              <strong className="">
                {" "}
                {trans(" industry leading providers.")}
              </strong>
            </h2>

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
          </div>
        </section>
        {/*end  leading providers Section */}
      </div>
    </div>
  );
}
