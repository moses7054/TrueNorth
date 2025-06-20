import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TrueNorth Buildworks",
  description: "Your trusted partner in construction and renovation services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <Navbar />
        <main>{children}</main>
        <footer className="border-t border-gray-100 mt-16 bg-gray-50">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Company Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#1a365d]">
                  TrueNorth Buildworks
                </h3>
                <p className="text-gray-600 text-sm">
                  Building excellence, one project at a time. Your trusted
                  partner in construction and renovation services.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-[#1a365d]">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-[#1a365d] text-sm"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-gray-600 hover:text-[#1a365d] text-sm"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gallery"
                      className="text-gray-600 hover:text-[#1a365d] text-sm"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-600 hover:text-[#1a365d] text-sm"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-600 hover:text-[#1a365d] text-sm"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-[#1a365d]">
                  Contact Us
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Email: info@truenorthbuildworks.com</li>
                  <li>Phone: 8792292231</li>
                  <li>
                    Address: 9th Cross, B Block, Subhashnagar, Begur Post,
                    Bangalore - 560068
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-200 mt-8 pt-8 text-center">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} TrueNorth Buildworks. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
