import React from 'react';
import './FishIdentificationPage.css'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

const fishData = [
    { species: 'Fishname', size: '100cm', weight: '30kg', image: 'fish1.jpg' },
    { species: 'Fishname', size: '100cm', weight: '30kg', image: 'fish2.jpg' },
    { species: 'Fishname', size: '100cm', weight: '30kg', image: 'fish3.jpg' },
    { species: 'Fishname', size: '100cm', weight: '30kg', image: 'fish4.jpg' },
    { species: 'Fishname', size: '100cm', weight: '30kg', image: 'fish5.jpg' },
    { species: 'Fishname', size: '100cm', weight: '30kg', image: 'fish6.jpg' },
];

const faqData = [
    { question: "How do I identify a fish?", answer: "Identifying a fish involves examining its physical characteristics..." },
    { question: "What tools can help with fish identification?", answer: "Various tools, including field guides, apps, and..." },
    { question: "Can I identify fish by their habitat?", answer: "Yes, the habitat is often a key indicator of fish species..." }
];

const FishIdentificationPage = () => {
    return (
        <div className="fish-identification-page">
            {/* Header Section */}
            <Header />

            {/* Main Content */}
            <main>
                <section className="image-container">
                    <div className="text-content">
                        <h1>Fish Identification</h1>
                        <p>A comprehensive guide to identifying fish species in Sri Lanka.</p>
                    </div>
                    <img src="fish-svg.png" alt="Fish Graphic" className="small-fish-image" />
                </section>

                {/* Search Bar */}
                <div className="search-bar">
                    <input type="text" placeholder="Search for Fish Species..." />
                </div>

                {/* Fish Cards */}
                <div className="fish-cards">
                    {fishData.map((fish, index) => (
                        <div key={index} className="fish-card">
                            <img src={fish.image} alt={fish.species} />
                            <div className="fish-info">
                                <p>Species: {fish.species}</p>
                                <p>Size: {fish.size}</p>
                                <p>Weight: {fish.weight}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <section className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    {faqData.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <details>
                                <summary>{faq.question}</summary>
                                <p>{faq.answer}</p>
                            </details>
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default FishIdentificationPage;
