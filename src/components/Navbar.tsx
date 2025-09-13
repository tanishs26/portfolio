"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import {Link} from "next-view-transitions";
import Container from "./Container";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const links = [
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [shadow, setShadow] = useState<boolean | string>(false);
  const { scrollY } = useScroll();

  const toggleDark = () => {
    setIsDark((prev) => !prev);
    document.body.classList.toggle("dark");
  };
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 15) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  });
  return (
    <Container className="relative z-20">
      <motion.nav
        animate={{
          y: shadow ? 15 : 0,
          boxShadow: shadow ? "var(--shadow-input)" : "",
          borderRadius: shadow ? "50px" : "0px",
          width: shadow ? "44%" : "100%",
        }}
        style={{
          backdropFilter: shadow ? "blur(10px)" : "blur(0px)",
        }}
        transition={{
          duration: 0.3,

          ease: "easeInOut",
        }}
        className="flex fixed max-w-4xl inset-x-0  top-0 justify-between items-center p-2 mx-auto  "
      >
        <Link
          href={"/"}
          className="size-12 overflow-hidden flex rounded-full relative "
        >
          <Image
            src={"/dip.jpeg"}
            className="object-cover antialiased"
            fill
            alt={"Profile-picture"}
          />
        </Link>

        <div className="flex  items-center ">
          <motion.button
            animate={{
              rotate: isDark ? "0deg" : "65deg",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="  rounded-md mr-2 block p-1  "
            onClick={toggleDark}
          >
            <motion.span>
              {isDark ? (
                <MdDarkMode className="text-primary" size={16} />
              ) : (
                <MdLightMode className="text-primary" size={16} />
              )}
            </motion.span>
          </motion.button>

          {links.map((item, idx) => {
            return (
              <Link
                key={idx}
                href={item.href}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className="relative px-2 py-1 text-sm "
              >
                {hovered === idx && (
                  <motion.span
                    layoutId="hovered-span"
                    className="-z-10 rounded-md w-full h-full  bg-neutral-300 dark:bg-neutral-800 backdrop-blur-sm inset-0 absolute "
                  ></motion.span>
                )}
                <span className="relative text-primary text-shadow-sm  font-semibold text-md">
                  {" "}
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      </motion.nav>
    </Container>
  );
};

export default Navbar;
