import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Typography, Container, Box } from '@mui/material';

const AboutUs = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Container sx={{ flex: 1 }}>
                <Box sx={{ padding: '20px', marginTop: '30px' }}>
                    <Typography variant="h4" gutterBottom>About Us</Typography>
                    <Typography variant="body1">
                        {/* Placeholder content */}
                        This is the About Us page. We need to add more details here about our company, mission, and values.
                    </Typography>
                </Box>
            </Container>
            <Footer />  {/* Footer will now stay at the bottom */}
        </Box>
    );
};

export default AboutUs;
