"use client";

import React from "react";
import Link from "next/link";

//Import Components
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Badge from "./Badge";
import Socials from "./Socials";

//Import Icons
import {
  RiArrowRightDoubleLine,
  RiStarSmileLine,
  RiCodeBlock,
  RiUserHeartLine,
} from "react-icons/ri";

//Import Images
import HeroImg from "./HeroImg";

//Import React Awesome Reveal
import { Fade } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[auto] bg-bottom overflow-x-hidden">
      <div className="container mx-auto">
        <div className="flex justify-evenly gap-x-8 sm:py-12 px-8 xl:px-0">
          <div className="flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <Fade direction="up" triggerOnce delay={300} cascade damping={1e-1}>
              <div className="text-sm uppercase font-semibold tracking-[4px] mb-4 text-primary">
                Full Stack Developer
              </div>
            </Fade>
            <Fade direction="up" triggerOnce delay={500} cascade damping={1e-1}>
              <h1 className="h1">Hi, I'm Pablo</h1>
            </Fade>
            <Fade direction="up" triggerOnce delay={700} cascade damping={1e-1}>
              <div className="subtitle max-w-[590px] mt-4 mx-auto xl:mx-0 flex flex-col items-center xl:items-start justify-center">
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Neque perspiciatis hic inventore ratione ullam, atque,
                </span>
                <TypeAnimation
                  sequence={[
                    "Frontend Developer",
                    2000,
                    "Backend Developer",
                    2000,
                    "Full Stack Developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-base uppercase font-semibold tracking-[2px] text-primary"
                />
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
                    placeholder="Enter your email"
                  />
                  <Link href="/contact">
                    <Button className="gap-x-1">
                      Get Started <RiArrowRightDoubleLine size={18} />
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
        <div className="py-24 sm:py-32 ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
              <Fade
                direction="up"
                triggerOnce
                delay={200}
                cascade
                damping={1e-1}
              >
                <div className="mx-auto flex max-w-xs flex-col items-center gap-y4">
                  <dt className="text-base leading-7 text-muted-foreground">
                    Year of Experience
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                    <Badge
                      icon={<RiStarSmileLine />}
                      endCountNum={10}
                      endCountText={"+"}
                      badgeText={""}
                    />
                  </dd>
                </div>
              </Fade>

              <Fade
                direction="up"
                triggerOnce
                delay={400}
                cascade
                damping={1e-1}
              >
                <div className="mx-auto flex max-w-xs flex-col items-center gap-y4">
                  <dt className="text-base leading-7 text-muted-foreground">
                    Projects
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                    <Badge
                      icon={<RiCodeBlock />}
                      endCountNum={120}
                      endCountText={"+"}
                      badgeText={""}
                    />
                  </dd>
                </div>
              </Fade>

              <Fade
                direction="up"
                triggerOnce
                delay={400}
                cascade
                damping={1e-1}
              >
                <div className="mx-auto flex max-w-xs flex-col items-center gap-y-4">
                  <dt className="text-base leading-7 text-muted-foreground">
                    Followers
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                    <Badge
                      icon={<RiUserHeartLine />}
                      endCountNum={580}
                      endCountText={"k"}
                      badgeText={""}
                    />
                  </dd>
                </div>
              </Fade>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
