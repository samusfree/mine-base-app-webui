import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Users from '../pages/users';
import Health from '../pages/health';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/users" element={<Users />} />
      <Route path="/health" element={<Health />} />
    </Routes>
  );
};

export default AppRoutes;