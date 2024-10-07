import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCog } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    const location = useLocation();

    // Function to render navigation based on the current route
    const renderNav = () => {
        if (location.pathname === '/') {
            return (
                <div className="landing-nav">  {/* Add landing-nav for landing page specific styling */}
                    <img src='/logo.png' alt="Logo" className="logo" />
                    <Link to="/login" className="sign-in-button">Sign In</Link>
                </div>
            );
        } else {
            return (
                <div className="other-pages-nav">  {/* Apply other-pages-nav class for other pages */}
                    <img src='/logo.png' alt="Logo" className="logo" />
                    {/* Dashboard Link as h2 */}
                    <Link to="/dashboard" className="dashboard-link">
                        <h2 className="dashboard-title">Dashboard</h2>
                    </Link>
                    <h2 className="page-name">
                        {location.pathname
                            .replace('/', '')
                            .replace('-', ' ')
                            .toLowerCase()
                            .split(' ')
                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(' ')}
                    </h2>
                    <div className="header-icons">
                        <Link to="/notifications" className="icon-link">
                            <FontAwesomeIcon icon={faBell} className="icon" />
                        </Link>
                        <Link to="/settings" className="icon-link">
                            <FontAwesomeIcon icon={faCog} className="icon" />
                        </Link>
                    </div>
                </div>
            );
        }
    };

    return (
        <header>
            {renderNav()}
        </header>
    );
};

export default Header;
