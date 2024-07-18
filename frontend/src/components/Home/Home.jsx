import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar2 from '../Navbar/Navbar2';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    
    <div className="homepage-container">
      <Navbar2 />
      <header className="homepage-header">
        <h1>Welcome to Hummy's Workout App</h1>
        <p>Your journey to a healthier and stronger you starts here!</p>
      </header>
      <section className="motivation-section">
        <h2>Stay Motivated</h2>
        <p>“The only bad workout is the one that didn’t happen.”</p>
      </section>
      <section className="navigation-section">
        <h2>Get Started</h2>
        <div className="buttons">
          <button onClick={() => navigate('/workouts')}>Workouts</button>
          <button onClick={() => navigate('/progress')}>Track Progress</button>
          <button onClick={() => navigate('/profile')}>Your Profile</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
