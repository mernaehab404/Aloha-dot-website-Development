/* eslint-disable react/prop-types */
import { useState } from "react";

const ImageWithShimmer = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative">
      {/* Image */}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ease-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
      {/* Shimmer effect */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse">
          <div className="h-full w-full bg-gradient-to-r from-gray-200 to-gray-300"></div>
        </div>
      )}
    </div>
  );
};

export default ImageWithShimmer;
