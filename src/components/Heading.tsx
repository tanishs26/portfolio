"use client"
import React from 'react';
import { motion } from 'framer-motion';
const Heading = ({children,className}:{children?:string,className?:string}) => {
    return (
      <motion.h1
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        className={`flex w-full  items-center gap-x-4 text-2xl md:text-4xl font-bold tracking-tight text-primary dark:text-primary transition-all duration-300 ease-in-out ${className}`}
      >
        {children}
      </motion.h1>
    );
}

export default Heading;
