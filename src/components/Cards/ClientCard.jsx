import React from 'react'

const ClientCard = ({ imgSrc }) => {
    return (
        <div className='client-card'>
            <div class="card-body">
                <div className='card-thumbnail'>
                   <img src={imgSrc} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ClientCard