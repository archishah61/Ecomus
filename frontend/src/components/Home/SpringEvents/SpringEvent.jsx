import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import axios from "axios"; // Import axios for making HTTP requests
import './SpringEvent.css';
import { IoIosFlash } from "react-icons/io";
function SpringEvent() {
    const [marqueeData, setMarqueeData] = useState([]); // State to hold marquee data

    // Function to fetch marquee data from the backend
    const fetchMarqueeData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/marquee'); // Adjust the URL as necessary
            setMarqueeData(response.data); // Set the fetched data to state
        } catch (error) {
            console.error('Error fetching marquee data:', error);
        }
    };

    // Fetch marquee data on component mount
    useEffect(() => {
        fetchMarqueeData();
    }, []);

    return (
        <Marquee style={{ backgroundColor: "#fcffb2", height: "70px", top: '-56px' }} direction="left" speed={70}>
            {marqueeData.map((item, index) => (
                <h4 key={index} className="marquee-text">
                    <IoIosFlash />
                    {item.text} {/* Display the text from the fetched data */}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </h4>
            ))}
            {marqueeData.map((item, index) => (
                <h4 key={index} className="marquee-text">
                    <IoIosFlash />
                    {item.text} {/* Display the text from the fetched data */}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </h4>
            ))}
            {marqueeData.map((item, index) => (
                <h4 key={index} className="marquee-text">
                    <IoIosFlash />
                    {item.text} {/* Display the text from the fetched data */}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </h4>
            ))}
            {marqueeData.map((item, index) => (
                <h4 key={index} className="marquee-text">
                    <IoIosFlash />
                    {item.text} {/* Display the text from the fetched data */}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </h4>
            ))}
            {marqueeData.map((item, index) => (
                <h4 key={index} className="marquee-text">
                    <IoIosFlash />
                    {item.text} {/* Display the text from the fetched data */}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </h4>
            ))}
        </Marquee>
    );
}

export default SpringEvent;
