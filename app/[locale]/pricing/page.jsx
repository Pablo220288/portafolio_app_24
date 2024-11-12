"use client";

import React from "react";

import SectionContent from "@/components/SectionContent";
import { dataPricing } from "@/data/data";
import PricingCard from "@/components/PricingCard";

import { Fade } from "react-awesome-reveal";

//Import Next Intl
import { useTranslations } from "next-intl";

const Pricing = () => {
  const t = useTranslations("Pricing");

  const data = dataPricing();

  return (
    <SectionContent sectionStyles={"px-8"}>
      <Fade direction="up" triggerOnce cascade damping={1e-1} delay={400}>
        <h2 className="section-title mb-8">{t("title")}</h2>
      </Fade>
      <div className="mx-auto max-w-[1400px] text-center">
        <Fade direction="up" triggerOnce cascade damping={1e-1} delay={400}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("subtitle")}
          </h2>
        </Fade>
        <Fade direction="up" triggerOnce cascade damping={1e-1} delay={600}>
          <p className="mt-4 text-lg leading-8">{t("description")}</p>
        </Fade>
      </div>
      <div className="w-full flex flex-wrap justify-center items-stretch gap-10 relative">
        {data.map((item) => (
          <PricingCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            includedFeaturesTitle={`${t("includedFeaturesTitle")}`}
            includedFeatures={item.includedFeatures}
            price={item.price}
            priceHead={`${t("pricing.head")}`}
            button={`${t("pricing.submit")}`}
            priceFooter={`${t("pricing.footer")}`}
          />
        ))}
      </div>
      {/* <div className="mx-auto mt-16 max-w-2xl ring-1 ring-gray-200 dark:ring-gray-700 rounded-lg sm:mt-20 lg:mx-auto lg:flex lg:max-w-4xl">
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h3 className="text-2xl font-semibold tracking-tight">
            Liftime Menbreship
          </h3>
          <p className="mt-6 text-base leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            incidunt accusamus?
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm font-semibold leading-6 text-primary">
              What's included
            </h4>
            <div className="h-px flex-auto bg-primary"></div>
          </div>
          <ul
            role="list"
            className="mt-4 grid grid-cols-1 gap-2 sm:gap-4 sm:grid-cols-2 text-sm text-gray-400 "
          >
            {includedFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-x-3 text-sm leading-6"
              >
                <HiCheck
                  className="h-6 w-5 flex-none text-primary"
                  aria-hidden="true"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div className="bg-primary/5 py-10 rounded-lg text-center ring-1 ring-inset lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div className="mx-auto max-w-xs px-8">
              <p className="text-base font-semibold leading-7">
                Pay once, own it forever
              </p>
              <p className="mat-6 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight">$349</span>
                <span className="text-sm font-semibold leading-6 tracking-wide">
                  USD
                </span>
              </p>
              <Button
                className="mt-10"
                variant="default"
                size="lg"
                onClick={() => {
                  toast({
                    title: "Purchse",
                    description: "Thanks for your support",
                    action: (
                      <ToastAction altText="Go to dashboard">
                        <Link href="/contact">Go to Contact</Link>
                      </ToastAction>
                    ),
                  });
                }}
              >
                Purchse
              </Button>
              <p className="mt-10 text-xs leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                ullam.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </SectionContent>
  );
};

export default Pricing;
