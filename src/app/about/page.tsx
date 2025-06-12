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

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-6"
        >
          About TrueNorth Buildworks
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          We are a team of dedicated professionals committed to delivering
          excellence in construction and renovation services. With years of
          experience and a passion for quality, we bring your vision to life.
        </motion.p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        className="bg-[#1a365d] text-white rounded-3xl p-12 mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-200">
            To provide exceptional construction and renovation services that
            exceed our clients`&apos;` expectations, while maintaining the
            highest standards of quality, safety, and professionalism.
          </p>
        </motion.div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        className="mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-[#1a365d] text-center mb-12"
        >
          Our Core Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Quality",
              description:
                "We never compromise on the quality of our work, ensuring every project meets the highest standards.",
              icon: (
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
            },
            {
              title: "Integrity",
              description:
                "We conduct our business with honesty, transparency, and ethical practices.",
              icon: (
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              ),
            },
            {
              title: "Innovation",
              description:
                "We embrace new technologies and methods to deliver better results for our clients.",
              icon: (
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ),
            },
          ].map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="group p-8 bg-white rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="h-12 w-12 bg-[#1a365d]/10 rounded-lg mb-6 flex items-center justify-center group-hover:bg-[#1a365d] group-hover:text-white transition-colors">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a365d]">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        className="bg-gray-50 rounded-3xl p-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-[#1a365d] mb-6">
            Our Experience
          </h2>
          <p className="text-lg text-gray-600">
            With over a decade of experience in the construction industry, our
            team has successfully completed numerous projects across residential
            and commercial sectors. We take pride in our work and are committed
            to delivering excellence in every project we undertake.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
