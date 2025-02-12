"use client";

import ProjectCard from "@/components/ProjectCard";
import { dataGames } from "@/data/data";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import FifteenPuzzle from "@/components/FifteenPuzzle";
import DonutChart from "@/components/DonutChart";

const page = () => {
  //Import Next Intl
  const t = useTranslations("Games");
  const t2 = useTranslations("Games.games");

  const [fidttenPuzzle, setFifteenPuzzle] = useState([]);

  useEffect(() => {
    const fidttenPuzzleData = dataGames(t2).find(
      (item) => item.id === "fifteenPuzzle"
    );
    if (fidttenPuzzleData) {
      setFifteenPuzzle(fidttenPuzzleData);
    }
  }, []);

  return (
    <section className="pt-12">
      <div className="w-full max-w-[1400px] px-8 mx-auto">
        <Fade direction="up" triggerOnce cascade damping={1e-1} delay={200}>
          <h2 className="section-title mb-2 xl:mb-3 text-center mx-auto">
            {t("title")}
          </h2>
        </Fade>
        <div className="flex flex-col">
          <div className="mx-auto max-w-7xl text-center">
            <Fade direction="up" triggerOnce cascade damping={1e-1} delay={300}>
              <p className="mt-2 text-2xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
                {t("subtitle")}
              </p>
            </Fade>
            <Fade direction="up" triggerOnce cascade damping={1e-1} delay={400}>
              <p className="mt-3 text-lg leading-8 text-gray-600 dark:text-gray-300">
                {t("description")}
              </p>
            </Fade>
          </div>
        </div>

        <section className="py-12 xl:py-24 h-[auto] bg-bottom overflow-x-hidden">
          <div className="w-full max-w-[1400px] mx-auto">
            <div className="flex flex-wrap justify-evenly items-start gap-y-8 xl:gap-x-8 sm:py-12 lg:px-8 xl:px-0 mb-14 ">
              <div className="flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left px-8 lg:px-0">
                <Fade
                  direction="up"
                  triggerOnce
                  delay={300}
                  cascade
                  damping={1e-1}
                >
                  <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
                    <span className="w-[30px] h-[2px] bg-primary"></span>
                    {fidttenPuzzle.head}
                  </div>
                </Fade>
                <Fade
                  direction="up"
                  triggerOnce
                  delay={500}
                  cascade
                  damping={1e-1}
                >
                  <h1 className="h1">{fidttenPuzzle.title}</h1>
                </Fade>
                <Fade
                  direction="up"
                  triggerOnce
                  delay={600}
                  cascade
                  damping={1e-1}
                >
                  <div className="text-muted-foreground text-lg font-light max-w-[590px] mb-0 mt-4 mx-auto xl:mx-0 flex flex-col items-center xl:items-start justify-center">
                    <span>{fidttenPuzzle.description1}</span>
                  </div>
                </Fade>
                <Fade
                  direction="up"
                  triggerOnce
                  delay={700}
                  cascade
                  damping={1e-1}
                >
                  <div className="text-muted-foreground text-lg font-light max-w-[590px] mb-0 mt-2 mx-auto xl:mx-0 flex flex-col items-center xl:items-start justify-center">
                    <span>{fidttenPuzzle.description2}</span>
                  </div>
                </Fade>
                <Fade
                  direction="up"
                  triggerOnce
                  delay={800}
                  cascade
                  damping={1e-1}
                >
                  <div className="subtitle max-w-[590px] mt-2 mx-auto xl:mx-0 flex flex-col items-center xl:items-start justify-center">
                    <span>{fidttenPuzzle.description3}</span>
                  </div>
                </Fade>
                <div className="flex flex-col gap-y-10 sm:flex-row items-center justify-center xl:justify-start">
                  <Fade
                    direction="up"
                    triggerOnce
                    delay={900}
                    cascade
                    damping={1e-1}
                  >
                    <div className={"flex items-end gap-x-4 "}>
                      {fidttenPuzzle.length === 0
                        ? null
                        : fidttenPuzzle.icons.map((icon, index) => {
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
              <Fade
                direction="up"
                triggerOnce
                delay={600}
                cascade
                damping={1e-1}
              >
                <div className="w-full h-auto sm:w-[550px] sm:h-[371px] bg-no-repeat relative bg-buttom">
                  <FifteenPuzzle />
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/*         <Tabs defaultValue={activeCategory} className="my-24 xl:mb-48">
          <Fade direction="up" triggerOnce cascade damping={1e-1} delay={500}>
            <TabsList
              style={{ width: `calc(162px * ${categories.length} + 8px)` }}
              className="grid h-full grid-cols-2 sm:grid-cols-2 lg:max-w-[820px] mb-12 mx-auto md:border dark:border-none"
            >
              {categories.map((cetagory) => (
                <TabsTrigger
                  key={cetagory}
                  value={cetagory}
                  onClick={() => setActiveCategory(cetagory)}
                  className=" capitalize md:w-[162px] w-auto"
                >
                  {cetagory}
                </TabsTrigger>
              ))}
            </TabsList>
          </Fade>

          <div className="flex flex-wrap gap-8 items-center justify-center">
            {filteredGames.map((project, index) => {
              return (
                <TabsContent key={index} value={activeCategory}>
                  <Fade
                    direction="up"
                    triggerOnce
                    cascade
                    damping={1e-1}
                    delay={index * 200}
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                      imageCard={project.imageCard}
                      link={project.link}
                    />
                  </Fade>
                </TabsContent>
              );
            })}
          </div>
        </Tabs> */}
      </div>
    </section>
  );
};

export default page;
