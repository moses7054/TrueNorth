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
        className={`w-full z-[100] transition-all duration-300 fixed top-0 left-0 right-0 ${
          isHomePage
            ? isScrolled
              ? "bg-white/80 backdrop-blur-md border-b border-gray-200/50"
              : "bg-transparent"
            : "bg-white/80 backdrop-blur-md border-b border-gray-200/50"
        }`}
      >
        <nav className="h-24 lg:h-32 pl-[14px] pr-1.5 sm:px-12 ">
          <div className="flex items-center justify-between container mx-auto h-full">
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold text-[#1a365d] hover:text-[#2c5282] transition-colors"
            >
              <Image
                src="/logo.jpeg"
                alt="TrueNorth Logo"
                width={100}
                height={120}
                className={` 
                  w-[50px] h-[50px] lg:h-[120px] lg:w-[120px]
                `}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className={`text-base transition-colors font-medium ${
                  pathname === "/"
                    ? "text-[#2c5282] font-bold underline underline-offset-4"
                    : "text-[#1a365d] hover:text-[#2c5282]"
                }`}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`text-base transition-colors font-medium ${
                  pathname === "/services"
                    ? "text-[#2c5282] font-bold underline underline-offset-4"
                    : "text-[#1a365d] hover:text-[#2c5282]"
                }`}
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className={`text-base transition-colors font-medium ${
                  pathname === "/gallery"
                    ? "text-[#2c5282] font-bold underline underline-offset-4"
                    : "text-[#1a365d] hover:text-[#2c5282]"
                }`}
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className={`text-base transition-colors font-medium ${
                  pathname === "/about"
                    ? "text-[#2c5282] font-bold underline underline-offset-4"
                    : "text-[#1a365d] hover:text-[#2c5282]"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={`text-base transition-colors font-medium ${
                  pathname === "/contact"
                    ? "text-[#2c5282] font-bold underline underline-offset-4"
                    : "text-[#1a365d] hover:text-[#2c5282]"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#1a365d] p-2"
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
          className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-md z-[9999] transition-transform duration-300 ease-in-out"
          style={{ top: 0, left: 0, right: 0, bottom: 0 }}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-[#1a365d] p-2 z-[10000]"
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
              className={`text-xl transition-colors font-medium ${
                pathname === "/"
                  ? "text-[#2c5282] font-bold"
                  : "text-[#1a365d] hover:text-[#2c5282]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`text-xl transition-colors font-medium ${
                pathname === "/services"
                  ? "text-[#2c5282] font-bold"
                  : "text-[#1a365d] hover:text-[#2c5282]"
              }`}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className={`text-xl transition-colors font-medium ${
                pathname === "/gallery"
                  ? "text-[#2c5282] font-bold"
                  : "text-[#1a365d] hover:text-[#2c5282]"
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className={`text-xl transition-colors font-medium ${
                pathname === "/about"
                  ? "text-[#2c5282] font-bold"
                  : "text-[#1a365d] hover:text-[#2c5282]"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`text-xl transition-colors font-medium ${
                pathname === "/contact"
                  ? "text-[#2c5282] font-bold"
                  : "text-[#1a365d] hover:text-[#2c5282]"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
