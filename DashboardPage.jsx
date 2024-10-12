import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from 'chart.js';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Container, Grid, IconButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard'; // Icon imports
import FishIcon from '@mui/icons-material/EmojiNature';  // Example for Fish Identification
import QuotaIcon from '@mui/icons-material/Assignment'; // Example for Quota Management
import EquipmentIcon from '@mui/icons-material/Build'; // Example for Equipment Status
import DataIcon from '@mui/icons-material/History'; // Example for Historical Data
import SettingsIcon from '@mui/icons-material/Settings'; // Example for User Settings
import NotificationsIcon from '@mui/icons-material/Notifications'; // Example for Notifications

// Register necessary components for Chart.js
ChartJS.register(
    Title,
    Tooltip,
    Legend,
    ArcElement,  // For pie charts
    BarElement,   // For bar charts
    CategoryScale, // For x-axis labels in bar chart
    LinearScale    // For y-axis values in bar chart
);

const DashboardPage = () => {
    // Data for pie charts (Overview)
    const pieData = {
        labels: ['Fish Species', 'Weight', 'Quantity'],
        datasets: [{
            data: [23, 1000, 450], // Placeholder numbers
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
        }]
    };

    // Data for bar charts (Live Statistics)
    const barData1 = {
        labels: ['Species', 'Weight', 'Quantity'],
        datasets: [{
            label: 'Species',
            data: [1500, 1200, 900],
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
        }]
    };

    const barData2 = {
        labels: ['Species', 'Weight', 'Quantity'],
        datasets: [{
            label: 'Salmon Species',
            data: [1500, 1200, 900],
            backgroundColor: 'rgba(255, 206, 86, 0.6)',
        }]
    };

    const barData3 = {
        labels: ['Species', 'Weight', 'Quantity'],
        datasets: [{
            label: 'Tuna Species',
            data: [1000, 800, 700],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
        }]
    };

    const barData4 = {
        labels: ['Species', 'Weight', 'Quantity'],
        datasets: [{
            label: 'Trout Species',
            data: [500, 400, 300],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
        }]
    };

    const renderPercentage = (value) => {
        const isPositive = value >= 50; // Assume 50% and above is good, below 50% is bad
        const colorClass = isPositive ? 'positive-percentage' : 'negative-percentage';
        return (
            <span className={colorClass}>{value}%</span>
        );
    };

    return (
        <Box>
            <Header />
            <Container maxWidth={false} sx={{ padding: 0 }}>
                <Grid container>
                    {/* Sidebar on the left side */}
                    <Grid item xs={12} md={2} sx={{
                        bgcolor: '#2c3e50',
                        color: 'white',
                        minHeight: '100vh',  // Stretch the sidebar to full height of the viewport
                        display: 'flex',
                        flexDirection: 'column',  // Align content vertically
                        justifyContent: 'space-between',  // Push profile section to the bottom
                        padding: '10px',
                        paddingRight: '0px',
                        paddingLeft: '0', // Remove left padding to eliminate whitespace
                        boxSizing: 'content-box'
                    }}>
                        {/* Sidebar Content */}
                        <Box>
                            <Box component="ul" style={{ listStyle: 'none', padding: 20 }}>
                                <li style={{ marginBottom: '10px' }}>
                                    <IconButton sx={{ color: 'white', marginRight: '15px' }}>
                                        <DashboardIcon /> {/* Icon for Dashboard */}
                                    </IconButton>
                                    Dashboard
                                </li>
                                <li style={{ marginBottom: '20px' }}>
                                    <IconButton sx={{ color: 'white', marginRight: '15px' }}>
                                        <FishIcon /> {/* Icon for Fish Identification */}
                                    </IconButton>
                                    Fish Identification
                                </li>
                                <li style={{ marginBottom: '20px' }}>
                                    <IconButton sx={{ color: 'white', marginRight: '15px' }}>
                                        <QuotaIcon /> {/* Icon for Quota Management */}
                                    </IconButton>
                                    Quota Management
                                </li>
                                <li style={{ marginBottom: '20px' }}>
                                    <IconButton sx={{ color: 'white', marginRight: '15px' }}>
                                        <EquipmentIcon /> {/* Icon for Equipment Status */}
                                    </IconButton>
                                    Equipment Status
                                </li>
                                <li style={{ marginBottom: '20px' }}>
                                    <IconButton sx={{ color: 'white', marginRight: '15px' }}>
                                        <DataIcon /> {/* Icon for Historical Data */}
                                    </IconButton>
                                    Historical Data
                                </li>
                                <li style={{ marginBottom: '20px' }}>
                                    <IconButton sx={{ color: 'white', marginRight: '15px' }}>
                                        <SettingsIcon /> {/* Icon for User Settings */}
                                    </IconButton>
                                    User Settings
                                </li>
                                <li style={{ marginBottom: '20px' }}>
                                    <IconButton sx={{ color: 'white', marginRight: '15px' }}>
                                        <NotificationsIcon /> {/* Icon for Notifications */}
                                    </IconButton>
                                    Notifications
                                </li>
                            </Box>
                        </Box>

                        {/* User Profile and Settings */}
                        <Box sx={{ textAlign: 'center', marginTop: 'auto' }}>
                            <Box display="flex" alignItems="center" justifyContent="center" marginBottom={2}>
                                <img src="profile-pic.png" alt="User Profile" style={{ width: 40, height: 40, borderRadius: '50%', marginRight: 10 }} />
                                <Box>UserName</Box>
                            </Box>
                            <IconButton sx={{ color: 'white', marginTop: 1 }}>
                                <img src="setting.png" alt="Settings" style={{ width: 30, height: 30 }} />
                            </IconButton>
                        </Box>
                    </Grid>

                    {/* Main Content Area */}
                    <Grid item xs={12} md={9} sx={{ marginLeft: 5 }}> {/* Ensure no margin on the left */}
                        <Box padding={2}>
                            <h1>Dashboard Overview</h1>
                            <Box marginTop={5}></Box>

                            {/* Overview Statistics */}
                            <Box display="flex" justifyContent="space-around" marginBottom={8}>
                                <Box textAlign="center">
                                    <Box fontSize="2rem" fontWeight="bold">23</Box>
                                    {renderPercentage(34)}
                                    <Pie data={pieData} width={100} height={100} /> {/* Adjusted size */}
                                </Box>
                                <Box textAlign="center">
                                    <Box fontSize="2rem" fontWeight="bold">1000</Box>
                                    {renderPercentage(28)}
                                    <Pie data={pieData} width={100} height={100} /> {/* Adjusted size */}
                                </Box>
                                <Box textAlign="center">
                                    <Box fontSize="2rem" fontWeight="bold">450</Box>
                                    {renderPercentage(38)}
                                    <Pie data={pieData} width={100} height={100} /> {/* Adjusted size */}
                                </Box>
                            </Box>

                            {/* Live Statistics */}
                            <h2>Live Statistics</h2>
                            <Box marginTop={5}>
                                {/* First row: Species, Weight, Quantity */}
                                <Grid container spacing={10}>
                                    <Grid item xs={4}>
                                        <Box textAlign="center">
                                            <Box fontSize="2rem" fontWeight="bold">1500</Box>
                                            {renderPercentage(45)}
                                            <Bar data={barData1} width={75} height={50} /> {/* Adjusted size */}
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box textAlign="center">
                                            <Box fontSize="2rem" fontWeight="bold">1200</Box>
                                            {renderPercentage(36)}
                                            <Bar data={barData1} width={75} height={50} /> {/* Adjusted size */}
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box textAlign="center">
                                            <Box fontSize="2rem" fontWeight="bold">900</Box>
                                            {renderPercentage(19)}
                                            <Bar data={barData1} width={75} height={50} /> {/* Adjusted size */}
                                        </Box>
                                    </Grid>
                                </Grid>

                                {/* Second row: Salmon, Tuna, Trout */}
                                <Grid container spacing={10} marginTop={3}>
                                    <Grid item xs={4}>
                                        <Box textAlign="center">
                                            <Box fontSize="2rem" fontWeight="bold">1500</Box>
                                            {renderPercentage(45)}
                                            <Bar data={barData2} width={75} height={50} /> {/* Adjusted size */}
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box textAlign="center">
                                            <Box fontSize="2rem" fontWeight="bold">1000</Box>
                                            {renderPercentage(30)}
                                            <Bar data={barData3} width={75} height={50} /> {/* Adjusted size */}
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box textAlign="center">
                                            <Box fontSize="2rem" fontWeight="bold">500</Box>
                                            {renderPercentage(25)}
                                            <Bar data={barData4} width={75} height={50} /> {/* Adjusted size */}
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </Box>
    );
};

export default DashboardPage;








