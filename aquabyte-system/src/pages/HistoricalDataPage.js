import "./HistoricalDataPage.css";

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
import Footer from "../components/Footer";
import Header from "../components/Header";

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

const HistoricalDataPage = () => {
    // Sample data for pie and bar charts
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
        <div>
            <Header />
            <div className="historical-data-page">
                {/* Filter Section */}
                <div className="filter-section">
                    <select className="filter-dropdown">
                        <option>Select Species</option>
                        {/* Add more options here */}
                    </select>
                    <select className="filter-dropdown">
                        <option>Select Vessel</option>
                        {/* Add more options here */}
                    </select>
                    <select className="filter-dropdown">
                        <option>Select Fishing Zone</option>
                        {/* Add more options here */}
                    </select>
                    <select className="filter-dropdown">
                        <option>Select Date Range</option>
                        {/* Add more options here */}
                    </select>
                    <button className="filter-button">See Catch Rates</button>
                </div>

                <div className="visualization-section">
                    <h2>Interactive Data Visualization</h2>

                    {/* Row for Pie and Bar Charts */}
                    <div className="charts-row">
                        {/* Pie Chart */}
                        <div className="chart-container pie-chart">
                            <h3>Species Distribution (Pie Chart)</h3>
                            <Pie data={speciesData} width={200} height={200} />
                        </div>

                        {/* Bar Chart */}
                        <div className="chart-container bar-chart">
                            <h3>Fish Yield Over Years (Bar Chart)</h3>
                            <Bar data={catchData} width={200} height={200} />
                        </div>
                    </div>

                    {/* CSV Download Button */}
                    <button onClick={handleDownloadCSV} className="csv-button">
                        Download as CSV
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HistoricalDataPage;
