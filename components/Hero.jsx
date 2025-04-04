"use client";

import React, { useState } from "react";
import Link from "next/link";

//Import Components
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Socials from "./Socials";
import AboutSkills from "./AboutSkills";

//Import Icons
import { RiArrowRightDoubleLine } from "react-icons/ri";

//Import Images
import HeroImg from "./HeroImg";

//Import React Awesome Reveal
import { Fade } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";

//Import Next Intl
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const cardWidth = card.clientWidth;
    const cardHeight = card.clientHeight;
    const transX = x - cardWidth / 2;
    const transY = y - cardHeight / 2;

    card.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
    card.style.boxShadow = `${-transX}px ${-transY}px 0px #0005`;
  };

  const handleMouseOut = (e) => {
    const card = e.currentTarget;
    card.style.transform = ``;
    card.style.boxShadow = ``;
  };

  return (
    <section className="py-12 xl:py-24 h-[auto] bg-bottom overflow-x-hidden">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="flex justify-evenly xl:gap-x-8 sm:py-12 px-8 xl:px-0 mb-14 ">
          <div className="flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <Fade direction="up" triggerOnce delay={300} cascade damping={1e-1}>
              <TypeAnimation
                sequence={[
                  `${t("typeAnimation.frontendDeveloper")}`,
                  2000,
                  `${t("typeAnimation.backendDeveloper")}`,
                  2000,
                  `${t("typeAnimation.fullStackDeveloper")}`,
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-sm uppercase font-semibold tracking-[4px] mb-4 text-primary"
              />
            </Fade>
            <Fade direction="up" triggerOnce delay={500} cascade damping={1e-1}>
              <h1 className="h1">{t("greeting")}</h1>
            </Fade>
            <Fade direction="up" triggerOnce delay={700} cascade damping={1e-1}>
              <div className="subtitle max-w-[590px] mt-4 mx-auto xl:mx-0 flex flex-col items-center xl:items-start justify-center">
                <span>{t("text")}</span>
              </div>
            </Fade>
            <Fade direction="up" triggerOnce delay={900} cascade damping={1e-1}>
              <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-8 mt-8">
                <div className="flex items-center w-full gap-x-4">
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder={`${t("input.placeholder")}`}
                  />
                  <Link
                    href="/contact"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <Button
                      className={`gap-x-1 text-white bubbly-button ${
                        isHovered ? "animate" : ""
                      }`}
                    >
                      {t("input.submit")} <RiArrowRightDoubleLine size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            </Fade>
            <Fade
              direction="up"
              triggerOnce
              delay={1200}
              cascade
              damping={1e-1}
            >
              <Socials
                containerStyles={"flex gap-x-4 mx-auto xl:mx-0"}
                iconStyles={
                  "text-foreground text-[22px] hover:text-primary transition-all"
                }
              />
            </Fade>
          </div>
          <Fade
            direction="right"
            triggerOnce
            delay={600}
            cascade
            damping={1e-1}
          >
            <div className="hidden xl:flex relative">
              <HeroImg
                containerStyles={
                  "w-[550px] h-[346px] bg-no-repeat relative bg-buttom"
                }
                imgSrc={"/hero2.png"}
              />
            </div>
          </Fade>
        </div>
        <AboutSkills />
      </div>
    </section>
  );
};

export default Hero;
