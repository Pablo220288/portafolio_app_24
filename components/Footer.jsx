"use client";

import Link from "next/link";
import Logo from "./Logo";
import Socials from "./Socials";

import { RiSendPlaneLine } from "react-icons/ri";

//Import Next Intl
import { useTranslations } from "next-intl";
import { dataLinksFooter } from "@/data/data";

import FooterExplosion from "./FooterExplosion";

const Footer = () => {
  const t = useTranslations("Footer");

  const linksFooter = dataLinksFooter();

  return (
    <div
      className="relative w-full px-10 sm:px-6 bg-gradient-to-b from-transparent to-primary/30 dark:to-transparent"
      id="first-section"
    >
      <FooterExplosion />
      <div className="mx-auto max-w-2xl pt-4 pb-16 sm:px-6 lg:max-w-[1440px] lg:px-8">
        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          <div className="col-span-4">
            <div className="pb-4">
              <Logo />
            </div>
            <h3 className="text-black dark:text-white text-lg font-medium leading-9 mb-4 lg:mb-20">
              {t("title")}
            </h3>
            <Socials
              containerStyles={"flex gap-x-4 mx-auto xl:mx-0"}
              iconStyles={
                "text-foreground text-[22px] hover:text-primary transition-all"
              }
            />
          </div>
          {linksFooter.map((link) => (
            <div className="group relative col-span-2" key={link.id}>
              <p className="text-black dark:text-white text-xl font-semibold mb-6 leading-9">
                {link.section}
              </p>
              <ul>
                {link.links.map((link, index) => (
                  <li className="mb-1" key={index}>
                    <Link
                      className="text-black dark:text-white text-base leading-9"
                      href={`${link.path}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-4">
            <h3 className="text-black dark:text-white text-xl font-semibold mb-6 leading-9">
              {t("stay.title")}
            </h3>
            <div className="relative text-black dark:text-white focus-within:text-primary flex flex-row-reverse">
              <input
                type="email"
                name="email"
                placeholder={t("stay.input.placeholder")}
                autoComplete="off"
                className="py-4 text-sm w-full text-white bg-gray-900 rounded-md pl-4"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <button
                  className="p-1 focus:outline-none focus:shadow-outline text-white hover:text-primary transition-all"
                  type="submit"
                >
                  <RiSendPlaneLine />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-6 px-4">
        <h3 className="text-center text-gray-500">
          ©{new Date().getFullYear()} - {t("copyright")}
        </h3>
      </div>
    </div>
  );
};

export default Footer;
