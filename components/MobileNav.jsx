"use client";

import React from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div  className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles={"flex flex-col items-center gap-y-4"}
              linksStyles={"text-1xl"}
            />
          </div>
          <Socials containerStyles={"flex gap-x-4"} iconStyles={"text-2xl"} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
