import React from 'react'

const PageBanner = ({title}) => {
  

  return (
    <section className='page-banner'>
        <div className='img-wrap'>
        <img src="../images/banner-1.jpeg" alt="" />
        </div>
       <h2 className='banner-title'>
        {title}
       </h2>
    </section>
  )
}

export default PageBanner