import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { useLocation } from 'react-router-dom'
import PageBanner from '../components/common/PageBanner'
import Team from '../components/Team'

const OurTeam = () => {
    const location = useLocation();
  
    const pathname = location.pathname.startsWith("/")
      ? location.pathname.substring(1)
      : location.pathname;
  return (
    <div className='team-page'>
        <Header/>
        <PageBanner title={pathname} />
       <div className='container team-container'>
        <Team/>
       </div>
        <Footer/>
    </div>
  )
}

export default OurTeam