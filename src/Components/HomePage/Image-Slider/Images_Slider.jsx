// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Swiper, Autoplay, Pagination, Navigation } from 'swiper';
// import "swiper/css";
// import "swiper/css/pagination";
import React, { useRef, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import loogo from '../Images/loogo.webp'
import './Images_Slider.css';
import slider_Content from "../Image-Slider/Slider_Content";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function Images_Slider() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    });
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty("--progress", 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>

            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >

                <div className="container" >
                    <div className="slider">
                        {slider_Content.map((image, index) => (
                            <SwiperSlide  >
                                <img

                                    className=' img-fluid'
                                    key={index}
                                    src={image.src}
                                    alt={image.alt}
                                />
                            </SwiperSlide>
                        ))}
                    </div>
                </div>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 0 0" ref={progressCircle}>
                        <circle cx="0" cy="0" r="0"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
            <div class="notice-box">
                <p className="text-images" data-aos="fade-right fs-6">We are the largest wholesale suppliers of dairy Cattle feed in Maharashtra.</p>
            </div>

            <div className="trsut-block" data-aos="fade-up">
                <div className="trust-container">
                    <div className="trust-upper" >
                        <img src={loogo} alt="Image" />
                    </div>
                    <div className="trust-down">
                        <h2>Tested & Trusted by Farmers</h2>
                        <p className=''>
                            Welcome to Namrata & Tushar Traders – Your Premier Dairy Cattle Feed Wholesalers! Discover top-quality feed solutions tailored to enhance dairy herd health and productivity. Benefit from our extensive range, competitive wholesale prices, and expert guidance. Choose natural ingredients for optimal results. Trust us for your cattle's well-being and farm success.                    </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Images_Slider;
