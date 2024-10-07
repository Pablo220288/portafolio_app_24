"use client";
import React from "react";

//Import Frame Motion
import { motion } from "framer-motion";

//Import Hooks
import { useScrollProgress } from "@/hooks/useScrollProgress";

//Import Icon
import { BiWinkSmile, BiWinkTongue } from "react-icons/bi";

//Variants

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const template = ({ children }) => {
  const handleScroll = useScrollProgress();
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>
      <span
        style={{ transform: `translateY(${handleScroll - 100}%)` }}
        className="fixed bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-500 z-50"
      >
        {/* {handleScroll < 20 ? (
          <BiWinkSmile className="text-2xl absolute bottom-0 right-2" />
        ) : (
          <BiWinkTongue className="text-2xl absolute bottom-0 right-2" />
        )} */}
      </span>
      <div className="h-[3500px]"></div>
    </>
  );
};

export default template;
