import React from 'react'
import StateFooter from '../components/StateFooter'
import CompanyFooter from '../components/CompanyFooter'
import ServicesFooter from '../components/ServicesFooter'
import CustomercareFooter from '../components/CustomercareFooter'
import NewsletterFooter from '../components/NewsletterFooter'
const UpperFooter = () => {
  return (
    <div className='flex justify-around h-auto pt-40 pb-23 bg-gray-950'>
   <StateFooter/>
   <CompanyFooter/>
   <ServicesFooter/>
   <CustomercareFooter/>
   <NewsletterFooter/>
    </div>
  )
}

export default UpperFooter
