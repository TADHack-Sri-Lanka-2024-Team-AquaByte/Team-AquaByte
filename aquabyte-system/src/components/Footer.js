import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Box, Typography, Select, MenuItem, IconButton } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
                color: 'white',
                padding: '20px',
                width: '100%',
                textAlign: 'center',
                position: 'relative', // Allow for proper positioning
                overflow: 'hidden', // Prevent overflow
            }}
        >
            {/* Top section */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '1px solid white',
                    paddingBottom: '20px',
                    flexWrap: 'wrap', // Allow wrapping for smaller screens
                    maxWidth: '1200px', // Set a max width for the footer
                    margin: '0 auto', // Center align the footer
                }}
            >
                <Typography variant="h4" component="h2" sx={{ margin: 0 }}>
                    AquaByte
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}> {/* Wrap the links */}
                    <Typography
                        component="a"
                        href="/about"
                        sx={{
                            color: 'white',
                            marginRight: '15px',
                            textDecoration: 'none',
                            '&:hover': { textDecoration: 'underline' },
                        }}
                    >
                        About Us
                    </Typography>
                    <Typography
                        component="a"
                        href="/contact"
                        sx={{
                            color: 'white',
                            marginRight: '15px',
                            textDecoration: 'none',
                            '&:hover': { textDecoration: 'underline' },
                        }}
                    >
                        Contact Us
                    </Typography>
                </Box>
            </Box>

            {/* Bottom section */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '20px',
                    flexWrap: 'wrap', // Allow wrapping for smaller screens
                    maxWidth: '1200px', // Set a max width for the footer
                    margin: '0 auto', // Center align the footer
                }}
            >
                {/* Language Select */}
                <Select
                    defaultValue="en"
                    sx={{
                        backgroundColor: '#203a43',
                        color: 'white',
                        border: 'none',
                        textAlign:'center',
                        marginTop:'10px',
                        marginRight: '10px', // Add some spacing
                    }}
                >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="es">Spanish</MenuItem>
                    <MenuItem value="fr">French</MenuItem>
                </Select>

                {/* Copyright */}
                <Typography sx={{ flex: 1, textAlign: 'center', whiteSpace: 'nowrap' }}>
                    © {new Date().getFullYear()} AquaByte System. All rights reserved.
                </Typography>

                {/* Social Media Icons */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton href="https://facebook.com" sx={{ color: 'white', marginRight: '10px' }}>
                        <FontAwesomeIcon icon={faFacebook} size="1x" />
                    </IconButton>
                    <IconButton href="https://twitter.com" sx={{ color: 'white', marginRight: '10px' }}>
                        <FontAwesomeIcon icon={faTwitter} size="1x" />
                    </IconButton>
                    <IconButton href="https://instagram.com" sx={{ color: 'white', marginRight: '10px' }}>
                        <FontAwesomeIcon icon={faInstagram} size="1x" />
                    </IconButton>
                    <IconButton href="https://linkedin.com" sx={{ color: 'white' }}>
                        <FontAwesomeIcon icon={faLinkedin} size="1x" />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
