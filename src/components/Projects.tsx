"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import {
  SiAppwrite,
  SiNextdotjs,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
const projects = [
  {
    title: "Muse-Music Player",
    href: "#",
    img: "/muse.png",
    desc: "Music player with mobile and desktop layouts feature seamless play, pause, skip, repeat and volume controls.",
    icon: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: FaReact, color: "#61DAFB", name: "React" },
      { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind" },
      { icon: SiSupabase, color: "#3ECF8E", name: "Supabase" },
    ],
  },
  {
    title: "Frosty - Movie Search",
    href: "#",
    img: "/frosty.png",
    desc: "Web app for movie search and trending listings in real-time using the TMDb API",
    icon: [
      { icon: FaReact, color: "#61DAFB", name: "React" },
      { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind" },
      { icon: SiAppwrite, color: "#FF5C2E", name: "Appwrite" },
    ],
  },
  {
    title: "Horizon - A Blog App",
    href: "#",
    img: "/horizon.png",
    desc: "Full-stack blog platform with user authentication, image upload, and edit features for users.",
    icon: [
      { icon: FaReact, color: "#61DAFB", name: "React" },
      { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind" },
      { icon: SiSupabase, color: "#3ECF8E", name: "Supabase" },
    ],
  },
  {
    title: "Redis - Clone",
    href: "#",
    img: "/redis.png",
    desc: "Tried to build a redis landing page clone with responsiveness and crystal clear design",
    icon: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: FaReact, color: "#61DAFB", name: "React" },
      { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind" },
    ],
  },
  {
    title: "Currency - Converter App",
    href: "#",
    img: "/currency.png",
    desc: "A currency converter app that allows users to convert between different currencies in real-time.",
    icon: [
      { icon: FaReact, color: "#61DAFB", name: "React" },
      { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind" },
    ],
  },
  {
    title: "Weath - Weather App",
    href: "#",
    img: "/weath.png",
    desc: "A weather app that provides real-time weather updates and forecasts for any location.",
    icon: [
      { icon: FaReact, color: "#61DAFB", name: "React" },
      { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind" },
    ],
  },
];
type ProjectProps = {
  title: string;
  href: string;
  img: string;
  desc: string;
  icon?: { icon: any; color?: string }[];
};
const Projects = ({projects}:{projects:ProjectProps[]}) => {
  const [currentProject, setCurrentProject] =
    React.useState<ProjectProps | null>(null);
  return (
    <div className="grid grid-cols-1 gap-4 gap-y-8 py-4 md:grid-cols-3 px-4">
      {projects.map((item, idx) => {
        return (
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: -10,
            }}
            onClick={() => setCurrentProject(item)}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="cursor-none group relative mb-4  hover:border-neutral-300 dark:hover:border-neutral-700  rounded-3xl  hover:shadow-input/30 dark:hover:shadow-input/10  border border-transparent h-[320px]  "
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
                className="w-full md:w-[80%]  group-hover:translate-x-4 group-translate-y-10  transition-transform duration-300
                            "
              >
                <h1 className="mt-4 font-semibold  text-primary dark:text-primary text-sm lg:text-md">
                  {item.title}
                </h1>

                <div className="mt-2  text-secondary dark:text-secondary  text-sm">
                  {item.desc}
                </div>
              </div>
              {/* Stack and link */}
              <div className="absolute bottom-3 w-full flex items-center justify-between">
                <div className=" flex   mt-3 group-hover:translate-x-4 group-translate-y-10 transition-transform duration-300 ">
                  {item.icon?.map((Icon, index) => (
                    <span key={index} className="relative  group/stack -mx-1">
                      <motion.span>
                        <Icon.icon
                          size={27}
                          color={Icon.color}
                          className={`border-1 group bg-neutral-100 dark:bg-black border-neutral-300 dark:border-neutral-600 p-1 rounded-full transition-transform duration-200  hover:scale-125 ${
                            Icon.icon === SiNextdotjs &&
                            "bg-white text-black dark:text-neutral-50 antialiased  dark:bg-black/70"
                          } `}
                        />
                      </motion.span>

                      <motion.span className="absolute -top-5 bg-neutral-800 backdrop-blur-2xl rounded-md text-white text-xs hidden group-hover/stack:block px-2 py-1">
                        {Icon.name}
                      </motion.span>
                    </span>
                  ))}
                </div>
                <Link
                  href={item.href}
                  className="text-neutral-900 bottom-2 md:hidden flex group-hover:flex  right-4 absolute md:transition-all md:duration-300 ease-in-out  dark:text-neutral-300"
                >
                  <FiExternalLink size={17} />
                </Link>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Projects;
