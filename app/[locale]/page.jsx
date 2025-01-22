import Faq from "@/components/Faq";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Projects from "@/components/Projects";
import SkillsSlaider from "@/components/SkillsSlaider";
//import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main>
      <Background />
      <Hero />
      <Services />
      <SkillsSlaider />
      <Projects />
      <Testimonials />
      <Faq />
      <Newsletter />
    </main>
  );
}
