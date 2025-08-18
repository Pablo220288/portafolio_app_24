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
import { FaCss3, FaHtml5, FaJs, FaReact, FaFilePdf } from "react-icons/fa";
import {
  SiTailwindcss,
  SiResend,
  SiMercadopago,
  SiZoho,
  SiNestjs,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandVite } from "react-icons/tb";
import { BsRobot } from "react-icons/bs";

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
          tooltip: "React",
        },
        {
          ico: <SiTailwindcss className="w-5 h-5" />,
          progress: 85,
          tooltip: "Tailwind",
        },
        {
          ico: <TbBrandFramerMotion className="w-6 h-6" />,
          progress: 60,
          tooltip: "Framer Motion",
        },
        {
          ico: <SiResend className="w-6 h-6" />,
          progress: 50,
          tooltip: "Resend",
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
      id: "vlack",
      title: `${t("vlack.title")}`,
      description: `${t("vlack.description")}`,
      tags: ["TIENDA NUBE"],
      imageCard: "/projects/vlack/vlack_3.webp",
      imageUrl: "/projects/vlack/vlack_1.webp",
      link: "/projects/vlack",
      website: "https://www.vlackhockey.com.ar/",
      category: `${t("vlack.category")}`,
      live_preview: `${t("vlack.live_preview")}`,
      sectionDescription: {
        title: `${t("vlack.sectionDescription.title")}`,
        description: `${t("vlack.sectionDescription.description")}`,
        category: {
          title: `${t("vlack.sectionDescription.category.title")}`,
          description: `${t("vlack.sectionDescription.category.description")}`,
        },
        client: {
          title: `${t("vlack.sectionDescription.client.title")}`,
          description: `${t("vlack.sectionDescription.client.description")}`,
        },
        date: {
          title: `${t("vlack.sectionDescription.date.title")}`,
          description: `${t("vlack.sectionDescription.date.description")}`,
        },
        designer: {
          title: `${t("vlack.sectionDescription.designer.title")}`,
          description: `${t("vlack.sectionDescription.designer.description")}`,
        },
      },
      sectionTechnologies: {
        title: t("vlack.sectionTechnologies.title"),
        technologies: [
          {
            title: t(
              "vlack.sectionTechnologies.technologies.technologie_1.title"
            ),
            description: t(
              "vlack.sectionTechnologies.technologies.technologie_1.description"
            ),
          },
          {
            title: t(
              "vlack.sectionTechnologies.technologies.technologie_2.title"
            ),
            description: t(
              "vlack.sectionTechnologies.technologies.technologie_2.description"
            ),
          },
          {
            title: t(
              "vlack.sectionTechnologies.technologies.technologie_3.title"
            ),
            description: t(
              "vlack.sectionTechnologies.technologies.technologie_3.description"
            ),
          },
          {
            title: t(
              "vlack.sectionTechnologies.technologies.technologie_4.title"
            ),
            description: t(
              "vlack.sectionTechnologies.technologies.technologie_4.description"
            ),
          },
          {
            title: t(
              "vlack.sectionTechnologies.technologies.technologie_5.title"
            ),
            description: t(
              "vlack.sectionTechnologies.technologies.technologie_5.description"
            ),
          },
        ],
      },
      sectionResult: {
        title: t("vlack.sectionResult.title"),
        description: t("vlack.sectionResult.description"),
        button: t("vlack.sectionResult.button"),
      },
      icons: [
        {
          ico: (
            <svg
              fill="#000000"
              width="24px"
              height="24px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.25 2.24a5.79 5.79 0 0 0-4 1.63 4.48 4.48 0 1 0 0 8.26 5.76 5.76 0 1 0 4-9.89zm0 10.24A4.49 4.49 0 0 1 5.76 8H4.48a5.74 5.74 0 0 0 .89 3.07 3.29 3.29 0 0 1-.88.13 3.2 3.2 0 0 1 0-6.4A3.2 3.2 0 0 1 7.69 8H9a4.42 4.42 0 0 0-1.63-3.43 4.48 4.48 0 1 1 2.88 7.91z" />
            </svg>
          ),
          progress: 90,
          tooltip: "Tienda Nube",
        },
      ],
      imgs: [
        {
          id: 1,
          url: "/projects/vlack/vlack_1.webp",
        },
        {
          id: 2,
          url: "/projects/vlack/vlack_2.webp",
        },
        {
          id: 3,
          url: "/projects/vlack/vlack_3.webp",
        },
        {
          id: 4,
          url: "/projects/vlack/vlack_4.webp",
        },
        {
          id: 5,
          url: "/projects/vlack/vlack_5.webp",
        },
        {
          id: 6,
          url: "/projects/vlack/vlack_6.webp",
        },
        {
          id: 7,
          url: "/projects/vlack/vlack_7.webp",
        },
        {
          id: 8,
          url: "/projects/vlack/vlack_8.webp",
        },
        {
          id: 9,
          url: "/projects/vlack/vlack_9.webp",
        },
      ],
    },
    {
      id: "eeva",
      title: `${t("eeva.title")}`,
      description: `${t("eeva.description")}`,
      tags: ["REACT", "TAILWIND", "NODEMAILER", "MERCADOPAGO", "Framer Motion"],
      imageCard: "/projects/eeva/eeva_1.webp",
      imageUrl: "/projects/eeva/eeva_1.webp",
      link: "/projects/eeva",
      website: "https://www.eevast.com",
      category: `${t("eeva.category")}`,
      live_preview: `${t("eeva.live_preview")}`,
      sectionDescription: {
        title: `${t("eeva.sectionDescription.title")}`,
        description: `${t("eeva.sectionDescription.description")}`,
        category: {
          title: `${t("eeva.sectionDescription.category.title")}`,
          description: `${t("eeva.sectionDescription.category.description")}`,
        },
        client: {
          title: `${t("eeva.sectionDescription.client.title")}`,
          description: `${t("eeva.sectionDescription.client.description")}`,
        },
        date: {
          title: `${t("eeva.sectionDescription.date.title")}`,
          description: `${t("eeva.sectionDescription.date.description")}`,
        },
        designer: {
          title: `${t("eeva.sectionDescription.designer.title")}`,
          description: `${t("eeva.sectionDescription.designer.description")}`,
        },
      },
      sectionTechnologies: {
        title: t("eeva.sectionTechnologies.title"),
        technologies: [
          {
            title: t(
              "eeva.sectionTechnologies.technologies.technologie_1.title"
            ),
            description: t(
              "eeva.sectionTechnologies.technologies.technologie_1.description"
            ),
          },
          {
            title: t(
              "eeva.sectionTechnologies.technologies.technologie_2.title"
            ),
            description: t(
              "eeva.sectionTechnologies.technologies.technologie_2.description"
            ),
          },
          {
            title: t(
              "eeva.sectionTechnologies.technologies.technologie_3.title"
            ),
            description: t(
              "eeva.sectionTechnologies.technologies.technologie_3.description"
            ),
          },
          {
            title: t(
              "eeva.sectionTechnologies.technologies.technologie_4.title"
            ),
            description: t(
              "eeva.sectionTechnologies.technologies.technologie_4.description"
            ),
          },
          {
            title: t(
              "eeva.sectionTechnologies.technologies.technologie_5.title"
            ),
            description: t(
              "eeva.sectionTechnologies.technologies.technologie_5.description"
            ),
          },
        ],
      },
      sectionResult: {
        title: t("eeva.sectionResult.title"),
        description: t("eeva.sectionResult.description"),
        button: t("eeva.sectionResult.button"),
      },
      icons: [
        {
          ico: <FaReact className="w-6 h-6" />,
          progress: 90,
          tooltip: "React",
        },
        {
          ico: <SiTailwindcss className="w-5 h-5" />,
          progress: 85,
          tooltip: "Tailwind",
        },
        {
          ico: <SiMercadopago className="w-6 h-6" />,
          progress: 75,
          tooltip: "Mercado Pago",
        },
        {
          ico: <TbBrandFramerMotion className="w-6 h-6" />,
          progress: 50,
          tooltip: "Framer Motion",
        },
      ],
      imgs: [
        {
          id: 1,
          url: "/projects/eeva/eeva_1.webp",
        },
        {
          id: 2,
          url: "/projects/eeva/eeva_2.webp",
        },
        {
          id: 3,
          url: "/projects/eeva/eeva_3.webp",
        },
        {
          id: 4,
          url: "/projects/eeva/eeva_4.webp",
        },
        {
          id: 5,
          url: "/projects/eeva/eeva_5.webp",
        },
        {
          id: 6,
          url: "/projects/eeva/eeva_6.webp",
        },
        {
          id: 7,
          url: "/projects/eeva/eeva_7.webp",
        },
        {
          id: 8,
          url: "/projects/eeva/eeva_8.webp",
        },
        {
          id: 9,
          url: "/projects/eeva/eeva_9.webp",
        },
        {
          id: 10,
          url: "/projects/eeva/eeva_10.webp",
        },
      ],
    },
    {
      id: "garantear",
      title: `${t("garantear.title")}`,
      description: `${t("garantear.description")}`,
      tags: ["NESTJS", "TAILWIND", "TYPESCRIPT", "ZOHO CRM"],
      imageCard: "/projects/garantear/garantear_1.webp",
      imageUrl: "/projects/garantear/garantear_1.webp",
      link: "/projects/garantear",
      website: "https://www.garantear.com/",
      category: `${t("garantear.category")}`,
      live_preview: `${t("garantear.live_preview")}`,
      sectionDescription: {
        title: `${t("garantear.sectionDescription.title")}`,
        description: `${t("garantear.sectionDescription.description")}`,
        category: {
          title: `${t("garantear.sectionDescription.category.title")}`,
          description: `${t("garantear.sectionDescription.category.description")}`,
        },
        client: {
          title: `${t("garantear.sectionDescription.client.title")}`,
          description: `${t("garantear.sectionDescription.client.description")}`,
        },
        date: {
          title: `${t("garantear.sectionDescription.date.title")}`,
          description: `${t("garantear.sectionDescription.date.description")}`,
        },
        designer: {
          title: `${t("garantear.sectionDescription.designer.title")}`,
          description: `${t("garantear.sectionDescription.designer.description")}`,
        },
      },
      sectionTechnologies: {
        title: t("garantear.sectionTechnologies.title"),
        technologies: [
          {
            title: t(
              "garantear.sectionTechnologies.technologies.technologie_1.title"
            ),
            description: t(
              "garantear.sectionTechnologies.technologies.technologie_1.description"
            ),
          },
          {
            title: t(
              "garantear.sectionTechnologies.technologies.technologie_2.title"
            ),
            description: t(
              "garantear.sectionTechnologies.technologies.technologie_2.description"
            ),
          },
          {
            title: t(
              "garantear.sectionTechnologies.technologies.technologie_3.title"
            ),
            description: t(
              "garantear.sectionTechnologies.technologies.technologie_3.description"
            ),
          },
          {
            title: t(
              "garantear.sectionTechnologies.technologies.technologie_4.title"
            ),
            description: t(
              "garantear.sectionTechnologies.technologies.technologie_4.description"
            ),
          },
          {
            title: t(
              "garantear.sectionTechnologies.technologies.technologie_5.title"
            ),
            description: t(
              "garantear.sectionTechnologies.technologies.technologie_5.description"
            ),
          },
          {
            title: t(
              "garantear.sectionTechnologies.technologies.technologie_6.title"
            ),
            description: t(
              "garantear.sectionTechnologies.technologies.technologie_6.description"
            ),
          },
        ],
      },
      sectionResult: {
        title: t("garantear.sectionResult.title"),
        description: t("garantear.sectionResult.description"),
        button: t("garantear.sectionResult.button"),
      },
      icons: [
        {
          ico: <SiNestjs className="w-6 h-6" />,
          progress: 90,
          tooltip: "NestJS",
        },
        {
          ico: <SiTypescript className="w-5 h-5" />,
          progress: 85,
          tooltip: "TypeScript",
        },
        {
          ico: <SiTailwindcss className="w-6 h-6" />,
          progress: 75,
          tooltip: "TailwindCSS",
        },
        {
          ico: <SiZoho className="w-6 h-6" />,
          progress: 50,
          tooltip: "Zoho CRM",
        },
      ],
      imgs: [
        {
          id: 1,
          url: "/projects/garantear/garantear_1.webp",
        },
        {
          id: 2,
          url: "/projects/garantear/garantear_2.webp",
        },
        {
          id: 3,
          url: "/projects/garantear/garantear_3.webp",
        },
        {
          id: 4,
          url: "/projects/garantear/garantear_4.webp",
        },
        {
          id: 5,
          url: "/projects/garantear/garantear_5.webp",
        },
        {
          id: 6,
          url: "/projects/garantear/garantear_6.webp",
        },
        {
          id: 7,
          url: "/projects/garantear/garantear_7.webp",
        },
        {
          id: 8,
          url: "/projects/garantear/garantear_8.webp",
        },
      ],
    },
    {
      id: "starbene",
      title: `${t("starbene.title")}`,
      description: `${t("starbene.description")}`,
      tags: ["REACT", "NEXT", "TAILWIND", "PDF", "CHATBOT"],
      imageCard: "/projects/starbene/starbene_1.webp",
      imageUrl: "/projects/starbene/starbene_1.webp",
      link: "/projects/starbene",
      website: "https://www.starbene.com/",
      category: `${t("starbene.category")}`,
      live_preview: `${t("starbene.live_preview")}`,
      sectionDescription: {
        title: `${t("starbene.sectionDescription.title")}`,
        description: `${t("starbene.sectionDescription.description")}`,
        category: {
          title: `${t("starbene.sectionDescription.category.title")}`,
          description: `${t("starbene.sectionDescription.category.description")}`,
        },
        client: {
          title: `${t("starbene.sectionDescription.client.title")}`,
          description: `${t("starbene.sectionDescription.client.description")}`,
        },
        date: {
          title: `${t("starbene.sectionDescription.date.title")}`,
          description: `${t("starbene.sectionDescription.date.description")}`,
        },
        designer: {
          title: `${t("starbene.sectionDescription.designer.title")}`,
          description: `${t("starbene.sectionDescription.designer.description")}`,
          link: `${t("starbene.sectionDescription.designer.link")}`,
        },
      },
      sectionTechnologies: {
        title: t("starbene.sectionTechnologies.title"),
        technologies: [
          {
            title: t(
              "starbene.sectionTechnologies.technologies.technologie_1.title"
            ),
            description: t(
              "starbene.sectionTechnologies.technologies.technologie_1.description"
            ),
          },
          {
            title: t(
              "starbene.sectionTechnologies.technologies.technologie_2.title"
            ),
            description: t(
              "starbene.sectionTechnologies.technologies.technologie_2.description"
            ),
          },
          {
            title: t(
              "starbene.sectionTechnologies.technologies.technologie_3.title"
            ),
            description: t(
              "starbene.sectionTechnologies.technologies.technologie_3.description"
            ),
          },
          {
            title: t(
              "starbene.sectionTechnologies.technologies.technologie_4.title"
            ),
            description: t(
              "starbene.sectionTechnologies.technologies.technologie_4.description"
            ),
          },
          {
            title: t(
              "starbene.sectionTechnologies.technologies.technologie_5.title"
            ),
            description: t(
              "starbene.sectionTechnologies.technologies.technologie_5.description"
            ),
          },
          {
            title: t(
              "starbene.sectionTechnologies.technologies.technologie_6.title"
            ),
            description: t(
              "starbene.sectionTechnologies.technologies.technologie_6.description"
            ),
          },
          {
            title: t(
              "starbene.sectionTechnologies.technologies.technologie_7.title"
            ),
            description: t(
              "starbene.sectionTechnologies.technologies.technologie_7.description"
            ),
          },
          {
            title: t(
              "starbene.sectionTechnologies.technologies.technologie_8.title"
            ),
            description: t(
              "starbene.sectionTechnologies.technologies.technologie_8.description"
            ),
          },
          {
            title: t(
              "starbene.sectionTechnologies.technologies.technologie_9.title"
            ),
            description: t(
              "starbene.sectionTechnologies.technologies.technologie_9.description"
            ),
          },
        ],
      },
      sectionResult: {
        title: t("starbene.sectionResult.title"),
        description: t("starbene.sectionResult.description"),
        button: t("starbene.sectionResult.button"),
      },
      icons: [
        {
          ico: <FaReact className="w-6 h-6" />,
          progress: 80,
          tooltip: "React",
        },
        {
          ico: <SiNextdotjs className="w-5 h-5" />,
          progress: 65,
          tooltip: "Next.js",
        },
        {
          ico: <SiTailwindcss className="w-6 h-6" />,
          progress: 30,
          tooltip: "Tailwind CSS",
        },
        {
          ico: <FaFilePdf className="w-6 h-6" />,
          progress: 30,
          tooltip: "PDF",
        },
        {
          ico: <BsRobot className="w-6 h-6" />,
          progress: 60,
          tooltip: "Chatbot",
        },
      ],
      imgs: [
        {
          id: 1,
          url: "/projects/starbene/starbene_1.webp",
        },
        {
          id: 2,
          url: "/projects/starbene/starbene_2.webp",
        },
        {
          id: 3,
          url: "/projects/starbene/starbene_3.webp",
        },
        {
          id: 4,
          url: "/projects/starbene/starbene_4.webp",
        },
        {
          id: 5,
          url: "/projects/starbene/starbene_5.webp",
        },
        {
          id: 6,
          url: "/projects/starbene/starbene_6.webp",
        },
        {
          id: 7,
          url: "/projects/starbene/starbene_7.webp",
        },
        {
          id: 8,
          url: "/projects/starbene/starbene_8.webp",
        },
        {
          id: 9,
          url: "/projects/starbene/starbene_9.webp",
        },
        {
          id: 10,
          url: "/projects/starbene/starbene_10.webp",
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
        title: t("mahalo.sectionTechnologies.title"),
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
          tooltip: "HTML",
        },
        {
          ico: <FaCss3 className="w-5 h-5" />,
          progress: 65,
          tooltip: "CSS",
        },
        {
          ico: <FaJs className="w-6 h-6" />,
          progress: 30,
          tooltip: "JavaScript",
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
          tooltip: "HTML",
        },
        {
          ico: <FaCss3 className="w-5 h-5" />,
          progress: 65,
          tooltip: "CSS",
        },
        {
          ico: <FaJs className="w-6 h-6" />,
          progress: 75,
          tooltip: "JavaScript",
        },
        {
          ico: <FaReact className="w-6 h-6" />,
          progress: 70,
          tooltip: "React",
        },
        {
          ico: <TbBrandVite className="w-6 h-6" />,
          progress: 55,
          tooltip: "Vite",
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
        title: t("bouquet.sectionResult.title"),
        description: t("bouquet.sectionResult.description"),
        button: t("bouquet.sectionResult.button"),
      },
      icons: [
        {
          ico: <FaHtml5 className="w-6 h-6" />,
          progress: 90,
          tooltip: "HTML",
        },
        {
          ico: <FaCss3 className="w-5 h-5" />,
          progress: 85,
          tooltip: "CSS",
        },
        {
          ico: <FaJs className="w-6 h-6" />,
          progress: 55,
          tooltip: "JavaScript",
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
      button: `${t("fifteenPuzzle.button")}`,
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
    {
      id: "snake",
      head: `${t("snake.head")}`,
      title: `${t("snake.title")}`,
      description1: `${t("snake.description1")}`,
      description2: `${t("snake.description2")}`,
      description3: `${t("snake.description3")}`,
      tags: ["HTML", "CSS", "JavaScript"],
      imageCard: "/mahalo.png",
      imageUrl: "/mahalo/mahalo_1.png",
      link: "/games/snake",
      website: "#",
      category: `${t("snake.category")}`,
      button: `${t("snake.button")}`,
      live_preview: `${t("snake.live_preview")}`,
      sectionDescription: {
        title: `${t("snake.sectionDescription.title")}`,
        description: `${t("snake.sectionDescription.description")}`,
        category: {
          title: `${t("snake.sectionDescription.category.title")}`,
          description: `${t("snake.sectionDescription.category.description")}`,
        },
        client: {
          title: `${t("snake.sectionDescription.client.title")}`,
          description: `${t("snake.sectionDescription.client.description")}`,
        },
        date: {
          title: `${t("snake.sectionDescription.date.title")}`,
          description: `${t("snake.sectionDescription.date.description")}`,
        },
        designer: {
          title: `${t("snake.sectionDescription.designer.title")}`,
          description: `${t("snake.sectionDescription.designer.description")}`,
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
