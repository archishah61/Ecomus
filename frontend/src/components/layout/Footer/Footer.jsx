import React, { useState } from 'react'
import logo from '../../../assets/images/logo.svg'
import { MdArrowOutward } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { FaCcVisa, FaCcPaypal, FaCcMastercard, FaCcAmex, FaCcDiscover } from 'react-icons/fa';

import './Footer.css'



import US from '../../../assets/images/us.svg';
import DE from '../../../assets/images/de.svg';
import FR from '../../../assets/images/fr.svg';
import VN from '../../../assets/images/vn.svg';

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

function Footer() {
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

  return (
    <>
      <div className='footer'>
        <div className="main-row desk-tab-screen">
          <div className="main-col">
            <div className="sub-row">
              <div className="sub-col">
                <img src={logo} alt="" className='footer-logo' />
                <div className="detail">
                  <div className="address">Address : 1234 Fashion Street ,suite 567, new York, NY 10001</div> <br />
                  <div className="email">Email : info@fashionsop.com</div> <br />
                  <div className="phone">Phone : (212) 555-1234</div> <br />
                  <a href="" className='Get-direction'>Get Direction <MdArrowOutward /></a>
                  <br />
                  <div className="footer-social-icons">
                    <div className="rounded-circle footer-social-icon">
                      <TiSocialFacebook className='footer-icon-size' />
                    </div>
                    <div className="rounded-circle footer-social-icon ">
                      <FaXTwitter className='footer-icon-size' />
                    </div>
                    <div className="rounded-circle footer-social-icon ">
                      <FaInstagram className='footer-icon-size' />
                    </div>
                    <div className="rounded-circle footer-social-icon ">
                      <IoLogoTiktok className='footer-icon-size' />
                    </div>
                    <div className="rounded-circle footer-social-icon ">
                      <FaPinterest className='footer-icon-size' />
                    </div>
                  </div>
                </div>
              </div>
              <div className="sub-col">
                <div className="Help">
                  <h5>Help</h5>
                  <div>
                    <p>Privacy Police</p>
                    <p>Return + Exchange</p>
                    <p>Shipping</p>
                    <p>Terms & Condition</p>
                    <p>FAQ&apos;s</p>
                    <p>Compare</p>
                    <p>My wishlist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-col">
            <div className="sub-row">
              <div className="sub-col">
                <div className="About">
                  <h5>About Us</h5>
                  <div>
                    <p>Our Story</p>
                    <p>Visit Our Store</p>
                    <p>Contact Us</p>
                    <p>Account</p>
                  </div>
                </div>
              </div>
              <div className="sub-col">
                <div className="footer-signUp">
                  <h5>Sign Up For Email</h5>
                  <div>
                    <p>Sign up too get first dibs on new arrivals, sales, exclusive content, events and more!</p>

                    <div className="subscribe">
                      <input type="email" name="email" placeholder='Enter your email...' />
                      <button className='sub-btn'>Subscribe <MdArrowOutward /></button>
                    </div>


                  </div>

                  <div style={{ display: 'inline-flex', marginTop: '0px' }}>
                    <div className="dropdown me-2 border-0 footer-select">
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
                    <div>
                      <select name="cars" id="cars" className="footer-select">
                        <option value="volvo">English</option>
                        <option value="saab">Hindi</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="payment desk-tab-screen">
          <hr />
          <div className="row">
            <div className="col-md-6">
              <p className='rights'>2024 Ecomus Store. All Rights Reserved</p>
            </div>
            <div className="col-md-6">
              <div className="payment-icons">
                <FaCcVisa className='pay-icon' color="#1A1F71" />
                <FaCcPaypal className='pay-icon' color="#003087" />
                <FaCcMastercard className='pay-icon' color="#FF5F00" />
                <FaCcAmex className='pay-icon' color="#2E77BC" />
                <FaCcDiscover className='pay-icon' color="#F76B1C" />
              </div>
            </div>
          </div>
        </div>
      </div >
      <div className="mobile-screen">
        <hr />
        <div className="mobile-detail">
          <img src={logo} alt="" className='footer-logo' />
          <div className="detail">
            <div className="address">Address : 1234 Fashion Street ,suite 567, new York, NY 10001</div> <br />
            <div className="email">Email : mailto:info@fashionsop.com</div> <br />
            <div className="phone">Phone : (212) 555-1234</div> <br />
            <a href="" className='Get-direction'>Get Direction <MdArrowOutward /></a>
            <br />
            <div className="footer-social-icons">
              <div className="rounded-circle footer-social-icon">
                <TiSocialFacebook className='footer-icon-size' />
              </div>
              <div className=" rounded-circle footer-social-icon ">
                <FaXTwitter className='footer-icon-size' />
              </div>
              <div className="rounded-circle footer-social-icon ">
                <FaInstagram className='footer-icon-size' />
              </div>
              <div className="rounded-circle footer-social-icon ">
                <IoLogoTiktok className='footer-icon-size' />
              </div>
              <div className="rounded-circle footer-social-icon ">
                <FaPinterest className='footer-icon-size' />
              </div>
            </div>
          </div>


          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Help
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="Help">
                    <div>

                      <p>Privacy Police</p>
                      <p>Return + Exchange</p>
                      <p>Shipping</p>
                      <p>Terms & Condition</p>
                      <p>FAQ&apos;s</p>
                      <p>Compare</p>
                      <p>My wishlist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  About
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="About">
                    <div>
                      <p>Our Story</p>
                      <p>Visit Our Store</p>
                      <p>Contact Us</p>
                      <p>Account</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Sign Up for Email
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="footer-signUp">
                    <div>
                      <p>Sign up too get first dibs on new arrivals, sales, exclusive content, events and more!</p>

                      <div className="subscribe">
                        <input type="email" name="email" placeholder='Enter your email...' />
                        <button className='sub-btn'>Subscribe <MdArrowOutward /></button>
                      </div>


                    </div>

                    <div style={{ display: 'inline-flex', marginTop: '0px' }}>
                      <div className="dropdown me-2 border-0 footer-select">
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
                      <div>
                        <select name="cars" id="cars" className="footer-select">
                          <option value="volvo">English</option>
                          <option value="saab">Hindi</option>
                        </select>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="payment">
          <hr />
          <div className="row">
            <div className="col-md-6">
              <p className='rights'>2024 Ecomus Store. All Rights Reserved</p>
            </div>
            <div className="col-md-6">
              <div className="payment-icons">
                <FaCcVisa className='pay-icon' color="#1A1F71" />
                <FaCcPaypal className='pay-icon' color="#003087" />
                <FaCcMastercard className='pay-icon' color="#FF5F00" />
                <FaCcAmex className='pay-icon' color="#2E77BC" />
                <FaCcDiscover className='pay-icon' color="#F76B1C" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
