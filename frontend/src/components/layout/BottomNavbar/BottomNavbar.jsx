import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import './BottomNavbar.css';
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBag2Line } from "react-icons/ri";

function BottomNavbar({ handleCartOpen, setLoginModal, handleSearchShow }) {
    return (
        <div className="bottom-navbar">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid justify-content-around">
                    <NavLink to="#" className="nav-link active">
                        <div className="bottom-navbar-item">
                            <HiOutlineSquares2X2 />
                            <p>Shop</p>
                        </div>
                    </NavLink>
                    <NavLink onClick={handleSearchShow} to="#" className="nav-link active">
                        <div className="bottom-navbar-item">
                            <IoSearch />
                            <p>Search</p>
                        </div>
                    </NavLink>
                    <NavLink onClick={() => { setLoginModal(true) }} to="#" className="nav-link active">
                        <div className="bottom-navbar-item">
                            <FaRegUser />
                            <p>Account</p>
                        </div>
                    </NavLink>
                    <NavLink to="/wishlist" className="nav-link active">
                        <div className="position-relative bottom-navbar-item item-last">
                            <span className="position-relative translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.75rem', padding: '0.25rem 0.4rem' }}>
                                0
                                <span className="visually-hidden">unread messages</span>
                            </span>
                            <FaRegHeart className="text-dark" style={{ fontSize: '20px' }} />
                            <p>Wishlist</p>
                        </div>
                    </NavLink>
                    <NavLink to="#" className="nav-link active">
                        <div className="position-relative bottom-navbar-item item-last">
                            <span className="position-relative translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.75rem', padding: '0.25rem 0.4rem' }}>
                                0
                                <span className="visually-hidden">unread messages</span>
                            </span>
                            <RiShoppingBag2Line onClick={handleCartOpen} className="text-dark" style={{ fontSize: '20px' }} />
                            <p>Cart</p>
                        </div>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}

export default BottomNavbar;
