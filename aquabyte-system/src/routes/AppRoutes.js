import React from 'react';
import { Routes, Route } from 'react-router-dom';
import QuotaManagement from '../pages/QuotaManagement';
import EquipmentStatus from '../pages/EquipmentStatus';
import UserSettings from '../pages/UserSettings';
import DashboardPage from '../pages/DashboardPage';



const AppRoutes = () => {
    return (
        <Routes>
            
            <Route path="/quota-management" element={<QuotaManagement />} />
            <Route path="/equipment-status" element={<EquipmentStatus />} />
            <Route path="/user-settings" element={<UserSettings />} />
            <Route path="/dashboard" element={<DashboardPage />} />

        </Routes>
    );
};

export default AppRoutes;
