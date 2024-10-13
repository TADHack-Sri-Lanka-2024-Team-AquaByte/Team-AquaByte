import React, { useState } from 'react';
import { Container, Box, Typography, Card, CardContent, Checkbox, FormControlLabel, Grid } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotificationPage = () => {
    // State to manage selected alert
    const [selectedAlert, setSelectedAlert] = useState(null);

    // Sample alerts data
    const alerts = [
        { id: 1, title: 'Salmon Quota', description: 'Quota exceeded for Salmon', time: '2 hours ago', details: 'The quota for Salmon has been exceeded by 10%. Immediate action is required to avoid penalties.', type: 'Quota Exceeded', amount: 500 },
        { id: 2, title: 'System Alert', description: 'System maintenance scheduled', time: '1 day ago', details: 'System maintenance is scheduled for the weekend.', type: 'System Alerts', amount: 0 },
        { id: 3, title: 'Species Alert', description: 'Unidentified species detected', time: '5 minutes ago', details: 'An error has occurred in identifying the species. Please review the data.', type: 'Identified Alerts', amount: 0 },
    ];

    // Function to select an alert and display its details
    const handleAlertClick = (alert) => {
        setSelectedAlert(alert);
    };

    return (
        <div>
            <Header />
            <Container>
                <Box sx={{ padding: '20px', minHeight: '70vh', display: 'flex', justifyContent: 'center' }}>
                    {/* Main Box */}
                    <Box sx={{
                        background: '#f9f9f9',
                        padding: '50px 30px',
                        margin: '50px 30px',
                        border: '1px solid black',
                        borderRadius: '12px',
                        width: '80%',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        {/* Main Heading */}
                        <Typography variant="h3" align="center" gutterBottom>Notifications</Typography>

                        {/* Sub-heading */}
                        <Typography variant="h5" align="left" gutterBottom>Recent Alerts</Typography>

                        {/* Alert Cards */}
                        <Grid container spacing={2}>
                            {alerts.map(alert => (
                                <Grid item xs={12} md={4} key={alert.id}>
                                    <Card onClick={() => handleAlertClick(alert)} sx={{ cursor: 'pointer', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#E0F7FA' }}>
                                        <CardContent>
                                            <Typography variant="h6">{alert.title}</Typography>
                                            <Typography variant="body2">{alert.description}</Typography>
                                            <Typography variant="caption" sx={{ color: '#888' }}>{alert.time}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>

                        {/* Detailed Alert Section and Filters Section */}
                        <Box sx={{ display: 'flex', width: '100%', marginTop: '30px' }}>
                            {/* Detailed Alert Section (Centered) */}
                            <Box sx={{ width: '70%', marginBottom: '20px' }}>
                                {selectedAlert ? (
                                    <>
                                        <Typography variant="h6">{selectedAlert.title}</Typography>
                                        <Typography variant="body2"><strong>Timestamp:</strong> {new Date().toLocaleString()}</Typography>
                                        <Typography variant="body2"><strong>Amount:</strong> ${selectedAlert.amount}</Typography>
                                        <Typography variant="body1">{selectedAlert.details}</Typography>
                                    </>
                                ) : (
                                    <Typography>Select an alert to view its details.</Typography>
                                )}
                            </Box>

                            {/* Filters Section (Right Side) */}
                            <Box sx={{ width: '25%', paddingLeft: '15px' }}>
                                <Typography variant="h6" gutterBottom>Filter Alerts by Type</Typography>
                                <FormControlLabel control={<Checkbox />} label="Quota Exceeded" />
                                <FormControlLabel control={<Checkbox />} label="Quota Limit Close" />
                                <FormControlLabel control={<Checkbox />} label="Identified Alerts" />
                                <FormControlLabel control={<Checkbox />} label="System Alerts" />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Footer />
        </div>
    );
};

export default NotificationPage;
