"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion'; 
const projects = [
  {
    title: "Muse-Music Player",
    href: "#",
    img: "/muse.png",
    desc: "Music player with mobile and desktop layouts feature seamless play, pause, skip, repeat and volume controls.",
  },
  {
    title: "Frosty - Movie Search",
    href: "#",
    img: "/frosty.png",
    desc: "Web app for movie search and trending listings in real-time using the TMDb API",
  },
  {
    title: "Horizon - A Blog App",
    href: "#",
    img: "/horizon.png",
    desc: "Full-stack blog platform with user authentication, image upload, and edit features for users.",
  },

  {
    title: "Redis - Clone",
    href: "#",
    img: "/redis.png",
    desc: "Tried to build a redis landing page clone with responsiveness and crystal clear design",
  },
  {
    title: "Redis - Clone",
    href: "#",
    img: "/redis.png",
    desc: "Tried to build a redis landing page clone with responsiveness and crystal clear design",
  },
  {
    title: "Redis - Clone",
    href: "#",
    img: "/redis.png",
    desc: "Tried to build a redis landing page clone with responsiveness and crystal clear design",
  },
];
const Projects = () => {
    return (
        <div className='grid grid-cols-1 gap-4 py-4 md:grid-cols-3 px-4'>

            {
                 projects.map((item,idx)=>{
                    return (
                      <motion.div
                        key={idx}
                        initial={{
                          opacity: 0,
                          filter: "blur(10px)",
                          y: -10,
                        }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="cursor-none group relative mb-4  hover:border-neutral-300 dark:hover:border-neutral-700  rounded-3xl  hover:shadow-input/10 dark:hover:shadow-input/10  border border-transparent h-[320px] "
                      >
                        <div className="cursor-none ">
                          <Image
                            width={300}
                            height={300}
                            src={item.img}
                            alt={item.title}
                            className="object-fill rounded-3xl group-hover:scale-105 md:transition-all md:duration-300 ease-in-out 
                           "
                          />
                          <div
                            className="w-full md:w-[70%]  group-hover:translate-x-4 group-translate-y-10  transition-transform duration-300
                            "
                          >
                            <h1 className="mt-4 font-semibold  text-primary dark:text-primary text-sm lg:text-md">
                              {item.title}
                            </h1>

                            <div className="mt-2  text-secondary dark:text-secondary  text-sm">
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                 })
            }
        </div>
    );
}

export default Projects;
