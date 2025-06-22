import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

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
        {children}
      </body>
    </html>
  );
}
