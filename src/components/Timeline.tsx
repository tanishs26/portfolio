import React from "react";
import Container from "./Container";
import { FaCheckCircle } from "react-icons/fa";

const Timeline = ({
  year = "2025",
  title,
  desc,
}: {
  year: string;
  title: string;
  desc: string;
}) => {
  return (
    <Container className="py-4 pt-8">
      
        <h1 className="text-secondary font-semibold dark:text-primary subpixel-antialiased  border-1 border-secondary dark:border-secondary inline px-2 py-1 rounded-md  shadow-input">
          {year}
        </h1>
        <div className="pt-4 pl-4">
          <p className="flex gap-x-4 items-center  dark:text-[#a1a1a1] text-[#525252] text-md">
            <FaCheckCircle
              size={16}
              className="text-secondary dark:text-secondary"
            />
            {title}
          </p>
          <p className="pl-8 text-sm text-neutral-500">
            {desc}
          </p>
        </div>
      
    </Container>
  );
};

export default Timeline;
