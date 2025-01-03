import React, { useContext, useState } from 'react';
import { AdminContext } from '../../context/AdminContext';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import { NavLink } from 'react-router';

function AdminPanel() {
    const { isAdminLoggedIn } = useContext(AdminContext);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);
    return (
        <div>
            {isAdminLoggedIn ? (
                <div>
                    <div className="flex flex-grow overflow-hidden">
                        <LeftSidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
                    </div>
                </div>
            ) : (
                <div>
                    <h1>Access Denied</h1>
                    <p>You must be logged in to access this panel.</p>
                    <NavLink to='/admin'>
                        <button style={{ right: '-58px' }} className="button">
                            <span className="button_lg">
                                <span className="button_sl"></span>
                                <span className="button_text">Log in</span>
                            </span>
                        </button>
                    </NavLink>
                </div>
            )
            }
        </div >
    );
}

export default AdminPanel;
