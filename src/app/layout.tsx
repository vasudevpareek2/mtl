import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modern Tech Lap | AI Consultancy & Development",
  description: "Empowering Businesses with AI Innovation. Modern Tech Lap provides AI consultancy, custom AI development, automation, NLP, and computer vision solutions.",
  keywords: [
    "AI consultancy",
    "AI development",
    "machine learning",
    "NLP",
    "computer vision",
    "automation",
    "Modern Tech Lap"
  ],
};

import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-white dark:bg-black text-black dark:text-white transition-colors`}>
        <Navbar />
        <div className="min-h-[calc(100vh-56px)]">{children}</div>
      </body>
    </html>
  );
}
