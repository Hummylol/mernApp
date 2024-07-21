import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar2 from '../Navbar/Navbar2';
import { motion } from 'framer-motion';
import Page from '../page/Page';

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
  const pagesRef = useRef([]);

  useLocomotiveScroll();

  useEffect(() => {
    const interval = setInterval(() => {
      setText(prevText => (prevText === "HUMAID" ? "SADATH" : "HUMAID"));
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div id="main-container" data-scroll-container>
      <motion.div className="homepage-container" data-scroll-section>
        <Navbar2 />
        <motion.p className="name">
          <span className='namespan'>Hi, I'm </span>
          <motion.span
            key={text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Anime full={text} />
          </motion.span>
        </motion.p>
        <div className="buttons">
          <button onClick={() => navigate('/workouts')}>Workouts</button>
          <button onClick={() => navigate('/progress')}>Track Progress</button>
          <button onClick={() => navigate('/profile')}>Your Profile</button>
        </div>
      </motion.div>
      <div className="pages-container">
        {["1", "2", "3"].map((text, index) => (
          <motion.div
            key={index}
            ref={(el) => (pagesRef.current[index] = el)}
            className="page"
            data-scroll-section
          >
            <Page text={text} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
import useLocomotiveScroll from '../useLocomotiveScroll';
