import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import PageBanner from '../components/common/PageBanner';
import { practiceAreasData } from '../data';

const PracticeArea = () => {
  return (
    <div className='practice-page'>
      <Header />
      <PageBanner />
      <div className='container card-container flex-c-fs py-10 gap-8'>
        {practiceAreasData.areas.map((area) => (
          <div key={area.title} className='practice-card text-center'>
            <h2 className='practice-card-title '>{area.title}</h2>
            <p className='practice-card-text'>{area.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default PracticeArea;
