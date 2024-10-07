"use client";

import Link from "next/link";
import React from "react";

// Next Hooks
import { usePathname } from "next/navigation";

//Frame Motion
import { motion } from "framer-motion";

//Import React Awesome Reveal
import { Fade } from "react-awesome-reveal";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/pricing", label: "Pricing" },
  { path: "/contact", label: "Contact" },
];

const Nav = ({ containerStyles, linksStyles, underlineStyles }) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
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
              {link.path === path ? (
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
