import React from "react";
import PropertyRentCard from "./PropertyRentCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



 export const homedemand = [
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
      icon3:"IoIosAddCircleOutline",
      admin: "Admin",
      usericon: "FaRegUser",
      fillicon: "BsFillTagFill",
      fillheading: "Room",
      paratitle: "10 Brilliant Ways To Decorate Your Home",
      calendericon: "FaCalendarAlt",
      date: "June 24, 2024",
      read: "READ MORE",
      
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
     icon3:"IoIosAddCircleOutline" ,
     admin: "Admin",
     usericon: "FaRegUser",
     fillicon: "BsFillTagFill",
     fillheading: "Interior",
     paratitle: "The Most Inspiring Interior Design Of 2024",
     calendericon: "FaCalendarAlt",
     date: "June 21, 2024",
     read: "READ MORE", 
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
     icon3:"IoIosAddCircleOutline" ,
     admin: "Admin",
     usericon: "FaRegUser",
     fillicon: "BsFillTagFill",
     fillheading: "Estate",
     paratitle: "Recent Commercial Real Estate Transactions",
     calendericon: "FaCalendarAlt",
     date: "June 22, 2024",
     read: "READ MORE",    
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
     icon3:"IoIosAddCircleOutline",
     admin: "Admin",
     usericon: "FaRegUser",
     fillicon: "BsFillTagFill",
     fillheading: "Room",
     paratitle: "Renovating a Living Room? Experts Share Their Secret",
     calendericon: "FaCalendarAlt",
     date: "June 24, 2024",
     read: "READ MORE",
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
      icon3:"IoIosAddCircleOutline", 
      admin: "Admin",
      usericon: "FaRegUser",
      fillicon: "BsFillTagFill",
      fillheading: "Trends",
      paratitle: "7 Home Trends That Will Shape Your House in 2024",
      calendericon: "FaCalendarAlt",
      date: "June 24, 2024",
      read: "READ MORE"
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
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
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
        {homedemand.map((curElem) => (
          <div key={curElem.id} className="!flex !justify-center ">
            <PropertyRentCard data={curElem} active={active} setActive={setActive}/>
          </div>          
        ))}
      </Slider>
    </div>
  );
};

export default PropertyRentMap;
