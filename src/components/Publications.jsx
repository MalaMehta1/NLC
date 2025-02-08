import React from 'react';
import { TiPointOfInterest } from "react-icons/ti";
import SectionHeader from './common/SectionHeader';

const Publications = () => {
  return (
    <section className='publication-section'>
      <SectionHeader titleTxt={"publications"}/>
      <div className='publication-content container'>
        <div className='publication'>
          <a href="https://www.nepallivetoday.com/2023/11/01/scrutinizing-nepals-fdi-laws-and-policies-through-the-lens-of-commercial-law/?fbclid=IwY2xjawHvkRVleHRuA2FlbQIxMQABHTZ-d1yLX1msYGaRcV_HnsZQRboNL3KdkfYcVfMoIcJ-Q7j8xnbkH2iDUg_aem_-jHwcVu6uCeVd9HU4G0Fog" className='publication-link'>
            <div className='icon'>
              <TiPointOfInterest />
            </div>
            <div className='text'>
            Scrutinizing Nepal’s FDI laws and policies through the lens of commercial law 
            </div>
          </a>
        </div>
        <div className='publication'>
          <a href="https://english.onlinekhabar.com/is-live-streaming-the-key-to-restoring-trust-in-nepals-courts.html?fbclid=IwY2xjawHvkVVleHRuA2FlbQIxMQABHUHBunx_p6ar4Q52wzj1FJRfpO87fw_axBq0GjQxCrQw28ah9ONXOMLjkQ_aem_RRb3gylpekVjjZWQWS35MQ" className='publication-link'>
            <span className='icon'>
              <TiPointOfInterest />
            </span>
            <span className='text'>
            Is live streaming the key to restoring trust in Nepal’s courts?
            </span>
          </a>
        </div>
        <div className='publication'>
          <a href="https://english.himalayatimes.com.np/2023/11/77621/?fbclid=IwY2xjawHvkatleHRuA2FlbQIxMQABHU_UQ0Po24c89Dxas30aRaxcUVTPCoAnZJg78QzXFUfV9djrBa4hJ66arQ_aem_ComXS9fTxdKS8Zq7z2PlPw" className='publication-link'>
            <span className='icon'>
              <TiPointOfInterest />
            </span>
            <span className='text'>
            How Smart Machines are Changing Internet Laws and Courts
            </span>
          </a>
        </div>
        <div className='publication'>
          <a href="https://www.nepallivetoday.com/2023/04/10/artificial-intelligence-in-law-how-it-can-help-transform-nepals-legal-landscape/?fbclid=IwY2xjawHvkkBleHRuA2FlbQIxMQABHXcprba0wzt3Ysp7bNfb5tAcXWBfhy6AULhmrqBnsScU0THERwmSV3Ze5Q_aem_oGJn_Rf0uUYxNFyjYHmpmw" className='publication-link'>
            <span className='icon'>
              <TiPointOfInterest />
            </span>
            <span className='text'>
            Artificial Intelligence in law: How it can help transform Nepal’s legal landscape
            </span>
          </a>
        </div>
      </div>

    </section>
  )
}

export default Publications