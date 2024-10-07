import React, { useState } from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer';  
import './NotificationPage.css';  // Import the CSS file for styling

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
            <main className="notification-page-container">
                {/* Main Box */}
                <div className="notification-box">
                    {/* Main Heading */}
                    <h1 className="main-heading">Notifications</h1>

                    {/* Sub-heading */}
                    <h2 className="sub-heading">Recent Alerts</h2>

                    {/* Alert Cards */}
                    <div className="alert-container">
                        {alerts.map(alert => (
                            <div 
                                key={alert.id} 
                                onClick={() => handleAlertClick(alert)} 
                                className="alert-card"
                            >
                                <h3>{alert.title}</h3>
                                <p>{alert.description}</p>
                                <p className="alert-time">{alert.time}</p>
                            </div>
                        ))}
                    </div>

                    {/* Detailed Alert Section and Filters Section */}
                    <div className="alert-details-filters-container">
                        {/* Detailed Alert Section (Centered) */}
                        <div className="alert-details">
                            {selectedAlert ? (
                                <>
                                    <h3>! {selectedAlert.title}</h3>
                                    <p><strong>Timestamp:</strong> {new Date().toLocaleString()}</p>
                                    <p><strong>Amount:</strong> ${selectedAlert.amount}</p>
                                    <p>{selectedAlert.details}</p>
                                </>
                            ) : (
                                <p>Select an alert to view its details.</p>
                            )}
                        </div>

                        {/* Filters Section (Right Side) */}
                        <div className="alert-filters">
                            <h4>Filters Alerts by Type</h4>
                            <div>
                                <label>
                                    <input type="checkbox" /> Quota Exceeded
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="checkbox" /> Quota Limit Close
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="checkbox" /> Identified Alerts
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="checkbox" /> System Alerts
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NotificationPage;
