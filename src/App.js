import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';
import CreateRoom from './components/CreateRoom';
import JoinRoom from './components/JoinRoom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/room/create" element={<CreateRoom />} />
        <Route path="/room/join" element={<JoinRoom />} />
      </Routes>
    </Router>
  );
}

export default App;

