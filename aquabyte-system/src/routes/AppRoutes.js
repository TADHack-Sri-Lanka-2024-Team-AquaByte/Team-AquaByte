import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import NotificationPage from '../pages/NotificationPage';
import FishIdentificationPage from '../pages/FishIdentificationPage';  

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/notifications" element={<NotificationPage />} />
            <Route path="/fish-identification" element={<FishIdentificationPage />} /> 
        </Routes>
    );
};

export default AppRoutes;
