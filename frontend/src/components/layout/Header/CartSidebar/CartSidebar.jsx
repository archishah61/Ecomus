import React, { useState } from 'react'
import './CartSidebar.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import bs1 from '../../../../assets/images/orange-1.jpg';
import bs4 from '../../../../assets/images/white-2.jpg';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { TbEye } from "react-icons/tb";
import { PiNotePencilBold } from "react-icons/pi";
import { FiGift } from "react-icons/fi";
import { TbTruck } from "react-icons/tb";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import bs2 from '../../../../assets/images/brown.jpg';
import bs3 from '../../../../assets/images/white-3.jpg';
import truck from '../../../../assets/images/7086499f-0200-4c2a-b07f-750a551d3cfd.svg'
function Cartsidebar({ handleCartClose, showCart }) {
    const progress = 60;
    const cartProducts = [
        {
            title: "Ribbed Tank Top",
            price: 29.99,
            img: bs1,
        },
        {
            title: "Oversized Printed T-shirt",
            price: 19.99,
            img: bs4,
        },
    ];

    const youMayAlsoLike = [
        {
            img: bs2,
            title: 'T-Shirt Light grey',
            price: 25.00,
        }, {
            img: bs3,
            title: 'Oversized Motif T-shirt',
            price: 25.00,
        }
    ]


    const [quantityP1, setQuantityP1] = useState(1);

    const handleIncrease = () => {
        setQuantityP1(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantityP1(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };


    return (
        <div className="cart-modal-container">
            <Offcanvas className="cart-sidebar" placement="end" show={showCart} onHide={handleCartClose}>
                <button
                    className="btn-close"
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        zIndex: '1051',
                        backgroundColor: 'transparent',
                        border: 'none',
                    }}
                    onClick={handleCartClose}
                    aria-label="Close"
                ></button>
                <Offcanvas.Body className='cart-sidebar-body overflow-hidden'>
                    <p className='cart-main-title'>Shopping Cart</p>
                    <hr />
                    <div className="progress-bar">
                        <div className="progress-dot" style={{ left: `${progress}%` }}>
                            <div className="truck-container">
                                <img src={truck} alt="" />
                            </div>
                        </div>
                        <div className="progress" style={{ position: 'relative' }}>
                            <div
                                className="progress-bar-filled"
                                role="progressbar"
                                aria-valuenow={progress}
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: `${progress}%` }}
                            >
                            </div>
                        </div>
                    </div>

                    <p style={{ marginTop: '13px', marginLeft: "10px" }}>
                        Buy <b>$75.00</b> more to enjoy <b>Free Shipping</b>
                    </p>
                    <hr />
                    <div className="cart-products overflow-auto">
                        {cartProducts.map((product, index) => (
                            <div key={index} className="cart-product" style={{ display: 'flex' }}>
                                <div style={{ flex: 1 }}>
                                    <img className="cart-product-img" src={product.img} alt={product.title} />
                                </div>
                                <div className='cart-product-details' style={{ flex: 2, paddingLeft: '10px' }}>
                                    <p className='cart-product-title'>{product.title}</p>
                                    <p className='cart-product-price'><b>${product.price.toFixed(2)}</b></p>
                                    <div className="mb-3 quantity">
                                        <div className="input-group mt-2" style={{ maxWidth: "140px", backgroundColor: "#ebebeb" }}>
                                            <button className="btn" onClick={handleDecrease}>
                                                <FaMinus />
                                            </button>
                                            <input
                                                type="text"
                                                className="form-control text-center bg-transparent border-0"
                                                value={quantityP1}
                                                readOnly
                                            />
                                            <button className="btn " onClick={handleIncrease}>
                                                <FaPlus />
                                            </button>
                                        </div>
                                        <a href='#' className='Remove-a'>Remove</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="youmay-also-like">
                            <p className='ymal'><b>You may also like</b></p>
                            <Swiper
                                className='ymal-swiper'
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={1}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                {youMayAlsoLike.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <img src={item.img} alt={item.title} className="ymal-img" />
                                            <div style={{ width: '10rem' }}>
                                                <p className='ymal-title'>{item.title}</p>
                                                <p className='ymal-price'>${item.price.toFixed(2)}</p>
                                            </div>
                                            <span className='eye-icon'><TbEye /></span>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <hr style={{ position: 'absolute', top: '10rem' }} />
                    <div className="user-options">
                        <div className="option"><PiNotePencilBold /></div>
                        <div className="option"><FiGift /></div>
                        <div className="option"><TbTruck /></div>
                    </div>
                    <div className='Subtotal-ymal' style={{ height: "0px" }}>
                        <p className='subtotal-title'>Subtotal</p>
                        {cartProducts.length > 0 && (
                            <div>
                                <p className='subtotal-input'>${((quantityP1 * cartProducts[0].price) + (quantityP1 * cartProducts[1].price)).toFixed(2)} USD</p>
                            </div>
                        )}
                    </div>
                    <div className='Taxes'>
                        <p>Taxes and <b><a style={{ textDecoration: "underline" }}>shipping</a></b> calculated at checkout</p>
                    </div>
                    <hr className='after-taxes' />
                    <div className='Terms-ymal'>
                        <input type="radio" id="agree" className="agree-radio" name="terms" value="agree" />
                        <label htmlFor="agree" className='agree-ymal-text'>
                            I agree with the <a style={{ textDecoration: "underline" }}>terms and conditions</a>
                        </label>
                    </div>
                    <div className="cart-actions">
                        <div className='action1-view'>
                            <button className="btn" >View Cart</button>
                        </div>
                        <div className='action2-check'>
                            <button className="btn ">Checkout</button>
                        </div>
                    </div>

                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Cartsidebar