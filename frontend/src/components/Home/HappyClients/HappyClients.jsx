import './Happyclients.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { LiaStarSolid } from "react-icons/lia";
import img1 from "../../../assets/images/img-p2.png"
import img2 from "../../../assets/images/img-p3.png"
import img3 from "../../../assets/images/img-p4.png"
import img4 from "../../../assets/images/img-p5.png"

export default function HappyClients() {
    return (
        <div className="happy-client">
            <div className="happy-clients-title">
                <h1> Happy Clients </h1>
            </div>

            <div className="happy-clients-subtitle">
                <p>Here what they say about us</p>
            </div>


            <Swiper
                spaceBetween={0}
                slidesPerView={3}
                className='client-swiper happy-client-swiper '
                navigation
                breakpoints={{
                    0: {
                        slidesPerView: 1, // 1 slide for smaller screens
                    },
                    355: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2, // 2 slides for medium screens
                    },
                    1024: {
                        slidesPerView: 3, // 3 slides for larger screens
                    },
                }}
            >

                <SwiperSlide>
                    <div className="clients ">
                        <div className="stars">
                            <LiaStarSolid className='star-icon' />
                            <LiaStarSolid className='star-icon' />
                            <LiaStarSolid className='star-icon' />
                            <LiaStarSolid className='star-icon' />
                            <LiaStarSolid className='star-icon' />
                        </div>

                        <div className="heading">
                            <p>Best Online Fashion Site</p>
                        </div>

                        <div className="review">
                            <p>i always find something stylish and affordable on this web fashion site </p>
                        </div>

                        <div className="name-country">
                            <div className="name">
                                Robert smith
                            </div>
                            <div className="country">
                                Customer from USA
                            </div>
                        </div>

                        <hr className='hr' />

                        <div className='client-product'>
                            <div className="client-product-img">
                                <img src={img1} alt="" />
                            </div>

                            <div className="name-price">
                                <div className='client-product-name'> Jersey Thong body </div>
                                <div className='client-product-price'>  $105.95  </div>
                            </div>
                        </div>


                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="clients">
                        <div className="stars">
                            <LiaStarSolid className='star-icon' />
                            <LiaStarSolid className='star-icon' />
                            <LiaStarSolid className='star-icon' />
                            <LiaStarSolid className='star-icon' />
                            <LiaStarSolid className='star-icon' />
                        </div>

                        <div className="heading">
                            <p>Best Online Fashion Site</p>
                        </div>

                        <div className="review">
                            <p>i always find something stylish and affordable on this web fashion site </p>
                        </div>

                        <div className="name-country">
                            <div className="name">
                                Robert smith
                            </div>
                            <div className="country">
                                Customer from USA
                            </div>
                        </div>

                        <hr className='hr' />

                        <div className='client-product'>
                            <div className="client-product-img">
                                <img src={img2} alt="" />
                            </div>

                            <div className="name-price">
                                <div className='client-product-name'> Jersey Thong body </div>
                                <div className='client-product-price'>  $105.95  </div>
                            </div>
                        </div>


                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className="clients">
                        <div className="stars">
                            <LiaStarSolid className='star-icon' />
                            <LiaStarSolid className='star-icon' />
                            <LiaStarSolid className='star-icon' />
                            <LiaStarSolid className='star-icon' />
                            <LiaStarSolid className='star-icon' />
                        </div>

                        <div className="heading">
                            <p>Best Online Fashion Site</p>
                        </div>

                        <div className="review">
                            <p>i always find something stylish and affordable on this web fashion site </p>
                        </div>

                        <div className="name-country">
                            <div className="name">
                                Robert smith
                            </div>
                            <div className="country">
                                Customer from USA
                            </div>
                        </div>

                        <hr className='hr' />

                        <div className='client-product'>
                            <div className="client-product-img">
                                <img src={img3} alt="" />
                            </div>

                            <div className="name-price">
                                <div className='client-product-name'> Jersey Thong body </div>
                                <div className='client-product-price'>  $105.95  </div>
                            </div>
                        </div>


                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="clients">
                        <div className="stars">
                            <LiaStarSolid className='star-icon' />
                            <LiaStarSolid className='star-icon' />
                            <LiaStarSolid className='star-icon' />
                            <LiaStarSolid className='star-icon' />
                            <LiaStarSolid className='star-icon' />
                        </div>

                        <div className="heading">
                            <p>Best Online Fashion Site</p>
                        </div>

                        <div className="review">
                            <p>i always find something stylish and affordable on this web fashion site </p>
                        </div>

                        <div className="name-country">
                            <div className="name">
                                Robert smith
                            </div>
                            <div className="country">
                                Customer from USA
                            </div>
                        </div>

                        <hr className='hr' />

                        <div className='client-product'>
                            <div className="client-product-img">
                                <img src={img4} alt="" />
                            </div>

                            <div className="name-price">
                                <div className='client-product-name'> Jersey Thong body </div>
                                <div className='client-product-price'>  $105.95  </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    )
}
