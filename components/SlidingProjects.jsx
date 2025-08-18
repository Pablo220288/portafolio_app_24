"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { ImageZoom } from "@/components/ui/kibo-ui/image-zoom";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SlidingProjects = ({ imgs }) => {
  const [width, setWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const sliding = useRef();

  const itemWidth = 320; // ancho aprox de cada card (min-w)
  const gap = 24; // gap entre cards

  useEffect(() => {
    if (sliding.current) {
      setWidth(sliding.current.scrollWidth - sliding.current.offsetWidth + 16);
    }
  }, [imgs]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < imgs.length - 1 ? prev + 1 : prev));
  };

  return (
    <div className="relative w-full">
      {/* Botón Izquierdo */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-black/50 dark:bg-white/50 text-white dark:text-black p-2 rounded-full hover:bg-black dark:hover:bg-white transition"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Botón Derecho */}
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-black/50 dark:bg-white/50 text-white dark:text-black p-2 rounded-full hover:bg-black dark:hover:bg-white transition"
      >
        <ChevronRight size={20} />
      </button>

      <motion.div
        ref={sliding}
        className="cursor-grab overflow-hidden px-4 mt-4"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          animate={{ x: -(activeIndex * (itemWidth + gap)) }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex pt-10 pb-5 gap-6 min-h-[300px]"
        >
          {imgs.map((item, index) => (
            <Fade
              direction="up"
              triggerOnce
              delay={100 * index}
              cascade
              damping={1e-1}
              key={item.id}
              className="flex items-center justify-center"
            >
              <motion.div className="min-h-[10rem] min-w-[20rem] rounded-lg shadow-xl overflow-hidden">
                <ImageZoom>
                  <Image
                    src={item.url}
                    alt=""
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </ImageZoom>
              </motion.div>
            </Fade>
          ))}
        </motion.div>
      </motion.div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {imgs.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              activeIndex === i
                ? "bg-black dark:bg-white scale-125"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlidingProjects;
