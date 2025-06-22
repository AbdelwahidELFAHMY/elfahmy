"use client";

import React, { useEffect } from "react";
import { Code2, Database, Layers, Wrench } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientGlowDecor from "./GradientGlowDecor";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    category: "Languages",
    icon: Code2,
    skills: [
      { label: "Java", logo: "/logos/JAVA.png" },
      { label: "TypeScript", logo: "/logos/typescript.png" },
      { label: "JavaScript", logo: "/logos/JAVASCRIPT.png" },
      { label: "C++", logo: "/logos/C++.png" },
      { label: "C", logo: "/logos/C.png" },
      { label: "C#", logo: "/logos/Csharp.png" },
    ],
  },
  {
    category: "Frameworks",
    icon: Layers,
    skills: [
      { label: "Spring Boot", logo: "/logos/SpringBoot.png" },
      { label: "React", logo: "/logos/REACTJS.png" },
      { label: "Next", logo: "/logos/Next.png" },
      { label: "Node", logo: "/logos/NODEJS.png" },
      { label: "Express", logo: "/logos/EXPRESSJS.png" },
      { label: "TailwindCSS", logo: "/logos/taillwind.png" },
      { label: "Redux", logo: "/logos/REDUX.png" },
    ],
  },
  {
    category: "Databases",
    icon: Database,
    skills: [
      { label: "MySQL", logo: "/logos/MYSQL.png" },
      { label: "ORACLE", logo: "/logos/oracle.png" },
    ],
  },
  {
    category: "Others",
    icon: Wrench,
    skills: [
      { label: "Git", logo: "/logos/GIT.png" },
      { label: "Astah", logo: "/logos/Astah.png" },
      { label: "UML", logo: "/logos/uml.png" },
    ],
  },
];

const SkillsSection = ( id : string) => {
  useEffect(() => {
    gsap.utils.toArray(".category-header").forEach((header) => {
      gsap.fromTo(
        header,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 90%",
            end: "top 75%",
            scrub: 1,
            toggleActions: "play none none none",
          },
        }
      );
    });

    gsap.utils.toArray(".skill-card").forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 70%",
            scrub: 1,
            toggleActions: "play none none none",
          },
        }
      );
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id={id}
      className="w-full max-w-7xl mx-auto my-8 sm:my-12 md:my-16 py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 bg-transparent relative"
    >
      <GradientGlowDecor
        side="left"
        top="50%"
        height="60%"
        style={{ opacity: 0.6, transform: "translateY(-50%)" }}
      />
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-400 mb-6 sm:mb-8 md:mb-12 font-playfair flex gap-2 sm:gap-3 text-left items-center justify-start">
        <Code2 className="inline-block" size={30}  />
        Core Skills & Technologies
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {skillCategories.map((category) => (
          <div key={category.category} className="category">
            <h4 className="category-header text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-emerald-500 mb-4 sm:mb-6 relative flex items-center gap-2">
              <div className="p-2 sm:p-3 rounded-full bg-neutral-700">
                <category.icon className="text-amber-200" size={20}  />
              </div>
              {category.category}
            </h4>
            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-3 gap-4 sm:gap-6">
              {category.skills.map((skill) => (
                <div
                  key={skill.label}
                  className="skill-card bg-neutral-900/20 border-[1px] border-fuchsia-900 p-3 sm:p-4 rounded-2xl text-center shadow-xl shadow-fuchsia-800/30 transition duration-300 hover:scale-105 flex flex-col items-center"
                >
                  <Image
                    src={skill.logo}
                    alt={`${skill.label} logo`}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-2 sm:mb-3 object-contain"
                    width={56}
                    height={56}
                  />
                  <span className="text-xs sm:text-sm md:text-base font-medium text-fuchsia-300 font-playfair">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;