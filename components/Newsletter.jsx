import React from "react";
import Link from "next/link";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

import {
  RiArrowRightDoubleLine,
  RiCalendarEventLine,
  RiFingerprintLine,
} from "react-icons/ri";

const Newsletter = () => {
  return (
    <section>
      <div className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-8 lg:px-10">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight section-title !justify-between sm:text-4xl">
                Need a Website?
              </h2>
              <p className="my-4 text-lg leading-8 subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis id excepturi cupiditate quibusdam! Atque quaerat
                assumenda nesciunt laborum aliquid, nulla itaque temporibus
                incidunt dolore dolorem unde culpa voluptatem ad ratione?
              </p>
              <div className="flex items-center w-full gap-x-4">
                <label className="sr-only"> Email Address</label>
                <Input
                  type="email"
                  id="email-address"
                  name="email"
                  autoComplete="email"
                  requerid="true"
                  placeholder="Enter your email"
                />
                <Link href="/contact">
                  <Button className="gap-x-1">
                    Send Email <RiArrowRightDoubleLine size={18} />
                  </Button>
                </Link>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div>
                  <RiCalendarEventLine className="text-primary" size={24} />
                </div>
                <dt className="mt-4 font-semibold text-muted-foreground">
                  Weekly acticles
                </dt>
                <dd className="mt-2 leading-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  deleniti, ducimus cum, minima hic totam!
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div>
                  <RiFingerprintLine className="text-primary" size={24} />
                </div>
                <dt className="mt-4 font-semibold text-muted-foreground">
                  Full Security
                </dt>
                <dd className="mt-2 leading-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  deleniti, ducimus cum, minima hic totam!
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
