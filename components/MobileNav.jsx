"use client";

import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";

import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { Link } from "@/navigation";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/pricing", label: "Pricing" },
  { path: "/contact", label: "Contact" },
];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <nav className="flex flex-col items-center gap-y-4">
              {links.map((link, index) => (
                <Fade
                  key={index}
                  direction="right"
                  triggerOnce
                  delay={index * 200}
                  cascade
                  damping={1e-1}
                >
                  <SheetClose asChild>
                    <Link href={link.path} className={`capitalize text-1xl`}>
                      {link.label}
                    </Link>
                  </SheetClose>
                </Fade>
              ))}
            </nav>
          </div>
          <Socials containerStyles={"flex gap-x-4"} iconStyles={"text-2xl"} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
