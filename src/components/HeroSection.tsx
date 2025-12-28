"use client";

import React, { useEffect, useRef, useState } from "react";
import { FileDownIcon } from "lucide-react";
import Image from "next/image";

const NAME: string = "ABDELWAHID EL-FAHMY";

const HeroSection = ({ id }: { id: string }) => {
  const [displayedName, setDisplayedName] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const nameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let current = 0;
    let mounted = true;

    function type() {
      if (!mounted) return;
      if (current <= NAME.length) {
        setDisplayedName(NAME.slice(0, current));
        current++;

        // délai aléatoire (entre 80ms et 160ms) pour un effet plus naturel
        const delay = Math.floor(Math.random() * 80) + 80;
        setTimeout(type, delay);
      } else {
        setTypingDone(true);
      }
    }

    type();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section
      id={id}
      className="relative mt-10 sm:mt-8 md:mt-10 max-w-full my-10 sm:min-h-[70vh] flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-14 px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-14 overflow-hidden"
    >
      {/* Glow background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{ overflow: "hidden" }}
      >
        <div
          className="absolute left-[-20%] sm:left-[-10%] top-1/3 h-1/2 w-[240%] sm:w-[220%] opacity-20 sm:opacity-25 blur-2xl sm:blur-3xl animate-rightness-glow"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #f472b6 15%, #38bdf8 45%, #a21caf 70%, transparent 100%)",
          }}
        />
      </div>

      {/* Photo */}
      <div className="z-10 flex-shrink-0 justify-center animate-fade-in">
        <Image
          loading="lazy"
          decoding="async"
          src="/photo.jpg"
          alt="Abdelwahid El-Fahmy"
          className="w-44 h-44 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full border-2 sm:border-3 md:border-4 border-fuchsia-700/50 shadow-lg sm:shadow-xl object-cover ring-1 sm:ring-2 ring-fuchsia-800/30 mx-auto"
          width={200}
          height={200}
        />
      </div>

      {/* Text */}
      <div className="z-10 flex flex-col gap-10 items-center md:items-start md:min-w-xl text-center md:text-left animate-fade-in">
        <div>
          <div className="flex flex-col items-center md:items-start w-full">
            <h1 className="text-[26px] sm:text-4xl lg:text-5xl font-bold text-white drop-shadow animate-slide-in-right flex items-center justify-center md:justify-start min-h-[1em]">
              <span
                aria-label={NAME}
                style={{ fontFamily: "Consolas, monospace" }}
                className="whitespace-pre font-mono"
                ref={nameRef}
              >
                {displayedName}
              </span>
              <span className="inline-block ml-1 h-[1.15em] w-[0.9ch] relative align-bottom">
                {!typingDone && (
                  <span className="blinking-cursor align-bottom text-fuchsia-400 text-4xl sm:text-5xl select-none font-mono">
                    |
                  </span>
                )}
              </span>
            </h1>
            <h2
              className="text-sm sm:text-lg lg:text-xl font-medium text-gray-100 mt-2 mb-4 animate-fade-in"
              role="heading"
              aria-level={2}
            >
              Software Engineering Student @ ENSA Agadir
            </h2>
            <p className="text-xs sm:text-sm lg:text-sm font-light text-gray-200 mb-2 animate-fade-in">
              Java | Spring Boot | JUnit | React.js | Tailwind CSS
            </p>
            <p className="text-xs sm:text-sm lg:text-sm font-light text-gray-200 animate-fade-in">
              Dedicated to developing scalable, efficient web solutions
            </p>
          </div>
        </div>
        <div className=" flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/abdelwahid-el-fahmy-6578232aa/"
            className="px-6 py-3 rounded-full border border-cyan-400/30 text-cyan-200 bg-slate-800 font-medium text-base relative overflow-hidden group hover:border-cyan-400/60 transition-all duration-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="absolute inset-0 rounded-full border-2 border-cyan-400/0 group-hover:border-cyan-400/30 group-hover:animate-pulse-border transition-all duration-700"></span>

            <span className="relative z-10 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
              LinkedIn
              <svg
                className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </span>
          </a>

          <a
            href="https://github.com/AbdelwahidELFAHMY"
            className="px-6 py-3 rounded-full border border-fuchsia-400/30 text-fuchsia-300 bg-slate-800 font-medium text-base relative overflow-hidden group hover:border-fuchsia-400/60 transition-all duration-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="absolute inset-0 rounded-full overflow-hidden">
              <span className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-border-glow transition-opacity duration-1000"></span>
            </span>

            <span className="relative z-10 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
              GitHub
              <svg
                className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:rotate-12"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </span>
          </a>
          <a
            href="/api/resume"
            className="px-6 py-3 rounded-full border border-fuchsia-400/30 text-blue-300 bg-slate-800 font-medium text-base relative overflow-hidden group hover:border-fuchsia-400/60 transition-all duration-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="absolute inset-0 rounded-full border-2 border-purple-400/0 group-hover:border-purple-400/30 group-hover:animate-pulse-border transition-all duration-700"></span>
            <span className="relative z-10 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
              My Resume
              <FileDownIcon className="ml-2 w-3 h-3 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
