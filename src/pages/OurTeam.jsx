import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import PageBanner from '../components/common/PageBanner'
import Team from '../components/Team'

const OurTeam = () => {
  return (
    <div className='team-page'>
        <Header/>
        <PageBanner />
       <div className='team-container'>
        <Team/>
       </div>
        <Footer/>
    </div>
  )
}

export default OurTeam
