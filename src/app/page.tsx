"use client";

import Container from "@/components/Container";
import Position from "@/components/Position";
import { motion } from "framer-motion";

import ScrollStack from "@/components/ScrollStack";
import Footer from "@/components/Footer";
import Subheading from "@/components/Subheading";
import Projects from "@/components/Projects";
import DotBox from "@/components/DotBox";
import { projectsHome } from "@/components/ProjectArray";

export default function Home() {
  return (
    <Container
      className="h-full pt-15 md:pt-20 md:pb-10 border-x-1 cursor-none
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
            className="flex items-center shadow-input/30 dark:shadow-white/17  rounded-lg border-gray-400 text-neutral-500"
          >
            <Position />
          </div>
        </motion.h1>
        <Subheading className="md:w-[60%]">
          Frontend Developer with a strong background in building user-friendly
          web applications. Experienced in developing full-stack SaaS projects.
        </Subheading>
      </div>
      <div className="pt-6 px-4 w-full flex flex-col justify-center  ">
        <DotBox>I Create Ideas</DotBox>
        <Projects projects={projectsHome}/>
      </div>

      <ScrollStack />
      
      <Footer />
    </Container>
  );
}
