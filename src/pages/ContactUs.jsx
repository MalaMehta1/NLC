import React from 'react'
import Header from '../components/common/Header'
import Contact from '../components/Contact'
import Footer from '../components/common/Footer'
import PageBanner from '../components/common/PageBanner'

const ContactUs = () => {
  return (
    <div className='contact-page'>
        <Header/>
        <PageBanner />
        <Contact/>
        <Footer/>
    </div>
  )
}

export default ContactUs
