"use client";

import React from "react";

import ProjectCard from "./ProjectCard";
import { Fade } from "react-awesome-reveal";

const projects = [
  {
    title: "Cabanas Mahalo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellendus.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/mahalo.png",
    link: "https://www.google.com",
  },
  {
    title: "Budget App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellendus.",
    tags: ["React", "Next.js", "Tailwind", "MongoDB"],
    imageUrl: "/image2.png",
    link: "https://www.google.com",
  },
  {
    title: "Storage App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellendus.",
    tags: ["React", "Next.js", "Tailwind", "MongoDB"],
    imageUrl: "/image3.png",
    link: "https://www.google.com",
  },
  {
    title: "Mission Theme",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellendus.",
    tags: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind"],
    imageUrl: "/image4.png",
    link: "https://www.google.com",
  },
];

const Projects = () => {


  return (
    <div className="pt-[13rem]">
      <div className="container mx-auto px-8 xl:px-0">
        <Fade direction="up" triggerOnce cascade damping={1e-1} delay={200}>
          <h2 className="section-title mb-2 xl:mb-3 text-center mx-auto">
            Projects
          </h2>
        </Fade>
        <div className="flex flex-col">
          <div className="mx-auto max-w-7xl text-center">
            <Fade direction="up" triggerOnce cascade damping={1e-1} delay={400}>
              <p className="mt-2 text-2xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
                Everything you need to build an amazing website
              </p>
            </Fade>
            <Fade direction="up" triggerOnce cascade damping={1e-1} delay={600}>
              <p className="mt-3 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ullamcorper, dui nec blandit feugiat, nunc nisl aliquet dui, in
              </p>
            </Fade>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 items-center justify-center mt-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              link={project.link}
            />
          ))}
        </div>
        <p className="text-end mt-10 mr-10">View all projects</p>
      </div>
    </div>
  );
};

export default Projects;
