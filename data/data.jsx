import React from "react";

//Import Next Intl
import { useTranslations } from "next-intl";

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
