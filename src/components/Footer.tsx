"use client";
import React, { useState, useEffect } from "react";
import Container from "./Container";
import { motion, useAnimate } from "framer-motion";
import { toast } from "sonner";

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
      const response = await fetch("/api/enquiry", {
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

  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: [0, 1],
        filter: ["blur(10px)", "blur(0px)"],
        y: [-10, 0],
        x: [0, -2, 2, -2, 2, 0],
      },
      { duration: 0.5, ease: "easeInOut" }
    );
  }, [count, animate]);

  return (
    <Container className="p-4 mt-10">
      <div ref={scope} className="w-full flex justify-center ">
        <span className="enq text-secondary bg-gray-300/10 dark:bg-white/15 dark:text-secondary text-center font-semibold text-2xl shadow-input/60 px-4 rounded-md py-1">
          {enquiry[count].title}
        </span>
      </div>
      <div className="w-full md:w-[60%] mt-7  ">
        <h1 className="text-shadow-xs text-primary px-2 bg-black/10 dark:bg-white/10 w-fit relative">
          Let's get in touch
          <span className="absolute w-1 h-1 -top-1 -right-1 rounded-full bg-neutral-400 dark:bg-neutral-700"></span>
          <span className="absolute w-1 h-1 -top-1 -left-1 rounded-full bg-neutral-400 dark:bg-neutral-700"></span>
          <span className="absolute w-1 h-1 -bottom-1 -right-1 rounded-full bg-neutral-400 dark:bg-neutral-700"></span>
          <span className="absolute w-1 h-1 -bottom-1 -left-1 rounded-full bg-neutral-400 dark:bg-neutral-700"></span>
        </h1>
        <p className="mt-4 text-secondary dark:text-secondary">
          I'm currently exploring new opportunities. If you have any questions
          or just want to say hello, feel free to contact me.
        </p>
        <form onSubmit={handleSubmit} className="relative mt-4">
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
