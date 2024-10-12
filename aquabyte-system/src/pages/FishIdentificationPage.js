import React from 'react';
import { Container, Box, Typography, TextField, Grid, Card, CardContent, CardMedia, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
                <Box sx={{ backgroundColor: '#cce7ff', height: '350px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', position: 'relative' }}>
                    <Box sx={{ maxWidth: '60%', padding: '100px' }}>
                        <Typography variant="h1" sx={{ fontSize: '60px', color: '#333' }}>Fish Identification</Typography>
                        <Typography variant="body1" sx={{ fontSize: '18px', marginTop: '10px', color: '#555' }}>
                            A comprehensive guide to identifying fish species in Sri Lanka.
                        </Typography>
                    </Box>
                    <Box component="img" src="fish-svg.png" alt="Fish Graphic" sx={{ width: '500px', height: 'auto', position: 'absolute', right: '150px', bottom: '20px' }} />
                </Box>

                {/* Search Bar */}
                <Box sx={{ textAlign: 'center', marginBottom: '40px', marginTop: '40px' }}>
                    <TextField
                        variant="outlined"
                        placeholder="Search for Fish Species..."
                        sx={{ width: '60%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
                    />
                </Box>

                {/* Fish Cards */}
                <Container>
                    <Grid container spacing={3} sx={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
                        {fishData.map((fish, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                    <CardMedia component="img" image={fish.image} alt={fish.species} sx={{ borderRadius: '10px', marginBottom: '15px' }} />
                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <Typography variant="h6">Species: {fish.species}</Typography>
                                        <Typography variant="body1">Size: {fish.size}</Typography>
                                        <Typography variant="body1">Weight: {fish.weight}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                {/* FAQ Section */}
                <Container sx={{ padding: '40px', backgroundColor: '#f9f9f9' }}>
                    <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '30px' }}>Frequently Asked Questions</Typography>
                    {faqData.map((faq, index) => (
                        <Accordion key={index} sx={{ marginBottom: '15px' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index + 1}-content`} id={`panel${index + 1}-header`}>
                                <Typography>{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{faq.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Container>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default FishIdentificationPage;
