import React from 'react';
import PracticeAreaCard from './Cards/PracticeAreaCard';
import SectionHeader from './common/SectionHeader';
import { NavLink } from 'react-router-dom';
import { homeData, practiceAreasData } from '../data';

const PracticeArea = () => {
    const { title, subtitle, viewMoreLabel, viewMorePath } = homeData.practiceAreaSection;
    const featuredAreas = practiceAreasData.areas
        .filter((area) => area.featured)
        .sort((a, b) => (a.featuredOrder || 0) - (b.featuredOrder || 0));

    return (
        <div className='practice-area'>
            <SectionHeader 
                titleTxt={title} 
                subTitleTxt={subtitle} 
            />
            <div className='card-container container'>
                {featuredAreas.map((area) => (
                    <PracticeAreaCard 
                        key={area.title} 
                        titleTxt={area.featuredTitle || area.title} 
                        imgSrc={area.image} 
                    />
                ))}
            </div>
            <div className='view-more container py-6 flex-c-c'>
                <NavLink to={viewMorePath} className='btn btn-primary'>
                    {viewMoreLabel}
                </NavLink>
            </div>
        </div>
    );
};

export default PracticeArea;
