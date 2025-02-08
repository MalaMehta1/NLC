import React from 'react'
import ClientCard from './Cards/ClientCard';
import SectionHeader from './common/SectionHeader';

const Client = () => {
  return (
    <div className='client-section'>
      <SectionHeader titleTxt={"our client"}/>
      <div className='card-container container'>
        <ClientCard imgSrc={"https://png.pngtree.com/png-vector/20221117/ourlarge/pngtree-customer-red-rectangular-stamp-vector-png-image_25717476.png"}/>
        <ClientCard imgSrc={"https://png.pngtree.com/png-vector/20221117/ourlarge/pngtree-customer-red-rectangular-stamp-vector-png-image_25717476.png"}/>
        <ClientCard imgSrc={"https://png.pngtree.com/png-vector/20221117/ourlarge/pngtree-customer-red-rectangular-stamp-vector-png-image_25717476.png"}/>
        <ClientCard imgSrc={"https://png.pngtree.com/png-vector/20221117/ourlarge/pngtree-customer-red-rectangular-stamp-vector-png-image_25717476.png"}/>
        <ClientCard imgSrc={"https://png.pngtree.com/png-vector/20221117/ourlarge/pngtree-customer-red-rectangular-stamp-vector-png-image_25717476.png"}/>
        <ClientCard imgSrc={"https://png.pngtree.com/png-vector/20221117/ourlarge/pngtree-customer-red-rectangular-stamp-vector-png-image_25717476.png"}/>
        <ClientCard imgSrc={"https://png.pngtree.com/png-vector/20221117/ourlarge/pngtree-customer-red-rectangular-stamp-vector-png-image_25717476.png"}/>
        <ClientCard imgSrc={"https://png.pngtree.com/png-vector/20221117/ourlarge/pngtree-customer-red-rectangular-stamp-vector-png-image_25717476.png"}/>
      </div>
    </div>
  )
}

export default Client;