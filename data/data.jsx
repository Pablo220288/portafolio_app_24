"use client";

import React from "react";

//Import Next Intl
import { useTranslations } from "next-intl";

//Import Icons
import {
  RiEdit2Line,
  RiCodeBlock,
  RiMobileDownloadLine,
  RiFireLine,
} from "react-icons/ri";
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

export const navLinks = () => {
  const t = useTranslations("Nav");
  return [
    { path: "/", label: t("home") },
    { path: "/about", label: t("about") },
    { path: "/projects", label: t("projects") },
    { path: "/pricing", label: t("pricing") },
    { path: "/contact", label: t("contact") },
  ];
};

export const dataServices = () => {
  const t = useTranslations("Services.cards");
  return [
    {
      name: `${t("webDesign.title")}`,
      description: `${t("webDesign.description")}`,
      icon: <RiEdit2Line />,
    },
    {
      name: `${t("responsive.title")}`,
      description: `${t("responsive.description")}`,
      icon: <RiCodeBlock />,
    },
    {
      name: `${t("mobileApp.title")}`,
      description: `${t("mobileApp.description")}`,
      icon: <RiMobileDownloadLine />,
    },
    {
      name: `${t("backend.title")}`,
      description: `${t("backend.description")}`,
      icon: <RiFireLine />,
    },
  ];
};

export const dataProjects = () => {
  const t = useTranslations("Projects.projects");
  return [
    {
      title: `${t("mahalo.title")}`,
      description: `${t("mahalo.description")}`,
      tags: ["HTML", "CSS", "JavaScript"],
      imageUrl: "/mahalo.png",
      link: "https://www.google.com",
      category: `${t("mahalo.category")}`,
    },
    {
      title: "Budget App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellendus.",
      tags: ["React", "Next.js", "Tailwind", "MongoDB"],
      imageUrl: "/image2.png",
      link: "https://www.google.com",
      category: "Web App",
    },
    {
      title: "Storage App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellendus.",
      tags: ["React", "Next.js", "Tailwind", "MongoDB"],
      imageUrl: "/image3.png",
      link: "https://www.google.com",
      category: "Web App",
    },
    {
      title: "Mission Theme",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellendus.",
      tags: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind"],
      imageUrl: "/image4.png",
      link: "https://www.google.com",
      category: "Backend",
    },
  ];
};

export const dataTestimonial = () => {
  const t = useTranslations("Testimonials.cards");
  return [
    {
      comment: `${t("card1.comment")}`,
      name: `${t("card1.name")}`,
      profession: `${t("card1.profession")}`,
    },
    {
      comment: `${t("card2.comment")}`,
      name: `${t("card2.name")}`,
      profession: `${t("card2.profession")}`,
    },
    {
      comment: `${t("card3.comment")}`,
      name: `${t("card3.name")}`,
      profession: `${t("card3.profession")}`,
    },
    {
      comment: `${t("card4.comment")}`,
      name: `${t("card4.name")}`,
      profession: `${t("card4.profession")}`,
    },
    {
      comment: `${t("card5.comment")}`,
      name: `${t("card5.name")}`,
      profession: `${t("card5.profession")}`,
    },
    {
      comment: `${t("card6.comment")}`,
      name: `${t("card6.name")}`,
      profession: `${t("card6.profession")}`,
    },
    {
      comment: `${t("card7.comment")}`,
      name: `${t("card7.name")}`,
      profession: `${t("card7.profession")}`,
    },
  ];
};

export const dataFaqs = () => {
  const t = useTranslations("Faqs.questions");
  return [
    {
      question: `${t("1.question")}`,
      answer: `${t("1.answer")}`,
    },
    {
      question: `${t("2.question")}`,
      answer: `${t("2.answer")}`,
    },
    {
      question: `${t("3.question")}`,
      answer: `${t("3.answer")}`,
    },
    {
      question: `${t("4.question")}`,
      answer: `${t("4.answer")}`,
    },
    {
      question: `${t("5.question")}`,
      answer: `${t("5.answer")}`,
    },
    {
      question: `${t("6.question")}`,
      answer: `${t("6.answer")}`,
    },
  ];
};

export const dataLinksFooter = () => {
  const t = useTranslations("Footer.linksFooter");
  return [
    {
      id: 1,
      section: `${t("company.title")}`,
      links: [
        { name: `${t("company.about")}`, path: "/about" },
        { name: `${t("company.projects")}`, path: "/projects" },
        { name: `${t("company.pricing")}`, path: "/pricing" },
        { name: `${t("company.contact")}`, path: "/contact" },
      ],
    },
    {
      id: 2,
      section: `${t("support.title")}`,
      links: [
        { name: `${t("support.help")}`, path: "#" },
        { name: `${t("support.terms")}`, path: "#" },
        { name: `${t("support.legal")}`, path: "#" },
        { name: `${t("support.privacy")}`, path: "#" },
      ],
    },
  ];
};

export const dataAboutSection = () => {
  return [
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
};
