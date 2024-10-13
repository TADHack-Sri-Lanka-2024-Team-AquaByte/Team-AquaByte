import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCog, faUser } from '@fortawesome/free-solid-svg-icons'; // Import the profile icon
import { AppBar, Toolbar, Typography, Box, Button, IconButton } from '@mui/material';

const Header = () => {
    const location = useLocation();

    // Function to render navigation based on the current route
    const renderNav = () => {
        const isDashboard = location.pathname === '/dashboard';
        const isLandingPage = location.pathname === '/';

        if (isLandingPage) {
            return (
                <Toolbar
                    sx={{
                        justifyContent: 'space-between',
                        backgroundColor: '#ffffff',
                        paddingLeft: '40px',
                        paddingRight: '40px',
                    }}
                >
                    <Box
                        component="img"
                        src='/logo.png'
                        alt="Logo"
                        sx={{ height: 50 }}
                    />
                    <Button
                        component={Link}
                        to="/login"
                        sx={{
                            color: '#007BFF',
                            textTransform: 'none', // Prevent uppercase conversion
                        }}
                    >
                        Sign In
                    </Button>
                </Toolbar>
            );
        } else {
            return (
                <Toolbar
                    sx={{
                        justifyContent: 'space-between',
                        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
                        paddingLeft: '40px',
                        paddingRight: '40px',
                        color: 'white',
                    }}
                >
                    <Box
                        component="img"
                        src='/logo.png'
                        alt="Logo"
                        sx={{ height: 50 }}
                    />
                    {!isDashboard && (
                        <Typography
                            component={Link}
                            to="/dashboard"
                            variant="h6"
                            sx={{
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            Dashboard
                        </Typography>
                    )}
                    <Typography variant="h6" sx={{ marginRight: 'auto', marginLeft: '20px' }}>
                        {location.pathname
                            .replace('/', '')
                            .replace('-', ' ')
                            .toLowerCase()
                            .split(' ')
                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(' ')}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {/* Show profile icon for all pages except landing page and dashboard */}
                        {!isLandingPage && !isDashboard && (
                            <IconButton
                                component={Link}
                                to="/user-settings"
                                sx={{ color: 'white', marginRight: '15px' }}
                            >
                                <FontAwesomeIcon icon={faUser} />
                            </IconButton>
                        )}
                        
                        <IconButton
                            component={Link}
                            to="/notifications"
                            sx={{ color: 'white' }}
                        >
                            <FontAwesomeIcon icon={faBell} />
                        </IconButton>
                        <IconButton
                            component={Link}
                            to="/user-settings"
                            sx={{ color: 'white', marginLeft: '15px' }}
                        >
                            <FontAwesomeIcon icon={faCog} />
                        </IconButton>
                    </Box>
                </Toolbar>
            );
        }
    };

    return (
        <AppBar position="static">
            {renderNav()}
        </AppBar>
    );
};

export default Header;
