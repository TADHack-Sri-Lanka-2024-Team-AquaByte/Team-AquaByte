import React, { useState } from 'react';
import './LoginPage.css'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false); 

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
        setIsForgotPasswordOpen(true); // Open the forgot password modal
    };

    const closeForgotPasswordModal = () => {
        setIsForgotPasswordOpen(false); // Close the forgot password modal
    };

    const handleForgotPasswordSubmit = (e) => {
        e.preventDefault();
        // Handle forgot password submission logic here
        console.log('Forgot Password request for:', email);
        closeForgotPasswordModal(); // Close modal after submitting
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
                            <a href="/" onClick={openForgotPasswordModal}>Forgot Password?</a> {/* Open modal on click */}
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
                    Create new account:  <a href="/register">Register</a>
                </p> {/* Register link */}
            </div>

            {/* Forgot Password Popup (Modal) */}
            {isForgotPasswordOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeForgotPasswordModal}>&times;</span>
                        <h2>Forgot Password</h2>
                        <form onSubmit={handleForgotPasswordSubmit}>
                            <div className="input-group">
                                <label>Please enter your email to reset your password.</label>
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
        </div>
    );
};

export default Login;
