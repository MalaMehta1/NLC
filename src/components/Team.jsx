import React from 'react'
import TeamCard from './Cards/TeamCard'
import SectionHeader from './common/SectionHeader'
import { homeData } from '../data'

const Team = () => {
  return (
    <div className='team-card-container flex-column-c-c gap-5 pb-8'>
       <SectionHeader titleTxt={homeData.teamSection.title} />
        <TeamCard/>
    </div>
  )
}

export default Team
