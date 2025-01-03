import React, { useContext, useState } from 'react';
import './Admin.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../../context/AdminContext';

function Admin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState({ text: '', type: '' });
    const navigate = useNavigate();

    const { login } = useContext(AdminContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === '123') {
            console.log('Admin logged in!');
            //Loggin in admin in context
            login();
            setMessage({ text: 'Login successful! Redirecting to admin panel...', type: 'success' });
            navigate('/admin-panel');
        } else {
            console.log('Admin log in failed!');
            setMessage({ text: 'Username or password is incorrect.', type: 'danger' });
        }
    };

    return (
        <div className='admin-form'>
            <form className="form" onSubmit={handleSubmit}>
                <p className="form-title">Log in to Admin Panel</p>
                <div className="input-container">
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter Username"
                        type="text"
                    />
                </div>
                <div className="input-container">
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                        type="password"
                    />
                </div>
                <Button variant="outline-dark login-btn" type='submit'>Log in</Button>
            </form>

            {message.text && (
                <div style={{ width: '97%' }} className={`alert alert-${message.type} alert-dismissible fade show`} role="alert">
                    <strong>{message.type === 'success' ? 'Success!' : 'Error!'}</strong> {message.text}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )}
        </div>
    );
}

export default Admin;
