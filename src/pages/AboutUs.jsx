import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import PageBanner from '../components/common/PageBanner'
import { useLocation } from 'react-router-dom'
import OurMission from '../components/OurMission'
import Team from '../components/Team'
import PracticeArea from '../components/PracticeArea'
import { aboutData } from '../data'

const AboutUs = () => {
  const location = useLocation();

  const pathname = location.pathname.startsWith("/")
    ? location.pathname.substring(1)
    : location.pathname;
  return (
    <div className='about-page'>
      <Header />
      <PageBanner title={pathname} />
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
      <div className='our-mission-container container pb-5'>
        <div className='mission-left'>
          <OurMission />
          <div className='sub-heading mb-1'>{aboutData.differentiators.heading}</div>
          <ul style={{ listStyle: "disc" }}>
            {aboutData.differentiators.items.map((item) => (
              <li key={item.title}>
                <span className='title'>{item.title}</span>
                <span className='text'>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='mission-right'>
          <img src={aboutData.image} alt="" />
        </div>
      </div>
      <div className=''>
        <PracticeArea />
      </div>
      <div className='container'>
        <Team />
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs
