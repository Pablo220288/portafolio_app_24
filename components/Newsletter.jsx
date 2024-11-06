"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

import {
  RiArrowRightDoubleLine,
  RiCalendarEventLine,
  RiFingerprintLine,
} from "react-icons/ri";

import { Fade } from "react-awesome-reveal";

//Import Next Intl
import { useTranslations } from "next-intl";

const Newsletter = () => {
  const t = useTranslations("Website");

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section>
      <div className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="w-full mx-auto max-w-[1400px] px-8 lg:px-10">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <Fade
                direction="left"
                triggerOnce
                cascade
                damping={1e-1}
                delay={600}
              >
                <h2 className="text-3xl font-bold tracking-tight section-title !justify-between sm:text-4xl">
                  {t("title")}
                </h2>
              </Fade>
              <Fade
                direction="left"
                triggerOnce
                cascade
                damping={1e-1}
                delay={400}
              >
                <p className="my-4 text-lg leading-8 subtitle">
                  {t("subtitle")}
                </p>
              </Fade>
              <Fade
                direction="left"
                triggerOnce
                cascade
                damping={1e-1}
                delay={200}
              >
                <div className="flex items-center w-full gap-x-4">
                  <label className="sr-only">Email</label>
                  <Input
                    type="email"
                    id="email-address"
                    name="email"
                    autoComplete="email"
                    requerid="true"
                    placeholder={t("input.placeholder")}
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
                      {t("input.submit")}
                      <RiArrowRightDoubleLine size={18} />
                    </Button>
                  </Link>
                </div>
              </Fade>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <Fade
                direction="right"
                triggerOnce
                cascade
                damping={1e-1}
                delay={400}
              >
                <div className="flex flex-col items-start">
                  <div>
                    <RiCalendarEventLine className="text-primary" size={24} />
                  </div>
                  <dt className="mt-4 font-semibold text-muted-foreground">
                    {t("cards.response.title")}
                  </dt>
                  <dd className="mt-2 leading-7">
                    {t("cards.response.description")}
                  </dd>
                </div>
              </Fade>
              <Fade
                direction="right"
                triggerOnce
                cascade
                damping={1e-1}
                delay={600}
              >
                <div className="flex flex-col items-start">
                  <div>
                    <RiFingerprintLine className="text-primary" size={24} />
                  </div>
                  <dt className="mt-4 font-semibold text-muted-foreground">
                    {t("cards.security.title")}
                  </dt>
                  <dd className="mt-2 leading-7">
                    {t("cards.security.description")}
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

export default Newsletter;
