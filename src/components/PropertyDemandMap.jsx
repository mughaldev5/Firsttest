import React from 'react'
import PropertyDemandCard from './PropertyDemandCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const homedemand = [
    {
     id:"0",
     img_url:"/image/1.jpg",
     admin:"Admin",
     usericon:"FaRegUser",
     fillicon:"BsFillTagFill",
     fillheading:"Room",
     paratitle:"10 Brilliant Ways To Decorate Youre Home",
     calendericon:"FaCalendarAlt",
     date:"june 24, 2024", 
     read:"READ MORE" 
    },
    {
     id: "1",
     img_url:"/image/2.jpg",
     admin:"Admin",
     usericon:"FaRegUser",
     fillicon:"BsFillTagFill",
     fillheading:"Interior",
     paratitle:"The Most Inspiring Interior Design Of 2024",
     calendericon:"FaCalendarAlt",
     date:"june 21, 2024", 
     read:"READ MORE" 
    },
    {
     id:"2",
     img_url:"/image/3.jpg",
     admin:"Admin",
     usericon:"FaRegUser",
     fillicon:"BsFillTagFill",
     fillheading:"Estate",
     paratitle:"Recent Commercial Real Estate Transactions",
     calendericon:"FaCalendarAlt",
     date:"june 22, 2024", 
     read:"READ MORE"  
    },
    {
     id:"3",
     img_url:"/image/4.jpg",
     admin:"Admin",
     usericon:"FaRegUser",
     fillicon:"BsFillTagFill",
     fillheading:"Room",
     paratitle:"Renovating a Living Room? Experts Share Their Secrete",
     calendericon:"FaCalendarAlt",
     date:"june 24, 2024", 
     read:"READ MORE" 
    },
    {
     id:"4",
     img_url:"/image/5.jpg",
     admin:"Admin",
     usericon:"FaRegUser",
     fillicon:"BsFillTagFill",
     fillheading:"Trends",
     paratitle:"7 home trends that will shape youre house in 2024",
     calendericon:"FaCalendarAlt",
     date:"june 24, 2024", 
     read:"READ MORE"
    }
]

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
const PropertyDemandMap = ({ active, setActive}) => {

   var settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 3, // ek row me 3 cards
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
   
  };
  return (
    <div className='relative w-full bg-white overflow-hidden'>
    <div className="text-center mt-20">
        <div className="mx-auto bg-orange-100 h-8 w-32 rounded-2xl flex items-center justify-center">
          <h1 className="text-orange-600">
            News & Blogs
          </h1>
        </div>
        <h1 className="mt-8 text-5xl font-bold text-gray-800">
         Leatest News Feeds
        </h1>
      </div>
      <Slider {...settings}>
      
      {
        homedemand.map((curElem) =>(
      <div className='relative flex items-center justify-center mt-15' key={curElem.id}>
        <PropertyDemandCard  data={curElem}  active={active} setActive={setActive}/>
      </div> 
        ))}
        
        </Slider>
    </div>
  )
}

export default PropertyDemandMap
