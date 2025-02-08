import React from 'react';

const SectionHeader = ({titleTxt, subTitleTxt}) => {
  return (
    <div className='section-header'>
        <h2 className='section-title'>
          <span className='title-text'>{titleTxt}</span>
        </h2>
        <h3 className='section-subtitle'>{subTitleTxt}</h3>
      </div>
  )
}

export default SectionHeader