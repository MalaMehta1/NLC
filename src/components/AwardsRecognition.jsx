import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import SectionHeader from './common/SectionHeader';

const AwardsRecognition = () => {
    return (
        <div className='awardRecognition-section '>
           <SectionHeader titleTxt={"award and recognition"}/>
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
                        <SwiperSlide>
                            <img
                                src="https://img.freepik.com/free-vector/realistic-film-awards-illustration_23-2149330581.jpg?semt=ais_hybrid"
                                alt="Slide 1"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://competition.adesignaward.com/images/golden-laurel-wreath.jpg"
                                alt="Slide 2"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://img.freepik.com/free-vector/realistic-film-awards-illustration_23-2149330581.jpg?semt=ais_hybrid"
                                alt="Slide 1"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://competition.adesignaward.com/images/golden-laurel-wreath.jpg"
                                alt="Slide 2"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://img.freepik.com/free-vector/realistic-film-awards-illustration_23-2149330581.jpg?semt=ais_hybrid"
                                alt="Slide 1"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://competition.adesignaward.com/images/golden-laurel-wreath.jpg"
                                alt="Slide 2"
                            />
                        </SwiperSlide>

                    </Swiper>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        </div>
    )
}

export default AwardsRecognition