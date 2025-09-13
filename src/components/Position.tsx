import React, { useState, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

const Position = () => {
  const posiArray = [
    "Frontend Engineer",
    "Full Stack Engineer",
    "Design Engineer",
  ];
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev + 1) % posiArray.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.span
    key={count}
      initial={{
        filter: "blur(10px)",
        opacity: 0,
        y: -10, 
        x: 0,
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        x:[0,-2,2,-2,2,0]
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="text-sm   bg-neutral-700/5   p-2 py-1 inline-block rounded-lg border-gray-400 text-neutral-500"
    >
      {posiArray[count]}
    </motion.span>
  );
};

export default Position;
