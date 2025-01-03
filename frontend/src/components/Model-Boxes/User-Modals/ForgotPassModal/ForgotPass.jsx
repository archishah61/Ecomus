import React from 'react'
import Modal from 'react-bootstrap/Modal';

function ForgotPass({ forgotPass, setForgotPass, setLoginModal }) {
    return (
        <div>
            <Modal className="user-icon-model" centered show={forgotPass} onHide={() => setLoginModal(false)} style={{ overflow: 'hidden' }}>
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
                    onClick={() => setForgotPass(false)}
                    aria-label="Close"
                ></button>
                <Modal.Title className="user-icon-title">Reset Your Password</Modal.Title>
                <Modal.Body>
                    <div className="reset-pass-text">
                        <p>Sign up for early Sale access plus tailored new arrivals, trends and promotions. to opt out, click unsubscribe in our emails  </p>
                    </div>

                    <div>
                        <input type="email" placeholder="password*" className="user-icon-pass" />
                    </div>

                    <div className="user-icon-forgot-pass">
                        <a href="#" className="text-black " onClick={() => { setForgotPass(false), setLoginModal(true) }}>Cancel</a>
                    </div>

                    <div className="user-icon-popup" >
                        <button className="bg-black text-white user-icon-login reset-pass">Reset Password</button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ForgotPass
