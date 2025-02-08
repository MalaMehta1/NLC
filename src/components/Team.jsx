import React from 'react'
import TeamCard from './Cards/TeamCard'

const Team = () => {
  return (
    <div className='team-card-container flex-column-c-c gap-5 pb-8'>
       <div class="section-header"><h2 class="section-title"><span class="title-text">our Team</span></h2></div>
        <TeamCard/>
    </div>
  )
}

export default Team