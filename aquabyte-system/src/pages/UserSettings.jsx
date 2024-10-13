import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
} from '@mui/material';
import Header from '../components/Header'; // Adjust the path as necessary
import Footer from '../components/Footer'; // Adjust the path if necessary

const users = [
    { id: '001', name: 'Paranee', role: 'Fisher Woman', lastSeen: '2023-10-01 10:30' },
    { id: '002', name: 'Faseeha', role: 'Harbor Manager', lastSeen: '2023-10-01 10:30' },
    { id: '003', name: 'Minhaj', role: 'Admin', lastSeen: '2023-10-01 10:30' },
    { id: '004', name: 'Nasrin', role: 'Regulatory Officer', lastSeen: '2023-10-01 10:30' },
    { id: '005', name: 'Kasun', role: 'Regulatory Officer', lastSeen: '2023-10-01 10:30' },
];

const UserSettings = () => {
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',  // Add address field
        image: null, // State for the profile image
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setProfile((prev) => ({ ...prev, image: URL.createObjectURL(file) })); // Create a URL for the image
        } else {
            alert('Please upload a valid image file.');
        }
    };

    const handleSave = () => {
        console.log('Profile saved:', profile);
        // Add logic to save profile changes
    };

    return (
        <div>
            <Header /> {/* Include the Header component */}
            <Box sx={{ p: 4, backgroundColor: '#f9f9f9' }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'black' }}>Roles & Permissions</Typography>
                <TableContainer component={Paper} sx={{ borderRadius: '10px', overflow: 'hidden', backgroundColor: '#E8F0FE' }}>
                    <Table size="small">
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#007BFF' }}>
                                <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>User ID</TableCell>
                                <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Name</TableCell>
                                <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Role</TableCell>
                                <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Last Seen</TableCell>
                                <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id} hover>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.role}</TableCell>
                                    <TableCell>{user.lastSeen}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="primary" size="small" sx={{ mr: 1 }}>Edit</Button>
                                        <Button variant="contained" color="secondary" size="small">Remove</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button variant="outlined" color="primary" sx={{ mt: 2 }}>Invite User</Button>

                <Typography variant="h4" sx={{ mt: 4, color: 'black' }} gutterBottom>Profile Settings</Typography>
                <Box sx={{ display: 'flex', mt: 2 }}>
                    <Box sx={{ mr: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <label htmlFor="image-upload" style={{ cursor: 'pointer' }}>
                                {profile.image ? (
                                    <img
                                        src={profile.image}
                                        alt="Profile"
                                        style={{
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            border: '2px solid #007BFF',
                                            marginRight: '16px',
                                            transition: 'transform 0.3s',
                                        }}
                                        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                                        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                    />
                                ) : (
                                    <Box
                                        sx={{
                                            width: '80px',
                                            height: '80px',
                                            border: '2px dashed #007BFF',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#007BFF',
                                            marginRight: '16px',
                                            borderRadius: '10px',
                                            p: 1,
                                            transition: 'background-color 0.3s, transform 0.3s',
                                            '&:hover': {
                                                backgroundColor: '#E8F0FE',
                                                transform: 'scale(1.05)',
                                            },
                                        }}
                                    >
                                        <Typography variant="body2" textAlign="center">Upload Image</Typography>
                                    </Box>
                                )}
                            </label>
                            <input
                                type="file"
                                id="image-upload"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ display: 'none' }} // Hide the file input
                            />
                        </Box>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Box sx={{ mb: 1, maxWidth: '300px' }}>
                            <TextField
                                label="Address"
                                name="address"
                                value={profile.address}
                                onChange={handleChange}
                                margin="normal"
                                size="small"
                                fullWidth
                            />
                        </Box>
                        <Box sx={{ mb: 1, maxWidth: '300px' }}>
                            <TextField
                                label="Name"
                                name="name"
                                value={profile.name}
                                onChange={handleChange}
                                margin="normal"
                                size="small"
                                fullWidth
                            />
                        </Box>
                        <Box sx={{ mb: 1, maxWidth: '300px' }}>
                            <TextField
                                label="Email"
                                name="email"
                                value={profile.email}
                                onChange={handleChange}
                                type="email"
                                margin="normal"
                                size="small"
                                fullWidth
                            />
                        </Box>
                        <Box sx={{ mb: 1, maxWidth: '300px' }}>
                            <TextField
                                label="Phone Number"
                                name="phone"
                                value={profile.phone}
                                onChange={handleChange}
                                margin="normal"
                                size="small"
                                fullWidth
                            />
                        </Box>
                        <Button variant="contained" color="primary" onClick={handleSave} sx={{ mt: 2 }}>Save Changes</Button>
                    </Box>
                </Box>
            </Box>
            <Footer /> {/* Footer component at the bottom */}
        </div>
    );
};

export default UserSettings;
