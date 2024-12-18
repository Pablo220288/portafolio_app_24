"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import DonutChart from "@/components/DonutChart";
import Loader from "@/components/Loader";
import SlidingProjects from "@/components/SlidingProjects";
import { RiArrowRightDoubleLine } from "react-icons/ri";

import { Fade } from "react-awesome-reveal";

import { dataProjects } from "@/data/data";
import { Link } from "@/navigation";
import { usePathname } from "next/navigation";

//Import Next Intl
import { useTranslations } from "next-intl";

const Project = () => {
  const t = useTranslations("Projects.projects");

  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);

  const path = usePathname();
  const id = path.split("/").pop();

  const [data, setData] = useState(null);

  useEffect(() => {
    const projectData = dataProjects(t).find((item) => item.id === id);
    if (projectData) {
      setData(projectData);
      setTimeout(() => {
        setLoading(true);
      }, 2000);
    }
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="py-12 xl:py-24 h-[auto] bg-bottom overflow-x-hidden">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="flex flex-wrap justify-evenly items-start gap-y-8 xl:gap-x-8 sm:py-12 lg:px-8 xl:px-0 mb-14 ">
          <Fade direction="left" triggerOnce delay={600} cascade damping={1e-1}>
            <div className="w-[350px] h-[236px] sm:w-[550px] sm:h-[371px] bg-no-repeat relative bg-buttom">
              <Image
                src={data.imageUrl}
                alt={data.title}
                quality={95}
                fill
                priority
                className="drop-shadow-xl rounded-sm"
              />
            </div>
          </Fade>
          <div className="flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left px-8 lg:px-0">
            <Fade direction="up" triggerOnce delay={300} cascade damping={1e-1}>
              <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
                <span className="w-[30px] h-[2px] bg-primary"></span>
                {data.category}
              </div>
            </Fade>
            <Fade direction="up" triggerOnce delay={500} cascade damping={1e-1}>
              <h1 className="h1">{data.title}</h1>
            </Fade>
            <Fade direction="up" triggerOnce delay={700} cascade damping={1e-1}>
              <div className="subtitle max-w-[590px] mt-4 mx-auto xl:mx-0 flex flex-col items-center xl:items-start justify-center">
                <span>{data.description}</span>
              </div>
            </Fade>
            <div className="flex flex-col gap-y-10 sm:flex-row items-center justify-center sm:justify-start">
              <Fade
                direction="up"
                triggerOnce
                delay={900}
                cascade
                damping={1e-1}
              >
                <div className={"flex items-end gap-x-4 "}>
                  {data.icons.map((icon, index) => {
                    return (
                      <div className="relative " key={index}>
                        <DonutChart
                          progress={icon.progress}
                          size={50}
                          progressClassName={icon.color}
                          trackClassName="text-black/10 dark:text-white/10"
                          circleWidth={5}
                          progressWidth={5}
                          rounded={true}
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          {icon.ico}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-10 lg:flex-row items-start justify-between px-8">
          <div className="flex flex-col items-center justify-center w-full max-w-[590px] mx-auto lg:items-start">
            <Fade direction="up" triggerOnce delay={200} cascade damping={1e-1}>
              <h2 className="h2">{data.sectionDescription.title}</h2>
            </Fade>
            <Fade direction="up" triggerOnce delay={400} cascade damping={1e-1}>
              <div className="subtitle mt-4 mx-auto xl:mx-0 text-center lg:text-start">
                <span>{data.sectionDescription.description}</span>
              </div>
            </Fade>
            <Fade direction="up" triggerOnce delay={600} cascade damping={1e-1}>
              <Link
                href={data.website}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                target="_blank"
              >
                <Button
                  className={`gap-x-1 text-white bubbly-button ${
                    isHovered ? "animate" : ""
                  }`}
                >
                  {data.live_preview} <RiArrowRightDoubleLine size={18} />
                </Button>
              </Link>
            </Fade>
          </div>
          <div className="flex flex-col gap-y-4 w-full max-w-[590px] items-center justify-center mx-auto md:px-8">
            <div className="w-full flex gap-x-4">
              <div className="flex-1 flex-col gap-y-2">
                <div className="text-muted-foreground text-lg font-light">
                  <span>{data.sectionDescription.category.title}</span>
                </div>
                <h3 className="text-black dark:text-white font-bold text-2xl">
                  {data.sectionDescription.category.description}
                </h3>
              </div>
              <div className="flex-1 flex-col gap-y-2">
                <div className="text-muted-foreground text-lg font-light">
                  <span>{data.sectionDescription.client.title}</span>
                </div>
                <h3 className="text-black dark:text-white font-bold text-2xl">
                  {data.sectionDescription.client.description}
                </h3>
              </div>
            </div>
            <div className="w-full flex gap-x-4">
              <div className="flex-1 flex-col gap-y-2">
                <div className="text-muted-foreground text-lg font-light">
                  <span>{data.sectionDescription.date.title}</span>
                </div>
                <h3 className="text-black dark:text-white font-bold text-2xl">
                  {data.sectionDescription.date.description}
                </h3>
              </div>
              <div className="flex-1 flex-col gap-y-2">
                <div className="text-muted-foreground text-lg font-light">
                  <span>{data.sectionDescription.designer.title}</span>
                </div>
                <h3 className="text-black dark:text-white font-bold text-2xl">
                  {data.sectionDescription.designer.description}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <SlidingProjects imgs={data.imgs} />
      </div>
    </section>
  );
};

export default Project;
