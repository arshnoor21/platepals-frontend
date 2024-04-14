import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './../css/HomePage.css';

const HomePage = () => {
    return (
      <div className="home-container">
        <h1 className="home-title">Welcome to PlatePals!</h1>
        <p className="home-subtitle">Let's begin your culinary journey.</p>
        <Link to="/dashboard" className="home-link">Start Exploring</Link>
      </div>
    );
  }
  
  export default HomePage;