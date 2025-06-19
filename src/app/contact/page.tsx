"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16 pt-36">
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-6"
        >
          Contact Us
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Get in touch with us for your construction and renovation needs.
          We&apos;re here to help bring your vision to life.
        </motion.p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-semibold text-[#1a365d] mb-8 text-center"
          >
            Contact Information
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              className="flex items-start space-x-4"
            >
              <div className="h-12 w-12 bg-[#1a365d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-[#1a365d]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a365d] text-lg mb-2">
                  Address
                </h3>
                <p className="text-gray-600">
                  9th Cross, B Block, Subhashnagar, Begur Post, Bangalore -
                  560068
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-start space-x-4"
            >
              <div className="h-12 w-12 bg-[#1a365d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-[#1a365d]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a365d] text-lg mb-2">
                  Phone
                </h3>
                <p className="text-gray-600 text-lg">8792292231</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-start space-x-4"
            >
              <div className="h-12 w-12 bg-[#1a365d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-[#1a365d]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a365d] text-lg mb-2">
                  Email
                </h3>
                <p className="text-gray-600">info@truenorthbuildworks.com</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-start space-x-4"
            >
              <div className="h-12 w-12 bg-[#1a365d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-[#1a365d]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a365d] text-lg mb-2">
                  Business Hours
                </h3>
                <p className="text-gray-600">
                  Monday - Friday: 8:00 AM - 6:00 PM
                </p>
                <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
