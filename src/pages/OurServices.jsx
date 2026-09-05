import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import PageBanner from '../components/common/PageBanner'
import Accordian from '../components/common/Accordian'
import { servicesData } from '../data'

const OurServices = () => {
  return (
    <div className='service-page'>
        <Header/>
        <PageBanner />
        <div className='discription-wrap'>
          <p className='text'>
          {servicesData.intro}
          </p>
        </div>
        <div className='accordain-container container'>
          <Accordian/>
        </div>
        <Footer/>
    </div>
  )
}

export default OurServices
