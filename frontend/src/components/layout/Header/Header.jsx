import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBag2Line } from "react-icons/ri";
import logo from '../../../assets/images/logo.svg';
import menu from '../../../assets/images/menu.svg';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { HiOutlinePlus } from "react-icons/hi2";
import US from '../../../assets/images/us.svg';
import DE from '../../../assets/images/de.svg';
import FR from '../../../assets/images/fr.svg';
import VN from '../../../assets/images/vn.svg';
import './Header.css'
import CartSidebar from './CartSidebar/CartSidebar';
import LoginModal from '../../Model-Boxes/User-Modals/LoginModal/LoginModal';
import ForgotPass from '../../Model-Boxes/User-Modals/ForgotPassModal/ForgotPass';
import RegisterModal from '../../Model-Boxes/User-Modals/RegisterModal/RegisterModal';
import cat1 from '../../../assets/images/collection-1.jpg';
import cat2 from '../../../assets/images/collection-2.jpg';
import home01 from '../../../assets/images/home-01.jpg'
import home02 from '../../../assets/images/home-02.jpg'
import home03 from '../../../assets/images/home-03.jpg'
import home04 from '../../../assets/images/home-04.jpg'
import home05 from '../../../assets/images/home-05.jpg'
import home06 from '../../../assets/images/home-06.jpg'
import home07 from '../../../assets/images/home-07.jpg'
import home08 from '../../../assets/images/home-08.jpg'
import home09 from '../../../assets/images/home-accessories.jpg'
import home10 from '../../../assets/images/home-activewear.jpg'
import home11 from '../../../assets/images/home-baby.jpg'
import home12 from '../../../assets/images/home-decor.jpg'
import BottomNavbar from '../BottomNavbar/BottomNavbar';
import SearchSidebar from './SearchSidebar/SearchSidebar';
import StarRatings from 'react-star-ratings';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import axios from 'axios'; // Make sure to install axios


const countries = [
    { value: "1", label: "EUR", flag: DE },
    { value: "2", label: "VND", flag: VN },
    { value: "3", label: "EUR", flag: FR },
    { value: "4", label: "USD", flag: US },
];

const languages = [
    { value: "1", label: "English" },
    { value: "2", label: "Spanish" },
    { value: "3", label: "French" },
];


