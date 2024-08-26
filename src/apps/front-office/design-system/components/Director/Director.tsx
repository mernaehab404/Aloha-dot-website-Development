import { trans } from "@mongez/localization";
import React from "react";
import Slider from "react-slick";
import './directors.css'
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import img3 from "../../../../../shared/assets/images/dack2.svg";
import img1 from "../../../../../shared/assets/images/firstimg.jpeg";
import img4 from "../../../../../shared/assets/images/leon.svg";
import img2 from "../../../../../shared/assets/images/second.jpeg";

const images = [
  { src: img1, alt: "Image 1",name:"Haytham Al Emam" },
  { src: img2, alt: "Image 2",name:"" },
  { src: img3, alt: "Image 3" },
  { src: img4, alt: "Image 4" },
];
function CustomNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        width: "20px",
        height: "20px",
        borderTop: "2px solid gray",
        borderRight: "2px solid gray",
        transform: "rotate(45deg)",
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
        display: "block",
        width: "20px",
        height: "20px",
        borderTop: "2px solid gray",
        borderRight: "2px solid gray",
        transform: "rotate(225deg)", }}
      onClick={onClick}
    />
  );
}
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  waitForAnimate: false,
  nextArrow:<CustomNextArrow/>,
  prevArrow:<SamplePrevArrow/>,
  arrows: true, // Default arrows enabled
};

const Directors: React.FC = () => {
  return (
    <section className="mt-3 py-20 border-t border-gray-200 ">
      <div className="p-5 text-center w-1/2 m-auto">
        <h2 className="text-5xl font-semibold mb-8 leading-4">{trans("board")}</h2>
        <p className="mb-8 text-gray-400">
          Alohadot is backed by top leaders from around the world.
        </p>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={image.src}
                className="rounded-xl w-80 h-80 mb-4 mx-auto"
                alt={image.alt}
              />
              <div className="text-gray-700">
                <h6 className="text-gray-900 font-semibold">
                  {/* {trans({image.name})} */}
                </h6>
                <span className="text-gray-600  ">{trans("Ceo")}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Directors;
