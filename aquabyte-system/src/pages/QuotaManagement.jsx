import React from 'react';
import Header from '../components/Header'; // Import the Header component
import Footer from '../components/Footer'; // Import the Footer component
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Checkbox,
    Button,
} from '@mui/material';

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
        <div>
            <Header /> {/* Include the Header component */}
            <Box
                sx={{
                    padding: 2,
                    backgroundColor: '#f9f9f9',
                    height: 'calc(100vh - 250px)',
                    overflowY: 'auto',
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Quota Management
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ fontSize: '1.5rem' }}> {/* Increased font size for Past Quotas */}
                    Past Quotas
                </Typography>
                <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 1 }}>
                    <Table size="small"> {/* Smaller table size */}
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ background: 'linear-gradient(135deg, #007bff, #00c4ff)', color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>Species</TableCell>
                                <TableCell sx={{ background: 'linear-gradient(135deg, #007bff, #00c4ff)', color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>Total Quota</TableCell>
                                <TableCell sx={{ background: 'linear-gradient(135deg, #007bff, #00c4ff)', color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>Quantity Used</TableCell>
                                <TableCell sx={{ background: 'linear-gradient(135deg, #007bff, #00c4ff)', color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>Status</TableCell>
                                <TableCell sx={{ background: 'linear-gradient(135deg, #007bff, #00c4ff)', color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>Regulatory Breaches</TableCell>
                                <TableCell sx={{ background: 'linear-gradient(135deg, #007bff, #00c4ff)', color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {quotas.map((quota, index) => (
                                <TableRow key={index} sx={{
                                    backgroundColor: index % 2 === 0 ? '#ffffff' : '#e3f2fd',
                                    transition: 'background-color 0.3s',
                                    '&:hover': { backgroundColor: '#d1e7fd' },
                                }}>
                                    <TableCell>{quota.species}</TableCell>
                                    <TableCell>{quota.totalQuota}</TableCell>
                                    <TableCell>{quota.quantityUsed}</TableCell>
                                    <TableCell>
                                        <Checkbox
                                            checked={quota.status}
                                            readOnly
                                            aria-label={`Quota status for ${quota.species}`}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="body2" sx={{
                                            color: quota.breaches === 'exceeded' ? 'red' : quota.breaches === 'warning' ? 'orange' : 'green',
                                            fontWeight: 'bold',
                                        }}>
                                            {quota.breaches}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="success" size="small">
                                            {quota.action}
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Footer /> {/* Include the Footer component */}
        </div>
    );
};

export default QuotaManagement;

