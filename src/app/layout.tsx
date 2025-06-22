import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="chromane-sonic-dark">
      <Head>
        <title>Mon Portfolio - Développeur Web</title>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        <meta
          property="og:title"
          content="Abdelwahid El-Fahmy - software engineer"
        />
        <meta
          property="og:description"
          content="Discover my projects built with React, Java Spring Boot, and Next.js."
        />
        <meta property="og:image" content="/photo.jpg" />
        <meta property="og:url" content="https://abdelwahid.elfahmy.vercel.app" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
