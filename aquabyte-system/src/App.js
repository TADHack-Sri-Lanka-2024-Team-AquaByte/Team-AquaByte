import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './routes/AppRoutes';
import './styles/App.css';
import LandingPage from './pages/LandingPage';


const App = () => {
    return (
        <Router>
            <AppRoutes>
                <LandingPage/>
            </AppRoutes>
        </Router>
    );
};

export default App;
