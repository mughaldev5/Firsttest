import React from 'react'
import AgentReview from './AgentReview';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const feedbackcard = [
   {   
     id:"0",
     icon:"RiDoubleQuotesL", 
     para:"Precious ipsum dolor sit amet consecte-tur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna ali-qua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte",
     img_url: "/image/t.jpg",
     name:"Taswar Ali",
     agent:"SELLING AGENT",
  },
   {   
     id:"1",
     icon:"RiDoubleQuotesL", 
     para:"Precious ipsum dolor sit amet consecte-tur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna ali-qua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte",
     img_url: "/image/t.jpg",
     name:"Taswar Ali",
     agent:"SELLING AGENT",
  },
   {   
     id:"2",
     icon:"RiDoubleQuotesL", 
     para:"Precious ipsum dolor sit amet consecte-tur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna ali-qua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte",
     img_url: "/image/t.jpg",
     name:"Taswar Ali",
     agent:"SELLING AGENT",
  },
  {
     id:"3",
     icon:"RiDoubleQuotesL", 
     para:"Precious ipsum dolor sit amet consecte-tur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna ali-qua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte",
     img_url: "/image/t.jpg",
     name:"Taswar Ali",
     agent:"SELLING AGENT",
  }
];

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} opacity-0 group-hover:opacity-100 transition-opacity duration-300 !flex !items-center !justify-center !bg-orange-600 !rounded-full !w-10 !h-10 !z-20 -!right-15`}
      onClick={onClick}
    >
      
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} opacity-0 group-hover:opacity-100 transition-opacity duration-300 !flex !items-center !justify-center !bg-orange-600 !rounded-full !w-10 !h-10 !z-20 -!leftt-15`}
      onClick={onClick}
    >
      
    </div>
  );
}

const AgentReviewMap = () => {

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: true,
  dots: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        dots: true, 
        arrows: false
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
    <div className='relative w-full h-full bg-gray-200 '>
    <div className='text-center pt-20'>
      <div className='flex items-center justify-center h-9 w-38 mx-auto bg-orange-100 rounded-2xl '>
        <h1 className='text-orange-600'>Our Testimonial</h1>
      </div>
        <h1  className='mt-8 text-5xl font-bold text-gray-800'>Clients feedback</h1>
    </div>
    <div className='testimonial-slider relative z-20 translate-y-36 group 2xl:w-7xl xl:w-7xl lg:w-5xl mx-auto' >
<Slider {...settings}>      {
        feedbackcard.map((item) =>(
          <AgentReview key={item.id} data={item}/>
        )
        )}
        </Slider>
    </div>
    </div>
  )
} ;

export default AgentReviewMap ;
