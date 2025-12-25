import React, { useState } from 'react';
import Layout from '../wrapper';
import HomeCardMap from '../components/HomeCardMap';
import MenuDropdown from '../components/MenuDropdown';
import AboutdetailMap from '../components/AboutdetailMap';
import ProjectStatus from '../components/ProjectStatus';
import HomedetailsMap from '../components/HomedetailsMap';
import PropertyRentMap from '../components/PropertyRentMap';
import Homepage from '../components/Homepage';
import FacilityCardsMap from '../components/FacilityCardsMap';
import AgentReviewMap from '../components/AgentReviewMap';
import PropertyDemandMap from '../components/PropertyDemandMap';
import DreamHomeCTA from '../components/DreamHomeCTA';
import ServicecardMap from '../components/ServicecardMap';
const Home = () => {
    const [active, setActive] = useState(null);

    return (
        <div className='overflow-hidden'>
            <Layout>

                <div>
            <HomeCardMap />
                </div>

                <div>
                    <MenuDropdown />
                </div>

                <div>
                     <AboutdetailMap/>
                </div>

                <div >
                    <ProjectStatus />
                </div>

                <div >
                <HomedetailsMap/>                      
                </div>

                <div>
                    <ServicecardMap active={active} setActive={setActive}/>
                </div>
                
                <div>
                    <PropertyRentMap active={active} setActive={setActive}/>
                </div>

                <div>
                    <Homepage/>
                </div>

                <div>
                <FacilityCardsMap/>
                </div>

                <div>
                    <AgentReviewMap active={active} setActive={setActive}/>
                </div>

                <div>
                    <PropertyDemandMap  active={active} setActive={setActive}/>
                </div>
                
                <div className='relative flex justify-center '>
                    <DreamHomeCTA/>
                </div>
            </Layout>
        </div>
    );
};




export default Home