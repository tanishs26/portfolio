import React from "react";
import Container from "../../components/Container";
import { projects } from "@/components/ProjectArray";
import Heading from "@/components/Heading";
import Subheading from "@/components/Subheading";
import Projects from "@/components/Projects";
import DotBox from "@/components/DotBox";
import Marquee from "react-fast-marquee";
import Image from "next/image";
const techStack = [
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

  {
    name: "React Router",
    img: "/reactrouter-original.svg",
  },
  {
    name: "Node JS",
    img: "/nodejs-original.svg",
  },

  {
    name: "Git",
    img: "/git-original.svg",
  },
  {
    name: "GitHub",
    img: "/github-logo.png",
  },
  {
    name: "CSS",
    img: "/css3-original.svg",
  },
  {
    name: "HTML",
    img: "/html5-original.svg",
  },
];
const Page = () => {
  return (
    <Container
      className="h-full pt-15 md:pt-20 md:pb-10 border-x-1 cursor-none
    dark:bg-[#171717]
    border-neutral-300 dark:border-neutral-700 divide-y-2 divide-neutral-200 dark:divide-neutral-800 text-gray-100 "
    >
      <div className="flex flex-col justify-start   p-4 pb-6 ">
        <div className="w-3/4">
          <Heading>Projects</Heading>
          <Subheading className="">
            I believe in a user centered design approach, ensuring that every
            project I work on is tailored to meet the specific needs of its
            users.
          </Subheading>
        </div>
      </div>
      <div className=" p-4 w-full flex flex-col justify-center  ">
        <DotBox>Selected Projects</DotBox>
        <Projects projects={projects} />
      </div>
      <div className="p-4 py-10 max-w-3xl overflow-hidden ">
        
        <DotBox >Stack i use</DotBox>
        <Marquee className="mask-r-from-60% py-10 md:pb-0 mask-l-from-60%">
          {techStack.map((item, idx) => {
            return (
              <div key={idx} className="flex m-5 md:mx-10">
                <Image src={item.img} height={60} width={60} alt={item.name} />
              </div>
            );
          })}
        </Marquee>
      </div>
    </Container>
  );
};
export default Page;
