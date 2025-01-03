import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import img1 from '../../../assets/images/gallery-7.jpg';
import img2 from '../../../assets/images/gallery-3.jpg';
import img3 from '../../../assets/images/gallery-5.jpg';
import img4 from '../../../assets/images/gallery-8.jpg';
import img5 from '../../../assets/images/gallery-6.jpg';

import { RiShoppingBag2Line } from "react-icons/ri";

import './ShopGram.css';

function ShopGram() {
    const images = [img1, img2, img3, img4, img5];
    return (
        <section id="shop-gram">
            <div className="shop-gram-header text-center my-5">
                <p className='p1'>Shop Gram</p>
                <p className='p2'>Inspire and let yourself be inspired, from one unique fashion to another.</p>
            </div>
            <div className="shop-gram-slider">
                {/* Swiper component for responsive images */}
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{

                        1024: {
                            slidesPerView: 5, 
                        },
                        768: {
                            slidesPerView: 3, 
                        },
                        0: {
                            slidesPerView: 2,
                        },
                    }}
                    modules={[Pagination]} // Include the Pagination module
                    className="mySwiper"
                >

                    {images.map((image, index) => (
                        <SwiperSlide>
                            <div className="shop-image-icon">
                                <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" key={index} />
                                <div className="shop-icon"><RiShoppingBag2Line /></div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </section>
    );
}

export default ShopGram;