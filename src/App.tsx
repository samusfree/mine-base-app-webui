import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import UserRoutes from './users/routes/UserRoutes';

function App() {
  return (
    <div className="App">
      <UserRoutes />
    </div>
  );
}

export default App;