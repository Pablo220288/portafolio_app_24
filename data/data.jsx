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
