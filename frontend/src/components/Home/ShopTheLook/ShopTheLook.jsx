import './ShopTheLook.css'
import img1 from '../../../assets/images/lookbook-3.jpg'
import img2 from '../../../assets/images/lookbook-4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useState } from 'react'
import img5 from '../../../assets/images/img-p4.png'
import { LuEye } from "react-icons/lu";


export default function ShopTheLook() {

    const [clicked1, setClicked1] = useState(true)
    const [clicked2, setClicked2] = useState(true)
    const [clicked3, setClicked3] = useState(true)

    const handleClick1 = () => {
        setClicked1(true)
        const detail = document.querySelector('.detail-1')

        if (clicked1) {
            detail.style.display = 'block'
            setClicked1(false)
        } else {
            detail.style.display = 'none'
        }
    }

    const handleClick2 = () => {
        setClicked2(true)
        const detail = document.querySelector('.detail-2')

        if (clicked2) {
            detail.style.display = 'block'
            setClicked2(false)
        } else {
            detail.style.display = 'none'
        }
    }

    const handleClick3 = () => {
        setClicked3(true)
        const detail = document.querySelector('.detail-3')

        if (clicked3) {
            detail.style.display = 'block'
            setClicked3(false)
        } else {
            detail.style.display = 'none'
        }
    }

    return (
        <div className="shopTheLook">
            <div className="shopthelook-title">
                <p> Shop The Look </p>
            </div>

            <div className='shopthelook-subtitle'>
                <p>Inspire and let yourself be inspired, from one unique fashion to another</p>
            </div>

            <div className="container-fluid">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={2}
                    pagination={{ clickable: true }}
                    className='stl-swiper'
                    breakpoints={{
                        0: {
                            slidesPerView: 1, // 1 slide for smaller screens
                        },
                        480: {
                            slidesPerView: 2, // 2 slides for medium screens
                        },

                    }}
                >
                    <SwiperSlide>
                        <div className="stl-img">
                            <img src={img1} alt="" />

                            <div>
                                <div className="stl-btn1">
                                    <button className='btn-1' onClick={handleClick1}><div className="dot-1"></div></button>
                                </div>
                                <div className="detail-1">
                                    <div className="p-img1">
                                        <img src={img5} alt="" />
                                    </div>

                                    <div>
                                        <p className="p-name">Ribbed model T-shirt</p>
                                        <p className='p-price'>$ 20.00</p>
                                    </div>

                                    <div >
                                        <button className="stl-eye-btn">
                                            <LuEye />
                                        </button>
                                    </div>


                                </div>
                            </div>

                            <div>
                                <div className="stl-btn2">
                                    <button className='btn-1' onClick={handleClick2}><div className="dot-1"></div></button>
                                </div>
                                <div className="detail-2">
                                    <div className="p-img1">
                                        <img src={img5} alt=""  />
                                    </div>

                                    <div>
                                        <p className="p-name">Ribbed model T-shirt</p>
                                        <p className='p-price'>$ 20.00</p>
                                    </div>

                                    <div >
                                        <button className="stl-eye-btn">
                                            <LuEye />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="stl-img">
                            <img src={img2} alt=""/>

                            <div>
                                <div className="stl-btn3">
                                    <button className='btn-1' onClick={handleClick3}><div className="dot-1"></div></button>
                                </div>
                                <div className="detail-3">
                                    <div className="p-img1">
                                        <img src={img5} alt=""  />
                                    </div>

                                    <div>
                                        <p className="p-name">Ribbed model T-shirt</p>
                                        <p className='p-price'>$ 20.00</p>
                                    </div>

                                    <div >
                                        <button className="stl-eye-btn">
                                            <LuEye />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}