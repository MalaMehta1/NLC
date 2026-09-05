import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import TeamCard from './Cards/TeamCard';
import SectionHeader from './common/SectionHeader';
import { homeData } from '../data';

const Team = () => {
  const location = useLocation();
  const { title, subtitle, viewMoreLabel, viewMorePath } = homeData.teamSection;
  const showViewMore = Boolean(viewMorePath) && location.pathname !== viewMorePath;

  return (
    <section className="team-section">
      <div className="team-section__inner container">
        <SectionHeader titleTxt={title} subTitleTxt={subtitle} />
        <TeamCard />
        {showViewMore ? (
          <div className="team-section__more">
            <NavLink to={viewMorePath} className="btn btn-primary">
              {viewMoreLabel}
            </NavLink>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Team;
