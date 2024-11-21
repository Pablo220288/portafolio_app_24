"use client";

import React, { useEffect, useRef, useState } from "react";

import { dataProjects } from "@/data/data";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const SlidingProjects = ({ imgs }) => {
  const [width, setWidth] = useState(0);
  const sliding = useRef();

  useEffect(() => {
    setWidth(sliding.current.scrollWidth - sliding.current.offsetWidth + 16);
  }, []);

  return (
    <motion.div
      ref={sliding}
      className="cursor-grab overflow-hidden px-4 mt-4"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex py-10"
      >
        {imgs.map((item) => {
          return (
            <Fade
              direction="up"
              triggerOnce
              delay={100 * item.id}
              cascade
              damping={1e-1}
              key={item.id}
            >
              <motion.div className="p-3 min-h-[10rem] min-w-[20rem] hover:scale-500 transition duration-500">
                <img
                  className="w-full h-full pointer-events-none rounded-sm shadow-xl"
                  src={item.url}
                  alt=""
                />
              </motion.div>
            </Fade>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default SlidingProjects;
