"use client";

import React from "react";
import SlickSlaider from "./SlickSlaider";

import { Fade, Zoom } from "react-awesome-reveal";

//Import Next Intl
import { useTranslations } from "next-intl";

const Testimonials = () => {
  const t = useTranslations("Testimonials");
  return (
    <div className="pt-[8rem]">
      <div className="flex flex-col items-center flex-1 gap-8">
        <div className="container mx-auto px-8 xl:px-0">
          <Fade direction="up" triggerOnce cascade damping={1e-1} delay={200}>
            <h2 className="section-title mb-2 xl:mb-3 text-center mx-auto">
              {t("title")}
            </h2>
          </Fade>
          <div className="flex flex-col">
            <div className="mx-auto max-w-7xl text-center">
              <Fade
                direction="up"
                triggerOnce
                cascade
                damping={1e-1}
                delay={400}
              >
                <p className="mt-2 text-2xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
                  {t("subtitle")}
                </p>
              </Fade>
              <Fade
                direction="up"
                triggerOnce
                cascade
                damping={1e-1}
                delay={600}
              >
                <p className="mt-3 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  {t("description")}
                </p>
              </Fade>
            </div>
          </div>
        </div>
        <SlickSlaider />
      </div>
    </div>
  );
};

export default Testimonials;
