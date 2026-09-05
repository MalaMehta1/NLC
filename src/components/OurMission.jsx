import React from 'react';
import { aboutData } from '../data';

const OurMission = () => {
  const { mission, differentiators, image } = aboutData;

  return (
    <section className="mission-section">
      <div className="mission-section__inner container">
        <div className="mission-grid">
          <div className="mission-content">
            {mission.eyebrow ? (
              <p className="mission-eyebrow">{mission.eyebrow}</p>
            ) : null}
            <div className="mission-accent" aria-hidden="true" />
            <h2 className="mission-heading">{mission.heading}</h2>
            <p className="mission-text">{mission.text}</p>

            <h3 className="mission-subheading">{differentiators.heading}</h3>
            <ul className="mission-points">
              {differentiators.items.map((item, index) => (
                <li className="mission-point" key={item.title}>
                  <span className="mission-point__index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="mission-point__body">
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mission-media">
            <div className="mission-media__frame" aria-hidden="true" />
            <img src={image} alt="National Legal Counsel team" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
