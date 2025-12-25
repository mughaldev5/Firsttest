import React, { useState, useRef, useEffect } from "react";
import { homedemand } from './PropertyRentMap';
import PropertyDemandCard from "./PropertyDemandCard";
import {  FaArrowLeft, FaArrowRight} from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} opacity-0 group-hover:opacity-100 transition-opacity duration-300 !flex !items-center !justify-center !bg-orange-600 !rounded-full !w-10 !h-10 !z-20 !right-2`}
      onClick={onClick}
    >
     <FaArrowRight/> 
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
      <FaArrowLeft/>
    </div>
  );
}
const PropertyDemandMap = ({ active, setActive }) => {
  var settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        dots: true,
        arrows:false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        dots: true,
        arrows:false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        dots: true, 
        arrows: false
      }
    }
  ]
};

  return (
    <div className=" relative pb-25 w-full bg-white mt-40 overflow-hidden ">
      {/* Heading */}
      <div className="text-center mt-20">
        <div className="mx-auto bg-orange-100 h-8 w-32 rounded-2xl flex items-center justify-center">
          <h1 className="text-orange-600">News & Blogs</h1>
        </div>
        <h1 className="mt-8 text-5xl font-bold text-gray-800">
          Latest News Feeds
        </h1>
      </div>

      {/* Slider */}
      <div className="relative mt-10 w-full max-w-7xl group mx-auto">
  <Slider {...settings}>
    {homedemand.map((card) => (
      <div key={card.id} className="px-3">
        <PropertyDemandCard
          data={card}
          active={active}
          setActive={setActive}
        />
      </div>
    ))}
  </Slider>
</div>

        </div>

        
     
  );
};

export default PropertyDemandMap;
