import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import PageBanner from '../components/common/PageBanner';
import { useLocation } from 'react-router-dom';
import { practiceAreasData } from '../data';

const PracticeArea = () => {
  const location = useLocation();
  const pathname = location.pathname.startsWith('/')
    ? location.pathname.substring(1)
    : location.pathname;

  return (
    <div className='practice-page'>
      <PageBanner title={pathname} />
      <Header />
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
