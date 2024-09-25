import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Header /> {/* Include the Header component */}
            <div className="image-container">
                <img src="barracuda.jpg" alt="Descriptive Alt Text" className="landing-image" />
                <div className="text-overlay">
                    <h1>Real-time Monitoring for Sustainable Fishing</h1>
                    <h2>Enhancing efficiency and Sustainability in the fishing industry</h2>
                    <button className="get-started-button">Get Started</button>
                </div>
            </div>
            <Footer /> {/* Include the Footer component */}
        </div>
    );
};

export default LandingPage;
