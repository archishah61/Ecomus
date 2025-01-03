import React, { useEffect, useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import axios from 'axios';
import './ShopByCategory.css';

function ShopByCategory() {
    const [categories, setCategories] = useState([]); // State to hold categories
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for error handling

    // Fetch categories from backend
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:3000/shopbycat'); // Adjust URL as necessary
                setCategories(response.data); // Set categories state with fetched data
            } catch (err) {
                console.error('Error fetching categories:', err);
                setError('Failed to load categories'); // Set error message
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchCategories();
    }, []); // Empty dependency array means this effect runs once after initial render

    if (loading) {
        return <div>Loading...</div>; // Display loading message while fetching data
    }

    if (error) {
        return <div>{error}</div>; // Display error message if there's an error
    }

    return (
        <div className='ShopByCatTest container-fluid d-flex row'>
            <div className="col-md-9">
                <Swiper
                    slidesPerView={3} // Default slides per view
                    spaceBetween={30}
                    navigation
                    className='main-swiper'
                    breakpoints={{
                        375: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <span className="shopbycatHeader">Shop by Category</span>
                    {categories.map((category, index) => (
                        <SwiperSlide key={index}>
                            <div className="swipe">
                                <img src={category.img} alt={category.caption} /> {/* Adjusted for response structure */}
                                <button type="button" className="cat-btn">
                                    {category.caption} {/* Adjusted for response structure */}
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="col-md-3">
                <div className="discover px-3 fs-3">
                    <div className="discover-container">
                        <p>Discover all new items</p>
                        <div className='discover-arrow' style={{ justifySelf: 'center' }}>
                            <GoArrowUpRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopByCategory;
