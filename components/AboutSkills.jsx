"use client";

import React from "react";
import {
  RiCodeBlock,
  RiStarSmileLine,
  RiUserHeartLine,
  RiChatSmile3Line,
} from "react-icons/ri";
import Badge from "./Badge";
import { Fade } from "react-awesome-reveal";

//Import Next Intl
import { useTranslations } from "next-intl";

const AboutSkills = () => {
  const t = useTranslations("AboutSkills");

  return (
    <div>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8 overflow-hidden py-24">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center">
          <Fade direction="up" triggerOnce delay={200} cascade damping={1e-1}>
            <div className="mx-auto flex max-w-xs flex-col items-center gap-y-4">
              <dt className="text-base leading-7 text-muted-foreground">
                {t("yearOfExperience")}
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

          <Fade direction="up" triggerOnce delay={400} cascade damping={1e-1}>
            <div className="mx-auto flex max-w-xs flex-col items-center gap-y-4">
              <dt className="text-base leading-7 text-muted-foreground">
                {t("projects")}
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

          <Fade direction="up" triggerOnce delay={400} cascade damping={1e-1}>
            <div className="mx-auto flex max-w-xs flex-col items-center gap-y-4">
              <dt className="text-base leading-7 text-muted-foreground">
                {t("satisfiedCustomers")}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                <Badge
                  icon={<RiChatSmile3Line />}
                  endCountNum={20}
                  endCountText={"+"}
                  badgeText={""}
                />
              </dd>
            </div>
          </Fade>

          <Fade direction="up" triggerOnce delay={400} cascade damping={1e-1}>
            <div className="mx-auto flex max-w-xs flex-col items-center gap-y-4">
              <dt className="text-base leading-7 text-muted-foreground">
                {t("followers")}
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
  );
};

export default AboutSkills;
