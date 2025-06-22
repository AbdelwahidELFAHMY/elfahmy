
"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";

const navLinks = [
  { label: "HOME", to: "#home" },
  { label: "ABOUT", to: "#about" },
  { label: "EXPERIENCE", to: "#experience" },
  { label: "SKILLS", to: "#skills" },
  { label: "PROJECTS", to: "#projects" },
  { label: "CONTACT", to: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    const section = document.querySelector(to);
    if (section) {
      const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 80;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - navbarHeight,
        behavior: "smooth",
      });
      setActiveSection(to);
      setIsOpen(false); 
    } else {
      console.warn(`Section ${to} not found`);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-100px 0px -50% 0px", 
      }
    );

    navLinks.forEach(({ to }) => {
      const section = document.querySelector(to);
      if (section) {
        observer.observe(section);
      } else {
        console.warn(`Section ${to} not found for IntersectionObserver`);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".navbar",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add("bg-gradient-to-b", "from-[#151929]/90", "to-[#181c2a]/90");
        } else {
          navbar.classList.remove("bg-gradient-to-b", "from-[#151929]/90", "to-[#181c2a]/90");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar fixed z-50 top-0 left-0 w-full py-4 px-8 sm:px-10 md:px-11 lg:px-18 xl:px-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-sm sm:text-base md:text-lg font-bold text-gray-100 font-playfair tracking-tight">
            L'FHMY
          </span>
        </div>

        <ul className="hidden md:flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-[0.75rem] sm:text-sm md:text-[13px] font-semibold font-playfair">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <a
                href={to}
                onClick={(e) => scrollToSection(e, to)}
                className={`transition px-2 py-1 rounded-md ${
                  activeSection === to
                    ? "text-fuchsia-400 shadow-inner bg-fuchsia-900/20"
                    : "text-slate-300 hover:text-fuchsia-400 hover:bg-fuchsia-900/10"
                }`}
                aria-current={activeSection === to ? "page" : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden cursor-pointer text-slate-300 hover:text-fuchsia-400"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-gradient-to-b from-[#151929]/95 to-[#181c2a]/95 md:hidden">
            <ul className="flex flex-col w-full items-end gap-4 py-6 text-sm sm:text-base font-semibold font-playfair">
              {navLinks.map(({ label, to }) => (
                <li key={to} className="min-w-36">
                  <a
                    href={to}
                    onClick={(e) => scrollToSection(e, to)}
                    className={`transition px-4 py-2 rounded-md min-w-full ${
                      activeSection === to
                        ? "text-fuchsia-400 shadow-inner bg-fuchsia-900/20"
                        : "text-slate-300 hover:text-fuchsia-400 hover:bg-fuchsia-900/10"
                    }`}
                    aria-current={activeSection === to ? "page" : undefined}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;