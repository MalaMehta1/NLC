import React from 'react'

const PracticeAreaCard = ({ titleTxt, imgSrc }) => {
  return (
    <div className='card practiceArea-card'>
      <div className='card-thumbnail'>
        <a href="">
          <img src={imgSrc} className='card-img' alt="" />
        </a>
      </div>
      <div className='card-footer'>
        <h2 className='card-title'> <a href="/" className='card-title-link'>{titleTxt}</a></h2>
      </div>
    </div>
  )
}

export default PracticeAreaCard