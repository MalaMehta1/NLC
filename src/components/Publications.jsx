import React from 'react';
import { TiPointOfInterest } from "react-icons/ti";
import SectionHeader from './common/SectionHeader';
import { homeData, publicationsData } from '../data';

const Publications = () => {
  return (
    <section className='publication-section'>
      <SectionHeader titleTxt={homeData.publicationsSection.title}/>
      <div className='publication-content container'>
        {publicationsData.items.map((publication) => (
          <div className='publication' key={publication.title}>
            <a href={publication.url} className='publication-link'>
              <div className='icon'>
                <TiPointOfInterest />
              </div>
              <div className='text'>
                {publication.title}
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Publications
