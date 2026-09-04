import React from 'react'
import { siteData } from '../../data'

const ScrollText = () => {
    return (
        <div className="scroll-text-container">
            <div className="scroll-text">
            {siteData.disclaimer}
            </div>
        </div>
    )
}

export default ScrollText;
