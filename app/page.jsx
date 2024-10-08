import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SkillsSlaider from "@/components/SkillsSlaider";
//import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <SkillsSlaider />
      <Projects />
      <Testimonials />
    </main>
  );
}
