"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
  const [position, setPosition] = useState("en");

  useEffect(() => {
    // Obtiene el valor de la cookie NEXT_LOCALE al cargar el componente
    const locale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("NEXT_LOCALE="))
      ?.split("=")[1];
    if (locale) {
      setPosition(locale);
    }
  }, []);

  function handlerLocaleChange(value) {
    document.cookie = `NEXT_LOCALE=${value}; path=/; max-age=31536000; samesite=lax`;
    setPosition(value);
    router.refresh();
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
