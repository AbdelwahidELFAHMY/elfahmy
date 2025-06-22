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
      "Discover my projects built with React, Java Spring Boot, and Next.js.",
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
    <html lang="en" className="chromane-sonic-dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
