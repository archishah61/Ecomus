import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import './Wishlist.css'
import "bootstrap/dist/css/bootstrap.min.css";
import bs1 from '../../assets/images/orange-1.jpg';
import bs11 from '../../assets/images/white-1.jpg';
import bs12 from '../../assets/images/black-1.jpg';
import bs2 from '../../assets/images/brown.jpg';
import bs21 from '../../assets/images/pink-1.jpg';
import bs22 from '../../assets/images/green.jpg';
import bs3 from '../../assets/images/white-3.jpg';
import bs4 from '../../assets/images/white-2.jpg';
import bs41 from '../../assets/images/pink-2.jpg';
import bs42 from '../../assets/images/black-2.jpg';
import bs5 from '../../assets/images/brown-2.jpg';
import bs51 from '../../assets/images/white-5.jpg';
import bs6 from '../../assets/images/light-green-1.jpg';
import bs61 from '../../assets/images/black-3.jpg';
import bs62 from '../../assets/images/blue.jpg';
import bs63 from '../../assets/images/white-6.jpg';
import bs64 from '../../assets/images/light-grey.jpg';
import bs7 from '../../assets/images/black-4.jpg';
import bs71 from '../../assets/images/dark-blue-2.jpg';
import bs72 from '../../assets/images/beige.jpg';
import bs73 from '../../assets/images/light-blue.jpg';
import bs74 from '../../assets/images/white-7.jpg';
import bs8 from '../../assets/images/white-8.jpg';
import bs81 from '../../assets/images/black-7.jpg';
import bs82 from '../../assets/images/blue-2.jpg';
import paypal from '../../assets/images/paypal.png';
import { TbEye } from "react-icons/tb";
import { FaRegHeart } from 'react-icons/fa';
import { PiShoppingBag } from "react-icons/pi";
import { LiaExpandArrowsAltSolid } from "react-icons/lia";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { TbArrowsCross } from "react-icons/tb";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FaPlus, FaMinus } from "react-icons/fa6";
// import { TbArrowsCross } from "react-icons/tb";
import '../Home/BestSeller/BestSeller.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import Button from 'react-bootstrap/Button';

