import React from "react";
import PropertyRentCard from "./PropertyRentCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



 const homerent = [
    {
     id: "0",
     img_url: " /image/1.jpg",
     req:"FOR RENT", 
     location:"Belmonts Gardens,Chicago",
     locationicon:"IoLocation",
     cameraicon:"IoCameraSharp",
     videoicon:"MdLocalMovies",
     price:"$34,900",
     title: "New Apartment Nice View",
     para: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood", 
       rom: "Bedrooms",
      roomicon: "MdBed",
      rom1: "Bedrooms",
      rom1icon: "FaBath",
      square: "square Ft",
      squareicon: "BsTextarea",
      img_url1: " /image/t.jpg",
      name:"Taswar Ali",
      profetion:"Estate Agent",
      icon1:"BsArrowsAngleContract",
      icon2:"IoHeartOutline",
      icon3:"IoIosAddCircleOutline"
      
    },
    {
     id: "1",
     img_url: " /image/2.jpg",
     req:"FOR RENT", 
     location:"Belmonts Gardens,Chicago",
     locationicon:"IoLocation",
     cameraicon:"IoCameraSharp",
     videoicon:"MdLocalMovies",
     price:"$34,900",
     title: "Modern Apartments",
     para: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood", 
       rom: "Bedrooms",
      roomicon: "MdBed",
      rom1: "Bedrooms",
      rom1icon: "FaBath",
      square: "square Ft",
      squareicon: "BsTextarea",
      img_url1: " /image/t.jpg",
      name:"Taswar Ali",
      profetion:"Estate Agent",
      icon1:"BsArrowsAngleContract",
      icon2:"IoHeartOutline",
      icon3:"IoIosAddCircleOutline"  
    },
    {
     id: "2",
     img_url: " /image/3.jpg",
     req:"FOR RENT", 
     location:"Belmonts Gardens,Chicago",
     locationicon:"IoLocation",
     cameraicon:"IoCameraSharp",
     videoicon:"MdLocalMovies",
     price:"$34,900",
     title: "Comfortable Apartment",
     para: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood", 
       rom: "Bedrooms",
      roomicon: "MdBed",
      rom1: "Bedrooms",
      rom1icon: "FaBath",
      square: "square Ft",
      squareicon: "BsTextarea",
      img_url1: " /image/t.jpg",
      name:"Taswar Ali",
      profetion:"Estate Agent",
      icon1:"BsArrowsAngleContract",
      icon2:"IoHeartOutline",
      icon3:"IoIosAddCircleOutline"     
    },
    {
     id: "3",
     img_url: " /image/4.jpg",
     req:"FOR RENT", 
     location:"Belmonts Gardens,Chicago",
     locationicon:"IoLocation",
     cameraicon:"IoCameraSharp",
     videoicon:"MdLocalMovies",
     price:"$34,900",
     title: "Luxury villa in Rago Park ",
     para: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood", 
       rom: "Bedrooms",
      roomicon: "MdBed",
      rom1: "Bedrooms",
      rom1icon: "FaBath",
      square: "square Ft",
      squareicon: "BsTextarea",
      img_url1: " /image/t.jpg",
      name:"Taswar Ali",
      profetion:"Estate Agent",
      icon1:"BsArrowsAngleContract",
      icon2:"IoHeartOutline",
      icon3:"IoIosAddCircleOutline"
    },
    {
     id: "4",
     img_url: " /image/5.jpg",
     req:"FOR RENT", 
     location:"Belmonts Gardens,Chicago",
     locationicon:"IoLocation",
     cameraicon:"IoCameraSharp",
     videoicon:"MdLocalMovies",
     price:"$34,900",
     title: "Beautiful Flat in Manhattan",
     para: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood", 
       rom: "Bedrooms",
      roomicon: "MdBed",
      rom1: "Bedrooms",
      rom1icon: "FaBath",
      square: "square Ft",
      squareicon: "BsTextarea",
      img_url1: " /image/t.jpg",
      name:"Taswar Ali",
      profetion:"Estate Agent",
      icon1:"BsArrowsAngleContract",
      icon2:"IoHeartOutline",
      icon3:"IoIosAddCircleOutline"
   }
  ]

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

const PropertyRentMap = ({ active, setActive}) => {
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
          <h1 className="text-orange-600">
            Properties
          </h1>
        </div>
        <h1 className="mt-8 text-5xl font-bold text-gray-800">
        Featured Listings
        </h1>
      </div>

      {/* Slider Section */}
      <Slider {...settings}>
        {homerent.map((curElem) => (
          <div key={curElem.id} className="!flex !justify-center ">
            <PropertyRentCard data={curElem} active={active} setActive={setActive}/>
          </div>          
        ))}
      </Slider>
    </div>
  );
};

export default PropertyRentMap;
