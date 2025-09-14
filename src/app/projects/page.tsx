import React from "react";
import Container from "../../components/Container";
import {projects} from "@/components/ProjectArray"
import Heading from "@/components/Heading";
import Subheading from "@/components/Subheading";
import Projects from "@/components/Projects";
import DotBox from "@/components/DotBox";
const Page = () => {
  return (
    <Container
      className="h-full pt-15 md:pt-20 md:pb-10 border-x-1 cursor-none
    dark:bg-[#171717]
    border-neutral-300 dark:border-neutral-700 divide-y-2 divide-neutral-200 dark:divide-neutral-800 text-gray-100"
    >
      <div className="flex flex-col justify-start   p-4 pb-6 ">
        <div className="w-2/4">
          <Heading>Projects</Heading>
          <Subheading>
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
    </Container>
  );
};

export default Page;
