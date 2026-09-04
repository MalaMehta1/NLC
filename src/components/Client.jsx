import React from 'react'
import ClientCard from './Cards/ClientCard';
import SectionHeader from './common/SectionHeader';
import { clientsData, homeData } from '../data';

const Client = () => {
  return (
    <div className='client-section'>
      <SectionHeader titleTxt={homeData.clientsSection.title}/>
      <div className='card-container container'>
        {clientsData.items.map((client) => (
          <ClientCard key={client.name} imgSrc={client.image}/>
        ))}
      </div>
    </div>
  )
}

export default Client;
