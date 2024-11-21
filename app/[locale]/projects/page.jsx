"use client";

import React, { useEffect, useState } from "react";
import { dataProjects } from "@/data/data";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Fade, Zoom } from "react-awesome-reveal";

//Import Next Intl
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("Projects");
  const t2 = useTranslations("Projects.projects");

  const [catagories, setCatagories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(`${t("buttons.all")}`);

  const projects = dataProjects(t2);

  const filteredProjects = projects.filter((project) => {
    return activeCategory === `${t("buttons.all")}`
      ? project
      : project.category === activeCategory;
  });

  useEffect(() => {
    setCatagories([
      `${t("buttons.all")}`,
      ...new Set(projects.map((project) => project.category)),
    ]);
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
        <Tabs defaultValue={activeCategory} className="my-24 xl:mb-48">
          <Fade direction="up" triggerOnce cascade damping={1e-1} delay={500}>
            <TabsList className="w-full grid h-full grid-cols-2 sm:grid-cols-4 lg:max-w-[740px] mb-12 mx-auto md:border dark:border-none">
              {catagories.map((catagory) => (
                <TabsTrigger
                  key={catagory}
                  value={catagory}
                  onClick={() => setActiveCategory(catagory)}
                  className=" capitalize md:w-[162px] w-auto"
                >
                  {catagory}
                </TabsTrigger>
              ))}
            </TabsList>
          </Fade>

          <div className="flex flex-wrap gap-8 items-center justify-center">
            {filteredProjects.map((project, index) => {
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
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
