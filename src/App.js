import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Импортируем Routes
import RegistrationForm from './components/RegistrationForm';
import ModeratorPage from './pages/ModeratorPage';

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/auth" element={<RegistrationForm />} />
              <Route path="/moderator" element={<ModeratorPage />} />
          </Routes>
      </Router>
  );
};

export default App;
