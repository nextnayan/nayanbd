import type { Metadata } from "next";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: "Nayan Sarkar | Full Stack Developer Portfolio",
  description:
    "Explore Nayan Sarkar's portfolio featuring full stack web development projects, skills, and modern web app experience with Next.js, React, Django, and Python.",
  keywords: [
    "Nayan Sarkar portfolio",
    "Full Stack Developer Portfolio",
    "Next.js Developer",
    "React Developer",
    "Django Developer",
    "Python Developer",
  ],
  alternates: {
    canonical: "https://www.nayanbd.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    url: "https://www.nayanbd.com/",
    title: "Nayan Sarkar | Full Stack Developer Portfolio",
    description:
      "Portfolio website of Nayan Sarkar showcasing full stack web development work and core technical skills.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Nayan Sarkar portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nayan Sarkar | Full Stack Developer Portfolio",
    description:
      "Explore Nayan Sarkar's portfolio projects and full stack development expertise.",
    images: ["/opengraph-image.png"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
