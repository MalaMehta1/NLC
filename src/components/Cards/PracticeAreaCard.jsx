import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5';

const PracticeAreaCard = ({ titleTxt, imgSrc, excerpt, index, href = '/practicearea' }) => {
  const order = String(index + 1).padStart(2, '0');

  return (
    <NavLink to={href} className="practiceArea-card">
      <div className="practiceArea-card__media" aria-hidden="true">
        <img src={imgSrc} alt="" />
      </div>
      <div className="practiceArea-card__overlay" aria-hidden="true" />
      <div className="practiceArea-card__body">
        <span className="practiceArea-card__index">{order}</span>
        <h3 className="practiceArea-card__title">{titleTxt}</h3>
        {excerpt ? <p className="practiceArea-card__excerpt">{excerpt}</p> : null}
        <span className="practiceArea-card__cta">
          Explore
          <IoArrowForward aria-hidden="true" />
        </span>
      </div>
    </NavLink>
  );
};

export default PracticeAreaCard;
