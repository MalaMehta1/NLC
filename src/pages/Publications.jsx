import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import PageBanner from '../components/common/PageBanner'
import Publications from '../components/Publications'

const PublicationsPage = () => {
  return (
    <div className='publication-page'>
      <Header />
      <PageBanner />
      <Publications />
      <Footer />
    </div>
  )
}

export default PublicationsPage
