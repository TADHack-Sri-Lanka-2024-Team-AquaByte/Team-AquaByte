import React from 'react';
import Header from '../components/Header'; // Import the Header component
import Footer from '../components/Footer'; // Import the Footer component
import './QuotaManagement.css'; // Ensure the styles are applied

const QuotaManagement = () => {
    // Sample data for quotas
    const quotas = [
        { species: 'Cod', totalQuota: '1000 kg', quantityUsed: '800 kg', status: false, breaches: 'warning', action: 'Review' },
        { species: 'Haddock', totalQuota: '1000 kg', quantityUsed: '900 kg', status: true, breaches: 'met', action: 'View' },
        { species: 'Salmon', totalQuota: '1200 kg', quantityUsed: '1100 kg', status: false, breaches: 'exceeded', action: 'Review' },
        { species: 'Tuna', totalQuota: '1500 kg', quantityUsed: '1200 kg', status: true, breaches: 'met', action: 'Take Action' },
        { species: 'Mackerel', totalQuota: '800 kg', quantityUsed: '600 kg', status: false, breaches: 'warning', action: 'Review' },
    ];

    return (
        <div className="quota-management">
            <Header /> {/* Include the Header component */}

            <div className="quota-content">
                <h1>Quota Management</h1>
                <h2>Past Quotas</h2>

                <table className="quota-table">
                    <thead>
                        <tr>
                            <th>Species</th>
                            <th>Total Quota</th>
                            <th>Quantity Used</th>
                            <th>Status</th>
                            <th>Regulatory Breaches</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {quotas.map((quota, index) => (
                            <tr key={index}>
                                <td>{quota.species}</td>
                                <td>{quota.totalQuota}</td>
                                <td>{quota.quantityUsed}</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={quota.status}
                                        readOnly
                                        aria-label={`Quota status for ${quota.species}`}
                                    />
                                </td>
                                <td>
                                    <span className={`breach-status ${quota.breaches}`}>
                                        {quota.breaches}
                                    </span>
                                </td>
                                <td>
                                    <button className="action-button">{quota.action}</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Footer /> {/* Include the Footer component */}
        </div>
    );
};

export default QuotaManagement;
