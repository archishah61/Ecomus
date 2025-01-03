import React from 'react'
import './Services.css'
import { TbCube } from "react-icons/tb";
import { LuCreditCard } from "react-icons/lu";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Services() {
  return (
    <div>

      <div className='services'>
        <div className="service free-shipping">
          <div className='service-content'>
            <div className="service-icon">
              <TbCube />
            </div>
            <div className="service-title">
              Free Shipping
            </div>
            <div className="service-subtitle">
              Free Shipping on order over $120
            </div>
          </div>
        </div>
        <div className="service flexible-payment">
          <div className="service-content">
            <div className="service-icon">
              <LuCreditCard />
            </div>
            <div className="service-title">
              Flexible Payment
            </div>
            <div className="service-subtitle">
              Pay with Multiple Credit Cards
            </div>
          </div>
        </div>
        <div className="service day-return">
          <div className="service-content">
            <div className="service-icon">
              <IoReturnDownBackSharp />
            </div>
            <div className="service-title">
              14 Day Return
            </div>
            <div className="service-subtitle">
              Within 30 days for an exchange
            </div>
          </div>
        </div>
        <div className="service premium-support">
          <div className="service-content">
            <div className="service-icon">
              <MdSupportAgent />
            </div>
            <div className="service-title">
              Premium Support
            </div>
            <div className="service-subtitle">
              Outstanding premium support
            </div>
          </div>
        </div>
      </div>

      <div className="service-swiper-container">
        <Swiper
          className='service-swiper'
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <div className="service free-shipping">
              <div className='service-content'>
                <div className="service-icon">
                  <TbCube />
                </div>
                <div className="service-title">
                  Free Shipping
                </div>
                <div className="service-subtitle">
                  Free Shipping on order over $120
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service flexible-payment">
              <div className="service-content">
                <div className="service-icon">
                  <LuCreditCard />
                </div>
                <div className="service-title">
                  Flexible Payment
                </div>
                <div className="service-subtitle">
                  Pay with Multiple Credit Cards
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service day-return">
              <div className="service-content">
                <div className="service-icon">
                  <IoReturnDownBackSharp />
                </div>
                <div className="service-title">
                  14 Day Return
                </div>
                <div className="service-subtitle">
                  Within 30 days for an exchange
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service premium-support">
              <div className="service-content">
                <div className="service-icon">
                  <MdSupportAgent />
                </div>
                <div className="service-title">
                  Premium Support
                </div>
                <div className="service-subtitle">
                  Outstanding premium support
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Services
