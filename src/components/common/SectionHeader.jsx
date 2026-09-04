import React from 'react';

const SectionHeader = ({titleTxt, subTitleTxt}) => {
  return (
    <div className='section-header'>
        <h2 className='section-title'>
          <span className='title-text'>{titleTxt}</span>
        </h2>
        <div className='section-accent' aria-hidden="true"></div>
        {subTitleTxt ? <h3 className='section-subtitle'>{subTitleTxt}</h3> : null}
      </div>
  )
}

export default SectionHeader
