import React, { useState } from 'react';
import './LoginPage.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
    const [isMethodSelectionOpen, setIsMethodSelectionOpen] = useState(false);
    const [isCodeVerificationOpen, setIsCodeVerificationOpen] = useState(false);
    const [isUpdatePasswordOpen, setIsUpdatePasswordOpen] = useState(false);
    const [isPasswordUpdated, setIsPasswordUpdated] = useState(false); // New state for success popup
    const [resetCode, setResetCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
            setIsPasswordUpdated(true); // Show the success popup
        } else {
            console.log("Passwords don't match");
        }
    };

    const handleSignInRedirect = () => {
        // Redirect the user to the sign-in page
        setIsPasswordUpdated(false);
        console.log("Redirecting to sign-in page...");
    };

    return (
        <div className="login-container">
            <div className="login-image">
                <img src="stingray.jpg" alt="Login" />
            </div>
            <div className="login-form">
                <h2 className='heading'>Welcome to <br /> AquaByte...</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="remember-forgot-container">
                        <div className="remember-me">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label>Remember Me</label>
                        </div>
                        <div className="forgot-password">
                            <a href="/" onClick={openForgotPasswordModal}>Forgot Password?</a> 
                        </div>
                    </div>
                    <button className='btnSignIn' type="submit">Sign In</button>
                </form>
                <p className='text'>or</p>
                <div>
                    <button className="google-login" onClick={handleGoogleLogin}>
                        <img
                            src="google-logo.png"
                            alt="Google Icon"
                            className="google-icon"
                        />
                        Sign In with Google
                    </button>
                </div>
                <p className="register-link">
                    Create new account: <a href="/register">Register</a>
                </p>
            </div>

            {/* Forgot Password Modal */}
            {isForgotPasswordOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeForgotPasswordModal}>&times;</span>
                        <h2>Forgot Password</h2>
                        <form onSubmit={handleForgotPasswordSubmit}>
                            <div className="input-group">
                                <label>Enter your email to reset your password.</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <button className="btnSubmit" type="submit">Reset Password</button>
                        </form>
                    </div>
                </div>
            )}

            {/* Method Selection Modal */}
            {isMethodSelectionOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Make Selection</h2>
                        <label>Select how you want to receive the reset code</label>
                        <button className="btnMethod" onClick={() => handleMethodSelection('Email')}>Via Email</button>
                        <button className="btnMethod" onClick={() => handleMethodSelection('SMS')}>Via SMS</button>
                    </div>
                </div>
            )}

            {/* Code Verification Modal */}
            {isCodeVerificationOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Verify Code</h2>
                        <form onSubmit={handleCodeVerification}>
                            <div className="input-group">
                                <label>Enter the reset code sent to your email/SMS.</label>
                                <input
                                    type="text"
                                    placeholder="Enter reset code"
                                    value={resetCode}
                                    onChange={(e) => setResetCode(e.target.value)}
                                    required
                                />
                            </div>
                            <button className="btnSubmit" type="submit">Verify Code</button>
                        </form>
                    </div>
                </div>
            )}

            {/* Update Password Modal */}
            {isUpdatePasswordOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Update Password</h2>
                        <form onSubmit={handlePasswordUpdate}>
                            <div className="input-group">
                                <label>New Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter new password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label>Confirm New Password</label>
                                <input
                                    type="password"
                                    placeholder="Confirm new password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button className="btnSubmit" type="submit">Update Password</button>
                        </form>
                    </div>
                </div>
            )}

            {/* Password Updated Confirmation Modal */}
            {isPasswordUpdated && (
                <div className="modal-overlay">
                    <div className="modal-content success-modal">
                        <h2>Password Updated!</h2>
                        <div className="success-icon">&#10003;</div> {/* Unicode checkmark */}
                        <p>Your password has been successfully updated.</p>
                        <button className="btnSubmit" onClick={handleSignInRedirect}>Sign In</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
