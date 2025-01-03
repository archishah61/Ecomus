import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// Import brand logos
import brand1 from '../../../assets/images/brand-01.png';
import brand2 from '../../../assets/images/brand-02.png';
import brand3 from '../../../assets/images/brand-03.png';
import brand4 from '../../../assets/images/brand-04.png';
import brand5 from '../../../assets/images/brand-05.png';
import brand6 from '../../../assets/images/brand-06.png';

// Styles for the section
import './Brands.css';

function Brands() {
  return (
    <section id="brand-name-logos" style={{ backgroundColor: 'white' }}>
      
      <Swiper
        pagination={{
          clickable: true, 
        }}
        breakpoints={{
          1024: {
            slidesPerView: 6, // 6 logos in a row
          },
          768: {
            slidesPerView: 3, // 3 logos in a row
          },
          0: {
            slidesPerView: 2, // 2 logos in a row
          },
        }}
        modules={[Pagination]} // Include the Pagination module
        className="mySwiper"
      >
        {[brand1, brand2, brand3, brand4, brand5, brand6].map((brand, index) => (
          <SwiperSlide key={index}>
            
              <div className="logo-container-image">
              <img src={brand} alt={`Brand ${index + 1}`} className="brand-logo" />
              </div>
           
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Brands;