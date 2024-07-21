import React from 'react';
import { motion } from 'framer-motion';

const Page = ({ text,color}) => {
  return (
    <motion.div  style={{backgroundColor:`${color}`}} className='page'>
      {text}
    </motion.div>
  );
};

export default Page;
