import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import SectionHeader from './common/SectionHeader';
import { homeData, publicationsData } from '../data';

const Publications = () => {
  const { title, subtitle } = homeData.publicationsSection;

  return (
    <section className="publication-section">
      <SectionHeader titleTxt={title} subTitleTxt={subtitle} />
      <div className="publication-content container">
        {publicationsData.items.map((publication, index) => (
          <a
            key={publication.title}
            href={publication.url}
            className="publication"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="publication__top">
              <span className="publication__index">
                {String(index + 1).padStart(2, '0')}
              </span>
              {(publication.source || publication.year) && (
                <span className="publication__meta">
                  {publication.source}
                  {publication.source && publication.year ? ' · ' : ''}
                  {publication.year}
                </span>
              )}
            </div>
            <h3 className="publication__title">{publication.title}</h3>
            <span className="publication__cta">
              Read article
              <IoArrowForward aria-hidden="true" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Publications;
