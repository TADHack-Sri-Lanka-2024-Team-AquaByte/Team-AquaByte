import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle Register logic here
        console.log('Register:', { email, password,confirmPassword });
      };
    
      const handleGoogleLogin = () => {
        // Handle Google login logic here
        console.log('Login with Google');
      };

    return (

        <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
            <Box
                sx={{
                    flex: 1,
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f5f5f5',
                }}
            >
                <Box
                    component="img"
                    src="stingray.jpg"
                    alt="Register"

                    sx={{
                        width: '100%', // Make the image occupy full width
                        height: '100%', // Make the image occupy full height
                        objectFit: 'cover', // Cover the entire area

                    }}
                />
            </Box>
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: { xs: 2, md: 4 },
                    backgroundColor: 'white',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ textAlign: 'center', marginTop: 3, color: 'rgba(5, 5, 26, 0.699)' }}
                >
                    Welcome to <br /> AquaByte...
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: 3,
                        maxWidth: 400,
                        width: '100%',
                        alignSelf: 'center',
                    }}
                >
                    <TextField
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Confirm Password"
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 3,
                        }}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            padding: '10px',
                            backgroundColor: '#0e2041',
                            color: 'white',
                            borderRadius: '5px',
                            fontSize: '16px',
                            width: '100%',
                            maxWidth: '300px',
                            margin: '0 auto',
                            '&:hover': {
                                backgroundColor: '#21a1f1',
                            },
                        }}
                    >
                        Register
                    </Button>
                </Box>

                <Typography variant="body1" sx={{ textAlign: 'center', marginTop: 2 }}>
                    or
                </Typography>

                <Button
                    onClick={handleGoogleLogin}
                    variant="outlined"
                    sx={{
                        padding: '10px',
                        borderRadius: '5px',
                        fontSize: '16px',
                        width: '100%',
                        maxWidth: '300px',
                        margin: '20px auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textTransform: 'none',
                    }}
                >
                    <Box
                        component="img"
                        src="google-logo.png"
                        alt="Google Icon"
                        sx={{ width: '20px', height: '20px', marginRight: '10px' }}
                    />
                    Sign In with Google
                </Button>

                <Typography variant="body2" sx={{ textAlign: 'center', marginTop: 2 }}>
                    Already have an account:{' '}
                    <Button href="/login" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                        Login
                    </Button>
                </Typography>
            </Box>

            
        </Box>
       


    );
};

export default Register;
