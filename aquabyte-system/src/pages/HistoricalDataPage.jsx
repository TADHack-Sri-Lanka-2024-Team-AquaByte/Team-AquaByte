import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
} from 'chart.js';
import { Button, Box, Typography, Select, MenuItem} from '@mui/material';
import Footer from "../components/Footer";
import Header from "../components/Header";

// Register necessary components for Chart.js
ChartJS.register(
    Title,
    Tooltip,
    Legend,
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale
);

const HistoricalDataPage = () => {
    const speciesData = {
        labels: ['Angula', 'Gadget', 'Gabbro', 'Catfish', 'Others'],
        datasets: [
            {
                label: 'Species Distribution',
                data: [12, 19, 3, 5, 8],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const catchData = {
        labels: ['1999', '2000', '2001', '2002', '2003', '2004'],
        datasets: [
            {
                label: 'Fish Yield (kg)',
                data: [300, 450, 500, 600, 700, 800],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    const handleDownloadCSV = () => {
        const csvData = [
            ['Species', 'Count'],
            ['Angula', 12],
            ['Gadget', 19],
            ['Gabbro', 3],
            ['Catfish', 5],
            ['Others', 8],
        ];

        const csvContent = "data:text/csv;charset=utf-8,"
            + csvData.map(e => e.join(",")).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "species_data.csv");
        document.body.appendChild(link); // Required for Firefox

        link.click(); // This will download the file
    };

    return (
        <Box>
            <Header />
            <Box className="historical-data-page" sx={{ padding: '40px' }}>
            <Box className="filter-section" sx={{ display: 'flex', gap: '40px', mb: '20px'}}>
            <Select
                variant="outlined"
                defaultValue="" // Keep this as an empty string
                displayEmpty
                sx={{
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    minWidth: '150px',
                }}
            >
                <MenuItem value="" disabled>
                    <em>Select Species</em>
                </MenuItem>
                {/* Add more options here */}
                <MenuItem value="species1">Species 1</MenuItem>
                <MenuItem value="species2">Species 2</MenuItem>
            </Select>
            <Select
                variant="outlined"
                defaultValue="" // Keep this as an empty string
                displayEmpty
                sx={{
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    minWidth: '150px',
                }}
            >
                <MenuItem value="" disabled>
                    <em>Select Vessel</em>
                </MenuItem>
                {/* Add more options here */}
                <MenuItem value="vessel1">Vessel 1</MenuItem>
                <MenuItem value="vessel2">Vessel 2</MenuItem>
            </Select>
            <Select
                variant="outlined"
                defaultValue="" // Keep this as an empty string
                displayEmpty
                sx={{
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    minWidth: '150px',
                }}
            >
                <MenuItem value="" disabled>
                    <em>Select Fishing Zone</em>
                </MenuItem>
                {/* Add more options here */}
                <MenuItem value="zone1">Zone 1</MenuItem>
                <MenuItem value="zone2">Zone 2</MenuItem>
            </Select>
            <Select
                variant="outlined"
                defaultValue="" // Keep this as an empty string
                displayEmpty
                sx={{
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    minWidth: '150px',
                }}
            >
                <MenuItem value="" disabled>
                    <em>Select Date Range</em>
                </MenuItem>
                {/* Add more options here */}
                <MenuItem value="date1">Date Range 1</MenuItem>
                <MenuItem value="date2">Date Range 2</MenuItem>
            </Select>
            <Button
                variant="contained"
                sx={{
                    padding: '10px 20px',
                    backgroundColor: '#282c34',
                    color: 'white',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                See Catch Rates
            </Button>
        </Box>

                <Box className="visualization-section" sx={{ mt: '40px', mb: '40px', margin:'100px' }}>
                    <Typography variant="h5">Interactive Data Visualization</Typography>

                    <Box className="charts-row" sx={{ display: 'flex', justifyContent: 'space-between', my: '20px' }}>
                        {/* Pie Chart */}
                        <Box className="chart-container pie-chart" sx={{ flex: 1, mx: '10px', maxWidth: '300px', maxHeight: '300px' }}>
                            <Typography variant="h6">Species Distribution (Pie Chart)</Typography>
                            <Pie data={speciesData} width={200} height={200} />
                        </Box>

                        {/* Bar Chart */}
                        <Box className="chart-container bar-chart" sx={{ flex: 1, mx: '10px', maxWidth: '300px', maxHeight: '300px' }}>
                            <Typography variant="h6">Fish Yield Over Years (Bar Chart)</Typography>
                            <Bar data={catchData} width={200} height={200} />
                        </Box>
                    </Box>

                    {/* CSV Download Button */}
                    <Button variant="contained" color="success" onClick={handleDownloadCSV} className="csv-button" sx={{ display: 'block', margin: '100px auto' }}>
                        Download as CSV
                    </Button>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default HistoricalDataPage;
