"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
      <nav className="h-16 px-8 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between container mx-auto h-full">
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-gray-200 transition-colors"
          >
            True North
          </Link>
          <div className="space-x-8">
            <Link
              href="/"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-gray-200 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
