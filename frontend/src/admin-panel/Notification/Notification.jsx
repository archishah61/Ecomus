import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { FaCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";

const Notification = ({ show, message, type, onClose }) => {
    // Determine the icon based on the type
    const icon = type === 'success' ? <FaCircleCheck className="me-2" /> : <MdError className="me-2" />;

    return (
        <ToastContainer position="top-end" className="p-3">
            <Toast show={show} onClose={onClose} bg={type} delay={4000} autohide>
                <Toast.Body className="d-flex align-items-center">
                    {icon} {/* Display the appropriate icon */}
                    {message}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
};

export default Notification;
