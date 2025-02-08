import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import PageBanner from '../components/common/PageBanner'
import { useLocation } from 'react-router-dom'
import Accordian from '../components/common/Accordian'

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
          At National Legal Counsel, we offer a comprehensive range of legal services designed to meet the diverse needs of our clients. Whether you're seeking legal representation, advice, or document preparation, our team of skilled attorneys is committed to delivering efficient, practical, and client-focused solutions.
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