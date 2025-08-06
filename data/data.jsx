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
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiResend } from "react-icons/si";
import { TbBrandFramerMotion, TbBrandVite } from "react-icons/tb";

export const navLinks = () => {
  const t = useTranslations("Nav");
  return [
    { path: "/", label: t("home") },
    { path: "/about", label: t("about") },
    { path: "/projects", label: t("projects") },
    { path: "/games", label: t("games") },
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

export const dataProjects = (t) => {
  return [
    {
      id: "lamberti",
      title: `${t("lamberti.title")}`,
      description: `${t("lamberti.description")}`,
      tags: ["REACT", "TAILWIND", "FRAMER MOTION", "RESEND"],
      imageCard: "/projects/lamberti/lamberti_carra_test.webp",
      imageUrl: "/projects/lamberti/lamberti_carra_test.webp",
      link: "/projects/lamberti",
      website: "https://lamberti-carra.vercel.app",
      category: `${t("lamberti.category")}`,
      live_preview: `${t("lamberti.live_preview")}`,
      sectionDescription: {
        title: `${t("lamberti.sectionDescription.title")}`,
        description: `${t("lamberti.sectionDescription.description")}`,
        category: {
          title: `${t("lamberti.sectionDescription.category.title")}`,
          description: `${t(
            "lamberti.sectionDescription.category.description"
          )}`,
        },
        client: {
          title: `${t("lamberti.sectionDescription.client.title")}`,
          description: `${t("lamberti.sectionDescription.client.description")}`,
        },
        date: {
          title: `${t("lamberti.sectionDescription.date.title")}`,
          description: `${t("lamberti.sectionDescription.date.description")}`,
        },
        designer: {
          title: `${t("lamberti.sectionDescription.designer.title")}`,
          description: `${t(
            "lamberti.sectionDescription.designer.description"
          )}`,
        },
      },
      sectionTechnologies: {
        title: t("lamberti.sectionTechnologies.title"),
        technologies: [
          {
            title: t(
              "lamberti.sectionTechnologies.technologies.technologie_1.title"
            ),
            description: t(
              "lamberti.sectionTechnologies.technologies.technologie_1.description"
            ),
          },
          {
            title: t(
              "lamberti.sectionTechnologies.technologies.technologie_2.title"
            ),
            description: t(
              "lamberti.sectionTechnologies.technologies.technologie_2.description"
            ),
          },
          {
            title: t(
              "lamberti.sectionTechnologies.technologies.technologie_3.title"
            ),
            description: t(
              "lamberti.sectionTechnologies.technologies.technologie_3.description"
            ),
          },
          {
            title: t(
              "lamberti.sectionTechnologies.technologies.technologie_4.title"
            ),
            description: t(
              "lamberti.sectionTechnologies.technologies.technologie_4.description"
            ),
          },
          {
            title: t(
              "lamberti.sectionTechnologies.technologies.technologie_5.title"
            ),
            description: t(
              "lamberti.sectionTechnologies.technologies.technologie_5.description"
            ),
          },
        ],
      },
      sectionResult: {
        title: t("lamberti.sectionResult.title"),
        description: t("lamberti.sectionResult.description"),
        button: t("lamberti.sectionResult.button"),
      },
      icons: [
        {
          ico: <FaReact className="w-6 h-6" />,
          progress: 90,
        },
        {
          ico: <SiTailwindcss className="w-5 h-5" />,
          progress: 85,
        },
        {
          ico: <TbBrandFramerMotion className="w-6 h-6" />,
          progress: 60,
        },
        {
          ico: <SiResend className="w-6 h-6" />,
          progress: 50,
        },
      ],
      imgs: [
        {
          id: 1,
          url: "/projects/lamberti/lamberti_carra_1.webp",
        },
        {
          id: 2,
          url: "/projects/lamberti/lamberti_carra_2.webp",
        },
        {
          id: 3,
          url: "/projects/lamberti/lamberti_carra_3.webp",
        },
        {
          id: 4,
          url: "/projects/lamberti/lamberti_carra_4.webp",
        },
        {
          id: 5,
          url: "/projects/lamberti/lamberti_carra_5.webp",
        },
      ],
    },
    {
      id: "mahalo",
      title: `${t("mahalo.title")}`,
      description: `${t("mahalo.description")}`,
      tags: ["HTML", "CSS", "JavaScript"],
      imageCard: "/projects/mahalo/mahalo.png",
      imageUrl: "/projects/mahalo/mahalo.png",
      link: "/projects/mahalo",
      website: "https://pablo220288.github.io/Cabanas-Mahalo/",
      category: `${t("mahalo.category")}`,
      live_preview: `${t("mahalo.live_preview")}`,
      sectionDescription: {
        title: `${t("mahalo.sectionDescription.title")}`,
        description: `${t("mahalo.sectionDescription.description")}`,
        category: {
          title: `${t("mahalo.sectionDescription.category.title")}`,
          description: `${t("mahalo.sectionDescription.category.description")}`,
        },
        client: {
          title: `${t("mahalo.sectionDescription.client.title")}`,
          description: `${t("mahalo.sectionDescription.client.description")}`,
        },
        date: {
          title: `${t("mahalo.sectionDescription.date.title")}`,
          description: `${t("mahalo.sectionDescription.date.description")}`,
        },
        designer: {
          title: `${t("mahalo.sectionDescription.designer.title")}`,
          description: `${t("mahalo.sectionDescription.designer.description")}`,
        },
      },
      sectionTechnologies: {
        title: t("lamberti.sectionTechnologies.title"),
        technologies: [
          {
            title: t(
              "mahalo.sectionTechnologies.technologies.technologie_1.title"
            ),
            description: t(
              "mahalo.sectionTechnologies.technologies.technologie_1.description"
            ),
          },
          {
            title: t(
              "mahalo.sectionTechnologies.technologies.technologie_2.title"
            ),
            description: t(
              "mahalo.sectionTechnologies.technologies.technologie_2.description"
            ),
          },
          {
            title: t(
              "mahalo.sectionTechnologies.technologies.technologie_3.title"
            ),
            description: t(
              "mahalo.sectionTechnologies.technologies.technologie_3.description"
            ),
          },
          {
            title: t(
              "mahalo.sectionTechnologies.technologies.technologie_4.title"
            ),
            description: t(
              "mahalo.sectionTechnologies.technologies.technologie_4.description"
            ),
          },
          {
            title: t(
              "mahalo.sectionTechnologies.technologies.technologie_5.title"
            ),
            description: t(
              "mahalo.sectionTechnologies.technologies.technologie_5.description"
            ),
          },
        ],
      },
      sectionResult: {
        title: t("mahalo.sectionResult.title"),
        description: t("mahalo.sectionResult.description"),
        button: t("mahalo.sectionResult.button"),
      },
      icons: [
        {
          ico: <FaHtml5 className="w-6 h-6" />,
          progress: 80,
        },
        {
          ico: <FaCss3 className="w-5 h-5" />,
          progress: 65,
        },
        {
          ico: <FaJs className="w-6 h-6" />,
          progress: 30,
        },
      ],
      imgs: [
        {
          id: 1,
          url: "/projects/mahalo/mahalo_1.png",
        },
        {
          id: 2,
          url: "/projects/mahalo/mahalo_2.png",
        },
        {
          id: 3,
          url: "/projects/mahalo/mahalo_3.png",
        },
        {
          id: 4,
          url: "/projects/mahalo/mahalo_4.png",
        },
        {
          id: 5,
          url: "/projects/mahalo/mahalo_5.png",
        },
      ],
    },
    {
      id: "nike",
      title: `${t("nike.title")}`,
      description: `${t("nike.description")}`,
      tags: ["React", "Vite", "AOS"],
      imageCard: "/projects/nike/nike-max-play.png",
      imageUrl: "/projects/nike/nike-max-play_1.png",
      link: "/projects/nike",
      website: "https://nike-masplay-24.vercel.app/",
      category: `${t("nike.category")}`,
      live_preview: `${t("nike.live_preview")}`,
      sectionDescription: {
        title: `${t("nike.sectionDescription.title")}`,
        description: `${t("nike.sectionDescription.description")}`,
        category: {
          title: `${t("nike.sectionDescription.category.title")}`,
          description: `${t("nike.sectionDescription.category.description")}`,
        },
        client: {
          title: `${t("nike.sectionDescription.client.title")}`,
          description: `${t("nike.sectionDescription.client.description")}`,
        },
        date: {
          title: `${t("nike.sectionDescription.date.title")}`,
          description: `${t("nike.sectionDescription.date.description")}`,
        },
        designer: {
          title: `${t("nike.sectionDescription.designer.title")}`,
          description: `${t("nike.sectionDescription.designer.description")}`,
        },
      },
      sectionTechnologies: {
        title: t("nike.sectionTechnologies.title"),
        technologies: [
          {
            title: t(
              "nike.sectionTechnologies.technologies.technologie_1.title"
            ),
            description: t(
              "nike.sectionTechnologies.technologies.technologie_1.description"
            ),
          },
          {
            title: t(
              "nike.sectionTechnologies.technologies.technologie_2.title"
            ),
            description: t(
              "nike.sectionTechnologies.technologies.technologie_2.description"
            ),
          },
          {
            title: t(
              "nike.sectionTechnologies.technologies.technologie_3.title"
            ),
            description: t(
              "nike.sectionTechnologies.technologies.technologie_3.description"
            ),
          },
          {
            title: t(
              "nike.sectionTechnologies.technologies.technologie_4.title"
            ),
            description: t(
              "nike.sectionTechnologies.technologies.technologie_4.description"
            ),
          },
          {
            title: t(
              "nike.sectionTechnologies.technologies.technologie_5.title"
            ),
            description: t(
              "nike.sectionTechnologies.technologies.technologie_5.description"
            ),
          },
        ],
      },
      sectionResult: {
        title: t("nike.sectionResult.title"),
        description: t("nike.sectionResult.description"),
        button: t("nike.sectionResult.button"),
      },
      icons: [
        {
          ico: <FaHtml5 className="w-6 h-6" />,
          progress: 95,
        },
        {
          ico: <FaCss3 className="w-5 h-5" />,
          progress: 65,
        },
        {
          ico: <FaJs className="w-6 h-6" />,
          progress: 75,
        },
        {
          ico: <FaReact className="w-6 h-6" />,
          progress: 70,
        },
        {
          ico: <TbBrandVite className="w-6 h-6" />,
          progress: 55,
        },
      ],
      imgs: [
        {
          id: 1,
          url: "/projects/nike/nike-max-play_1.png",
        },
        {
          id: 2,
          url: "/projects/nike/nike-max-play_2.png",
        },
        {
          id: 3,
          url: "/projects/nike/nike-max-play_3.png",
        },
        {
          id: 4,
          url: "/projects/nike/nike-max-play_4.png",
        },
        {
          id: 5,
          url: "/projects/nike/nike-max-play_5.png",
        },
      ],
    },
    {
      id: "bouquet",
      title: `${t("bouquet.title")}`,
      description: `${t("bouquet.description")}`,
      tags: ["HTML", "CSS", "JavaScript"],
      imageCard: "/projects/bouquet/bouquet.png",
      imageUrl: "/projects/bouquet/bouquet_1.png",
      link: "/projects/bouquet",
      website: "https://pablo220288.github.io/Bouquets/",
      category: `${t("bouquet.category")}`,
      live_preview: `${t("bouquet.live_preview")}`,
      sectionDescription: {
        title: `${t("bouquet.sectionDescription.title")}`,
        description: `${t("bouquet.sectionDescription.description")}`,
        category: {
          title: `${t("bouquet.sectionDescription.category.title")}`,
          description: `${t(
            "bouquet.sectionDescription.category.description"
          )}`,
        },
        client: {
          title: `${t("bouquet.sectionDescription.client.title")}`,
          description: `${t("bouquet.sectionDescription.client.description")}`,
        },
        date: {
          title: `${t("bouquet.sectionDescription.date.title")}`,
          description: `${t("bouquet.sectionDescription.date.description")}`,
        },
        designer: {
          title: `${t("bouquet.sectionDescription.designer.title")}`,
          description: `${t(
            "bouquet.sectionDescription.designer.description"
          )}`,
        },
      },
      sectionTechnologies: {
        title: t("bouquet.sectionTechnologies.title"),
        technologies: [
          {
            title: t(
              "bouquet.sectionTechnologies.technologies.technologie_1.title"
            ),
            description: t(
              "bouquet.sectionTechnologies.technologies.technologie_1.description"
            ),
          },
          {
            title: t(
              "bouquet.sectionTechnologies.technologies.technologie_2.title"
            ),
            description: t(
              "bouquet.sectionTechnologies.technologies.technologie_2.description"
            ),
          },
          {
            title: t(
              "bouquet.sectionTechnologies.technologies.technologie_3.title"
            ),
            description: t(
              "bouquet.sectionTechnologies.technologies.technologie_3.description"
            ),
          },
          {
            title: t(
              "bouquet.sectionTechnologies.technologies.technologie_4.title"
            ),
            description: t(
              "bouquet.sectionTechnologies.technologies.technologie_4.description"
            ),
          },
          {
            title: t(
              "bouquet.sectionTechnologies.technologies.technologie_5.title"
            ),
            description: t(
              "bouquet.sectionTechnologies.technologies.technologie_5.description"
            ),
          },
        ],
      },
      sectionResult: {
        title: t("nike.sectionResult.title"),
        description: t("nike.sectionResult.description"),
        button: t("nike.sectionResult.button"),
      },
      icons: [
        {
          ico: <FaHtml5 className="w-6 h-6" />,
          progress: 90,
        },
        {
          ico: <FaCss3 className="w-5 h-5" />,
          progress: 85,
        },
        {
          ico: <FaJs className="w-6 h-6" />,
          progress: 55,
        },
      ],
      imgs: [
        {
          id: 1,
          url: "/projects/bouquet/bouquet_1.png",
        },
        {
          id: 2,
          url: "/projects/bouquet/bouquet_2.png",
        },
        {
          id: 3,
          url: "/projects/bouquet/bouquet_3.png",
        },
        {
          id: 4,
          url: "/projects/bouquet/bouquet_4.png",
        },
        {
          id: 5,
          url: "/projects/bouquet/bouquet_5.png",
        },
      ],
    },
    {
      id: "missionTheme",
      title: "Mission Theme",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellendus.",
      tags: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind"],
      imageCard: "/image4.png",
      imageUrl: "/image4.png",
      link: "/projects/missionTheme",
      category: "Backend",
      sectionDescription: {
        title: `${t("mahalo.sectionDescription.title")}`,
        description: `${t("mahalo.sectionDescription.description")}`,
        category: {
          title: `${t("mahalo.sectionDescription.category.title")}`,
          description: `${t("mahalo.sectionDescription.category.description")}`,
        },
        client: {
          title: `${t("mahalo.sectionDescription.client.title")}`,
          description: `${t("mahalo.sectionDescription.client.description")}`,
        },
        date: {
          title: `${t("mahalo.sectionDescription.date.title")}`,
          description: `${t("mahalo.sectionDescription.date.description")}`,
        },
        designer: {
          title: `${t("mahalo.sectionDescription.designer.title")}`,
          description: `${t("mahalo.sectionDescription.designer.description")}`,
        },
      },
      icons: [
        {
          ico: <FaHtml5 className="w-6 h-6" />,
          progress: 80,
        },
        {
          ico: <FaCss3 className="w-5 h-5" />,
          progress: 65,
        },
        {
          ico: <FaJs className="w-6 h-6" />,
          progress: 30,
        },
      ],
      imgs: [
        {
          id: 1,
          url: "/mahalo/mahalo_1.png",
        },
        {
          id: 2,
          url: "/mahalo/mahalo_2.png",
        },
        {
          id: 3,
          url: "/mahalo/mahalo_3.png",
        },
        {
          id: 4,
          url: "/mahalo/mahalo_4.png",
        },
        {
          id: 5,
          url: "/mahalo/mahalo_5.png",
        },
      ],
    },
  ];
};

export const dataGames = (t) => {
  return [
    {
      id: "fifteenPuzzle",
      head: `${t("fifteenPuzzle.head")}`,
      title: `${t("fifteenPuzzle.title")}`,
      description1: `${t("fifteenPuzzle.description1")}`,
      description2: `${t("fifteenPuzzle.description2")}`,
      description3: `${t("fifteenPuzzle.description3")}`,
      tags: ["HTML", "CSS", "JavaScript"],
      imageCard: "/mahalo.png",
      imageUrl: "/mahalo/mahalo_1.png",
      link: "/games/fifteenPuzzle",
      website: "#",
      category: `${t("fifteenPuzzle.category")}`,
      live_preview: `${t("fifteenPuzzle.live_preview")}`,
      sectionDescription: {
        title: `${t("fifteenPuzzle.sectionDescription.title")}`,
        description: `${t("fifteenPuzzle.sectionDescription.description")}`,
        category: {
          title: `${t("fifteenPuzzle.sectionDescription.category.title")}`,
          description: `${t(
            "fifteenPuzzle.sectionDescription.category.description"
          )}`,
        },
        client: {
          title: `${t("fifteenPuzzle.sectionDescription.client.title")}`,
          description: `${t(
            "fifteenPuzzle.sectionDescription.client.description"
          )}`,
        },
        date: {
          title: `${t("fifteenPuzzle.sectionDescription.date.title")}`,
          description: `${t(
            "fifteenPuzzle.sectionDescription.date.description"
          )}`,
        },
        designer: {
          title: `${t("fifteenPuzzle.sectionDescription.designer.title")}`,
          description: `${t(
            "fifteenPuzzle.sectionDescription.designer.description"
          )}`,
        },
      },
      icons: [
        {
          ico: <FaHtml5 className="w-6 h-6" />,
          progress: 80,
        },
        {
          ico: <FaCss3 className="w-5 h-5" />,
          progress: 65,
        },
        {
          ico: <FaJs className="w-6 h-6" />,
          progress: 30,
        },
      ],
      imgs: [
        {
          id: 1,
          url: "/mahalo/mahalo_1.png",
        },
        {
          id: 2,
          url: "/mahalo/mahalo_2.png",
        },
        {
          id: 3,
          url: "/mahalo/mahalo_3.png",
        },
        {
          id: 4,
          url: "/mahalo/mahalo_4.png",
        },
        {
          id: 5,
          url: "/mahalo/mahalo_5.png",
        },
      ],
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

export const dataPricing = () => {
  const t = useTranslations("Pricing.cards");
  return [
    {
      id: 1,
      title: `${t("standard.title")}`,
      description: `${t("standard.description")}`,
      includedFeatures: [
        `${t("standard.includedFeatures.1")}`,
        `${t("standard.includedFeatures.2")}`,
        `${t("standard.includedFeatures.3")}`,
        `${t("standard.includedFeatures.4")}`,
      ],
      price: "349",
    },
    {
      id: 2,
      title: `${t("professional.title")}`,
      description: `${t("professional.description")}`,
      includedFeatures: [
        `${t("professional.includedFeatures.1")}`,
        `${t("professional.includedFeatures.2")}`,
        `${t("professional.includedFeatures.3")}`,
        `${t("professional.includedFeatures.4")}`,
      ],
      price: "559",
    },
    {
      id: 3,
      title: `${t("backend.title")}`,
      description: `${t("backend.description")}`,
      includedFeatures: [
        `${t("backend.includedFeatures.1")}`,
        `${t("backend.includedFeatures.2")}`,
        `${t("backend.includedFeatures.3")}`,
        `${t("backend.includedFeatures.4")}`,
      ],
      price: "799",
    },
  ];
};
