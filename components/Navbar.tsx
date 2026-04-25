"use client"; // Next.js এ useState ব্যবহার করার জন্য এটি অপরিহার্য

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  // মোবাইল মেনু ওপেন/ক্লোজ ট্র্যাক করার জন্য state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10 dark:border-black/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* লোগো সেকশন */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-primary"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-primary/20">
            <Image
              src="/nayan_sarkar.png"
              alt="Nayan Sarkar logo profile image"
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
          <span>Nayan Sarkar</span>
        </Link>

        {/* ডেস্কটপ মেনু */}
        <ul className="hidden md:flex items-center gap-4 text-sm font-medium text-secondary">
          <li>
            <Link
              href="/#home"
              className="px-4 py-2 rounded-full border border-blue-400/50 dark:border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              className="px-4 py-2 rounded-full border border-blue-400/50 dark:border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#skills"
              className="px-4 py-2 rounded-full border border-blue-400/50 dark:border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="/calculator"
              className="px-4 py-2 rounded-full border border-blue-400/50 dark:border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300"
            >
              Calculator
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Contact
            </Link>
          </li>
          <li className="ml-2">
            <ThemeToggle />
          </li>
        </ul>

        {/* মোবাইল বাটন সেকশন (শুধু মোবাইলে দেখাবে) */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle /> {/* মোবাইলেও থিম চেঞ্জ করার অপশন বাইরে রাখা হলো */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-secondary focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              // ক্রস (X) আইকন - যখন মেনু খোলা থাকবে
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // হ্যামবার্গার (৩ লাইন) আইকন - যখন মেনু বন্ধ থাকবে
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* মোবাইল ড্রপডাউন মেনু */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-white/10 dark:border-black/10 shadow-lg">
          <ul className="flex flex-col gap-4 px-6 py-6 text-sm font-medium text-secondary text-center">
            {/* onClick ইভেন্ট যোগ করা হয়েছে যেন লিংকে ক্লিক করার পর মেনু নিজে থেকেই বন্ধ হয়ে যায় */}
            <li>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/#home"
                className="block px-4 py-2 rounded-full border border-blue-400/50 dark:border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/#about"
                className="block px-4 py-2 rounded-full border border-blue-400/50 dark:border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/#skills"
                className="block px-4 py-2 rounded-full border border-blue-400/50 dark:border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/calculator"
                className="block px-4 py-2 rounded-full border border-blue-400/50 dark:border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300"
              >
                Calculator
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/#contact"
                className="block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
