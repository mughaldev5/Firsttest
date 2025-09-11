import React from "react";
import Slider from "react-slick";
import HomeData from "../api/HomeData.json";
import PropertyRentCard from "./PropertyRentCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrows
function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} opacity-0 group-hover:opacity-100 transition-opacity duration-300 !flex !items-center !justify-center !bg-orange-600 !rounded-full !w-10 !h-10 !z-20 !right-2`}
      onClick={onClick}
    >
      
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} opacity-0 group-hover:opacity-100 transition-opacity duration-300 !flex !items-center !justify-center !bg-orange-600 !rounded-full !w-10 !h-10 !z-20 !left-2`}
      onClick={onClick}
    >
      
    </div>
  );
}

const PropertyRentMap = ({ active, setActive }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // ek row me 3 cards
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full bg-white py-16 group relative">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <div className="mx-auto bg-orange-100 h-8 w-32 rounded-2xl flex items-center justify-center">
          <h1 className="text-orange-600">Properties</h1>
        </div>
        <h1 className="mt-8 text-5xl font-bold text-gray-800">
          Featured Listings
        </h1>
      </div>

      {/* Slider Section */}
      <Slider {...settings}>
        {HomeData.homerent.map((curElem) => (
          <div key={curElem.id} className="!flex !justify-center">
            <PropertyRentCard data={curElem} active={active} setActive={setActive}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PropertyRentMap;
