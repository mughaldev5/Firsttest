import React from 'react'
import StateFooter from '../components/StateFooter'
import CompanyFooter from '../components/CompanyFooter'
import ServicesFooter from '../components/ServicesFooter'
import CustomercareFooter from '../components/CustomercareFooter'
import NewsletterFooter from '../components/NewsletterFooter'
const UpperFooter = () => {
  return (
    <div className='flex flex-wrap justify-around h-auto xl:gap-0 lg:gap-16 md:gap-16 sm:gap-10 gap-10 pt-40 pb-23 bg-gray-950'>
   <StateFooter/>
   <CompanyFooter/>
   <ServicesFooter/>
   <CustomercareFooter/>
   <NewsletterFooter/>
    </div>
  )
}

export default UpperFooter
