import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
import { faCog, faUser } from '@fortawesome/free-solid-svg-icons';

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
    const pieData1 = {
        labels: ['Fish Species'],
        datasets: [{
            data: [23, 1000, 450], // Placeholder numbers
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
        }]
    };

    const pieData2 = {
        labels: ['Weight'],
        datasets: [{
            data: [23, 1000, 450], // Placeholder numbers
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
        }]
    };

    const pieData3 = {
        labels: ['Quantity'],
        datasets: [{
            data: [23, 1000, 450], // Placeholder numbers
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
        }]
    };

    // Data for bar charts (Live Statistics)
    const barDataset1 = {
        labels: ['Species', 'Weight', 'Quantity'],
        datasets: [{
            label: 'Species',
            data: [1500, 1200, 900],
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
        }]
    };

    const barDataset2 = {
        labels: ['Species', 'Weight', 'Quantity'],
        datasets: [{
            label: 'Weight',
            data: [1500, 1200, 900],
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
        }]
    };

    const barDataset3 = {
        labels: ['Species', 'Weight', 'Quantity'],
        datasets: [{
            label: 'Quanity',
            data: [1500, 1200, 900],
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
        }]
    };

    const barData1 = {
        labels: ['Species', 'Weight', 'Quantity'],
        datasets: [{
            label: 'Salmon Species',
            data: [1500, 1200, 900],
            backgroundColor: 'rgba(255, 206, 86, 0.6)',
        }]
    };

    const barData2 = {
        labels: ['Species', 'Weight', 'Quantity'],
        datasets: [{
            label: 'Tuna Species',
            data: [1000, 800, 700],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
        }]
    };

    const barData3 = {
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

            <Grid container >
                {/* Sidebar on the left side */}
                <Grid item sx={{
                    bgcolor: '#2c3e50',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',  // Align content vertically                                            
                    boxSizing: 'content-box'
                }}>
                    {/* Sidebar Content */}
                    <Box>
                        <Box component="ul" style={{ listStyle: 'none', padding: 10 }}>
                            <li style={{ marginBottom: '20px' }}>
                                <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <IconButton sx={{ color: 'white', marginRight: '15px' }}>
                                        <DashboardIcon /> {/* Icon for Dashboard */}
                                    </IconButton>
                                    Dashboard
                                </Link>
                            </li>
                            <li style={{ marginBottom: '20px' }}>
                                <Link to="/fish-identification" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <IconButton sx={{ color: 'white', marginRight: '15px' }}>
                                        <FishIcon /> {/* Icon for Fish Identification */}
                                    </IconButton>
                                    Fish Identification
                                </Link>
                            </li>
                            <li style={{ marginBottom: '20px' }}>
                                <Link to="/quota-management" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <IconButton sx={{ color: 'white', marginRight: '15px' }}>
                                        <QuotaIcon /> {/* Icon for Quota Management */}
                                    </IconButton>
                                    Quota Management
                                </Link>
                            </li>
                            <li style={{ marginBottom: '20px' }}>
                                <Link to="/equipment-status" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <IconButton sx={{ color: 'white', marginRight: '15px' }}>
                                        <EquipmentIcon /> {/* Icon for Equipment Status */}
                                    </IconButton>
                                    Equipment Status
                                </Link>
                            </li>
                            <li style={{ marginBottom: '20px' }}>
                                <Link to="/historical-data" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <IconButton sx={{ color: 'white', marginRight: '15px' }}>
                                        <DataIcon /> {/* Icon for Historical Data */}
                                    </IconButton>
                                    Historical Data
                                </Link>
                            </li>
                            <li style={{ marginBottom: '20px' }}>
                                <Link to="/user-settings" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <IconButton sx={{ color: 'white', marginRight: '15px' }}>
                                        <SettingsIcon /> {/* Icon for User Settings */}
                                    </IconButton>
                                    User Settings
                                </Link>
                            </li>
                            <li style={{ marginBottom: '20px' }}>
                                <Link to="/notifications" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <IconButton sx={{ color: 'white', marginRight: '15px' }}>
                                        <NotificationsIcon /> {/* Icon for Notifications */}
                                    </IconButton>
                                    Notifications
                                </Link>
                            </li>
                        </Box>

                    </Box>

                    {/* User Profile and Settings */}
                    <Box sx={{ textAlign: 'center', marginTop: 'auto' }}>
                        <Box display="flex" alignItems="center" justifyContent="center" marginBottom={2}>
                            <IconButton
                                component={Link}
                                to="/user-settings"
                                sx={{ color: 'white', marginRight: '15px' }}
                            >
                                <FontAwesomeIcon icon={faUser} />
                            </IconButton>
                            <Box>UserName</Box>
                            <IconButton
                                component={Link}
                                to="/settings"
                                sx={{ color: 'white', marginLeft: '15px' }}
                            >
                                <FontAwesomeIcon icon={faCog} />
                            </IconButton>
                        </Box>

                    </Box>
                </Grid>

                {/* Main Content Area */}
                <Grid item xs={12} md={9} sx={{ marginLeft: 5 }}> {/* Ensure no margin on the left */}
                    <Box padding={2}>
                        <h1>Dashboard Overview</h1>
                        <Box marginTop={5}></Box>

                        {/* Overview Statistics */}
                        <Box display="flex" justifyContent="space-around" marginBottom={8}>
                            <Box display="flex" alignItems="center" justifyContent="space-between" width="200px">
                                <Box textAlign="left">
                                    <Box fontSize="2rem" fontWeight="bold">23</Box>
                                    {renderPercentage(34)}
                                </Box>
                                <Pie data={pieData1} width={60} height={60} /> {/* Reduced size */}
                            </Box>
                            <Box display="flex" alignItems="center" justifyContent="space-between" width="200px">
                                <Box textAlign="left">
                                    <Box fontSize="2rem" fontWeight="bold">1000</Box>
                                    {renderPercentage(28)}
                                </Box>
                                <Pie data={pieData2} width={60} height={60} /> {/* Reduced size */}
                            </Box>
                            <Box display="flex" alignItems="center" justifyContent="space-between" width="200px">
                                <Box textAlign="left">
                                    <Box fontSize="2rem" fontWeight="bold">450</Box>
                                    {renderPercentage(38)}
                                </Box>
                                <Pie data={pieData3} width={60} height={60} /> {/* Reduced size */}
                            </Box>
                        </Box>

                        {/* Live Statistics */}
                        <h2>Live Statistics</h2>
                        <Box marginTop={5}>
                            {/* First row: Species, Weight, Quantity */}
                            <Grid container spacing={10}>
                                <Grid item xs={4}>
                                    <Box display="flex" alignItems="center" justifyContent="space-between">
                                        <Box textAlign="left">
                                            <Box fontSize="2rem" fontWeight="bold">1500</Box>
                                            {renderPercentage(45)}
                                        </Box>
                                        <Bar data={barDataset1} width={50} height={40} /> {/* Reduced size */}
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box display="flex" alignItems="center" justifyContent="space-between">
                                        <Box textAlign="left">
                                            <Box fontSize="2rem" fontWeight="bold">1200</Box>
                                            {renderPercentage(36)}
                                        </Box>
                                        <Bar data={barDataset2} width={50} height={40} /> {/* Reduced size */}
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box display="flex" alignItems="center" justifyContent="space-between">
                                        <Box textAlign="left">
                                            <Box fontSize="2rem" fontWeight="bold">900</Box>
                                            {renderPercentage(19)}
                                        </Box>
                                        <Bar data={barDataset3} width={50} height={40} /> {/* Reduced size */}
                                    </Box>
                                </Grid>
                            </Grid>

                            {/* Second row: Salmon, Tuna, Trout */}
                            <Grid container spacing={10} marginTop={3}>
                                <Grid item xs={4}>
                                    <Box display="flex" alignItems="center" justifyContent="space-between">
                                        <Box textAlign="left">
                                            <Box fontSize="2rem" fontWeight="bold">1500</Box>
                                            {renderPercentage(45)}
                                        </Box>
                                        <Bar data={barData1} width={50} height={40} /> {/* Reduced size */}
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box display="flex" alignItems="center" justifyContent="space-between">
                                        <Box textAlign="left">
                                            <Box fontSize="2rem" fontWeight="bold">1000</Box>
                                            {renderPercentage(30)}
                                        </Box>
                                        <Bar data={barData2} width={50} height={40} /> {/* Reduced size */}
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box display="flex" alignItems="center" justifyContent="space-between">
                                        <Box textAlign="left">
                                            <Box fontSize="2rem" fontWeight="bold">500</Box>
                                            {renderPercentage(25)}
                                        </Box>
                                        <Bar data={barData3} width={50} height={40} /> {/* Reduced size */}
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>

            </Grid>

            <Footer />
        </Box>
    );
};

export default DashboardPage;








