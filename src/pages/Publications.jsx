import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import PageBanner from '../components/common/PageBanner'
import Publications from '../components/Publications'
import { useLocation } from 'react-router-dom'

const PublicationsPage = () => {
  const location = useLocation();

  const pathname = location.pathname.startsWith("/")
    ? location.pathname.substring(1)
    : location.pathname;
  return (
    <div className='publication-page'>
      <PageBanner title={pathname} />
      <Header />
      <div className='py-15'>
        <Publications />
      </div>
      <Footer />
    </div>
  )
}

export default PublicationsPage