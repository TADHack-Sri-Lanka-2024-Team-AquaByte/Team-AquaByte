import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './routes/AppRoutes';
import './styles/App.css';


const App = () => {
    return (
        <Router>
            <AppRoutes>
            <AppRoutes />
            </AppRoutes>
        </Router>
    );
};

export default App;
