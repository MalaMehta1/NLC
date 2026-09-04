import React, { useState } from 'react';
import { servicesData } from '../../data';

const Accordian = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleReadMore = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="accordian-read-more">
            {servicesData.items.map((item, index) => (
                <div className="block-item-text" key={item.title}>
                    <div className="read-more-wrap">
                        <h3 className="title">{item.title}</h3>
                        <p className="text">{item.description}</p>
                        {expandedIndex === index && (
                            <div className="text read-more-target content-list">
                                {item.expandedContent}
                            </div>
                        )}
                    </div>
                    <button
                        onClick={() => toggleReadMore(index)}
                        className="read-more-trigger btn-underline"
                    >
                        {expandedIndex === index ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Accordian;
