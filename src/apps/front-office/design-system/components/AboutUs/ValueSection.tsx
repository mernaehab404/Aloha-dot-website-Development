import React, { useState } from 'react';
import first from "../../../../../shared/assets/images/firstvalue.jpg";
import second from "../../../../../shared/assets/images/secondvalue.jfif";
import third from "../../../../../shared/assets/images/thirdvalue.jfif";

export default function ValueSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const images = [
    { src: first, title: "Innovation", description: "Some description here" },
    { src: second, title: "Teamwork", description: "Another description here" },
    {
      src: third,
      title: "Creativity",
      description: "Additional description here",
    },
    { src: first, title: "Innovation", description: "Some description here" },
  ];

  const handleClick = (index) => {
    if (index !== expandedIndex) {
      setExpandedIndex(index);
    }
  };

  return (
    <div>
      <div className="my-16">
        <p className="text-2xl my-5">Alohadot Values</p>
        <div className="flex flex-col md:flex-row overflow-hidden space-y-2 md:space-y-0 md:space-x-2 ">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`relative cursor-pointer overflow-hidden transition-[flex] duration-200 ease-linear rounded-xl ${
                expandedIndex === index ? "flex-[5]" : "flex-1"
              } h-40 md:h-auto`}>
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              {expandedIndex === index && (
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
                  <h2 className="text-xl font-bold">{image.title}</h2>
                  <p>{image.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
