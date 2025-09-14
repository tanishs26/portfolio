"use client"
import React from 'react';
import {motion } from 'framer-motion';
const Subheading = ({children}:{children:string}) => {
    return (
      <motion.p
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        className="text-md 
            mt-4 text-secondary transition-all duration-300 ease-in-out"
      >
       {children}
      </motion.p>
    );
}

export default Subheading;
