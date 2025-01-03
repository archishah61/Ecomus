import React, { useContext, useState } from 'react';
import { AdminContext } from '../../context/AdminContext';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import { NavLink } from 'react-router-dom'; // Ensure you're using 'react-router-dom'
import './AdminPanel.css';

function AdminPanel() {
    const { isAdminLoggedIn } = useContext(AdminContext);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    // Toggle the sidebar's collapsed state
    const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

    return (
        <div className="admin-panel">
            {isAdminLoggedIn ? (
                <div className="flex flex-grow overflow-hidden">
                    <LeftSidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
                    {/* Add main content area if needed */}
                </div>
            ) : (
                <div className="access-denied">
                    <h1>Access Denied</h1>
                    <p>You must be logged in to access this panel.</p>
                    <NavLink to='/admin'>
                        <button className="login-button">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>Log in</span> {/* Text for the button */}
                        </button>
                    </NavLink>
                </div>
            )}
        </div>
    );
}

export default AdminPanel;
