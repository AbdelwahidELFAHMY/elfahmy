"use client";

import React, { useEffect, useState } from "react";
import { Mail, MessageSquare, Send, User2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

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
      className="w-full max-w-7xl mx-auto my-12 sm:my-16 md:my-20 px-6 sm:px-8 lg:px-10 relative"
    >
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-400 mb-6 sm:mb-8 md:mb-12 font-playfair flex gap-2 sm:gap-3 text-left items-center justify-start">
        <Mail className="text-fuchsia-300 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        <span>Mail Me</span>
      </h3>
      <div className="form-container relative max-w-md sm:max-w-lg md:max-w-xl mx-auto bg-transparent border-2 border-transparent p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-white flex flex-col gap-4 sm:gap-5 overflow-hidden">
        <h2 className="contact-title text-base sm:text-lg md:text-xl lg:text-2xl text-center justify-center font-bold text-fuchsia-300 font-playfair flex items-center gap-2">
          Get in Touch
        </h2>
        <form
          onSubmit={handleSubmit}
          className=" mx-2 sm:mx-4 flex flex-col gap-4 sm:gap-5"
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-xs sm:text-sm font-semibold text-slate-400"
            >
              Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-2 sm:p-3 rounded-lg bg-transparent border border-slate-600 text-white placeholder-slate-400/50 focus:outline-none focus:border-fuchsia-500 transition-colors text-xs sm:text-sm"
              />
              <User2 className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-slate-400" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-xs sm:text-sm font-semibold text-slate-400"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-2 sm:p-3 rounded-lg bg-transparent border border-slate-600 text-white placeholder-slate-400/50 focus:outline-none focus:border-fuchsia-500 transition-colors text-xs sm:text-sm"
              />
              <Mail className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-slate-400" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="message"
              className="text-xs sm:text-sm font-semibold text-slate-400"
            >
              Message
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full p-2 sm:p-3 rounded-lg bg-transparent border border-slate-600 text-white placeholder-slate-400/50 focus:outline-none focus:border-fuchsia-500 transition-colors resize-none h-20 sm:h-24 text-xs sm:text-sm"
              />
              <MessageSquare className="absolute right-2 sm:right-3 top-3 sm:top-4 w-4 sm:w-5 h-4 sm:h-5 text-slate-400" />
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex items-center z-10 justify-center gap-3 w-1/2  sm:w-1/4 bg-transparent border-[1px] border-slate-600 text-slate-400 font-semibold py-3 px-4 rounded-lg hover:bg-fuchsia-800/30 hover:cursor-pointer hover:text-gray-200 hover:border-fuchsia-500 transition-transform active:scale-95${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
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
