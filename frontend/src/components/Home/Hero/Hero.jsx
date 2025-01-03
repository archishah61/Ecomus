import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Hero.css';
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';

function Hero() {
    const [heroData, setHeroData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/hero');
                setHeroData(response.data);
            } catch (error) {
                console.error('Error fetching Hero data:', error);
                alert('Error fetching Hero data.');
                setHeroData(defaultSlides);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='main-hero'>
            <Swiper
                className='hero-swiper'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 1500
                }}
            >
                {heroData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-content">
                            <div className="text-content">
                                <p className='title'>{slide.title}</p>
                                <p className='subtitle'>{slide.subtitle}</p>
                                <button className="shop-btn">Shop collection <IoIosArrowForward /></button>
                            </div>
                            <img src={slide.img} alt={slide.title} className='fashion-img' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Hero;
