import React, { useState } from 'react';
import Layout from '../wrapper';
import HomeData from '../api/HomeData.json';
import HomeCard from '../components/HomeCard';
import MenuDropdown from '../components/MenuDropdown';
import AboutDetail from '../components/AboutDetail';
import ProjectStatus from '../components/ProjectStatus';
import HomeDetails from '../components/Homedetails';
import ServiceCard from '../components/ServiceCard';
import PropertyRentMap from '../components/PropertyRentMap';
import Homepage from '../components/Homepage';
import FacilityCardsMap from '../components/FacilityCardsMap';
import AgentReviewMap from '../components/AgentReviewMap';
import PropertyDemandMap from '../components/PropertyDemandMap';
const Home = () => {
    const [active, setActive] = useState(null);

    return (
        <div>
            <Layout>
                <div className=' '>
                    {HomeData.home.map((item) =>
                        <HomeCard key={item.id} data={item} />
                    )};
                </div>
                <MenuDropdown />
                <div className='h-lvh w-full'>
                    {
                        HomeData.about.map((curElem) => (
                            <AboutDetail key={curElem.id} data={curElem} />
                        ))
                    }
                </div>
                <ProjectStatus />
                <div className='h-lvh w-full'>
                    {
                        HomeData.homeabout.map((curElem) => (
                            <HomeDetails key={curElem.id} data={curElem} />
                        ))
                    }
                </div>

                <div className='relative flex  justify-center h-lvh w-full bg-gray-100 overflow-hidden'>
                    <div className='absolute flex flex-col items-center justify-center mt-24  overflow-hidden'>
                        <div className='flex justify-center items-center bg-orange-100 h-8 w-32 overflow-hidden rounded-2xl'>
                            <h1 className='text-orange-600 items-center'>Our Servicr</h1>
                        </div>
                        <div className='mt-8 overflow-hidden'>
                            <h1 className='text-5xl font-bold text-gray-800 overflow-hidden'>
                                Our Main Focus
                            </h1>
                        </div>
                    </div>
                    <div className='flex  mt-68 space-x-9 overflow-hidden'>
                        {
                            HomeData.service.map((curElem) => (
                                <ServiceCard key={curElem.id} data={curElem} active={active} setActive={setActive} />
                            ))
                        }
                    </div>
                </div>
                <PropertyRentMap active={active} setActive={setActive}/>
                <div>
                    <Homepage/>
                </div>
                <div>
                <FacilityCardsMap/>
                </div>
                <div>
                    <AgentReviewMap/>
                </div>
                <div>
                    <PropertyDemandMap  active={active} setActive={setActive}/>
                </div>
            </Layout>
        </div>
    );
};




export default Home