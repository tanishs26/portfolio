"use client";
import React, { useState, useEffect } from "react";
import Container from "./Container";
import { motion, useAnimate } from "framer-motion";
import { toast } from "sonner";
import DotBox from "./DotBox";

const enquiry = [
  {
    title: "Have a project in mind?",
  },
  {
    title: "Any ideas or questions?",
  },
  {
    title: "More about me?",
  },
  {
    title: "Give me a high five!",
  },
];
const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [count, setCount] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || email.trim() === "") {
      toast.error("Please enter your email");
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/gmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
		toast.success("Sent successfully");
        setEmail("");
      } else {
       toast.error(result.error || "Something went wrong");
      }
    } catch (err) {
			  toast.error("Network error");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev + 1) % enquiry.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <Container className="p-4 py-10 ">
      <div className="w-full  text-center">
        <motion.span
          key={count}
          initial={{
            filter: "blur(10px)",
            opacity: 0,
            y: -20,
            x: 0,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            x: [-2, 2, -2, 2, 0],
          }}
          className="p-2 text-2xl md:text-3xl mx-auto  font-semibold text-secondary dark:text-secondary py-1 inline-block rounded-lg border-gray-400  bg-neutral-800/15"
        >
          {enquiry[count].title}
        </motion.span>
      </div>

      <div className="w-full md:w-[60%] mt-10 space-y-5  ">
        <DotBox>Get In Touch</DotBox>
        <p className="mt-4 text-md  md:text-md text-secondary dark:text-secondary">
          I am currently exploring new opportunities. If you have any questions
          or just want to say hello, feel free to contact me.
        </p>
        <form onSubmit={handleSubmit} className="relative mt-4 ">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full 
            text-primary
            dark:text-primar
            outline-none mt-4  rounded-lg shadow-input/30 focus:ring-2 focus:ring-primary dark:focus:ring-primary p-4 placeholder:text-secondary dark:placeholder:text-secondary "
            placeholder="Your email"
          />
          <button
            disabled={isSubmitting}
            type="submit"
            className="absolute right-2 top-6 rounded-md hover:outline-1 outline-neutral-700 shadow-input/20  bg-transparent font-medium active:scale-105 px-5 py-2 cursor-none text-primary  dark:text-primary"
          >
            Send Enquiry
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Footer;
