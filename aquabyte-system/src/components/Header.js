import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    const renderNav = () => {
        if (location.pathname === '/') {
            return (
                <div className="header-nav">
                    <img src='/logo.png' alt="Logo" className="logo" />
                    <Link to="/login" className="sign-in-button">Sign In</Link>
                </div>
            );
        }
        return null;
    };

    return (
        <header>
            {renderNav()}
        </header>
    );
};

export default Header;
