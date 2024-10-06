import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LandingPage = () => {
    const navigate = useNavigate(); // For navigation

    const handleGetStartedClick = () => {
        navigate('/login'); // Redirects to the login page
    };

    return (
        <div className="landing-page">
            <Header /> {/* Include the Header component */}
            <div className="image-container">
                <img src="barracuda.jpg" alt="Descriptive Alt Text" className="landing-image" />
                <div className="text-overlay">
                    <h1>Real-time Monitoring for Sustainable Fishing</h1>
                    <h2>Enhancing efficiency and Sustainability in the fishing industry</h2>
                    <button className="get-started-button" onClick={handleGetStartedClick}>Get Started</button>
                </div>
            </div>
            {/* New UI Section */}
            <div className="features-section">
                <h2 className="features-heading">Explore Our Features</h2>
                <div className="features-container">
                    <div className="feature">
                        <h3 className="feature-title">Fish Species Identification</h3>
                        <p className="feature-description">Identifies different species of fish in real-time</p>
                        <button className="feature-button">Learn More</button>
                    </div>
                    <div className="feature">
                        <h3 className="feature-title">Quota Management</h3>
                        <p className="feature-description">Manage fishing quotas effectively</p>
                        <button className="feature-button">Learn More</button>
                    </div>
                    <div className="feature">
                        <h3 className="feature-title">Fish Health Management</h3>
                        <p className="feature-description">Monitor and manage the health of fish</p>
                        <button className="feature-button">Learn More</button>
                    </div>
                </div>
            </div>

            {/* New Section */}
            <div className="cta-section">
                <h2 className="cta-heading">Dive in Today</h2>
                <p className="cta-text">Join AquaByte and explore a world of seamless aquatic management.</p>
                <p className="cta-text">Register now to streamline your processes.</p>
                <button className="cta-button" onClick={() => navigate('/register')}>Register</button>
            </div>

            <Footer /> {/* Include the Footer component */}
        </div>
    );
};

export default LandingPage;
