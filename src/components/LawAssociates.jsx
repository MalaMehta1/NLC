import React from 'react';
import { NavLink } from 'react-router-dom';
import { homeData } from '../data';

const LawAssociates = () => {
  const {
    heading,
    subHeading,
    title,
    text,
    image,
    primaryCtaLabel = 'About Us',
    primaryCtaPath = '/about',
    secondaryCtaLabel = 'Contact Us',
    secondaryCtaPath = '/contact',
  } = homeData.lawAssociates;

  return (
    <section className="associates-section">
      <div className="container associates-wrap">
        <div className="associates-left">
          <p className="associates-eyebrow">{heading}</p>
          <div className="associates-accent" aria-hidden="true" />
          <h2 className="associates-title">{title}</h2>
          <p className="associates-subtitle">{subHeading}</p>
          <p className="associates-text">{text}</p>
          <div className="associates-actions">
            <NavLink to={primaryCtaPath} className="btn btn-primary">
              {primaryCtaLabel}
            </NavLink>
            <NavLink to={secondaryCtaPath} className="btn associates-btn-secondary">
              {secondaryCtaLabel}
            </NavLink>
          </div>
        </div>

        <div className="associates-right">
          <div className="associates-media">
            <img src={image} alt="National Legal Counsel" />
            <div className="associates-media__frame" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawAssociates;
