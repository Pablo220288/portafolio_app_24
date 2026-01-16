"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "@/navigation";
import { useLocale } from "next-intl";

import { Button } from "./ui/button";
import { Languages, GlobeIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const LanguageToggler = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [position, setPosition] = useState(locale);

  useEffect(() => {
    setPosition(locale);
  }, [locale]);

  function handlerLocaleChange(value) {
    setPosition(value);
    // next-intl maneja automáticamente el cambio de locale y redirige a la URL correcta
    router.push(pathname, { locale: value });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <GlobeIcon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-max">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem
            value="en"
            onClick={() => handlerLocaleChange("en")}
          >
            English
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="es"
            onClick={() => handlerLocaleChange("es")}
          >
            Spanish
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggler;
