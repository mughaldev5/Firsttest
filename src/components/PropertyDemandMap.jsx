import React, { useState, useRef, useEffect } from "react";
import { homedemand } from './PropertyRentMap';
import PropertyDemandCard from "./PropertyDemandCard";
import {  FaArrowLeft, FaArrowRight} from "react-icons/fa6";



const PropertyDemandMap = ({ active, setActive }) => {
  const total = homedemand.length;
  const [index, setIndex] = useState(total); // start from cloned middle set
  const visibleCards = 3;
  const gap = 20;
  const cardWidth = 372;
  const sliderRef = useRef(null);
  const transitionTime = 500;

  // Duplicate array twice for infinite illusion
  const cards = [...homedemand, ...homedemand, ...homedemand];

  const handleNext = () => {
    setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIndex((prev) => prev - 1);
  };

  // 🔁 Infinite Loop Logic (No Reverse Jump)
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.style.transition = `transform ${transitionTime}ms ease-in-out`;

    // Right end reached
    if (index >= total * 2) {
      setTimeout(() => {
        slider.style.transition = "none";
        setIndex(total);
      }, transitionTime);
    }

    // Left end reached
    if (index <= total - 1) {
      setTimeout(() => {
        slider.style.transition = "none";
        setIndex(total + (total - 1));
      }, transitionTime);
    }
  }, [index, total]);
  const visibleWidth = visibleCards * cardWidth + (visibleCards - 1) * gap

  return (
    <div className=" relative h-dvh w-full bg-white mt-40 overflow-hidden ">
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
      <div className="relative mt-10 flex items-center justify-center group">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute left-38 top-1/2 -translate-y-1/2 
               hover:bg-orange-600 hover:text-white text-xl w-12 h-12 rounded-full flex items-center justify-center bg-transparent border-1 border-gray-400 hover:border-none
               opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <FaArrowLeft />
        </button>

        {/* Cards Container */}
        <div className=" relative w-[1200px] overflow-hidden"  style={{ width: `${visibleWidth}px` }}>
        <div className="absolute inset-0 pointer-events-none z-0 bg-transparent"></div>
          <div
            ref={sliderRef}
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              gap: `${gap}px`,
              transform: `translateX(-${
                index * (cardWidth + gap) - (visibleWidth - cardWidth) / 2
              }px)`,
              width: `${cards.length * (cardWidth + gap)}px`,
            }}
          >
            {cards.map((card ) => (
              <div  key={card.id} style={{ minWidth: `${cardWidth - 0}px` }}>
                <PropertyDemandCard
                  data={card}
                  active={active}
                  setActive={setActive}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-38 top-1/2 -translate-y-1/2 
               hover:bg-orange-600 hover:text-white text-xl w-12 h-12 rounded-full flex items-center justify-center bg-transparent border-1 border-gray-400 hover:border-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PropertyDemandMap;
