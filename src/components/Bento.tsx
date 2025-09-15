"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import DotBox from "./DotBox";

const AboutSection = () => {
  const about =
    " I am Tanish Sharma, a BCA student in the 6th semester with specialization in web development. I have experience working with  frontend technologies including HTML, CSS, JavaScript, React, and Next.js. My focus is on developing efficient, responsive, and maintainable web applications. I have completed projects involving API integration, state management, and user interface design. Currently, I am advancing my skills through practical development and preparing for professional opportunities in the software development field.";
  return (
    <section className="mt-10 overflow-hidden md:mt-15  dark:bg-[#171717] text-neutral-700 dark:text-neutral-300 py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-8 transition-colors duration-300">
      {/* Left Side: Image */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        className="relative"
      >
        <Image
          src="/tanish.jpg"
          alt="Profile picture of Tanish Sharma"
          width={300}
          height={400}
          className="w-72 h-120 md:w-80 lg:w-96 object-contain  hover:scale-105 transition-all duration-300  "
          priority
          sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
        />
      </motion.div>

      {/* Right Side: Text Content */}
      <div className="w-full md:w-7/12 text-center md:text-left relative">
        {/* Vertical Text */}
        <div className="absolute left-[40%] -top-6 md:-left-16 lg:top-0 md:top-6 transform rotate-0 md:rotate-[-90deg] text-sm tracking-tight mt-10 origin-center">
          <div className="flex items-center justify-center gap-2 whitespace-nowrap">
            <div className="w-16 h-[2px] bg-neutral-700 dark:bg-neutral-300"></div>
            <p className="font-medium">MORE ABOUT</p>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 pl-0 md:pl-10">
           <br className="hidden md:block" />
          <span className=" text-gray-500">
            Frontend{" "}
            <span className="text-neutral-600 dark:text-neutral-300">
              Developer
            </span>
          </span>
        </h2>

        {/* Description */}
        <motion.div className="text-neutral-600 dark:text-neutral-400 mb-6 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0 md:pl-10 flex flex-wrap">
          {about.split(" ").map((word, idx) => {
            return (
              <motion.p
              key={idx}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{
                  delay: 0.1 * idx,
                }}
                className={`${word === "Tanish" ? `font-semibold` : null} ${
                  word === "Sharma" ? `font-semibold` : null
                }`}
              >
                {word}&nbsp;
              </motion.p>
            );
          })}
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start md:pl-10">
          <Link
            href="/projects"
            className="bg-neutral-600 dark:bg-neutral-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-800 text-center transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            See Projects
          </Link>
          <Link
            href="/contact"
            className="border-2 border-neutral-600 dark:border-neutral-500 text-neutral-600 dark:text-neutral-400 font-semibold py-3 px-6 rounded-lg hover:bg-neutral-600 hover:text-white dark:hover:bg-neutral-700 dark:hover:text-white text-center transition-all duration-200"
          >
            Get in Touch
          </Link>
        </div>
        {/* Statistics */}
      </div>
    </section>
  );
};

export default AboutSection;
