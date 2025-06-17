"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`w-full z-[100] transition-all duration-300 ${
          isHomePage ? "fixed top-0 left-0 right-0" : "relative"
        } ${
          isHomePage
            ? isScrolled
              ? "bg-gray-900 backdrop-blur-md"
              : "bg-transparent"
            : "bg-gray-900 backdrop-blur-md"
        }`}
      >
        <nav className="h-24 pl-[14px] pr-1.5 sm:px-12 lg:px-16">
          <div className="flex items-center justify-between container mx-auto h-full">
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold text-white hover:text-gray-200 transition-colors"
            >
              <Image
                src="/logo.jpeg"
                alt="TrueNorth Logo"
                width={100}
                height={120}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-base text-white hover:text-gray-200 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-base text-white hover:text-gray-200 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className="text-base text-white hover:text-gray-200 transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className="text-base text-white hover:text-gray-200 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-base text-white hover:text-gray-200 transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu - moved outside header/nav for proper overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-md z-[9999] transition-transform duration-300 ease-in-out"
          style={{ top: 0, left: 0, right: 0, bottom: 0 }}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white p-2 z-[10000]"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link
              href="/"
              className="text-xl text-white hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-xl text-white hover:text-gray-200 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-xl text-white hover:text-gray-200 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-xl text-white hover:text-gray-200 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
