import React, { useState } from 'react';
import './RegisterPage.css'; // Ensure you import your CSS file

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        // Handle registration logic here
        console.log('Register:', { email, password });
    };

    const handleGoogleLogin = () => {
        // Handle Google Login logic here
        console.log('Sign up with Google');
    };

    return (
        <div className="register-container">
            <div className="register-image">
                <img src="stingray.jpg" alt="Register" />
            </div>
            <div className="register-form">
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
                    <div className="input-group confirm-password-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className='btnSignUp' type="submit">Register</button>
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
                <div className="login-redirect">
                    <p>Already have an account? <a href="/login" className="login-link">Login</a>
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Register;
