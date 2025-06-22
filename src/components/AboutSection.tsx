"use client";

import React from "react";
import GradientGlowDecor from "./GradientGlowDecor";

const AboutSection = ( id :string) => (
  <section
    id={id}
    className="w-full max-w-5xl mx-auto mt-[-1.5rem] sm:mt-[-2rem] lg:mt-[-2.5rem] z-10 relative rounded-3xl bg-gradient-to-t from-slate-800/90 via-slate-700/40 to-slate-800/10 px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 flex flex-col md:flex-row gap-6 sm:gap-8 border border-slate-800 backdrop-blur-md"
  >
    <GradientGlowDecor
      side="left"
      top="50%"
      height="50%"
      style={{ opacity: 0.6, transform: "translateY(-50%)" }}
    />
    <GradientGlowDecor
      side="right"
      top="50%"
      height="50%"
      style={{ opacity: 0.6, transform: "translateY(-50%)" }}
    />

    <div className="flex-1">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-indigo-400 mb-3 sm:mb-4 font-sans tracking-tight animate-fade-in">
        About Me
      </h2>
      <div className="text-justify text-gray-200 space-y-3 sm:space-y-4 leading-relaxed animate-fade-in-up text-sm sm:text-base lg:text-lg">
        Hi there!👋
        <p>
          I&#39;m{" "}
          <span className="font-semibold bg-clip-text uppercase text-shadow-blue-500 tracking-wider text-indigo-300">
            Abdelwahid El-Fahmy
          </span>
          , a final-year software engineering student at ENSA Agadir, Morocco, passionate about backend development with{" "}
          <span className="text-orange-400 font-medium tracking-wider">Java &</span>{" "}
          <span className="text-green-500 tracking-wider font-medium">Spring Boot</span>.
          I have built a set of full-stack applications by following the complete software development lifecycle, from
          requirements gathering and design, to implementation, testing, and deployment, using modern technology stacks,
          with a strong focus on clean architecture and development best practices.
          <span className="block mt-2">
            Currently, I am looking for a final-year internship where I can apply my technical expertise, contribute to
            concrete projects, and grow in a collaborative, agile environment.
          </span>
        </p>
        <p className="group flex items-center gap-2 text-fuchsia-300 font-medium cursor-pointer hover:text-fuchsia-200 transition-colors text-sm sm:text-base">
          Let&#39;s connect and innovate together!
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;