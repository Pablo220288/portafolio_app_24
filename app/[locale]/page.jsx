import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Projects from "@/components/Projects";
import SkillsSlaider from "@/components/SkillsSlaider";
//import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <main>
      <p>{t("title")}</p>
      <Hero />
      <Features />
      <SkillsSlaider />
      <Projects />
      <Testimonials />
      <Faq />
      <Newsletter />
    </main>
  );
}