import React from 'react'
import AgentReview from './AgentReview';

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
  }
];

const AgentReviewMap = () => {
  return (
    <div className='relative w-full h-full bg-gray-200 '>
    <div className='text-center mb-12'>
      <div className='flex items-center justify-center h-9 w-38 mx-auto bg-orange-100 rounded-2xl '>
        <h1 className='text-orange-600'>Our Testimonial</h1>
      </div>
        <h1  className='mt-8 text-5xl font-bold text-gray-800'>Clients feedback</h1>
    </div>
    <div className='flex justify-center gap-4'>

      {
        feedbackcard.map((item) =>(
          <AgentReview key={item.id} data={item}/>
        )
        )};
    </div>
    </div>
  )
}

export default AgentReviewMap
