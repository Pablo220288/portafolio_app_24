"use client";

import React from "react";

//Import Icons
import {
  RiEdit2Line,
  RiCodeBlock,
  RiMobileDownloadLine,
  RiFireLine,
} from "react-icons/ri";

//Import React Awesome Reveal
import { Fade, Zoom } from "react-awesome-reveal";

//Import Framer Motion
import { motion } from "framer-motion";

const features = [
  {
    name: "Wed Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere.",
    icon: <RiEdit2Line />,
  },
  {
    name: "Full Responsive",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere.",
    icon: <RiCodeBlock />,
  },
  {
    name: "Mobile Application",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere.",
    icon: <RiMobileDownloadLine />,
  },
  {
    name: "Backend Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere.",
    icon: <RiFireLine />,
  },
];

const Features = () => {
  return (
    <section className="py-8 xl:py-12">
      <div className="container mx-auto px-8 xl:px-0">
        <h2 className="section-title mb-2 xl:mb-3 text-center mx-auto">
          Features
        </h2>
        <div className="flex flex-col">
          <div className="mx-auto max-w-7xl text-center">
            <p className="mt-2 text-2xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
              Everything you need to build an amazing website
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ullamcorper, dui nec blandit feugiat, nunc nisl aliquet dui, in
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl px-8 lg:px-10 xl-px-0 sm:mt-20 lg:mt-24 lg:max-w-4xl overflow-hidden py-5">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-20 lg:gap-x-20">
            {features.map((feature, key) => (
              <Zoom cascade delay={100} duration={600} triggerOnce key={key}>
                <div className="relative max-w-full flex items-center rounded-2xl p-0.5 pb-4 bg-muted shadow-lg">
                  <div className="flex flex-col gap-2 items-start translate-x-[2%] p-5 pr-20">
                    <Fade
                      direction="left"
                      triggerOnce
                      cascade
                      damping={1e-1}
                      delay={400}
                    >
                      <span className="text-[20px] font-bold tracking-tight">
                        {feature.name}
                      </span>
                    </Fade>
                    <Fade
                      direction="up"
                      triggerOnce
                      cascade
                      damping={1e-1}
                      delay={600}
                    >
                      <span className="text-base leading-7">
                        {feature.description}
                      </span>
                    </Fade>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: 80, y: -50 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, delay: 0.5, type: "easeIn" },
                    }}
                    viewport={{ once: true }}
                    className="absolute text-[40px] lg:text-[50px] -right-[30px] lg:-right-[40px] top-1/2 -translate-y-1/2 text-5xl text-white flex flex-col items-center justify-center w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] bg-primary rounded-full mb-4"
                  >
                    {feature.icon}
                  </motion.div>
                </div>
              </Zoom>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
