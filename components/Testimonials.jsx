"use client";

import React from "react";
import SlickSlaider from "./SlickSlaider";

import { Fade, Zoom } from "react-awesome-reveal";

const Testimonials = () => {
  return (
    <div className="t_section">
      <div className="t_container">
        <div className="t_box">
          <div className="t_head">
            <Fade direction="up" triggerOnce cascade damping={1e-1} delay={200}>
              <span className="section-title mb-2 xl:mb-3 text-center mx-auto">
                Testimonial
              </span>
            </Fade>
            <Fade direction="up" triggerOnce cascade damping={1e-1} delay={400}>
              <span className="mt-2 text-2xl font-bold tracking-tight text-center text-black dark:text-white sm:text-4xl">
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </Fade>
            <Fade direction="up" triggerOnce cascade damping={1e-1} delay={600}>
              <span className="mt-3 text-lg text-center leading-8 text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis eius natus optio saepe harum temporibus odio
                necessitatibus qui nihil, molestiae, incidunt repudiandae
                commodi? Veritatis iste, corrupti ratione molestias nulla
                dolorem.
              </span>
            </Fade>
          </div>
          <SlickSlaider />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
