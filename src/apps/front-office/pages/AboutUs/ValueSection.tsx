import { trans } from "@mongez/localization";
import first from "assets/images/firstvalue.jpg";
import second from "assets/images/secondvalue.jfif";
import third from "assets/images/thirdvalue.jfif";
import { useState } from "react";

export default function ValueSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const images = [
    {
      src: first,
      title: trans("Innovation"),
      description: trans("InnovationDesc"),
    },
    {
      src: second,
      title: trans("Teamwork"),
      description: trans("TeamworkDesc"),
    },
    {
      src: third,
      title: "Creativity",
      description: "Additional description here",
    },
    { src: first, title: "Innovation", description: "Some description here" },
  ];

  const handleClick = index => {
    if (index !== expandedIndex) {
      setExpandedIndex(index);
    }
  };

  return (
    <div>
      <div className="my-16">
        <p className="text-2xl my-5">{trans("AlohadotValues")}</p>
        <div className="flex flex-col sm:flex-row overflow-hidden gap-4  transition-all  sm:duration-700 ">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`relative cursor-pointer overflow-hidden rounded-xl   transition-all  sm:duration-700  ease-linear ${
                expandedIndex === index
                  ? "w-full h-60 sm:w-full sm:h-[380px] lg:h-[480px]"
                  : "w-full h-20 sm:w-1/6 sm:h-[380px] lg:h-[480px]"
              }`}>
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />

              <div
                className={`absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white transition-opacity duration-500 ease-in-out ${
                  expandedIndex === index ? "opacity-100" : "opacity-0"
                }`}>
                <h2 className="text-3xl font-bold ">{image.title}</h2>
                <p className="text-center">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
