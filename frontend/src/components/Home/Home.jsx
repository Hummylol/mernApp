import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar2 from '../Navbar/Navbar2';
import { motion, AnimatePresence } from 'framer-motion';

const letterContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Anime = ({ full }) => {
  return (
    <motion.span
      className="letters-container"
      variants={letterContainer}
      initial="hidden"
      animate="visible"
    >
      {full.split('').map((char, index) => (
        <AnimeLetter key={index} char={char} />
      ))}
    </motion.span>
  );
};

const AnimeLetter = ({ char }) => {
  return (
    <motion.span variants={letter} className="letter">
      {char}
    </motion.span>
  );
};

const HomePage = () => {
  const [text, setText] = useState("HUMAID");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setText(prevText => (prevText === "HUMAID" ? "SADATH" : "HUMAID"));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage-container">
      <Navbar2 />
      <motion.p className="name">
        <span className='namespan'>Hi, I'm </span>
          <motion.span
            key={text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Anime full={text} />
          </motion.span>
      </motion.p>
      <div className="buttons">
        <button onClick={() => navigate('/workouts')}>Workouts</button>
        <button onClick={() => navigate('/progress')}>Track Progress</button>
        <button onClick={() => navigate('/profile')}>Your Profile</button>
      </div>
    </div>
  );
};

export default HomePage;
