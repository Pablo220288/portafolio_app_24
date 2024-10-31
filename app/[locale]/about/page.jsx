import SectionContent from "@/components/SectionContent";
import Image from "next/image";
import React from "react";


import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";

import { SiMongodb, SiHandlebarsdotjs } from "react-icons/si";
import AboutSkills from "@/components/AboutSkills";

const dataAbout = [
  {
    title: "Desarrollo Web (HTML y CSS)",
    subtitle: "Coderhouse",
    description:
      "HTML define la estructura de una página web, mientras que CSS proporciona el diseño y estilo visual, juntos forman la base de cualquier experiencia web.",
    date: "Mayo 2022",
    certificateUrl: "desarrollo-web-course.png",
    icons: [
      {
        name: "HTML5",
        icon: (
          <FaHtml5 className="w-6 h-6 hover:text-[#e34c26] transition duration-300" />
        ),
        hover: "hover:text-[#e34c26]",
      },
      {
        name: "CSS3",
        icon: (
          <FaCss3 className="w-5 h-5 hover:text-[#2965f1] transition duration-300" />
        ),
        hover: "hover:text-[#2965f1]",
      },
    ],
  },
  {
    title: "Javascript",
    subtitle: "Coderhouse",
    description:
      "JavaScript es un lenguaje de programación clave en el desarrollo web, que permite agregar interactividad y funcionalidades avanzadas a las páginas web.",
    date: "Agosto 2022",
    certificateUrl: "javascript-course.png",
    icons: [
      {
        name: "Javascript",
        icon: (
          <FaJs className="w-6 h-6 transition duration-300 hover:text-[#f0db4f] cursor-pointer" />
        ),
        hover: "hover:text-[#f0db4f]",
      },
    ],
  },
  {
    title: "React JS",
    subtitle: "Coderhouse",
    description:
      "React es una biblioteca de JavaScript que permite construir interfaces de usuario de forma eficiente mediante componentes reutilizables, optimizando la actualización de elementos en aplicaciones web modernas y dinámicas.",
    date: "Octubre 2022",
    certificateUrl: "react-js-course.png",
    icons: [
      {
        name: "React JS",
        icon: (
          <FaReact className="w-6 h-6 transition duration-300 hover:text-[#61dafb] cursor-pointer" />
        ),
        hover: "hover:text-[#61dafb]",
      },
      {
        name: "Firebase",
        icon: (
          <IoLogoFirebase className="w-6 h-6 transition duration-300 hover:text-[#ffcb2b] cursor-pointer" />
        ),
        hover: "hover:text-[#ffcb2b]",
      },
    ],
  },
  {
    title: "Programación Backend",
    subtitle: "Coderhouse",
    description:
      "El backend en JavaScript, comúnmente con Node.js, permite desarrollar toda la lógica de servidor de una aplicación, manejando peticiones, datos y servicios de forma eficiente.",
    date: "Enero 2023",
    certificateUrl: "backend-course.png",
    icons: [
      {
        name: "Node JS",
        icon: (
          <FaNodeJs className="w-6 h-6 transition duration-300 hover:text-[#3c873a] cursor-pointer" />
        ),
        hover: "hover:text-[#3c873a]",
      },
      {
        name: "Handlebars",
        icon: (
          <SiHandlebarsdotjs className="w-6 h-6 transition duration-300 hover:text-[#e34c26] cursor-pointer" />
        ),
        hover: "hover:text-[#e34c26]",
      },
      {
        name: "MongoDB",
        icon: (
          <SiMongodb className="w-6 h-6 transition duration-300 hover:text-[#47a248] cursor-pointer" />
        ),
        hover: "hover:text-[#47a248]",
      },
      {
        name: "Docker",
        icon: (
          <FaDocker className="w-6 h-6 transition duration-300 hover:text-[#0db7ed] cursor-pointer" />
        ),
        hover: "hover:text-[#0db7ed]",
      },
    ],
  },
  {
    title: "Python",
    subtitle: "Coderhouse",
    description:
      "Python es un lenguaje de programación de alto nivel, versátil y fácil de leer, utilizado en diversas aplicaciones como desarrollo web, análisis de datos, inteligencia artificial y automatización de tareas, destacándose por su gran comunidad y rica biblioteca de herramientas.",
    date: "Abril 2024",
    certificateUrl: "python-course.png",
    icons: [
      {
        name: "Python",
        icon: (
          <FaPython className="w-6 h-6 transition duration-300 hover:text-[#3776ab] cursor-pointer" />
        ),
        hover: "hover:text-[#3776ab]",
      },
    ],
  },
];

const About = () => {
  return (
    <SectionContent sectionStyles={"px-8"}>
      <h2 className="section-title mb-4 lg:mb-8 ">About Me</h2>
      <div className="mx-auto text-center">
        <p className="text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, harum
          dolor libero, eaque.
        </p>
      </div>
      <AboutSkills />
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
