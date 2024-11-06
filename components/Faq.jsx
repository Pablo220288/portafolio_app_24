"use client";

import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Fade } from "react-awesome-reveal";
import { dataFaqs } from "@/data/data";

//Import Next Intl
import { useTranslations } from "next-intl";

const Faq = () => {
  const t = useTranslations("Faqs");

  const faqs = dataFaqs();

  return (
    <section>
      <div className="w-full max-w-3xl lg:max-w-[1400px] mx-auto px-8 pt-[6rem]">
        <div className="w-full pt-12 mb-6 xl:mb-24 ">
          <Fade direction="up" triggerOnce cascade damping={1e-1} delay={200}>
            <h2 className="section-title mb-4 text-center mx-auto">
              {t("title")}
            </h2>
          </Fade>
          <div className="flex flex-col">
            <div className="mx-auto max-w-7xl text-center">
              <Fade
                direction="up"
                triggerOnce
                cascade
                damping={1e-1}
                delay={400}
              >
                <p className="mt-2 mb-6  xl:mb-12 text-2xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
                  {t("subtitle")}
                </p>
              </Fade>
            </div>
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <Fade
                  direction="up"
                  triggerOnce
                  cascade
                  damping={1e-1}
                  delay={(index + 1) * 200}
                  key={index}
                >
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger>
                      <div className="ms-3 text-start pr-4 lg:pr-0">
                        {`0${index + 1}. `}
                        {faq.question}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300 p-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Fade>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
