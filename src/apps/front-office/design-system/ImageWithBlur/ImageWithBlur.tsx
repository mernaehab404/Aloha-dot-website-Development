/* eslint-disable react/prop-types */
import { useState } from "react";

const ImageWithBlur = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative">
      {/* Image with blur until loaded */}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-all ease-out ${
          isLoaded ? "blur-0" : "blur-md"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default ImageWithBlur;
