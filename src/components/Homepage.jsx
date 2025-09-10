import React, { useState, useRef, useEffect } from 'react'


const tabData = [
  {
    id: 0,
    title: 'The Studio',
    desc: 'Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.',
    TotalArea: '2800 sq ft',
    Bedroom: '150 Sq. Ft',
    Bathroom: '45 Sq. Ft',
    Balcony: 'Allowed',
    Lounge: '650 Sq. Ft',
  },
  {
    id: 1,
    title: 'Deluxe Portion',
    desc: 'Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.',
    TotalArea: '2800 sq ft',
    Bedroom: '150 Sq. Ft',
    Bathroom: '45 Sq. Ft',
    Balcony: 'Allowed',
    Lounge: '650 Sq. Ft',
  },
  {
    id: 2,
    title: 'Penthouse',
    desc: 'Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.',
    TotalArea: '2800 sq ft',
    Bedroom: '150 Sq. Ft',
    Bathroom: '45 Sq. Ft',
    Balcony: 'Allowed',
    Lounge: '650 Sq. Ft',
  },
  {
    id: 3,
    title: 'Top Garden',
    desc: 'Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.',
    TotalArea: '2800 sq ft',
    Bedroom: '150 Sq. Ft',
    Bathroom: '45 Sq. Ft',
    Balcony: 'Allowed',
    Lounge: '650 Sq. Ft',
  },
  {
    id: 4,
    title: 'Double Height',
    desc: 'Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.',
    TotalArea: '2800 sq ft',
    Bedroom: '150 Sq. Ft',
    Bathroom: '45 Sq. Ft',
    Balcony: 'Allowed',
    Lounge: '650 Sq. Ft',
  }
]


const Card = ({ TotalArea, Bedroom, Bathroom, Balcony, Lounge }) => {
  return (
    <div className='flex flex-col mt-5 gap-3'>
      <div className='flex items-center gap-1'>
        <span>Total Area</span>
        <span>--------------------------------------------</span>
        <span>{TotalArea}</span>
      </div>
      <div className='flex items-center gap-1'>
        <span>Bedroom</span>
        <span>--------------------------------------------</span>
        <span>{Bedroom}</span>
      </div>
      <div className='flex items-center gap-1'>
        <span>Bathroom</span>
        <span>--------------------------------------------</span>
        <span>{Bathroom}t</span>
      </div>
      <div className='flex items-center gap-1'>
        <span>Belcony/Pets</span>
        <span>-----------------------------------------</span>
        <span>{Balcony}</span>
      </div>
      <div className='flex items-center gap-1'>
        <span>Lounge</span>
        <span>--------------------------------------------</span>
        <span>{Lounge}</span>
      </div>
    </div>
  )
}

const Homepage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef([]);

  // Store the width of each tab title
  const [tabWidths, setTabWidths] = useState([]);

  useEffect(() => {
    setTabWidths(tabRefs.current.map(ref => ref ? ref.offsetWidth : 0));
  }, []);

  return (
    <div className='relative flex flex-col h-auto w-full overflow-hidden mt-6 mb-10'>
      <div className='flex flex-col items-center justify-center mt-22  overflow-hidden'>
        <div className='flex justify-center items-center bg-orange-50 h-8 w-45 overflow-hidden rounded-2xl'>
          <h1 className='text-orange-600 items-center'>Apartment Sketch</h1>
        </div>
        <div className='mt-8 overflow-hidden'>
          <h1 className='text-5xl font-bold text-gray-800 overflow-hidden'>
            Apartments Plan
          </h1>
        </div>
      </div>
      <div className='flex justify-center  w-full mt-20 space-x-16 overflow-hidden'>
        {
          tabData.map((item, idx) => (
            <div className='flex flex-col items-center' key={item.id}>
              <span
                ref={el => tabRefs.current[idx] = el}
                className={`text-lg cursor-pointer ${item.id === activeTab ? 'text-[#ff5a3c]' : 'text-black'}`}
                onClick={() => setActiveTab(item.id)}
              >
                {item.title}
              </span>
              {
                activeTab === item.id && (
                  <div className='flex flex-row items-center gap-1'>
                    <div
                      className='h-1 rounded-lg bg-[#ff5a3c]'
                      style={{ width: tabWidths[idx] ? tabWidths[idx] / 2 : 36 }}
                    ></div>
                    <div className='w-1 h-1 rounded-full bg-[#ff5a3c]'></div>
                    <div
                      className='h-1 rounded-lg bg-[#ff5a3c]'
                      style={{ width: tabWidths[idx] ? tabWidths[idx] / 2 : 36 }}
                    ></div>
                  </div>
                )
              }
            </div>
          ))
        }
      </div>
      <div className='flex justify-between w-full px-14 mt-10'>
        <div className='bg-[#ff5a3c] h-full py-16 px-16 flex flex-col text-white w-1/2 rounded-sm'>
          <h2 className='text-2xl font-bold'>{tabData[activeTab].title}</h2>
          <p className='mt-4 text-lg'>{tabData[activeTab].desc}</p>
          <Card
            TotalArea={tabData[activeTab].TotalArea}
            Bedroom={tabData[activeTab].Bedroom}
            Bathroom={tabData[activeTab].Bathroom}
            Balcony={tabData[activeTab].Balcony}
            Lounge={tabData[activeTab].Lounge}
          />
        </div>
        <div className='flex items-center justify-center w-1/2'>
          <img src="/image/10.png" alt="apartment sketch" className='h-96 w-full' />
        </div>
      </div>

    </div>
  )
}

export default Homepage
