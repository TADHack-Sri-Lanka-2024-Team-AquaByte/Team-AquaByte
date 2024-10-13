// ContactUs.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Typography, Container, Box, TextField, Button } from '@mui/material';

const ContactUs = () => {
    return (
        <div>
            <Header />
            <Container>
                <Box sx={{ padding: '20px', marginTop: '30px' }}>
                    <Typography variant="h4" gutterBottom>Contact Us</Typography>
                    <Typography variant="body1" gutterBottom>
                        {/* Placeholder content */}
                        Feel free to reach out to us through the form below or contact us directly.
                    </Typography>

                    {/* Placeholder contact form */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '400px' }}>
                        <TextField label="Name" variant="outlined" fullWidth />
                        <TextField label="Email" variant="outlined" fullWidth />
                        <TextField label="Message" variant="outlined" multiline rows={4} fullWidth />
                        <Button variant="contained" color="primary">Submit</Button>
                    </Box>
                </Box>
            </Container>
            <Footer />
        </div>
    );
};

export default ContactUs;
