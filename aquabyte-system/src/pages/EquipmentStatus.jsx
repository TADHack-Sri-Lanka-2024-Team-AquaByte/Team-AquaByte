import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
    Card,
    CardContent,
    Typography,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Tooltip,
} from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const sensors = [
    { id: 1, location: 'Warehouse A', installed: 'Jan 2023', imageUrl: '/Warehouse.jpg' },
    { id: 2, location: 'Factory B', installed: 'Feb 2023', imageUrl: '/Factory.jpg' },
    { id: 3, location: 'Office C', installed: 'Jan 2023', imageUrl: '/Office.jpg' },
    { id: 4, location: 'Lab D', installed: 'Feb 2023', imageUrl: '/Lab.jpg' },
    { id: 5, location: 'Site E', installed: 'Jan 2023', imageUrl: '/Site.jpg' },
    { id: 6, location: 'Plant F', installed: 'Feb 2023', imageUrl: '/Plant.jpg' },
    { id: 7, location: 'Dock G', installed: 'Jan 2023', imageUrl: '/Dock.jpg' },
    { id: 8, location: 'Terminal H', installed: 'Feb 2023', imageUrl: '/Terminal.jpg' },
];

const recentActivities = [
    { dateTime: '2023-10-01 10:30', tankID: '1000 kg', activityType: 'Monitoring', status: 'warning', errorAlert: 'Sensor Issue', action: 'View' },
    { dateTime: '2023-10-01 10:30', tankID: '800 kg', activityType: 'Monitoring', status: 'normal', errorAlert: 'None', action: 'Take Action' },
];

const EquipmentStatus = () => {
    return (
        <div>
            <Header />
            <div style={{ padding: '20px', backgroundColor: '#f9f9f9', height: 'calc(100vh - 250px)', overflowY: 'auto' }}>

                <section style={{ marginTop: '30px', textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom>Sensor Health Monitoring</Typography>
                    <Grid container spacing={2}>
                        {sensors.map(sensor => (
                            <Grid item xs={12} sm={6} md={4} key={sensor.id}>
                                <Card sx={{ backgroundColor: '#e1f5fe', borderRadius: '10px', boxShadow: 1, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
                                    <img
                                        src={sensor.imageUrl}
                                        alt={`Sensor ${sensor.id}`}
                                        style={{
                                            width: '100%',
                                            height: '150px',
                                            objectFit: 'cover',
                                            borderRadius: '10px'
                                        }}
                                    />
                                    <CardContent>
                                        <Typography variant="h6">Sensor {sensor.id}</Typography>
                                        <Typography>Location: {sensor.location}</Typography>
                                        <Typography>Installed: {sensor.installed}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </section>

                <section style={{ marginTop: '40px' }}>
                    <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>Recent Activities</Typography>
                    <TableContainer component={Paper} sx={{ marginTop: '20px', backgroundColor: 'transparent', boxShadow: 'none', border: '1px solid #e0e0e0' }}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ backgroundColor: '#e3f2fd' }}>
                                    <TableCell sx={{ border: '1px solid #90caf9' }}>DateTime</TableCell>
                                    <TableCell sx={{ border: '1px solid #90caf9' }}>Tank ID</TableCell>
                                    <TableCell sx={{ border: '1px solid #90caf9' }}>Activity Type</TableCell>
                                    <TableCell sx={{ border: '1px solid #90caf9' }}>Status</TableCell>
                                    <TableCell sx={{ border: '1px solid #90caf9' }}>Error Alerts</TableCell>
                                    <TableCell sx={{ border: '1px solid #90caf9' }}>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {recentActivities.map((activity, index) => (
                                    <TableRow key={index} sx={{ backgroundColor: '#e1f5fe', '&:hover': { backgroundColor: '#b3e5fc' } }}>
                                        <TableCell sx={{ border: '1px solid #90caf9' }}>{activity.dateTime}</TableCell>
                                        <TableCell sx={{ border: '1px solid #90caf9' }}>{activity.tankID}</TableCell>
                                        <TableCell sx={{ border: '1px solid #90caf9' }}>{activity.activityType}</TableCell>
                                        <TableCell sx={{ border: '1px solid #90caf9' }}>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: activity.status === 'warning' ? 'orange' : 'green',
                                                    fontWeight: 'bold',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                {activity.status === 'warning' ? <WarningIcon fontSize="small" /> : <CheckCircleIcon fontSize="small" />}
                                                {activity.status}
                                            </Typography>
                                        </TableCell>
                                        <TableCell sx={{ border: '1px solid #90caf9' }}>{activity.errorAlert}</TableCell>
                                        <TableCell sx={{ border: '1px solid #90caf9' }}>
                                            <Tooltip title={activity.action}>
                                                <Button variant="contained" color="primary" size="small">{activity.action}</Button>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </section>

            </div>
            <Footer />
        </div>
    );
};

export default EquipmentStatus;






