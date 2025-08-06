"use client";

import React, { useState } from "react";

import ProjectCard from "./ProjectCard";
import { Link } from "@/navigation";
import { Button } from "./ui/button";
import { dataProjects } from "@/data/data";
import { Fade } from "react-awesome-reveal";

//Import Icons
import { CiLocationArrow1 } from "react-icons/ci";

//Import Next Intl
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("Projects");
  const t2 = useTranslations("Projects.projects");

  const [isHovered, setIsHovered] = useState(false);
  const projects = dataProjects(t2).slice(0, 4);

  return (
    <div className="pt-[8rem]">
      <div className="w-full max-w-[1400px] mx-auto px-8 xl:px-0">
        <Fade direction="up" triggerOnce cascade damping={1e-1} delay={200}>
          <h2 className="section-title mb-2 xl:mb-3 text-center mx-auto">
            {t("title")}
          </h2>
        </Fade>
        <div className="flex flex-col">
          <div className="mx-auto max-w-7xl text-center">
            <Fade direction="up" triggerOnce cascade damping={1e-1} delay={400}>
              <p className="mt-2 text-2xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
                {t("subtitle")}
              </p>
            </Fade>
            <Fade direction="up" triggerOnce cascade damping={1e-1} delay={600}>
              <p className="mt-3 text-lg leading-8 text-gray-600 dark:text-gray-300">
                {t("description")}
              </p>
            </Fade>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 xl:gap-10 items-center justify-center mt-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageCard={project.imageCard}
              link={project.link}
            />
          ))}
        </div>
        <div className="mt-10 text-center xl:text-end">
          <Link
            href="/projects"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Button
              className={`gap-x-1 text-white bubbly-button ${
                isHovered ? "animate" : ""
              }`}
            >
              {t("buttons.seeMore")} <CiLocationArrow1 size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
