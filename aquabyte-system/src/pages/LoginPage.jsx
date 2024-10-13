// src/pages/LoginPage.js
import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Modal,
  IconButton,
} from '@mui/material';

import { Close as CloseIcon } from '@mui/icons-material';

const Login = () => {
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [isMethodSelectionOpen, setIsMethodSelectionOpen] = useState(false);
  const [isCodeVerificationOpen, setIsCodeVerificationOpen] = useState(false);
  const [isUpdatePasswordOpen, setIsUpdatePasswordOpen] = useState(false);
  const [isPasswordUpdated, setIsPasswordUpdated] = useState(false);
  const [resetCode, setResetCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login:', { email, password, rememberMe });
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Login with Google');
  };

  const openForgotPasswordModal = (e) => {
    e.preventDefault();
    setIsForgotPasswordOpen(true);
  };

  const closeForgotPasswordModal = () => {
    setIsForgotPasswordOpen(false);
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    console.log('Forgot Password request for:', email);
    setIsForgotPasswordOpen(false);
    setIsMethodSelectionOpen(true);
  };

  const handleMethodSelection = (method) => {
    console.log(`Password reset via ${method}`);
    setIsMethodSelectionOpen(false);
    setIsCodeVerificationOpen(true);
  };

  const handleCodeVerification = (e) => {
    e.preventDefault();
    console.log(`Verification code entered: ${resetCode}`);
    setIsCodeVerificationOpen(false);
    setIsUpdatePasswordOpen(true);
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      console.log('Password updated:', newPassword);
      setIsUpdatePasswordOpen(false);
      setIsPasswordUpdated(true);
      setErrorMessage('');
    } else {
      setErrorMessage("Passwords don't match");
    }
  };

  const handleSignInRedirect = () => {
    setIsPasswordUpdated(false);
    console.log('Redirecting to sign-in page...');
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Image Section */}
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
          alt="Login"
          
          sx={{
            width: '100%', // Make the image occupy full width
            height: '100%', // Make the image occupy full height
            objectFit: 'cover', // Cover the entire area
            
          }}
        />
      </Box>

      {/* Form Section */}
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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 3,
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  color="primary"
                />
              }
              label="Remember Me"
            />
            <Button onClick={openForgotPasswordModal}>Forgot Password?</Button>
          </Box>
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
            Sign In
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
          Create new account:{' '}
          <Button href="/register" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
            Register
          </Button>
        </Typography>
      </Box>

      {/* Modals */}
      {/* Forgot Password Modal */}
      <Modal open={isForgotPasswordOpen} onClose={closeForgotPasswordModal}>
        <Box sx={modalStyle}>
          <IconButton
            onClick={closeForgotPasswordModal}
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Forgot Password
          </Typography>
          <Box component="form" onSubmit={handleForgotPasswordSubmit}>
            <TextField
              label="Enter your email to reset your password."
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <Button type="submit" variant="contained" fullWidth>
              Reset Password
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Method Selection Modal */}
      <Modal open={isMethodSelectionOpen}>
        <Box sx={modalStyle}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Make Selection
          </Typography>
          <Typography>Select how you want to receive the reset code</Typography>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleMethodSelection('Email')}
            sx={{ marginTop: 2 }}
          >
            Email
          </Button>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleMethodSelection('SMS')}
            sx={{ marginTop: 1 }}
          >
            SMS
          </Button>
        </Box>
      </Modal>

      {/* Code Verification Modal */}
      <Modal open={isCodeVerificationOpen}>
        <Box sx={modalStyle}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Verify Code
          </Typography>
          <Typography>Please enter the verification code sent to your email.</Typography>
          <Box component="form" onSubmit={handleCodeVerification} sx={{ marginTop: 2 }}>
            <TextField
              label="Verification Code"
              type="text"
              value={resetCode}
              onChange={(e) => setResetCode(e.target.value)}
              required
              fullWidth
            />
            <Button type="submit" variant="contained" fullWidth sx={{ marginTop: 2 }}>
              Verify Code
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Update Password Modal */}
      <Modal open={isUpdatePasswordOpen}>
        <Box sx={modalStyle}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Update Password
          </Typography>
          <Box component="form" onSubmit={handlePasswordUpdate}>
            <TextField
              label="New Password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            {errorMessage && <Typography color="error">{errorMessage}</Typography>}
            <Button type="submit" variant="contained" fullWidth sx={{ marginTop: 2 }}>
              Update Password
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Password Updated Modal */}
      <Modal open={isPasswordUpdated}>
        <Box sx={modalStyle}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Password Updated
          </Typography>
          <Typography>Your password has been updated successfully!</Typography>
          <Button
            variant="contained"
            onClick={handleSignInRedirect}
            sx={{ marginTop: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Login;
