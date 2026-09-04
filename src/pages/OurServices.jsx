import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import PageBanner from '../components/common/PageBanner'
import { useLocation } from 'react-router-dom'
import Accordian from '../components/common/Accordian'
import { servicesData } from '../data'

const OurServices = () => {
  const location = useLocation();

  const pathname = location.pathname.startsWith("/")
  ? location.pathname.substring(1)
  : location.pathname;
  return (
    <div className='service-page'>
        <Header/>
        <PageBanner title={pathname}/>
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
