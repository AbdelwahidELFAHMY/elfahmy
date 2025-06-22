"use client";

import React, { useEffect } from "react";
import { GraduationCap, Briefcase, File } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientGlowDecor from "./GradientGlowDecor";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    icon: GraduationCap,
    title: "Software Engineering – Final Year",
    org: "ENSA Agadir",
    date: "2023 | 2026",
    desc: "3-years engineering program covering: Java/JEE/Spring ecosystems, software architecture, database administration (Oracle), network/system administration, and full-stack development. Combines theoretical foundations with practical project-based learning.",
  },
  {
    icon: GraduationCap,
    title: "Preparatory Classes – 2 Years",
    org: "ENSA Agadir",
    date: "2021 | 2023",
    desc: "Focused on advanced mathematics, physics, and the fundamentals of programming, algorithms, and data structures.",
  },
  {
    icon: GraduationCap,
    title: "High School Diploma - Physical Sciences",
    org: "Ouzoud High School, Azilal",
    date: "2021",
    desc: "Graduated with honors in physical sciences with foundation in mathematics and physics.",
  },
];

const work = [
  {
    icon: Briefcase,
    title: "End-of-Year Project Intern",
    org: "Omni Networks, Agadir",
    date: "2025 -- 4 months",
    desc: "A full-stack internship management platform using Spring Boot and React + Vite, featuring automated documents generation, role-based access control (Admin/RH/Supervisor/Intern), with notifications features. Streamlined the entire internship lifecycle from application to certification.",
    certificateUrl: "/pfaInterncertifecate.jpg",
  },
  {
    icon: Briefcase,
    title: "Initiation Internship",
    org: "MegaTech Academy, Azilal",
    date: "Jul - Aug 2024 (2 months)",
    desc: "Developed an interactive e-learning platform using React.js (Frontend) and Express.js (Backend) with MySQL database integration. Implemented core features including user authentication, course modules, and progress tracking.",
    certificateUrl: "/certifecateIntern.pdf",
  },
];

const ExperienceSection = ({ id }) => {
  useEffect(() => {
    const educationTimelines = gsap.utils.toArray(".education .timeline-item");
    const workTimelines = gsap.utils.toArray(".work .timeline-item");

    const animateTimelines = (timelines) => {
      timelines.forEach((timeline, index) => {
        const border = timeline.querySelector(".border-animate");
        const icon = timeline.querySelector(".icon-wrapper");

        let targetHeight;
        if (index < timelines.length - 1) {
          const nextTimeline = timelines[index + 1];
          const currentIcon = icon.getBoundingClientRect();
          const nextIcon = nextTimeline.querySelector(".icon-wrapper").getBoundingClientRect();
          targetHeight = nextIcon.top - currentIcon.top - (currentIcon.height / 2) + (nextIcon.height / 2);
        } else {
          const timelineRect = timeline.getBoundingClientRect();
          const iconRect = icon.getBoundingClientRect();
          targetHeight = timelineRect.bottom - iconRect.top - (iconRect.height / 2);
        }

        gsap.fromTo(
          border,
          { height: 0 },
          {
            height: targetHeight,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: timeline,
              start: "top 90%", 
              end: index < timelines.length - 1 ? `+=${targetHeight}` : "bottom 90%",
              scrub: 1,
              toggleActions: "play none none none",
              onUpdate: (self) => {
                if (self.progress > 0.95) {
                  border.classList.add("active");
                } else {
                  border.classList.remove("active");
                }
              },
            },
          }
        );

        gsap.fromTo(
          icon,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: timeline,
              start: "top 90%",
              end: "top 70%",
              scrub: 1,
              toggleActions: "play none none none",
            },
          }
        );
      });
    };

    animateTimelines(educationTimelines);
    animateTimelines(workTimelines);

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id={id} className="w-full max-w-7xl mx-auto my-12 sm:my-16 md:my-20 px-6 sm:px-8 lg:px-10 relative">
      <GradientGlowDecor
        side="left"
        top="10%"
        height="80%"
        style={{ opacity: 0.4, transform: "translateX(-20%)" }}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
        <div className="education">
          <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold m-4 sm:m-6 text-emerald-400">
            Education
          </h4>
          <ol className="relative border-l-2 border-slate-500 pl-8 sm:pl-10 space-y-8 sm:space-y-10 lg:space-y-12">
            {education.map((exp, idx) => (
              <li key={`${exp.title}-${idx}`} className="relative  group timeline-item">
                <span className="border-animate absolute top-[12px] sm:top-[14px]  left-[-34px] sm:left-[-42px] w-[2px] bg-amber-200" />
                <span className="icon-wrapper absolute -left-[44px] sm:-left-[56px] top-0 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-emerald-400 rounded-full ring-2 ring-green-600 shadow-md">
                  <exp.icon size={16} className="text-white sm:w-5 sm:h-5" />
                </span>
                <h5 className="text-base sm:text-lg md:text-xl font-semibold leading-8 sm:leading-9 text-[#8fffb6] font-sans">
                  {exp.title}
                </h5>
                <span className="block text-xs sm:text-sm md:text-base text-slate-300 mb-2 sm:mb-3">
                  {exp.org} — <span className="text-blue-300">{exp.date}</span>
                </span>
                <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed text-justify">
                  {exp.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="work">
          <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold m-4 sm:m-6 text-fuchsia-400">
            Experience
          </h4>
          <ol className="relative border-l-2 border-slate-500 pl-8 sm:pl-10 space-y-8 sm:space-y-10 lg:space-y-12">
            {work.map((exp, idx) => (
              <li key={`${exp.title}-${idx}`} className="relative group timeline-item">
                <span className="border-animate absolute top-[12px] sm:top-[14px] left-[-34px] sm:left-[-42px] w-[2px] bg-purple-300" />
                <span className="icon-wrapper absolute -left-[44px] sm:-left-[56px] top-0 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-fuchsia-400 rounded-full ring-2 ring-rose-700 shadow-md">
                  <exp.icon size={16} className="text-white sm:w-5 sm:h-5" />
                </span>
                <h5 className="text-base sm:text-lg md:text-xl font-semibold leading-8 sm:leading-9 text-indigo-300 font-sans">
                  {exp.title}
                </h5>
                <span className="block text-xs sm:text-sm md:text-base text-slate-300 mb-2 sm:mb-3">
                  {exp.org} — <span className="text-blue-300">{exp.date}</span>
                </span>
                <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                  {exp.desc}
                </p>
                {exp.certificateUrl && (
                  <a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 sm:mt-3 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-200 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <File size={14} className="mr-1.5 sm:mr-2 sm:w-5 sm:h-5" />
                    View Internship Certificate
                  </a>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;