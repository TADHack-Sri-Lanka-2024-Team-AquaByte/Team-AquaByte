import React, { useState } from 'react';
import './LoginPage.css'; // Ensure you import your CSS file

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login:', { email, password, rememberMe });
    };

    const handleGoogleLogin = () => {
        // Handle Google login logic here
        console.log('Login with Google');
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
                            <a href="/forgot-password">Forgot Password?</a>
                        </div>
                    </div>
                    <button className='btnSignIn' type="submit">Sign In</button>
                </form>
                <p className='text'>or</p>
                <div>
                    <button className="google-login" onClick={handleGoogleLogin}>
                        <img
                            src=""
                            alt="Google Icon"
                            className="google-icon"
                        />
                        Login with Google
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Login;
