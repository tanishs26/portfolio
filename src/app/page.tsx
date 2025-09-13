"use client";
import Container from "@/components/Container";
import Position from "@/components/Position";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const projects = [
  {
    title: "Muse - Music Streaming App",
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
];

export default function Home() {
  return (
    <Container
      className="min-h-[200vh] pt-15 md:pt-20 md:pb-10 border-x-1 cursor-none
    dark:bg-[#171717]
    border-neutral-300 dark:border-neutral-700 divide-y-2 divide-neutral-200 dark:divide-neutral-800 text-gray-100"
    >
      <div className="flex flex-col justify-start w-full  p-4 pb-6 ">
        <motion.h1
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          className=" flex w-full  items-center gap-x-4 text-2xl md:text-4xl font-bold tracking-tight text-primary dark:text-primary transition-all duration-300 ease-in-out"
        >
          Tanish Sharma
          <div
            style={{
              contain: "layout paint",
              isolation: "isolate",
              willChange: "contents",
            }}
            className=" flex items-center shadow-input dark:shadow-white/17  rounded-lg border-gray-400 text-neutral-500"
          >
            <Position />
          </div>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          className="text-md text-shadow-sm  mt-4 text-secondary transition-all duration-300 ease-in-out"
        >
          Frontend Developer with a strong background in building user-friendly
          web applications. Experienced in developing full-stack SaaS projects.
        </motion.p>
      </div>
      <Hero/>


    </Container>
  );
}

const Hero = () => {
  return (
    <main className=" p-4 w-full flex flex-col justify-center  ">
      <h1 className="text-shadow-xs text-primary p-1 bg-black/10 dark:bg-white/10 w-fit">
        I create ideas
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-4 mt-5 ">
        {projects.map((item, idx) => {
          return (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                delay: idx * 0.1,
                ease: "easeInOut",
                duration: 0.3,
              }}
              className="group w-full md:w-[350px] m-auto h-[350px] flex flex-col  mb-10  rounded-xl
              border border-transparent 
           hover:border-neutral-300 
           dark:hover:border-neutral-700 
           transition-all duration-300"
            >
              <div className="w-full h-[15rem] md:w-full group-hover:scale-105 transition-all duration-300  md:h-[200px] relative  overflow-hidden rounded-xl">
                <Image
                  src={item.img}
                  fill
                  alt={item.title}
                  className="object-cover "
                />
              </div>

              <div className="w-[70%]  group-hover:translate-x-4 translate-y-2  transition-transform duration-300 ">
                <h1 className="mt-4 font-semibold text-shadow-md text-primary dark:text-primary text-sm lg:text-md">
                  {item.title}
                </h1>

                <div className="mt-2  text-secondary dark:text-secondary  text-sm">
                  {item.desc}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
};
