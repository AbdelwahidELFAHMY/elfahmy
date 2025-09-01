

"use client";

import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

const Home = () => {
  useEffect(() => {
    if (!document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <main className="bg-background  dark:bg-gradient-to-br dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#111827] overflow-x-hidden transition-colors duration-1000">
    <Navbar/>
      <HeroSection  id="home"/>
      <AboutSection id="about" />
      <ExperienceSection id="experience"/>
      <SkillsSection id="skills" />
      <ProjectsSection  id="projects" />
      <ContactSection  id="contact"/>
      <Footer />
    </main>
  );
};

export default Home;
