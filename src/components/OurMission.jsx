import React from 'react'
import { aboutData } from '../data'

const OurMission = () => {
  return (
    <div className='our-mission'>
        <div className='heading mb-2'>{aboutData.mission.heading}</div>
        <p className='text'>{aboutData.mission.text}</p>
    </div>
  )
}

export default OurMission
