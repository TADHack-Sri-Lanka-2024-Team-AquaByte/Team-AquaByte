import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage'; 
import QuotaManagement from '../pages/QuotaManagement';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/quota-management" element={<QuotaManagement />} />
    

            {/* Add more routes as needed */}
        </Routes>
    );
};

export default AppRoutes;
