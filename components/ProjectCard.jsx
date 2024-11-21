import React, { useRef } from "react";

//Import Motion
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Link } from "@/navigation";

const ProjectCard = ({ title, description, tags, imageCard, link }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <Link href={link}>
      <motion.div ref={ref} style={{ scale, opacity }} className="group">
        <section className="bg-white/60 min-w-full h-[350px] m-auto p-4 sm:w-[38rem] border border-black/5 rounded-lg overflow-hidden sm:p-0 sm:pr-8 relative sm:h-[18rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          <div className="pt-4 pb-8 sm:pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col sm:h-full sm:group-even:ml-[18rem]">
            <h3 className="h3">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={imageCard}
            alt="Project Image"
            quality={95}
            width={400}
            height={100}
            priority
            className="relative sm:absolute block mx-auto sm:top-8 sm:-right-40 rounded-t-lg drop-shadow-xl transition group-hover:scale-110 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:-translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] sm:group-even:-left-40"
          />
        </section>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
