import React, { useState } from "react";
import { Link } from "@/navigation";

import { Button } from "@/components/ui/button";
import { HiCheck } from "react-icons/hi";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { Fade } from "react-awesome-reveal";

const PricingCard = ({
  id,
  title,
  description,
  includedFeaturesTitle,
  includedFeatures,
  priceHead,
  price,
  button,
  priceFooter,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  return (
    <Fade
      direction="up"
      triggerOnce
      cascade
      damping={1e-1}
      delay={id === 2 ? 300 : id === 3 ? 700 : 500}
    >
      <div className="mx-auto mt-16 max-w-[380px] h-auto ring-1 ring-gray-200 dark:ring-gray-700 rounded-lg shadow-xl sm:mt-20 flex flex-col justify-between">
        <div className="p-8 sm:p-10">
          <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-6 h-[140px] sm:h-[100px] text-base leading-7">
            {description}
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm font-semibold leading-6 text-primary">
              {includedFeaturesTitle}
            </h4>
            <div className="h-px flex-auto bg-primary"></div>
          </div>
          <ul
            role="list"
            className="mt-4 h-[120px] grid grid-cols-1 gap-2 sm:gap-4 sm:grid-cols-2 text-sm text-gray-400 "
          >
            {includedFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-x-3 text-sm leading-6"
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
        <div className="-mt-2 p-2">
          <div className="bg-primary/5 py-10 rounded-lg text-center ring-1 ring-inset">
            <div className="mx-auto max-w-xs px-8">
              <p className="text-base font-semibold leading-7">{priceHead}</p>
              <p className="mat-6 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight">
                  ${price}
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide">
                  USD
                </span>
              </p>
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Button
                  className={`mt-10 bubbly-button ${
                    isHovered ? "animate" : ""
                  }`}
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
                  {button}
                </Button>
              </div>
              <p className="mt-10 text-xs leading-5">{priceFooter}</p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default PricingCard;
