"use client";
import React, { useState, useEffect } from "react";
import ThemesToggler from "./ThemesToggler";

//Imports Components
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

//Import Path
import { usePathname } from "next/navigation";
import LanguageToggler from "./LanguageToggler";

const Header = () => {
  const [header, setHeader] = useState(false);

  const path = usePathname();

  useEffect(() => {
    const scrollYPosition = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return () => {
      window.removeEventListener("scroll", scrollYPosition);
    };
  }, [path]);

  return (
    <header
      className={`${
        header
          ? "py-3 bg-white shadow-lg dark:bg-accent"
          : " py-6 dark:bg-transparent "
      } sticky top-0 z-30 transition-all duration-300 ${
        path === "/" && "bg-white"
      }`}
    >
      <div className="w-full max-w-[1440px] px-8 mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles={"hidden md:flex gap-x-8 items-center"}
              linksStyles={
                "relative hover:text-primary transition-all duration-200 text-md"
              }
              underlineStyles={
                "absolute left-0 top-full h-[2px] w-full bg-primary"
              }
            />
            <div className="inline-flex">
              <ThemesToggler />
              <LanguageToggler />
            </div>
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
