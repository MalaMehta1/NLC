import React from 'react';
import { homeData } from '../data';

const LawAssociates = () => {
    const { heading, subHeading, title, text, image } = homeData.lawAssociates;

    return (
        <div className='associates-section'>
            <div className='container associates-wrap'>
                <div className='associates-left'>
                    <div className='heading-wrap'>
                        <h2 className='heading flex-c-c gap-2'>
                                {heading}
                            </h2>
                        <h3 className='sub-heading'>{subHeading}</h3>
                    </div>
                    <div className='content-wrap'>
                        <h2 className='title'>{title}</h2>
                        <p className='text'>{text}</p>
                    </div>
                </div>
                <div className='associates-right'>
                    <img src={image} alt="" />
                </div>

            </div>
        </div>
    )
}

export default LawAssociates
