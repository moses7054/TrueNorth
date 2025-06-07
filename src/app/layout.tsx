import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "True North Construction",
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
        <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm fixed w-full z-50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="text-2xl font-bold text-[#1a365d] hover:text-[#2c5282] transition-colors"
              >
                True North
              </Link>
              <div className="space-x-8">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-[#2c5282] transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="text-gray-700 hover:text-[#2c5282] transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-[#2c5282] transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-[#2c5282] transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-8 pt-24">{children}</main>
        <footer className="border-t border-gray-100 mt-16 bg-gray-50">
          <div className="container mx-auto px-4 py-8 text-center text-gray-600">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-[#1a365d] mb-4">
                True North Construction
              </h3>
              <p className="text-sm mb-4">
                Building excellence, one project at a time
              </p>
              <p className="text-sm">
                © {new Date().getFullYear()} True North Construction. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
