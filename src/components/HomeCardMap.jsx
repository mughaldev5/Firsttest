import React from 'react'
import HomeCard from './HomeCard'
 const home= [ 
    {
      id: 0,
      title: "Real Estate Agency",
      dream: "Find Your Draem House By Us",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
      img_url: "http://localhost:5173/image/logo8.png"
    }
]
const HomeCardMap = () => {
  return (
    <div className='relative w-full min-h-screen'>
      {
        home.map((item) =>(
            <HomeCard key={item.id} data={item}/>
        ))
      }
    </div>
  )
}

export default HomeCardMap
