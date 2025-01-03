import React from 'react'
import './SearchSidebar.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoIosSearch } from "react-icons/io";
import img1 from '../../../../assets/images/white-3.jpg'
import img2 from '../../../../assets/images/white-2.jpg'
import img3 from '../../../../assets/images/white-1.jpg'
function SearchSidebar({ handleSearchClose, showSearch }) {
    const Products = [
        { id: 1, name: "Cotton jersey top", price: 25.0, image: img1 },
        { id: 2, name: "Mini crossbody bag", price: 50.0, image: img2 },
        { id: 3, name: "Oversized printed t-shirt", price: 50.0, image: img3 },
    ];
    return (
        <div>
            <Offcanvas className="search-side" placement="end" show={showSearch} onHide={handleSearchClose}>
                <Offcanvas.Header>
                    <Offcanvas.Title>Search Our Site</Offcanvas.Title>
                    <button
                        className="btn-close"
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '40px',
                            zIndex: '1051',
                            backgroundColor: 'transparent',
                            border: 'none',
                        }}
                        onClick={() => handleSearchClose(false)}
                        aria-label="Close"
                    ></button>
                </Offcanvas.Header>
                <Offcanvas.Body style={{ marginTop: '-20px' }}>
                    <div className='d-flex Searchbar-input my-3' style={{ position: 'relative' }}>
                        <input type="text" placeholder='Search' style={{ paddingLeft: '50px', height: '50px', width: '350px', fontSize: '20px', borderRadius: '5px', border: '1px solid black' }} />

                        <div style={{ position: 'absolute', left: '5%', fontSize: '30px' }}>

                            <IoIosSearch />
                        </div>
                    </div>

                    <hr className='my-4' />

                    <div >
                        <span>Quick Links</span> <br />
                        <div className='d-flex flex-column my-4 '>
                            <a href="#" className='text-black text-decoration-none my-1'>Fashion</a>
                            <a href="#" className='text-black text-decoration-none my-1' >Men</a>
                            <a href="#" className='text-black text-decoration-none my-1'>Women</a>
                            <a href="#" className='text-black text-decoration-none my-1'>Accessories</a>
                        </div>
                    </div>

                    <h6>Need some inspiration ?</h6>

                    <div className='d-flex flex-column'>

                        {Products.map((product) => (
                            <div key={product.id} style={{ marginTop: '-20px' }}>
                                <div className="d-flex my-4" >
                                    <div>
                                        <img src={product.image} alt="" height={100} width={85} style={{ border: '1px solid white', borderRadius: '5px' }} />
                                    </div>
                                    <div className="d-flex flex-column mx-3">
                                        <span className='Search-name'>{product.name}</span>
                                        <span style={{ fontSize: '13px' }}>{product.color}</span>
                                        <span>

                                            <b>${(product.price).toFixed(2)}</b>
                                        </span>

                                    </div>

                                </div>
                                <hr />


                            </div>
                        ))}


                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default SearchSidebar
