import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Grid, Paper } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LandingPage = () => {
    const navigate = useNavigate(); // For navigation

    const handleGetStartedClick = () => {
        navigate('/login'); // Redirects to the login page
    };

    return (
        <Box className="landing-page" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <Header /> {/* Include the Header component */}

            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '450px',
                    overflow: 'hidden',
                }}
            >
                <img src="barracuda.jpg" alt="Descriptive Alt Text" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h1" sx={{ fontSize: { xs: '2em', sm: '2.5em' }, marginBottom: '10px' }}>
                        Real-time Monitoring for Sustainable Fishing
                    </Typography>
                    <Typography variant="h3" sx={{ fontSize: { xs: '2em', sm: '1.5em' }, marginBottom: '10px' }}>
                        Enhancing efficiency and Sustainability in the fishing industry
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={handleGetStartedClick}
                        sx={{
                            backgroundColor: '#0e2041',
                            '&:hover': { backgroundColor: '#21a1f1' },
                            marginTop: '10px',
                        }}
                    >
                        Get Started
                    </Button>
                </Box>
            </Box>

            {/* Features Section */}
            <Box sx={{ padding: '20px 20px', backgroundColor: '#f9f9f9', margin: '150px 0 50px 0' }}>
                <Typography variant="h2" sx={{ fontSize: '2.5em', marginBottom: '30px', textAlign: 'center', color: '#333' }}>
                    Explore Our Features
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Paper sx={{ padding: '20px', textAlign: 'center', height: '100%' }}>
                            <Typography variant="h3" sx={{ fontSize: '2em', marginBottom: '30px'}}>Fish Species Identification</Typography>
                            <Typography>Identifies different species of fish in real-time</Typography>
                            <Button variant="outlined" sx={{ marginTop: '10px' }}>Learn More</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper sx={{ padding: '20px', textAlign: 'center', height: '100%' }}>
                            <Typography variant="h3" sx={{ fontSize: '2em', marginBottom: '30px'}}>Quota Management</Typography>
                            <Typography>Manage fishing quotas effectively</Typography>
                            <Button variant="outlined" sx={{ marginTop: '10px' }}>Learn More</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper sx={{ padding: '20px', textAlign: 'center', height: '100%' }}>
                            <Typography variant="h3" sx={{ fontSize: '2em', marginBottom: '30px'}}>Fish Health Management</Typography>
                            <Typography>Monitor and manage the health of fish</Typography>
                            <Button variant="outlined" sx={{ marginTop: '10px' }}>Learn More</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

            {/* CTA Section */}
            <Box sx={{ padding: '40px 20px', textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontSize: '2.5em', marginBottom: '20px', color: '#0e2041' }}>
                    Dive in Today
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '15px', color: '#0e2041' }}>
                    Join AquaByte and explore a world of seamless aquatic management.
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '20px', color: '#0e2041' }}>
                    Register now to streamline your processes.
                </Typography>
                <Button
                    variant="contained"
                    onClick={() => navigate('/register')}
                    sx={{
                        backgroundColor: '#0e2041',
                        '&:hover': { backgroundColor: '#21a1f1' },
                    }}
                >
                    Register
                </Button>
            </Box>

            <Footer /> {/* Include the Footer component */}
        </Box>
    );
};

export default LandingPage;
