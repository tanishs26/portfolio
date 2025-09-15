"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { Link } from "next-view-transitions";
import Container from "./Container";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const links = [
    {
      title:"Main",
      href:'/'

    },
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

  const isCLient=typeof window!=='undefined';
  const [hovered, setHovered] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [shadow, setShadow] = useState<boolean | string>(false);
  const [open, setOpen] = useState<null | boolean>(null);
  const [width, setWidth] = useState(isCLient?window.innerWidth:0);
  const { scrollY } = useScroll();

  const toggleDark = () => {
    setIsDark((prev) => !prev);
    document.body.classList.toggle("dark");

  };



  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);



  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 15) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  });

  const childVariants = {
    open: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
    },
    close: {
      opacity: 0,
      filter: "blur(10px)",
      y: -10,
    },
  };
  const parentVariants = {
    open: {
      opacity: 1,
      height: "60vh",
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
    close: {
      opacity: 0,
      height: "0vh",
      transition: {
        staggerChildren: 0.09,
        delayChildren: -1,
      },
    },
  };
  return (
    <Container className="relative z-20">
      <motion.nav
        animate={{
          y: shadow ? 15 : 0,
          boxShadow: shadow ? "var(--shadow-input)" : "",
          borderRadius: shadow ? "50px" : "0px",
          width:
            width > 640 ? (shadow ? "44%" : "100%") : shadow ? "90%" : "100%",
        }}
        style={{
          backdropFilter: shadow ? "blur(5px)" : "blur(0px)",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="flex fixed max-w-4xl inset-x-0  top-0 justify-between items-center  mx-auto  px-3 py-2 "
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

        <div className="hidden md:flex items-center ">
          <motion.button
            initial={{ y: 0, opacity: 0, filter: "blur(4px)" }}
            animate={{
              rotate: isDark ? "0deg" : "75deg",
              y: [ 0],
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="  rounded-md  mt-[0.5] mr-3  "
            onClick={toggleDark}
          >
            <motion.span>
              {isDark ? (
                <MdDarkMode className="text-primary" size={18} />
              ) : (
                <MdLightMode className="text-primary" size={18} />
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
                <span className="relative text-primary dark:text-primary  text-shadow-2xs font-medium text-md">
                  {" "}
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
        {/* For mobile devices */}
        <motion.div className="md:hidden  ">
          <div className="" onClick={() => setOpen((prev) => !prev)}>
            {!open ? (
              <RxHamburgerMenu
                size={23}
                className="text-secondary dark:text-secondary"
              />
            ) : null}
          </div>
          {open && (
            <motion.div
              initial="close"
              animate="open"
              exit="close"
              variants={parentVariants}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed -inset-20 -top-5 mx-auto flex flex-col items-center bg-neutral-100/95 dark:bg-neutral-950/90    pt-18 h-[60vh] gap-y-4"
            >
              {links.map((item, idx) => {
                return (
                  <motion.div variants={childVariants} key={idx}>
                    <Link
                      href={item.href}
                      key={idx}
                      className=" text-lg text-secondary dark:text-secondary font-semibold"
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.button
                initial={{ y: -40, opacity: 0, filter: "blur(4px)" }}
                animate={{
                  rotate: isDark ? "0deg" : "95deg",
                  y: [20, 0, 20, 0],
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                className="  rounded-md  block3  "
                onClick={toggleDark}
              >
                <motion.span>
                  {isDark ? (
                    <MdDarkMode className="text-primary" size={23} />
                  ) : (
                    <MdLightMode className="text-primary" size={23} />
                  )}
                </motion.span>
              </motion.button>
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: [1.2, 1, 1.2, 1, 1.2] }}
                onClick={() => setOpen(false)}
                className="absolute right-22 top-5 mt-4"
              >
                <IoMdClose
                  size={30}
                  className="text-secondary dark:text-secondary"
                />
              </motion.span>
            </motion.div>
          )}
        </motion.div>
      </motion.nav>
    </Container>
  );
};

export default Navbar;
