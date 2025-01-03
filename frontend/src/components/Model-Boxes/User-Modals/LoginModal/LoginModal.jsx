import React from 'react'
import Modal from 'react-bootstrap/Modal';

function LoginModal({ loginModal, setLoginModal, setForgotPass, setRegister }) {
    return (
        <div >
            <Modal className="user-icon-model" centered show={loginModal} onHide={() => setLoginModal(false)} style={{ overflow: 'hidden' }}>
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
                    onClick={() => setLoginModal(false)}
                    aria-label="Close"
                ></button>
                <Modal.Title className="user-icon-title">Login</Modal.Title>
                <Modal.Body>
                    <div>
                        <input type="email" placeholder="Email*" className="user-icon-email" />
                    </div>

                    <div>
                        <input type="email" placeholder="password*" className="user-icon-pass" />
                    </div>

                    <div className="user-icon-forgot-pass">
                        <a href="#" className="text-black " onClick={() => { setForgotPass(true), setLoginModal(false) }} >Forgot Your Password?</a>
                    </div>

                    <div className="user-icon-popup" >
                        <div className="row" style={{ width: '101%' }}>
                            <div className="col-6" >
                                <button className="w-100 bg-black text-white user-icon-login ">Login</button>
                            </div>
                            <div className="col-6" style={{ fontSize: '12px', marginTop: '5px' }}>
                                <div> <a href="#" className="text-black" onClick={() => { setRegister(true), setLoginModal(false) }}>New Customer?Create Your Account?</a> </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default LoginModal
