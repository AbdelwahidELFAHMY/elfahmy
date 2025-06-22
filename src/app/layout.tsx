import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Définition SEO correcte
export const metadata: Metadata = {
  title: "L'FAHMY",
  description:
    "Discover my projects built with React, Java Spring Boot, and Next.js.",
  icons: {
    icon: "/logo.png", 
  },
  openGraph: {
    title: "Abdelwahid El-Fahmy - Software Engineer",
    description:
      "I'm Abdelwahid El-Fahmy, a final-year software engineering student at ENSA Agadir, Morocco, passionate about backend development with Java & Spring Boot. I have built a set of full-stack applications by following the complete software development lifecycle, from requirements gathering and design, to implementation, testing, and deployment, using modern technology stacks, with a strong focus on clean architecture and development best practices.Currently, I am looking for a final-year internship where I can apply my technical expertise, contribute to concrete projects, and grow in a collaborative, agile environment.",
    url: "https://abdelwahid.elfahmy.vercel.app",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/photo.jpg",
        alt: "Preview image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark chromane-sonic-dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
<Toaster
  position="top-right"
  toastOptions={{
    duration: 4000,
    style: {
      background: "rgba(255, 255, 255, 0.85)", // blanc clair semi-transparent
      color: "#111827", // texte foncé (gris très foncé)
      padding: "16px",
      borderRadius: "12px",
      fontSize: "14px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // un peu d'ombre douce
      backdropFilter: "blur(6px)", // effet flou léger derrière (optionnel)
      border: "1px solid rgba(0,0,0,0.1)",
    },
    success: {
      icon: "✅",
      style: {
        background: "rgba(134, 239, 172, 0.9)", // vert clair transparent
        color: "#166534", // vert foncé
      },
    },
    error: {
      icon: "❌",
      style: {
        background: "rgba(254, 202, 202, 0.9)", // rouge clair transparent
        color: "#991b1b", // rouge foncé
      },
    },
    loading: {
      icon: "⏳",
      duration: Infinity,
      style: {
        background: "rgba(147, 197, 253, 0.9)", // bleu clair transparent
        color: "#1e40af", // bleu foncé
      },
    },
  }}
/>

        {children}
      </body>
    </html>
  );
}
