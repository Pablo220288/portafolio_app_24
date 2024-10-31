"use client";

import React from "react";
import { Link } from "@/navigation";
import { navLinks } from "@/data/data";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Logo from "./Logo";
import Socials from "./Socials";


//Import React Awesome Reveal
import { Fade } from "react-awesome-reveal";

// Next Hooks
import { usePathname } from "next/navigation";


const MobileNav = () => {
  const path = usePathname();
  const links = navLinks();

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
                      {link.path === path ? (
                        <span className="absolute left-0 top-full h-[2px] w-full bg-primary"></span>
                      ) : null}
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
