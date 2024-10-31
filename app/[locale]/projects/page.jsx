"use client";

import React, { useState } from "react";
import { projects } from "@/components/Projects";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const uniqueCategories = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];

const Projects = () => {
  const [catagories, setCatagories] = useState(uniqueCategories);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    return activeCategory === "All"
      ? project
      : project.category === activeCategory;
  });

  return (
    <section className="pt-12">
      <div className="w-full max-w-[1400px] px-8 mx-auto">
        <div className="mx-auto text-center">
          <h2 className="section-title mb-4 lg:mb-8 ">Projects</h2>
          <p className="text-lg leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            harum dolor libero, eaque.
          </p>
        </div>
        <Tabs defaultValue={activeCategory} className="my-24 xl:mb-48">
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

          <div className="flex flex-wrap gap-8 items-center justify-center mt-20">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent key={index} value={activeCategory}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    imageUrl={project.imageUrl}
                    link={project.link}
                  />
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
