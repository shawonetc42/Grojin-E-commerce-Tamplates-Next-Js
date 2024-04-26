import React from "react";
import SwiperComponent from "../../components/Slider/SwiperComponent";

const slides = [
  { imageUrl: "/slide.png" },
  { imageUrl: "/slide5.png" },
  { imageUrl: "/slide.png" },
];

const Slider = () => {
  return (
    <div className="container mx-auto border-b">
      {/* Adjust margin for smaller screens */}
      <div className="mx-4 md:mx-0">
        {/* Adjust margin for smaller screens */}
        <div className="mx-auto md:ml-64 md:mx-0">
          <SwiperComponent slides={slides} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
