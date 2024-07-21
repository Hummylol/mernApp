import React from 'react';
import { motion } from 'framer-motion';

const Page = ({ text }) => {
  return (
    <motion.div className='page'>
      {text}
    </motion.div>
  );
};

export default Page;
