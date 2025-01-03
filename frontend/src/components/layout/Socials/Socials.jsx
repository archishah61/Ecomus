import React, { useEffect, useState } from 'react';
import { FaInstagram, FaTiktok, FaPinterest, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { GoArrowUpRight } from 'react-icons/go';
import { NavLink } from 'react-router-dom';

import US from '../../../assets/images/us.svg';
import DE from '../../../assets/images/de.svg';
import FR from '../../../assets/images/fr.svg';
import VN from '../../../assets/images/vn.svg';
import './Socials.css';

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

function Socials() {
    const [selectedCountry, setSelectedCountry] = useState(countries[3]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

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

    const [isMobile, setIsMobile] = useState();
    const [isTablet, setIsTablet] = useState();
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
            setIsTablet(window.innerWidth <= 768);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <div className="main-socials container-fluid d-flex justify-content-between align-items-center">
            <div className="social-icons">
                {[FaFacebookF, FaXTwitter, FaInstagram, FaTiktok, FaPinterest].map((Icon, index) => (
                    <div key={index} className="social-icon">
                        <Icon size={15} />
                    </div>
                ))}
            </div>


            <div className="d-flex center-div">

                {isMobile ? <h2 style={{ marginTop: '4px' }}>Time to refresh your wardrobe.</h2> : isTablet ? <h2 style={{ marginTop: '4px' }}>Summer sale discount off 70%</h2> :
                    <>
                        <h2 style={{ marginTop: '4px', marginLeft: "60px" }}>Spring Fashion on Sale</h2>
                        <NavLink className="ms-2 text-danger">
                            Shop now <GoArrowUpRight />
                        </NavLink>
                    </>
                }


            </div>

            <div className="right-div">
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
                    className="form-select border-0"
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
    );
}

export default Socials;
