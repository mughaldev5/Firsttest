import React from 'react'
import AboutDetail from './AboutDetail'
const about= [
    {
      id: "1",
      img_url: " /image/ab.jpg",
      title: "The Leading Real Estate Rental Marketplace",
      para: "Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services",
      design: "Smart Home design",
      sence: "Beautiful sence Around",
      style: "Exceptional Lifestyle",
      security: "complete 24/7 Security",
      para1: "Enimad minim veniam quis nostrud exercitation llamco laboris. Lorem ipsum dolor sit amet"
    }
  ]
const AboutdetailMap = () => {
  return (
    <div className='h-lvh w-full'>
      {
        about.map((curElem) =>(
            <AboutDetail key={curElem.id} data={curElem}/>
        ))
      }
    </div>
  )
}

export default AboutdetailMap
