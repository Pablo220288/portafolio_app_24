"use client";

import React from "react";
import { Link } from "@/navigation";
import { navLinks } from "@/data/data";

// Next Hooks
import { usePathname } from "next/navigation";

//Frame Motion
import { motion } from "framer-motion";

//Import React Awesome Reveal
import { Fade } from "react-awesome-reveal";

const Nav = ({ containerStyles, linksStyles, underlineStyles }) => {
  const path = usePathname();
  const links = navLinks();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        const isActive =
          link.path === "/" ? path === "/" : path.startsWith(link.path);
        return (
          <Fade
            key={index}
            direction="right"
            triggerOnce
            delay={index * 200}
            cascade
            damping={1e-1}
          >
            <Link href={link.path} className={`capilatize ${linksStyles}`}>
              {isActive ? (
                <motion.span
                  layoutId="underline"
                  initial={{ y: "-100%" }}
                  animate={{ y: 0 }}
                  transition={{ type: "tween" }}
                  exit={{ width: 0 }}
                  className={underlineStyles}
                ></motion.span>
              ) : null}
              {link.label}
            </Link>
          </Fade>
        );
      })}
    </nav>
  );
};

export default Nav;
