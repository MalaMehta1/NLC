import React from 'react'
import Banner from '../components/Banner'
import LawAssociates from '../components/LawAssociates'
import AwardsRecognition from '../components/AwardsRecognition'
import PracticeArea from '../components/PracticeArea'
import Team from '../components/Team'
import Publications from '../components/Publications'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className='home-page'>
        <Header/>
        <Banner/>
        <LawAssociates/>
        {/* <AwardsRecognition/> */}
        <PracticeArea/>
        {/* <Client/> */}
        <Team/>
        <Publications/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home