"use client";

import Image from "next/image";
import React from "react";

//Frame Motion
import { motion } from "framer-motion";

const AboutImg = ({ containerStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.7, delay: 0.5, type: "easeIn" },
        }}
        viewport={{ once: true }}
        className="absolute w-full"
      >
        <Image
          src="/about/about-me-1.png"
          alt="About Image"
          width={2500}
          height={1667}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 1, type: "easeIn" },
        }}
        viewport={{ once: true }}
        className="absolute w-full"
      >
        <Image
          src="/about/about-me-2.png"
          alt="About Image"
          width={2500}
          height={1667}
          className="mask-gradient"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 1.1, type: "easeIn" },
        }}
        viewport={{ once: true }}
        className="absolute w-full"
      >
        <Image
          src="/about/about-me-3.png"
          alt="About Image"
          width={2500}
          height={1667}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 1.2, type: "easeIn" },
        }}
        viewport={{ once: true }}
        className="absolute w-full"
      >
        <Image
          src="/about/about-me-4.png"
          alt="About Image"
          width={2500}
          height={1667}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.4, delay: 1.3, type: "easeIn" },
        }}
        viewport={{ once: true }}
        className="absolute w-full"
      >
        <Image
          src="/about/about-me-5.png"
          alt="About Image"
          width={2500}
          height={1667}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 1.4, type: "easeIn" },
        }}
        viewport={{ once: true }}
        className="absolute w-full"
      >
        <Image
          src="/about/about-me-6.png"
          alt="About Image"
          width={2500}
          height={1667}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 1, delay: 0.8, type: "easeIn" },
        }}
        viewport={{ once: true }}
        className="absolute w-full"
      >
        <Image
          src="/about/about-me-7.png"
          alt="About Image"
          width={2500}
          height={1667}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -40, y: 40 }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.5, delay: 1.5, type: "easeIn" },
        }}
        viewport={{ once: true }}
        className="absolute w-full"
      >
        <Image
          src="/about/about-me-8.png"
          alt="About Image"
          width={2500}
          height={1667}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40, y: 40 }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.5, delay: 1.6, type: "easeIn" },
        }}
        viewport={{ once: true }}
        className="absolute w-full"
      >
        <Image
          src="/about/about-me-9.png"
          alt="About Image"
          width={2500}
          height={1667}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -40, y: 40 }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.5, delay: 1.5, type: "easeIn" },
        }}
        viewport={{ once: true }}
        className="absolute w-full"
      >
        <Image
          src="/about/about-me-10.png"
          alt="About Image"
          width={2500}
          height={1667}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 1, delay: 1, type: "easeIn" },
        }}
        viewport={{ once: true }}
        className="absolute w-full"
      >
        <Image
          src="/about/about-me-11.png"
          alt="About Image"
          width={2500}
          height={1667}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -40, y: 40 }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.5, delay: 1.5, type: "easeIn" },
        }}
        viewport={{ once: true }}
        className="absolute w-full"
      >
        <Image
          src="/about/about-me-12.png"
          alt="About Image"
          width={2500}
          height={1667}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40, y: 40 }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.5, delay: 1.5, type: "easeIn" },
        }}
        viewport={{ once: true }}
        className="absolute w-full"
      >
        <Image
          src="/about/about-me-13.png"
          alt="About Image"
          width={2500}
          height={1667}
        />
      </motion.div>
    </div>
  );
};

export default AboutImg;
