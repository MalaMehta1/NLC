import React from 'react';
import PracticeAreaCard from './Cards/PracticeAreaCard';
import SectionHeader from './common/SectionHeader';
import { NavLink } from 'react-router-dom';

const PracticeArea = () => {
    const practiceAreas = [
        {
            titleTxt: "corporate law",
            imgSrc: "images/practice-area/corporate-law.jpeg"
        },
        {
            titleTxt: "family law",
            imgSrc: "images/practice-area/family-law.jpeg"
        },
        {
            titleTxt: "taxation law",
            imgSrc: "images/practice-area/tax-law.jpeg"
        },
        {
            titleTxt: "criminal law",
            imgSrc: "https://www.floresmendez.com/wp-content/uploads/2024/09/GMB-Updates-2024-09-25T130324.834.jpg"
        },
        {
            titleTxt: "cyber law",
            imgSrc: "images/practice-area/cyber-law.jpeg"
        }
    ];

    return (
        <div className='practice-area'>
            <SectionHeader 
                titleTxt="Practice area" 
                subTitleTxt="Practice Areas being practiced by Lawin & Partners: A best Law Firm in Nepal" 
            />
            <div className='card-container container'>
                {practiceAreas.map((area, index) => (
                    <PracticeAreaCard 
                        key={index} 
                        titleTxt={area.titleTxt} 
                        imgSrc={area.imgSrc} 
                    />
                ))}
            </div>
            <div className='view-more container py-6 flex-c-c'>
                <NavLink to='/practicearea' className='btn btn-primary'>
                    Click for more
                </NavLink>
            </div>
        </div>
    );
};

export default PracticeArea;
