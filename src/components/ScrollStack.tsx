import React from "react";
import Container from "./Container";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const stack = [
  {
    name: "JavaScript",
    img: "/js.png",
  },
  {
    name: "TypeScript",
    img: "/ts.png",
  },
  {
    name: "React JS",
    img: "/react.png",
  },
  {
    name: "Next JS",
    img: "/next.webp",
  },
  {
    name: "Redux",
    img: "/redux.png",
  },
  {
    name: "Tailwind CSS",
    img: "/tailwind.png",
  },
  {
    name: "Framer Motion",
    img: "/framer-motion.webp",
  },
  {
    name: "V0",
    img: "/v0.svg",
  },
];
const ScrollStack = () => {
  return (
    <Container className="mt-8 p-4">
      <h1 className="text-shadow-xs text-primary px-2 bg-black/10 dark:bg-white/10 w-fit relative">
        Tech stack
        <span className="absolute w-1 h-1 -top-1 -right-1 rounded-full bg-neutral-400 dark:bg-neutral-700"></span>
        <span className="absolute w-1 h-1 -top-1 -left-1 rounded-full bg-neutral-400 dark:bg-neutral-700"></span>
        <span className="absolute w-1 h-1 -bottom-1 -right-1 rounded-full bg-neutral-400 dark:bg-neutral-700"></span>
        <span className="absolute w-1 h-1 -bottom-1 -left-1 rounded-full bg-neutral-400 dark:bg-neutral-700"></span>
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-center  relative z-10 py-10 max-w-4xl mx-auto ">
        {stack.map((feature, index) => (
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: -10,
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              delay: 0.1 * index,
              ease: "easeInOut",
              duration: 0.5,
            }}
            key={feature.name}
          >
            <Feature name={feature.name} img={feature.img} index={index} />
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default ScrollStack;


const Feature = ({
  name,

  img,
  index,
}: {
  name: string;
  img: string;

  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="group-hover/feature:translate-x-2 transition duration-200 relative mb-6 z-10 px-10 text-neutral-600 dark:text-neutral-400">
        <Image src={img} width={35} height={35} alt={name} />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-neutral-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {name}
        </span>
      </div>
    </div>
  );
};
