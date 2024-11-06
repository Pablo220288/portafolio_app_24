"use client";

import SectionContent from "@/components/SectionContent";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

import AboutSkills from "@/components/AboutSkills";
import AboutImg from "@/components/AboutImg";
import { dataAboutSection } from "@/data/data";

//Import Next Intl
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("AboutSection");

  const dataAbout = dataAboutSection();

  return (
    <SectionContent sectionStyles={"px-8"}>
      <div className="grid lg:grid-cols-2 lg:gap-20 pt-8 lg:overflow-x-hidden mb-[6rem] lg:mb-[10rem]">
        <div className="flex flex-col justify-center">
          <Fade direction="up" triggerOnce delay={200} cascade damping={1e-1}>
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              {t("head")}
            </div>
          </Fade>
          <Fade direction="up" triggerOnce delay={300} cascade damping={1e-1}>
            <h1 className="h1 max-w-md mb-8">{t("title")}</h1>
          </Fade>
          <Fade direction="up" triggerOnce delay={400} cascade damping={1e-1}>
            <p className="subtitle max-w[400px]">{t("description")}</p>
          </Fade>
        </div>
        <AboutImg
          containerStyles={
            "flex items-center justify-center w-[350px] sm:w-[550px] h-[380px] mx-auto h-full relative"
          }
        />
      </div>

      {/* References */}
      <div className="flex flex-col justify-center mb-[8rem]">
        <Fade direction="up" triggerOnce delay={200} cascade damping={1e-1}>
          <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
            <span className="w-[30px] h-[2px] bg-primary"></span>
            {t("references.head")}
          </div>
        </Fade>
        <div className="w-full max-w-[1400px] mx-auto px-8 xl:px-0">
          <Fade direction="up" triggerOnce cascade damping={1e-1} delay={200}>
            <h2 className="section-title mb-2 xl:mb-3 text-center mx-auto">
              {t("references.title")}
            </h2>
          </Fade>
          <div className="flex flex-col">
            <div className="mx-auto max-w-7xl text-center">
              <Fade
                direction="up"
                triggerOnce
                cascade
                damping={1e-1}
                delay={600}
              >
                <p className="mt-3 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  {t("references.description")}
                </p>
              </Fade>
            </div>
          </div>
        </div>
        <AboutSkills />
      </div>

      {/* Training */}
      <div className="flex flex-col justify-center mb-4">
        <Fade direction="up" triggerOnce delay={200} cascade damping={1e-1}>
          <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
            <span className="w-[30px] h-[2px] bg-primary"></span>
            {t("training.head")}
          </div>
        </Fade>
        <div className="w-full max-w-[1400px] mx-auto px-8 xl:px-0">
          <Fade direction="up" triggerOnce cascade damping={1e-1} delay={200}>
            <h2 className="section-title mb-2 xl:mb-3 text-center mx-auto">
              {t("training.title")}
            </h2>
          </Fade>
          <div className="flex flex-col">
            <div className="mx-auto max-w-7xl text-center">
              <Fade
                direction="up"
                triggerOnce
                cascade
                damping={1e-1}
                delay={600}
              >
                <p className="mt-3 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  {t("training.description")}
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="w-full mx-auto md:pb-40 pt-20">
          <div className="-my-6">
            {dataAbout.map((data, index) => (
              <div key={index} className="relative py-6 pl-8 group">
                <h3
                  className={`mb-1 text-2xl font-bold sm:mb-0 text-start ${
                    index % 2 === 0
                      ? "sm:pr-[55%] sm:text-end"
                      : "sm:pr-0 sm:pl-[55%]"
                  }`}
                >
                  {data.title}
                </h3>
                <div className="flex flex-col sm:flex-row items-start group-last:before:hidden before:absolute before:left-2 sm:before:left-1/2 sm:before:-translate-x-1/2 before:h-full before:px-px before:bg-slate-300 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-1/2 sm:after:-translate-x-1/2 after:w-2 after:h-2 after:bg-primary after:border-4 after:box-content after:border-slate-50 after:rounded-full after:-translate-x-1/2 after:translate-y-1.5">
                  <time
                    className={`sm:absolute ${
                      index % 2 === 0
                        ? "sm:left-1/2 sm:translate-x-4"
                        : "sm:left-1/2 sm:-translate-x-[8rem]"
                    } translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-max px-4 h-8 mb-3 sm:mb-0 bg-primary/5 rounded-full border border-primary/50`}
                  >
                    {data.date}
                  </time>
                </div>
                <div
                  className={`text-xl font-bold text-gray-400 text-start ${
                    index % 2 === 0
                      ? "sm:pr-[55%] sm:text-end"
                      : "sm:pr-0 sm:pl-[55%]"
                  }`}
                >
                  {data.subtitle}
                </div>
                {index % 2 === 0 ? (
                  <div
                    className={`hidden mt-8 group sm:flex sm:absolute ${
                      index % 2 === 0
                        ? "sm:left-1/2 sm:translate-x-4"
                        : "sm:left-1/2 sm:-translate-x-[7.5rem]"
                    } translate-y-0.5 flex-col items-start gap-y-2 justify-center`}
                  >
                    {data.icons?.map((icon, index) => (
                      <div
                        key={index}
                        className={`flex items-start justify-start gap-x-2 text-sm font-semibold leading-6 hover:text-${icon.hover} dark:hover:text-${icon.hover}`}
                      >
                        <div className="flex items-center justify-center w-6">
                          {icon.icon}
                        </div>
                        <p className={`transition duration-300 ${icon.hover}`}>
                          {icon.name}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    className={`hidden mt-8 group sm:flex sm:absolute ${
                      index % 2 === 0
                        ? "sm:left-1/2 sm:translate-x-4"
                        : "sm:left-1/2 sm:-translate-x-[7.5rem]"
                    } translate-y-0.5 flex-col items-end gap-y-2 justify-center`}
                  >
                    {data.icons?.map((icon, index) => (
                      <div
                        key={index}
                        className={`flex items-start justify-start gap-x-2 text-sm font-semibold leading-6 hover:text-${icon.hover} dark:hover:text-${icon.hover}`}
                      >
                        <p className={`transition duration-300 ${icon.hover}`}>
                          {icon.name}
                        </p>
                        <div className="flex items-center justify-center w-6">
                          {icon.icon}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div
                  className={`text-slate-400 text-start ${
                    index % 2 === 0
                      ? "sm:pr-[55%] sm:text-end"
                      : "sm:pr-0 sm:pl-[55%]"
                  }`}
                >
                  {data.description}
                </div>
                <div
                  className={`mt-6 flex items-center justify-start ${
                    index % 2 === 0
                      ? "sm:pr-[55%] sm:justify-end"
                      : "sm:pr-0 sm:pl-[55%]"
                  }`}
                >
                  <Image
                    src={`/${data.certificateUrl}`}
                    alt="Certificate"
                    width={3210}
                    height={2520}
                    className="w-auto h-28"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContent>
  );
};

export default About;
