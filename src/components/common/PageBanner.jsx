import React from 'react'
import { siteData } from '../../data'

const PageBanner = ({title}) => {
  

  return (
    <section className='page-banner'>
        <div className='img-wrap'>
        <img src={siteData.pageBannerImage} alt="" />
        </div>
       <h2 className='banner-title'>
        {title}
       </h2>
    </section>
  )
}

export default PageBanner
