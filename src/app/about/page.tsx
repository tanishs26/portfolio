import AboutSection from "@/components/Bento";
import Container from "@/components/Container";
import DotBox from "@/components/DotBox";
import Heading from "@/components/Heading";
import Subheading from "@/components/Subheading";
import Timeline from "@/components/Timeline";
import React from "react";

const Page = () => {
  const timeline = [
    {
      year: "2025",
      title: "Building scalable SaaS applications",
      desc: "Working on making web applications that can handle the world (or at least a growing user base) using React and Next.js.",
    },
    {
      year: "2024",
      title: "Started learning web development",
      desc: "Dove into the world of HTML, CSS, JavaScript, while figuring out what actually makes websites tick.",
    },
    {
      year: "2023",
      title: "Explored different paths and technologies",
      desc: "Tried out various languages and tools—some stuck, some didn’t. All part of the quest to find the perfect fit.",
    },
    {
      year: "2022",
      title: "Joined college in Ajmer & completed high school in Delhi",
      desc: "Started college to officially become a techie and survived high school with just enough science and math to keep things interesting.",
    },
  ];

  return (
    <Container
      className=" pt-15 md:pt-20 md:pb-10 border-x-1 cursor-none
    dark:bg-[#171717]
    border-neutral-300 dark:border-neutral-700 divide-y-2 divide-neutral-200 dark:divide-neutral-800 text-gray-100"
    >
      <div className="px-4 mt-10 md:mt-15">
        <Heading> About me</Heading>
        <AboutSection />
      </div>

      <div className="px-4 pt-10 ">
        <DotBox>Timeline</DotBox>
        {timeline.map((item, idx) => {
          return (
            <Timeline key={idx} year={item.year} title={item.title} desc={item.desc} />
          );
        })}
      </div>
    </Container>
  );
};

export default Page;
