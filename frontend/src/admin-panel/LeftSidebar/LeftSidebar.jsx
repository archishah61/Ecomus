import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LeftSidebar.css'; // Custom CSS for styling
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from 'react-router-dom'; // Import NavLink
import { Outlet } from "react-router-dom";
import { AdminContext } from '../../context/AdminContext';
import { useNavigate } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
function LeftSidebar({ isSidebarCollapsed }) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const { logout } = useContext(AdminContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logout();
        navigate('/admin');

    }
    return (
        <div className={`wrapper ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <nav className="sidebar">
                <h2>Admin Panel</h2>
                <Accordion className='sidebar-accordion'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Home</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    <NavLink to="/admin-panel/" className="active">Hero</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/admin-panel/marquee" className="active">Marquee</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/admin-panel/shop-by-cat" className="active">Shop By Catagory</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/admin-panel/best-seller" className="active">Best Seller</NavLink>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Wishlist</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    <NavLink to="/admin-panel/wishlist" className="active">Wishlist</NavLink>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </nav>
            <div className="main-content">
                <button onClick={toggleSidebar} id='btn-right-menu' className="button">
                    <span className="button_lg">
                        <span className="button_sl"></span>
                        <span className="button_text"><RxHamburgerMenu /></span>
                    </span>
                </button>
                <button onClick={handleLogOut} id='btn-leftsidebar' className="button">
                    <span className="button_lg">
                        <span className="button_sl"></span>
                        <span className="button_text">Log out</span>
                    </span>
                </button>
                <div className={`flex-grow p-4 transition-all duration-300 ${isSidebarCollapsed ? "ml-16" : "ml-64"}`}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default LeftSidebar;
