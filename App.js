import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GetProjectsPage from './pages/GetProjectsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-projects" element={<GetProjectsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
