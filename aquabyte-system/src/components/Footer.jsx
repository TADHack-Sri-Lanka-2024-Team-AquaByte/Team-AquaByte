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
                position: 'relative',
                overflow: 'hidden',
                boxSizing: 'border-box', // Ensure padding is included in the total width
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
                    flexWrap: 'wrap',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    paddingX: '10px', // Add horizontal padding
                }}
            >
                <Typography variant="h4" component="h2" sx={{ margin: 0 }}>
                    AquaByte
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <Typography
                        component="a"
                        href="/about-us"
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
                        href="/contact-us"
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
                    flexWrap: 'wrap',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    paddingX: '10px', // Add horizontal padding
                }}
            >
                {/* Language Select */}
                <Select
                    defaultValue="en"
                    sx={{
                        backgroundColor: '#203a43',
                        color: 'white',
                        border: 'none',
                        textAlign: 'center',
                        marginTop: '10px',
                        marginRight: '10px',
                        width: 'auto', // Use auto width
                        minWidth: '100px', // Set a minimum width for consistency
                        boxSizing: 'border-box', // Include padding in the width calculation
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
