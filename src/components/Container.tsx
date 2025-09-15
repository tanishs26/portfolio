import React from "react";
import Navbar from "./Navbar";
type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={` 
          max-w-[950px] mx-auto h-full`}
    >
      <div
        className={`max-w-4xl mx-auto bg-white dark:bg-[#171717] ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
