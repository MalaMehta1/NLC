import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import SectionHeader from './common/SectionHeader';
import { awardsData, homeData } from '../data';

const AwardsRecognition = () => {
    return (
        <div className='awardRecognition-section '>
           <SectionHeader titleTxt={homeData.awardsSection.title}/>
            <div className='flex-c-c'>
                <div className="swiper-container">
                    <Swiper
                        modules={[Navigation, Autoplay, EffectCoverflow]}
                        loop={true}
                        speed={1000}
                        autoplay={{ delay: 3000 }}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 80,
                            depth: 200,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                    >
                        {awardsData.items.map((award, index) => (
                            <SwiperSlide key={`${award.alt}-${index}`}>
                                <img
                                    src={award.image}
                                    alt={award.alt}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        </div>
    )
}

export default AwardsRecognition
