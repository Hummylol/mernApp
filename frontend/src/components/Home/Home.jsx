import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar2 from '../Navbar/Navbar2';
import {motion} from 'framer-motion'

const HomePage = () => {
  const navigate = useNavigate();

  return (
    
    <div className="homepage-container">
      <Navbar2 />
        <div className="buttons">
          <button onClick={() => navigate('/workouts')}>Workouts</button>
          <button onClick={() => navigate('/progress')}>Track Progress</button>
          <button onClick={() => navigate('/profile')}>Your Profile</button>
        </div>
    </div>
  );
};

export default HomePage;
