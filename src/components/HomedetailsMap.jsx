import React from 'react'
import HomeDetails from './Homedetails'
 
   const homeabout= [
    {
      id: 2,
      title: "Tody Sells properties",
      para: "Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all formation",
      live: "Live Music Cocerts at Luviana",
      boat: "Our SecretIsland Boat Tour is Just for You",
      stylemusic: "Live Music Cocerts at Luviana",
      music: "Live Music Cocerts at Luviana",
      rom: "Bedrooms",
      rom1: "Bedrooms",
      parking: "Car parking",
      square: "square Ft",
      img_url: " /image/9.jpg",
      img_url1: " /image/lo8.jpg",
      img_url2: " /image/lo9.jpg",
      img_url3: " /image/lo10.jpg",
      img_url4: " /image/lo5.jpg",
      img_url5: " /image/lo11.jpg"
    }
  ]
const HomedetailsMap = () => {
  return (
    <div className='relative w-full py-10'>
      {
        homeabout.map((curElem ) =>(
          <HomeDetails key={curElem.id} data={curElem}/>
        ))
      }
    </div>
  )
}

export default HomedetailsMap
