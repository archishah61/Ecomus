import React from 'react'
import Modal from 'react-bootstrap/Modal';

function RegisterModal({register,setLoginModal,setRegister}) {
  return (
     <div >
                    <Modal className="create-account-modal" centered show={register} onHide={() => setLoginModal(false)} style={{ overflow: 'hidden' }}>
                        <button
                            className="btn-close"
                            style={{
                                position: 'absolute',
                                top: '30px',
                                right: '40px',
                                zIndex: '1051',
                                backgroundColor: 'transparent',
                                border: 'none',
                            }}
                            onClick={() => setRegister(false)}
                            aria-label="Close"
                        ></button>
                        <Modal.Title className="user-icon-title">Register</Modal.Title>
                        <Modal.Body>
    
                            <div>
                                <input type="text" placeholder="First Name" className="user-icon-pass" />
                            </div>
    
                            <div>
                                <input type="text" placeholder="Last Name" className="user-icon-pass" />
                            </div>
    
                            <div>
                                <input type="email" placeholder="Email*" className="user-icon-pass" />
                            </div>
    
                            <div>
                                <input type="password" placeholder="password*" className="user-icon-pass" />
                            </div>
    
                            <div className="user-icon-popup" >
                                <div className="row" style={{ width: '105%' }}>
                                    <div className="col-6" >
                                        <button className="w-100 bg-black text-white user-icon-login ">Register</button>
                                    </div>
                                    <div className="col-6" style={{ fontSize: '12px', marginTop: '7px', marginLeft: '-13px' }}>
                                        <div> <a href="#" className="text-black" onClick={() => { setRegister(false), setLoginModal(true) }}>Already Have an account?Log in here?</a> </div>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
  )
}

export default RegisterModal
