"use client";

import React, { useState } from "react";
import { Link } from "@/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import DonutChart from "@/components/DonutChart";
import { RiArrowRightDoubleLine } from "react-icons/ri";

import { Fade } from "react-awesome-reveal";

import { dataProjects } from "@/data/data";

const Mahalo = () => {
  const data = dataProjects().find((item) => item.id === "mahalo");

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-12 xl:py-24 h-[auto] bg-bottom overflow-x-hidden">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="flex flex-wrap justify-evenly items-start gap-y-8 xl:gap-x-8 sm:py-12 lg:px-8 xl:px-0 mb-14 ">
          <Fade direction="left" triggerOnce delay={600} cascade damping={1e-1}>
            <div className="w-[350px] h-[270px] sm:w-[550px] sm:h-[425px] bg-no-repeat relative bg-buttom">
              <Image
                src={"/mahalo/mahalo_1.png"}
                alt={data.title}
                quality={95}
                fill
                priority
                className="drop-shadow-xl rounded-lg"
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
            <Fade direction="up" triggerOnce delay={900} cascade damping={1e-1}>
              <div className="flex items-center justify-between">
                <div className={"flex items-center gap-x-4 "}>
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

                <Link
                  href="https://pablo220288.github.io/Cabanas-Mahalo/"
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
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mahalo;
