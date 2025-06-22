"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { FolderGit2 } from "lucide-react";
import GradientGlowDecor from "./GradientGlowDecor";
import Atropos from "atropos/react";
import "atropos/css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Deduplicated and indexed projects for unique keys
const projects = [
  {
    id: 1,
    title: "StageLik",
    description:
      "An internship management platform designed for enterprises. It streamlines the entire internship lifecycle, from application tracking and candidate evaluation to intern onboarding and progress monitoring.",
    image: "/projects/stageLike.png",
    link: "https://github.com/AbdelwahidELFAHMY/gestion-stagiaires",
    stack: [
      "Java",
      "Spring Boot",
      "React",
      "Vite",
      "Redux",
      "Tailwind",
      "MySQL",
    ],
  },
  {
    id: 2,
    title: "Pharmacie Online",
    description:
      "Pharmacie Online is a web application that allows patients to submit prescriptions, track their preparation, and receive real-time updates, while pharmacists manage and process orders efficiently.",
    image: "/projects/pharmacieOnline.png",
    link: "https://github.com/AbdelwahidELFAHMY/PharmacieOnline",
    stack: [
      "Java",
      "JEE",
      "EJB",
      "React",
      "Tailwind",
      "JavaScript",
      "MySQL",
      "JPA Hibernate",
    ],
  },
  {
    id: 3,
    title: "MegaStudy",
    description:
      "An e-learning platform with interactive features, built using React and Express, It offers students a smooth and engaging learning experience, enabling efficient data management.",
    image: "/projects/megastudy.png",
    link: "https://github.com/AbdelwahidELFAHMY/MegaTechProject",
    stack: ["Express", "React", "JavaScript", "CSS", "MySQL"],
  },
  {
    id: 4,
    title: "Drivers & Driving Licenses Management",
    description:
      "A C# WinForms desktop application for managing drivers data and licenses. Built on a 3-tier architecture, it separates the UI, business logic, and data access layers.",
    image: "/projects/dvld.jpg",
    link: "https://github.com/AbdelwahidELFAHMY/DriversDrivingLicensesManagementApp",
    stack: ["C#", "ADO.NET", "WinForm", "SQLServer"],
  },
  {
    id: 5,
    title: "DentaCare",
    description:
      "Dental clinic management application built with JavaFX and Scene Builder. It enables efficient handling of patients, appointments, and medical records in a user-friendly desktop environment.",
    image: "/projects/cabinet.png",
    link: "https://github.com/AbdelwahidELFAHMY/Gestion-Cabinet-Dentaire",
    stack: ["JavaFX", "Scene Builder", "MySQL"],
  },
];

const ProjectsSection = ({ id }: { id: string }) => {
  useEffect(() => {
    gsap.utils.toArray(".atropos-card").forEach((card, index) => {
      const element = card as HTMLElement; 
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          delay: index * 0.15,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id={id}
      className="w-full max-w-7xl mx-auto my-8 sm:my-12 md:my-16 px-4 sm:px-6 lg:px-8"
    >
      <GradientGlowDecor
        side="left"
        top="50%"
        height="60%"
        style={{ opacity: 0.6, transform: "translateY(-50%)" }}
      />
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-400 mb-6 sm:mb-8 md:mb-12 font-playfair flex gap-2 sm:gap-3 text-left items-center justify-start">
        <FolderGit2 className="text-fuchsia-300 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        <span>Completed Projects</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-9">
        {projects.map((p) => (
          <Atropos
            key={p.id}
            className="atropos-card"
            activeOffset={8}
            shadowScale={0}
            rotateXMax={15}
            rotateYMax={15}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div
              className="bg-transparent border border-fuchsia-900 rounded-xl sm:rounded-2xl overflow-hidden flex flex-col atropos-inner"
              data-atropos-offset="2"
            >
              <div
                className="relative w-full aspect-[16/9] sm:aspect-[2/1] bg-black/30"
                data-atropos-offset="5"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/fallback-image.png";
                  }}
                />
              </div>
              <div
                className="p-3 sm:p-4 md:p-5 flex-1 flex flex-col"
                data-atropos-offset="3"
              >
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-fuchsia-400 mb-1 sm:mb-2">
                  {p.title}
                </h4>
                <p className="text-slate-300 text-justify text-xs sm:text-sm md:text-base mb-2 sm:mb-3">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs sm:text-sm text-blue-200 bg-blue-800/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded"
                      data-atropos-offset="1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-1.5 sm:gap-2 bg-transparent border-[0.5px] border-fuchsia-800 p-1.5 sm:p-2 rounded-lg text-fuchsia-400 font-semibold hover:text-fuchsia-200 transition text-xs sm:text-sm"
                  data-atropos-offset="2"
                >
                  GitHub Repo <FolderGit2 size={14} sm={16} />
                </a>
              </div>
            </div>
          </Atropos>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