function Wishlist() {
  const products = [
    {
      title: "Ribbed Tank Top",
      price: 29.99,
      colors: ["orange", "black", "white"],
      sizes: ["S", "M", "L"],
      images: { orange: bs1, black: bs12, white: bs11 },
    },
    {
      title: "Ribbed Modal T-shirt",
      price: 49.99,
      colors: ["brown", "purple", "lightgreen"],
      sizes: ["M", "L", "XL"],
      images: { brown: bs2, purple: bs21, lightgreen: bs22 },
    },
    {
      title: "Oversized Printed T-shirt",
      price: 39.99,
      colors: ["white"],
      sizes: ["S", "M", "L"],
      images: { white: bs3 },
    },
    {
      title: "Oversized Printed T-shirt",
      price: 19.99,
      colors: ["purple", "black", "white"],
      sizes: ["S", "M", "XL"],
      images: { purple: bs41, black: bs42, white: bs4 },
    },
    {
      title: "V-neck Linen T-shirt",
      price: 24.99,
      colors: ["brown", "white"],
      sizes: ["S", "L", "XL"],
      images: { brown: bs5, white: bs51 },
    },
    {
      title: "Loose Fit Sweatshirt",
      price: 34.99,
      colors: ["lightgreen", "white", "black", "gray", "skyblue"],
      sizes: ["S", "M", "L"],
      images: {
        lightgreen: bs6,
        white: bs63,
        black: bs61,
        gray: bs64,
        skyblue: bs62,
      },
    },
    {
      title: "Regular Fit Oxford Shirt",
      price: 44.99,
      colors: ["beige", "black", "white", "lightblue", "skyblue"],
      sizes: ["S", "M", "XL"],
      images: {
        beige: bs72,
        black: bs7,
        white: bs74,
        lightblue: bs71,
        skyblue: bs73,
      },
    },
    {
      title: "Loose Fit Hoodie",
      price: 15.99,
      colors: ["skyblue", "black", "white"],
      sizes: ["S", "L", "XL"],
      images: { skyblue: bs82, black: bs81, white: bs8 },
    },
  ];


  const [selectedColors, setSelectedColors] = useState(() => {
    return products.map((product) => product.colors[0]);
  });


  const [selectedImages, setSelectedImages] = useState(() =>
    products.map((product) => product.images[product.colors[0]])
  );


  const handleColorChange = (productIndex, color) => {
    const newSelectedColors = [...selectedColors];
    const newSelectedImages = [...selectedImages];

    newSelectedColors[productIndex] = color;
    newSelectedImages[productIndex] = products[productIndex].images[color];

    setSelectedColors(newSelectedColors);
    setSelectedImages(newSelectedImages);
  };


  //Eye Modal
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEyeModal = (product) => {
    setSelectedProduct(product);
    handleShow();
  };

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setSelectedProduct(null); // Clear selected product on close
  };

  const [selectedColor, setSelectedColor] = useState();

  const handleColorChangeModal = (event) => {
    setSelectedColor(event.target.value);
  };

  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1); // Increase quantity by 1
  };

  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1)); // Decrease quantity but not below 1
  };

  //Cart Modal

  const [showCart, setShowCart] = useState(false);

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  const handleCartModal = (product) => {
    setSelectedProduct(product);
    handleShowCart();
  }

  return (
    <>
      <div className='wishlist-header'>
        <p>Your Wishlist</p>
      </div>
      {/* Eye Modal */}
      <Modal centered show={show} onHide={handleClose} dialogClassName="bs-modal" >
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
          onClick={handleClose}
          aria-label="Close"
        ></button>
        {selectedProduct && (
          <Modal.Body>
            <div className="row">
              <div className="col-sm-6">
                <Swiper
                  className="bs-swiper"
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {Object.entries(selectedProduct.images).map(([color, image]) => (
                    <SwiperSlide key={color}>
                      <img src={image} alt={`${color} ${selectedProduct.title}`} style={{ width: '100%' }} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="col">
                <h4>{selectedProduct.title}</h4>
                <div className="d-flex bs-btn-cart mt-4">
                  <Button size="sm" className="h-25" variant="outline-dark">BEST SELLER</Button>
                  <p className="ms-4 fw-bold">Selling fast! 48 people have this in their carts.</p>
                </div>
                <p className="bs-price">${selectedProduct.price.toFixed(2)}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus omnis facere reiciendis id </p>
                <div className="select-colors">
                  <p>Color: <b>{selectedColor}</b></p>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {selectedProduct.colors.map((color, index) => (
                      <label
                        key={index}
                        style={{
                          background: selectedColor === color ? `radial-gradient(circle, ${color} 50%, transparent 40%)`
                            : `${color}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '20px', // Width of the circle
                          height: '20px', // Height of the circle
                          borderRadius: '50%', // Make it round
                          backgroundColor: color.toLowerCase(), // Set background color
                          cursor: 'pointer',
                          border: selectedColor === color ? '2px solid black' : '1px solid grey', // Highlight selected color
                        }}
                      >
                        <input
                          type="radio"
                          value={color}
                          checked={selectedColor === color}
                          onChange={(handleColorChangeModal)}
                          style={{ display: 'none' }} // Hide the default radio button
                        />
                      </label>
                    ))}
                  </div>
                </div>
                <div className="select-sizes mt-3">
                  <p>Size: <b>{selectedSize}</b></p>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {selectedProduct.sizes.map((size, index) => (
                      <label
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '40px', // Width of the square
                          height: '40px', // Height of the square
                          borderRadius: '5px', // Slightly rounded corners
                          backgroundColor: selectedSize === size ? 'black' : 'white', // Change background color based on selection
                          color: selectedSize === size ? 'white' : 'black', // Change text color based on selection
                          cursor: 'pointer',
                          border: '1px solid black', // Add border for better visibility
                          fontWeight: 'bold', // Make text bold
                          transition: 'all 0.3 ease'
                        }}
                      >
                        <input
                          type="radio"
                          value={size}
                          checked={selectedSize === size}
                          onChange={handleSizeChange}
                          style={{ display: 'none' }} // Hide the default radio button
                        />
                        {size} {/* Display the size */}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <strong>Quantity</strong>
                  <div className="input-group mt-2" style={{ maxWidth: "140px", backgroundColor: "#ebebeb" }}>
                    <button className="btn" onClick={handleDecrease}>
                      <FaMinus />
                    </button>
                    <input
                      type="text"
                      className="form-control text-center bg-transparent border-0"
                      value={quantity}
                      readOnly
                    />
                    <button className="btn " onClick={handleIncrease}>
                      <FaPlus />
                    </button>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2 mb-4 pe-2">
                  <button className="btn btn-dark flex-grow-1">
                    Add to cart - ${quantity * selectedProduct?.price.toFixed(1)}
                  </button>
                  <button className="btn btn-outline-dark">
                    <FaRegHeart />
                  </button>
                  <button className="btn btn-outline-dark">
                    <TbArrowsCross />
                  </button>
                </div>

                <div className="d-flex gap-2">
                  <button className="btn bg-warning text-primary w-100">Buy with <img src={paypal} className="paypal-img" /> </button>
                </div>
                <div className='more-payment'>
                  <a href="" >More Payment option </a>
                </div>
              </div>
            </div>
          </Modal.Body>
        )}
      </Modal>
      {console.log(selectedProduct)}
      {/* Cart Modal */}
      <Modal show={showCart} onHide={handleClose} dialogClassName="cart-modal">
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
          onClick={handleCloseCart}
          aria-label="Close"
        ></button>
        <Modal.Body>
          {selectedProduct && (
            <Modal.Body>
              <div className="row">
                <div className="col">
                  <div className="d-flex">
                    <img
                      height={84}
                      width={64}
                      src={selectedProduct.images[selectedColor]}
                      alt={selectedProduct.title}
                    />
                    <div className="d-flex-col ms-3">
                      <h4>{selectedProduct.title}</h4>
                      <p className="bs-price"><b>${selectedProduct.price.toFixed(2)}</b></p>
                    </div>
                  </div>
                  <div className="select-colors mt-3">
                    <p>Color: <b>{selectedColor}</b></p>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      {selectedProduct.colors.map((color, index) => (
                        <label
                          key={index}
                          style={{
                            background: selectedColor === color ? `radial-gradient(circle, ${color} 50%, transparent 40%)`
                              : `${color}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '20px', // Width of the circle
                            height: '20px', // Height of the circle
                            borderRadius: '50%', // Make it round
                            backgroundColor: color.toLowerCase(), // Set background color
                            cursor: 'pointer',
                            border: selectedColor === color ? '2px solid black' : '1px solid grey', // Highlight selected color
                          }}
                        >
                          <input
                            type="radio"
                            value={color}
                            checked={selectedColor === color}
                            onChange={(handleColorChangeModal)}
                            style={{ display: 'none' }} // Hide the default radio button
                          />
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="select-sizes mt-3">
                    <p>Size: <b>{selectedSize}</b></p>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      {selectedProduct.sizes.map((size, index) => (
                        <label
                          key={index}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '40px', // Width of the square
                            height: '40px', // Height of the square
                            borderRadius: '5px', // Slightly rounded corners
                            backgroundColor: selectedSize === size ? 'black' : 'white', // Change background color based on selection
                            color: selectedSize === size ? 'white' : 'black', // Change text color based on selection
                            cursor: 'pointer',
                            border: '1px solid black', // Add border for better visibility
                            fontWeight: 'bold', // Make text bold
                            transition: 'all 0.3 ease'
                          }}
                        >
                          <input
                            type="radio"
                            value={size}
                            checked={selectedSize === size}
                            onChange={handleSizeChange}
                            style={{ display: 'none' }} // Hide the default radio button
                          />
                          {size} {/* Display the size */}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="mb-3">
                    <strong>Quantity</strong>
                    <div className="input-group mt-2" style={{ maxWidth: "140px", backgroundColor: "#ebebeb" }}>
                      <button className="btn" onClick={handleDecrease}>
                        <FaMinus />
                      </button>
                      <input
                        type="text"
                        className="form-control text-center bg-transparent border-0"
                        value={quantity}
                        readOnly
                      />
                      <button className="btn " onClick={handleIncrease}>
                        <FaPlus />
                      </button>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-2 mb-4 pe-2">
                    <button className="btn btn-dark flex-grow-1">
                      Add to cart - ${quantity * selectedProduct?.price.toFixed(1)}
                    </button>
                    <button className="btn btn-outline-dark">
                      <FaRegHeart />
                    </button>
                    <button className="btn btn-outline-dark">
                      <TbArrowsCross />
                    </button>
                  </div>

                  <div className="d-flex gap-2">
                    <button className="btn bg-warning text-primary w-100">Buy with <img src={paypal} className="paypal-img" /> </button>
                  </div>
                  <div className='more-payment'>
                    <a href="" >More Payment option </a>
                  </div>
                </div>
              </div>
            </Modal.Body>
          )}
        </Modal.Body>
      </Modal >
      {/* Best Seller */}
      < div style={{ marginTop: '100px', fontFamily: 'Albert Sans' }
      }>
        <Container>
          <Row className="g-5 product-container">
            {products.map((product, index) => (
              <Col xs={6} sm={6} md={4} lg={3} key={index}>
                <div className='product'>
                  <img
                    src={selectedImages[index]}
                    className="img-fluid product-image"
                    alt={product.title}
                  />
                  <div className='overlay'>
                    <div className='icons'>
                      <div className='icon-container'>
                        <div className='icon icon1 '><PiShoppingBag onClick={() => { handleCartModal(product) }} /></div>
                        <div className='icon icon2 mobile-view'><FaRegHeart /></div>
                        <div className='icon icon3 mobile-view'><LiaExpandArrowsAltSolid /></div>
                        <div className='icon icon4'><TbEye onClick={() => { handleEyeModal(product) }} /></div>
                      </div>
                    </div>
                    <div className="sizes">
                      <div className='size-text'>{product.sizes.join(' ')}</div>
                    </div>
                  </div>
                </div>
                <p className="product-title">{product.title}</p>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <div style={{ display: "flex", gap: "10px" }}>
                  {product.colors.map((color) => (
                    <label
                      key={color}
                      htmlFor={`color-${index}-${color}`}
                      className={`color-label ${selectedColors[index] === color ? 'selected' : ''}`}
                      style={{
                        background: selectedColors[index] === color
                          ? `radial-gradient(circle, ${color} 50%, transparent 40%)`
                          : `${color}`,
                        border: selectedColors[index] === color ? "2px solid black" : "1px solid #ccc",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    >
                      <input
                        type="radio"
                        id={`color-${index}-${color}`}
                        name={`colorOptions-${index}`}
                        value={color}
                        checked={selectedColors[index] === color}
                        onChange={() => handleColorChange(index, color)}
                        style={{ display: "none" }}
                      />
                    </label>
                  ))
                  }
                </div>
              </Col>
            ))}
          </Row>

        </Container>
        <div className='load-more'>
          <button className='load-more-btn'>Load More</button>
        </div>
        <button className='RTL-btn'>RTL</button>
      </div >
    </>
  )
}

export default Wishlist
