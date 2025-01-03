import React, { createContext, useState, useEffect } from 'react';

// Create the context
const AdminContext = createContext();

// Create a provider component
const AdminProvider = ({ children }) => {
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
        // Check localStorage for a stored login state
        const storedLoginState = localStorage.getItem('isAdminLoggedIn');
        return storedLoginState === 'true'; // Convert string to boolean
    });

    const login = () => {
        setIsAdminLoggedIn(true);
        localStorage.setItem('isAdminLoggedIn', 'true'); // Store login state in localStorage
        // Set expiration for 1 day
        localStorage.setItem('loginTime', Date.now());
    };

    const logout = () => {
        setIsAdminLoggedIn(false);
        localStorage.removeItem('isAdminLoggedIn'); // Remove login state from localStorage
        localStorage.removeItem('loginTime'); // Clear login time
    };

    useEffect(() => {
        // Check if the login state is older than 1 day (86400000 milliseconds)
        const loginTime = localStorage.getItem('loginTime');
        if (loginTime && (Date.now() - loginTime > 86400000)) {
            logout(); // Automatically log out if more than 1 day has passed
        }
    }, []);

    return (
        <AdminContext.Provider value={{ isAdminLoggedIn, login, logout }}>
            {children}
        </AdminContext.Provider>
    );
};

// Export the context and provider
export { AdminContext, AdminProvider };
