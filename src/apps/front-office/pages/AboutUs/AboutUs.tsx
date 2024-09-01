import { trans } from "@mongez/localization";
import about from "assets/images/about.png";
import img2 from "assets/images/EtisalatLogo.svg";
import img1 from "assets/images/fawryLogo.svg";
import flex from "assets/images/flextock.svg";
import history from "assets/images/history2.jfif";
import inspire from "assets/images/inspire2.jfif";
import img3 from "assets/images/paymob.svg";
import paytabs from "assets/images/paytabs.svg";
import img4 from "assets/images/vodafone.svg";
import we from "assets/images/we.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
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
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" bg-slate-50">
      <div className="w-11/12 md:w-4/5 m-auto">
        <div className="py-8 md:w-11/12   m-auto ">
          <p className="md:text-3xl text-xl md:leading-10 leading-7 pb-2  md:w-1/2  m-auto text-center">
            {trans("alohadotIs")}
          </p>
          <p className="md:text-sm text-xs text-center">
            {trans("DiscoverBelow")}
          </p>
        </div>
        <div
          className="relative rounded-3xl border-gray-300  border bg-white flex justify-center items-center
       xl:h-[600px] lg:h-[520px] md:h-[400px] sm:h-[340px] h-52">
          <img
            src={about}
            className="absolute top-0 sm:scale-0 scale-125 "
            alt=""
          />
        </div>
        <div className="ml-3 md:my-20 my-14">
          <p className="text-2xl my-5">{trans("AboutAlohadot")}</p>
          <div
            className="leading-7"
            dangerouslySetInnerHTML={{
              __html: trans("companyDescription") as string,
            }}
          />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-14">
          <div>
            <div className="relative">
              <img src={inspire} className=" h-72 w-full rounded-3xl" alt="" />
              <div className="absolute inset-0 bg-black/50  rounded-3xl flex items-center justify-center">
                <div className="text-white  text-4xl">
                  {trans("inspiringVision")}
                </div>
              </div>
            </div>
            <div
              className="mt-8"
              dangerouslySetInnerHTML={{
                __html: trans("OurVision") as string,
              }}
            />
          </div>
          <div>
            <div className="relative">
              <img src={history} className=" h-72 w-full rounded-3xl" alt="" />
              <div className="absolute inset-0 bg-black/50  rounded-3xl flex items-center justify-center">
                <div className="text-white text-center text-4xl">
                  {" "}
                  {trans("HistoryChangingMission")}
                </div>
              </div>
            </div>

            <div
              className="mt-8"
              dangerouslySetInnerHTML={{
                __html: trans("OurMission") as string,
              }}
            />
          </div>
        </div>
        {/* start values section */}
        <ValueSection />
        {/* end values section */}
        {/*start  martin Section */}
        <section className="martin my-10 border pt-20 py-11 px-5 border-gray-300 bg-white rounded-2xl">
          <div
            className="md:text-2xl text-base md:text-center text-start w-11/12 md:w-3/4 m-auto mb-8 leading-9"
            dangerouslySetInnerHTML={{
              __html: trans("alohadotAims") as string,
            }}
          />
          <div className="text-end md:text-base text-sm">
            <p className="font-bold">{trans("MartinMa")}</p>
            <p>{trans("CoFounderAndCTO")}</p>
          </div>
        </section>
        {/*end  martin Section */}

        {/*start  Leders Section */}
        {/* <section className="leader my-16 text-center">
          <div className="my-10">
            <h2 className="sm:text-2xl text-lg w-2/3  sm:w-full m-auto ">
              <span >{trans("Meet our team of")}</span>

              <strong > {trans(" exceptional leaders.")}</strong>
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
                    <p className="text-white text-start text-xs">
                      Ziad Al-emam
                    </p>
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
        </section> */}
        {/*end  Leders Section */}
      </div>
      {/*start  leading providers Section */}

      <section className="leading mt-2 py-1 ">
        <div className="pb-1 text-center">
          <h2 className="sm:text-lg text-sm mb-1 py-5 sm:w-full m-auto ">
            <span>{trans("BackedBy")}</span>

            <strong> {trans("industryLeadingProviders")}</strong>
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
  );
}
