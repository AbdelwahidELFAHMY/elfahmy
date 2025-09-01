"use client";

import React, { useEffect, useState } from "react";
import { Mail, MessageSquare, Send, User2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = ({ id }: { id: string }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".contact-title",
      { opacity: 0, rotation: -10, y: 50 },
      {
        opacity: 1,
        rotation: 0,
        y: 0,
        duration: 1.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".form-container",
          start: "top 90%",
          toggleActions: "restart none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    emailjs.send(serviceId, templateId, formData, publicKey).then(
      () => {
        setIsSubmitting(false);
        toast.success("Your message has been sent successfully! Thank you!");
        ScrollTrigger.refresh();
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        setIsSubmitting(false);
        console.error("EmailJS error:", error);
        toast.error("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <section
      id={id}
      className="w-full max-w-7xl mx-auto my-16 md:my-24 px-6 lg:px-10 relative"
    >
      <h3 className="text-xl md:text-3xl font-bold text-blue-400 mb-10 font-playfair flex gap-3 items-center">
        <Mail className="text-fuchsia-300 w-8 h-8" />
        <span>Mail Me</span>
      </h3>

      <div className="form-container relative max-w-xl mx-auto bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/60 backdrop-blur-xl p-8 rounded-2xl shadow-lg text-white flex flex-col gap-6">
        <h2 className="contact-title text-xl md:text-2xl text-center font-bold text-fuchsia-300 font-playfair">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Input Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-slate-400"
            >
              Name
            </label>
            <div className="relative group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-lg bg-transparent border border-slate-600 text-white placeholder-slate-400/50 
                focus:outline-none focus:border-fuchsia-500 transition-all text-sm group-hover:border-fuchsia-400"
              />
              <User2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-fuchsia-400 transition-colors" />
            </div>
          </div>

          {/* Input Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-400"
            >
              Email
            </label>
            <div className="relative group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-lg bg-transparent border border-slate-600 text-white placeholder-slate-400/50 
                focus:outline-none focus:border-fuchsia-500 transition-all text-sm group-hover:border-fuchsia-400"
              />
              <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-fuchsia-400 transition-colors" />
            </div>
          </div>

          {/* Input Message */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-slate-400"
            >
              Message
            </label>
            <div className="relative group">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-lg bg-transparent border border-slate-600 text-white placeholder-slate-400/50 
                focus:outline-none focus:border-fuchsia-500 transition-all resize-none h-28 text-sm group-hover:border-fuchsia-400"
              />
              <MessageSquare className="absolute right-3 top-3 w-5 h-5 text-slate-400 group-hover:text-fuchsia-400 transition-colors" />
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex items-center z-10 justify-center gap-3 w-1/2 sm:w-1/4 
    bg-transparent border-[1px] border-slate-600 text-slate-400 font-semibold 
    py-3 px-4 rounded-lg hover:bg-fuchsia-800/30 hover:cursor-pointer 
    hover:text-gray-200 hover:border-fuchsia-500 transition-transform active:scale-95
    ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {isSubmitting ? "Sending..." : "Send"}
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