function Header() {
    const [selectedCountry, setSelectedCountry] = useState(countries[3]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [productTitle, setProductTitle] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const productId = 1; // Example product ID

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setDropdownOpen(false);
    };

    const toggleCountryDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLanguageSelect = (event) => {
        const selectedValue = event.target.value;
        const selectedLanguage = languages.find(language => language.value === selectedValue);
        setSelectedLanguage(selectedLanguage);
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send review data to the backend
            await axios.post('http://localhost:3000/reviews', {
                productId,
                rating,
                description,
                imageUrl,
                productTitle,
                productPrice,
            });
            // Reset form fields
            setRating(0);
            setDescription('');
            setImageUrl('');
            setProductTitle('');
            setProductPrice('');
            setShowReviewModal(false); // Close the modal after submission
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };


    const [isScrolled, setIsScrolled] = useState(false);

    // Sidebar
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Cart-Sidebar
    const [showCart, setShowCart] = useState(false);

    const handleCartClose = () => setShowCart(false);
    const handleCartOpen = () => setShowCart(true);

    // Search-Sidebar
    const [showSearch, setShowSearch] = useState(false);
    const handleSearchClose = () => setShowSearch(false);
    const handleSearchShow = () => setShowSearch(true);

    //Login Modal
    const [loginModal, setLoginModal] = useState(false);
    const [forgotPass, setForgotPass] = useState(false);
    const [register, setRegister] = useState(false);

    return (
        <>
            {/* Login Modal */}
            <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} setForgotPass={setForgotPass} setRegister={setRegister} />
            {/* Forgot Password */}
            <ForgotPass setLoginModal={setLoginModal} forgotPass={forgotPass} setForgotPass={setForgotPass} />
            {/* Register Modal */}
            <RegisterModal register={register} setRegister={setRegister} setLoginModal={setLoginModal} />
            {/* Sidebar */}
            <div>
                <Offcanvas className='sidebar' show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton></Offcanvas.Header>
                    <Offcanvas.Body className='sidebar-body'>
                        <div className="dropdown">
                            <NavLink to="#" className="navlink">Home</NavLink>
                            <div className="dropdown-content">
                                <NavLink to="#" className="dropdown-item">Featured</NavLink>
                                <NavLink to="#" className="dropdown-item">New Arrivals</NavLink>
                                <NavLink to="#" className="dropdown-item">Bestsellers</NavLink>
                                <NavLink to="#" className="dropdown-item">Special Offers</NavLink>
                            </div>
                            <span className='plus-icon-home'><HiOutlinePlus /></span>
                        </div>
                        <div className="dropdown">
                            <NavLink to="#" className="navlink">Shop</NavLink>
                            <div className="dropdown-content">
                                <NavLink to="#" className="dropdown-item">Featured</NavLink>
                                <NavLink to="#" className="dropdown-item">New Arrivals</NavLink>
                                <NavLink to="#" className="dropdown-item">Bestsellers</NavLink>
                                <NavLink to="#" className="dropdown-item">Special Offers</NavLink>
                            </div>
                            <span className='plus-icon-shop'><HiOutlinePlus /></span>
                        </div>
                        <div className="dropdown">
                            <NavLink to="#" className="navlink">Product</NavLink>
                            <div className="dropdown-content">
                                <NavLink to="#" className="dropdown-item">Featured</NavLink>
                                <NavLink to="#" className="dropdown-item">New Arrivals</NavLink>
                                <NavLink to="#" className="dropdown-item">Bestsellers</NavLink>
                                <NavLink to="#" className="dropdown-item">Special Offers</NavLink>
                            </div>
                            <span className='plus-icon-product'><HiOutlinePlus /></span>
                        </div>
                        <div className="dropdown">
                            <NavLink to="#" className="navlink">Pages</NavLink>
                            <div className="dropdown-content">
                                <NavLink to="#" className="dropdown-item">Featured</NavLink>
                                <NavLink to="#" className="dropdown-item">New Arrivals</NavLink>
                                <NavLink to="#" className="dropdown-item">Bestsellers</NavLink>
                                <NavLink to="#" className="dropdown-item">Special Offers</NavLink>
                            </div>
                            <span className='plus-icon-pages'><HiOutlinePlus /></span>
                        </div>
                        <div className="dropdown">
                            <NavLink to="#" className="navlink">Blog</NavLink>
                            <div className="dropdown-content">
                                <NavLink to="#" className="dropdown-item">Featured</NavLink>
                                <NavLink to="#" className="dropdown-item">New Arrivals</NavLink>
                                <NavLink to="#" className="dropdown-item">Bestsellers</NavLink>
                                <NavLink to="#" className="dropdown-item">Special Offers</NavLink>
                            </div>
                            <span className='plus-icon-blog'><HiOutlinePlus /></span>
                        </div>
                        <div>
                            <NavLink to="#" className="navlink">Buy Now</NavLink>
                        </div>
                        <div className="d-flex gap-3">
                            <Button style={{ backgroundColor: 'lightgrey', color: 'black' }} variant="outline-light">
                                <FaRegHeart className="text-dark me-3" style={{ fontSize: '18px' }} />
                                Wishlist
                            </Button>
                            <Button variant="dark" size='sm' style={{ width: '26%' }}>
                                <IoSearchSharp className='me-2' style={{ fontSize: '18px' }} />
                                Search
                            </Button>
                        </div>

                        <div className='info'>
                            <a href="#" class="link-dark text-decoration-underline fw-bold">Need Help?</a>
                            <p>
                                Address: 1234 Fashion Street, Suite 567, New York NY 10001
                            </p>
                            <p>Email: info@fashionshop.com</p>
                            <p>Phone: (212) 555-1234</p>
                        </div>

                        <div className="sidebar-footer">
                            <Button onClick={() => { setLoginModal(true) }} style={{ backgroundColor: 'lightgrey', color: 'black' }} variant="outline-light">
                                <FaRegUser className="text-dark me-3" style={{ fontSize: '18px' }} />
                                Login
                            </Button>
                            <hr />
                            <div className="sidebar-select">

                                <div className="dropdown me-2 border-0">
                                    <button
                                        className="btn dropdown-toggle d-flex align-items-center"
                                        type="button"
                                        id="countryDropdown"
                                        onClick={toggleCountryDropdown}
                                        aria-expanded={dropdownOpen}
                                    >
                                        <img
                                            src={selectedCountry.flag}
                                            alt={`${selectedCountry.label} flag`}
                                            style={{ width: '20px', height: '20px', marginRight: '10px' }}
                                        />
                                        {selectedCountry.label}
                                    </button>
                                    {dropdownOpen && (
                                        <ul className="dropdown-menu show" aria-labelledby="countryDropdown">
                                            {countries.map(country => (
                                                <li
                                                    key={country.value}
                                                    className="dropdown-item d-flex align-items-center"
                                                    onClick={() => handleCountrySelect(country)}
                                                >
                                                    <img
                                                        src={country.flag}
                                                        alt={`${country.label} flag`}
                                                        style={{ width: '20px', height: '20px', marginRight: '10px' }}
                                                    />
                                                    {country.label}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <select
                                    className="form-select select-lang border-0"
                                    aria-label="Language select"
                                    value={selectedLanguage.value}
                                    onChange={handleLanguageSelect}
                                >
                                    {languages.map(language => (
                                        <option key={language.value} value={language.value}>
                                            {language.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            {/* Cart Sidebar */}
            <CartSidebar showCart={showCart} handleCartClose={handleCartClose} />
            {/* Search Sidebar */}
            <SearchSidebar showSearch={showSearch} handleSearchClose={handleSearchClose} />
            {/* Bottom Navbar */}
            <BottomNavbar handleCartOpen={handleCartOpen} setLoginModal={setLoginModal} handleSearchShow={handleSearchShow} />
            {/* Header */}
            <nav className={`navbar ${isScrolled ? 'sticky' : ''}`}>
                <div className="navbar-left">
                    <button className="menu-btn" onClick={handleShow}>
                        <img src={menu} alt="Menu" />
                    </button>
                    <NavLink className='logo' to="/">
                        <img src={logo} alt="Logo" />
                    </NavLink>
                </div>
                <div className={`navbar-center`}>
                    <div className="dropdown">
                        <NavLink to="#" className="navlink navlink-main">Home</NavLink>
                        {/* Giant Box */}
                        <div className="giant-box " id="giantBox">
                            <div className="dropdown-content row">
                                <div className="col">
                                    <div className="home-explore">
                                        <img className='home-imgs' src={home01} alt="" />
                                        <p className='home-page-name'>Home Fashion 01</p>
                                    </div>
                                    <div className="home-explore">
                                        <img className='home-imgs' src={home02} alt="" />
                                        <p className='home-page-name'>Home Fashion 02</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="home-explore">
                                        <img className='home-imgs' src={home03} alt="" />
                                        <p className='home-page-name'>Home Fashion 03</p>
                                    </div>
                                    <div className="home-explore">
                                        <img className='home-imgs' src={home04} alt="" />
                                        <p className='home-page-name'>Home Fashion 04</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="home-explore">
                                        <img className='home-imgs' src={home05} alt="" />
                                        <p className='home-page-name'>Home Fashion 05</p>
                                    </div>
                                    <div className="home-explore">
                                        <img className='home-imgs' src={home06} alt="" />
                                        <p className='home-page-name'>Home Fashion 06</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="home-explore">
                                        <img className='home-imgs' src={home07} alt="" />
                                        <p className='home-page-name'>Home Fashion 07</p>
                                    </div>
                                    <div className="home-explore">
                                        <img className='home-imgs' src={home08} alt="" />
                                        <p className='home-page-name'>Home Fashion 08</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="home-explore">
                                        <img className='home-imgs' src={home09} alt="" />
                                        <p className='home-page-name'>Home Fashion 09</p>
                                    </div>
                                    <div className="home-explore">
                                        <img className='home-imgs' src={home10} alt="" />
                                        <p className='home-page-name'>Home Fashion 10</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="home-explore">
                                        <img className='home-imgs' src={home11} alt="" />
                                        <p className='home-page-name'>Home Fashion 11</p>
                                    </div>
                                    <div className="home-explore">
                                        <img className='home-imgs' src={home12} alt="" />
                                        <p className='home-page-name'>Home Fashion 12</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <NavLink to="#" className="navlink navlink-main">Shop</NavLink>
                        <div className="giant-box " id="giantBox">
                            <div className="dropdown-content row">
                                <div className="col">
                                    <p>SHOP LAYOUTS</p>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-1</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-2</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-3</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-4</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-5</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-6</NavLink>
                                    </div>
                                </div>
                                <div className="col">
                                    <p>FEATURES</p>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-1</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-2</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-3</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-4</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-5</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-6</NavLink>
                                    </div>
                                </div>
                                <div className="col">
                                    <p>PRODUCT STYLES</p>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-1</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-2</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-3</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-4</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-5</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-6</NavLink>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="men-img">
                                        <button className='cat-btn'>Men</button>
                                        <img src={cat1} alt="" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="men-img">
                                        <button className='cat-btn'>Women</button>

                                        <img src={cat2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <NavLink to="#" className="navlink navlink-main">Products</NavLink>
                        <div className="giant-box " id="giantBox">
                            <div className="dropdown-content row">
                                <div className="col">
                                    <p>SHOP LAYOUTS</p>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-1</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-2</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-3</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-4</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-5</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-6</NavLink>
                                    </div>
                                </div>
                                <div className="col">
                                    <p>FEATURES</p>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-1</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-2</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-3</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-4</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-5</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-6</NavLink>
                                    </div>
                                </div>
                                <div className="col">
                                    <p>PRODUCT STYLES</p>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-1</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-2</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-3</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-4</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-5</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-6</NavLink>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="men-img">
                                        <button className='cat-btn'>Men</button>
                                        <img src={cat1} alt="" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="men-img">
                                        <button className='cat-btn'>Women</button>

                                        <img src={cat2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <NavLink to="#" className="navlink navlink-main">Pages</NavLink>
                        <div className="giant-box " id="giantBox">
                            <div className="dropdown-content row">
                                <div className="col">
                                    <p>SHOP LAYOUTS</p>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-1</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-2</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-3</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-4</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-5</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-6</NavLink>
                                    </div>
                                </div>
                                <div className="col">
                                    <p>FEATURES</p>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-1</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-2</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-3</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-4</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-5</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-6</NavLink>
                                    </div>
                                </div>
                                <div className="col">
                                    <p>PRODUCT STYLES</p>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-1</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-2</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-3</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-4</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-5</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-6</NavLink>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="men-img">
                                        <button className='cat-btn'>Men</button>
                                        <img src={cat1} alt="" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="men-img">
                                        <button className='cat-btn'>Women</button>

                                        <img src={cat2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <NavLink to="#" className="navlink navlink-main">Blogs</NavLink>
                        <div className="giant-box " id="giantBox">
                            <div className="dropdown-content row">
                                <div className="col">
                                    <p>SHOP LAYOUTS</p>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-1</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-2</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-3</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-4</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-5</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-6</NavLink>
                                    </div>
                                </div>
                                <div className="col">
                                    <p>FEATURES</p>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-1</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-2</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-3</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-4</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-5</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-6</NavLink>
                                    </div>
                                </div>
                                <div className="col">
                                    <p>PRODUCT STYLES</p>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-1</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-2</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-3</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-4</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-5</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="#" className="navlink">Page-6</NavLink>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="men-img">
                                        <button className='cat-btn'>Men</button>
                                        <img src={cat1} alt="" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="men-img">
                                        <button className='cat-btn'>Women</button>

                                        <img src={cat2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <NavLink to="#" className="navlink ">Buy Now</NavLink>
                    </div>
                </div>
                <div className="navbar-right">
                    <Button onClick={() => setShowReviewModal(true)}>Add Review</Button>
                    <button onClick={handleSearchShow} className="header-icon search"><IoSearchSharp /></button>
                    <button onClick={() => { setLoginModal(true) }} className="header-icon user"><FaRegUser /></button>
                    <button className="header-icon wishlist">
                        <div className="position-relative">
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.75rem', padding: '0.25rem 0.4rem' }}>
                                0
                                <span className="visually-hidden">unread messages</span>
                            </span>
                            <NavLink to='/wishlist'>
                                <FaRegHeart className="text-dark" style={{ fontSize: '20px' }} />
                            </NavLink>
                        </div>
                    </button>
                    <button className="header-icon cart">
                        <div className="position-relative">
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.75rem', padding: '0.25rem 0.4rem' }}>
                                0
                                <span className="visually-hidden">unread messages</span>
                            </span>
                            <RiShoppingBag2Line onClick={handleCartOpen} className="text-dark" style={{ fontSize: '20px' }} />
                        </div>
                    </button>
                </div>
            </nav>
            {/* Review Modal */}
            <Modal show={showReviewModal} onHide={() => setShowReviewModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <StarRatings
                            rating={rating}
                            starRatedColor="gold"
                            changeRating={handleRatingChange}
                            numberOfStars={5}
                            name='rating'
                        />
                        <div className="form-group mt-3">
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Write your review..."
                                rows="4"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <input
                                type="file"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                placeholder="Product Image URL"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <input
                                type="text"
                                value={productTitle}
                                onChange={(e) => setProductTitle(e.target.value)}
                                placeholder="Product Title"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <input
                                type="text"
                                value={productPrice}
                                onChange={(e) => setProductPrice(e.target.value)}
                                placeholder="Product Price"
                                className="form-control"
                            />
                        </div>
                        <Button type="submit" variant="primary" className="mt-3">Submit Review</Button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Header;