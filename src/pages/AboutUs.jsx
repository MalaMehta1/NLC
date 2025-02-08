import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import PageBanner from '../components/common/PageBanner'
import { useLocation } from 'react-router-dom'
import OurMission from '../components/OurMission'
import Team from '../components/Team'
import PracticeArea from '../components/PracticeArea'
import SectionHeader from '../components/common/SectionHeader'

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
          At National Legal Counsel (NLC), we take pride in being one of Nepal’s fastest-growing and most trusted law firms. Headquartered in Kathmandu, with branch offices in Jeetpursimara and an extensive network of partner offices in major cities across the nation, we are committed to delivering exceptional legal services throughout Nepal.
          <br />
          Founded on a vision of excellence, NLC is the result of a partnership between two outstanding legal professionals, Mr. Ramprawesh Yadav and Ms. Ranjana Raut. Both distinguished graduates and accomplished attorneys, their shared ambition to revolutionize the legal landscape has driven NLC to become a leader in Nepal’s legal industry.
        </p>
      </div>
      <div className='our-mission-container container pb-5'>
        <div className='mission-left'>
          <OurMission />
          <div className='sub-heading mb-1'>What Sets Us Apart?</div>
          <ul style={{ listStyle: "disc" }}>
            <li><span className='title'>Nationwide Reach:</span><span className='text'> With offices in key cities and a robust networking presence, we ensure accessible legal services wherever you are.</span></li>
            <li><span className='title'>Expert Legal Team: </span><span className='text'>Our attorneys bring a wealth of knowledge and expertise in diverse practice areas, delivering top-tier representation and counsel.</span></li>
            <li><span className='title'>Client-First Philosophy:</span><span className='text'> We prioritize understanding our clients’ needs and delivering tailored solutions to achieve their goals.</span></li>
            <li><span className='title'>Reputation for Excellence:</span><span className='text'> Renowned for our dedication and success, we have built a legacy of trust and excellence in the legal field.</span></li>
          </ul>
        </div>
        <div className='mission-right'>
          <img src='https://cdn.pixabay.com/photo/2024/05/09/22/15/ai-generated-8751926_640.jpg' alt="" />
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