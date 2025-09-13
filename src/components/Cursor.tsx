"use client"
import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorDot = useRef<HTMLSpanElement|null>(null);
  const cursorOutline = useRef<HTMLSpanElement|null>(null);

  useEffect(() => {
    const moveCursor = (e:MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      if (cursorDot.current) {
        const dotSize = 5;
        cursorDot.current.style.transform = `translate3d(${
          x - dotSize / 2
        }px, ${y - dotSize / 2}px, 0)`;
      }

      if (cursorOutline.current) {
        const outlineSize = 25;
        cursorOutline.current.style.transform = `translate3d(${
          x - outlineSize / 2
        }px, ${y - outlineSize / 2}px, 0)`;
      }
    };

    if (cursorDot.current && cursorOutline.current) {
      cursorDot.current.style.opacity = "1";
      cursorOutline.current.style.opacity = "1";
    }
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <span
        ref={cursorDot}
        className="hidden lg:block cursor-dot fixed w-[5px] h-[5px] bg-primary dark:bg-primary rounded-full pointer-events-none z-50 transition-transform duration-75 ease-out"
        style={{ opacity: 0 }}
      ></span>
      <span
        ref={cursorOutline}
        className="hidden lg:block cursor-outline fixed w-[25px] h-[25px] border-2 border-primary dark:border-primary rounded-full pointer-events-none z-40 transition-transform duration-150 ease-out"
        style={{ opacity: 0 }}
      ></span>
    </>
  );
};

export default Cursor;
