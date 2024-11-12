import Form from "@/components/Form";
import React from "react";

//Import Next Intl
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <section className="py-12">
      <div className="w-full px-8 lg:px-12 mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 pt-12 mb-6 lg:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              {t("head")}
            </div>
            <h1 className="h1 max-w-md mb-8">{t("title")}</h1>
            <p className="subtitle max-w[400px]">{t("subtitle")}</p>
          </div>
          <div className="lg:mt-24">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
