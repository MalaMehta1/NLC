import React from 'react';
import PracticeAreaCard from './Cards/PracticeAreaCard';
import SectionHeader from './common/SectionHeader';
import { NavLink } from 'react-router-dom';
import { homeData, practiceAreasData } from '../data';

const toExcerpt = (text = '', max = 92) => {
  const cleaned = text.replace(/\s+/g, ' ').trim();
  if (cleaned.length <= max) return cleaned;
  return `${cleaned.slice(0, max).replace(/\s+\S*$/, '')}…`;
};

const PracticeArea = () => {
  const { title, subtitle, viewMoreLabel, viewMorePath } = homeData.practiceAreaSection;
  const featuredAreas = practiceAreasData.areas
    .filter((area) => area.featured)
    .sort((a, b) => (a.featuredOrder || 0) - (b.featuredOrder || 0));

  return (
    <section className="practice-area">
      <SectionHeader titleTxt={title} subTitleTxt={subtitle} />
      <div className="practice-area__grid container">
        {featuredAreas.map((area, index) => (
          <PracticeAreaCard
            key={area.title}
            index={index}
            titleTxt={area.featuredTitle || area.title}
            imgSrc={area.image}
            excerpt={toExcerpt(area.excerpt || area.description)}
            href={viewMorePath}
          />
        ))}
      </div>
      <div className="view-more container">
        <NavLink to={viewMorePath} className="btn btn-primary practice-area__more">
          {viewMoreLabel}
        </NavLink>
      </div>
    </section>
  );
};

export default PracticeArea;
