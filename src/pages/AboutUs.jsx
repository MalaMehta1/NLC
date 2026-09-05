import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import PageBanner from '../components/common/PageBanner'
import OurMission from '../components/OurMission'
import Team from '../components/Team'
import PracticeArea from '../components/PracticeArea'
import { aboutData } from '../data'

const AboutUs = () => {
  return (
    <div className='about-page'>
      <Header />
      <PageBanner />
      <div className='discription-wrap'>
        <p className='text'>
          {aboutData.intro.map((paragraph, index) => (
            <React.Fragment key={index}>
              {index > 0 && <br />}
              {paragraph}
            </React.Fragment>
          ))}
        </p>
      </div>
      <OurMission />
      <PracticeArea />
      <Team />
      <Footer />
    </div>
  )
}

export default AboutUs
