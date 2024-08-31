import { trans } from "@mongez/localization";
import img3 from "assets/images/dack2.svg";
import img1 from "assets/images/firstimg.jpeg";
import img4 from "assets/images/leon.svg";
import img2 from "assets/images/second.jpeg";
import React from "react";
import Slider from "react-slick";
import "./directors.css";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  direction: "next" | "prev";
}

const images = [
  { src: img1, alt: "Image 1", name: "Haytham Al Emam" },
  { src: img2, alt: "Image 2", name: "Martin Ma" },
  { src: img3, alt: "Image 3", name: "Dack Wei" },
  { src: img4, alt: "Image 4", name: "Leon Maa" },
];

// Reusable Arrow Component
const CustomArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
  direction,
}) => {
  const rotateAngle = direction === "next" ? "45deg" : "225deg";
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
        transform: `rotate(${rotateAngle})`,
        cursor: "pointer",
      }}
      onClick={onClick}
      aria-label={direction === "next" ? "Next slide" : "Previous slide"}
    />
  );
};

// Slider settings configuration
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  waitForAnimate: false,
  nextArrow: <CustomArrow direction="next" />,
  prevArrow: <CustomArrow direction="prev" />,
};

const Directors: React.FC = () => {
  return (
    <section className="mt-3 py-14 border-t border-gray-200 w-4/5 mx-auto">
      <div className="p-5 text-center">
        <h2 className="md:text-5xl text-xl font-semibold mb-3">
          {trans("board")}
        </h2>
        <p className="md:mb-8 mb-2 md:text-base text-xs text-gray-400">
          Alohadot is backed by top leaders from around the world.
        </p>
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={image.src}
                className="rounded-xl w-80 h-80 mb-4 mx-auto"
                alt={image.alt}
              />
              {image.name && (
                <div className="text-gray-700 text-center">
                  <h6 className="text-gray-900 font-semibold">
                    {trans(image.name)}
                  </h6>
                  <span className="text-gray-600">{trans("Ceo")}</span>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Directors;
