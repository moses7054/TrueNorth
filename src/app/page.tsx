"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
        </div>

        {/* Main Content */}
        <div className="w-full relative container mx-auto pt-16 pb-8">
          <div className="w-full px-4 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* Left Column - Text Content */}
              <motion.div
                className="text-gray-900 space-y-6 lg:space-y-8 lg:col-span-7"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.div
                  variants={itemVariants}
                  className="space-y-4 lg:space-y-6"
                >
                  <motion.span
                    className="inline-block px-4 py-2 bg-[#1a365d]/10 rounded-full text-sm font-medium backdrop-blur-sm border border-[#1a365d]/20 text-[#1a365d]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Building Excellence Since 2010
                  </motion.span>
                  <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-[#1a365d]"
                  >
                    Crafting Your Vision Into Reality
                  </motion.h1>
                  <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed"
                  >
                    TrueNorth Buildworks delivers excellence in construction,
                    renovation, and maintenance services. Your trusted partner
                    for all your construction needs.
                  </motion.p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-4 lg:gap-6"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 lg:px-8 lg:py-4 bg-[#1a365d] text-white rounded-lg hover:bg-[#2c5282] transition-all duration-300 shadow-lg hover:shadow-xl font-medium group"
                  >
                    Get Started
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center px-6 py-3 lg:px-8 lg:py-4 bg-transparent border-2 border-[#1a365d] text-[#1a365d] rounded-lg hover:bg-[#1a365d] hover:text-white transition-all duration-300 font-medium group"
                  >
                    Explore Services
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </motion.div>

                {/* Stats */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-3 gap-4 lg:gap-8 pt-6 lg:pt-8 border-t border-gray-200"
                >
                  {[
                    { number: "500+", label: "Projects Completed" },
                    { number: "10+", label: "Years Experience" },
                    { number: "100%", label: "Client Satisfaction" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl lg:text-3xl font-bold mb-1 lg:mb-2 text-[#1a365d]">
                        {stat.number}
                      </div>
                      <div className="text-xs lg:text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Column - Empty Space */}
              <div className="hidden lg:block lg:col-span-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="container mx-auto px-4 ">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4"
          >
            Comprehensive Construction Services
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            From planning to completion, we handle every aspect of your
            construction project with expertise and precision.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {[
            {
              title: "Construction",
              description:
                "Full-service construction solutions for residential and commercial projects.",
            },
            {
              title: "Renovation",
              description:
                "Transform your space with our expert renovation services.",
            },
            {
              title: "Maintenance",
              description:
                "Comprehensive maintenance services to keep your property in top condition.",
            },
          ].map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group p-8 bg-white rounded-2xl hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#1a365d]/20 hover:cursor-pointer"
            >
              <div className="h-12 w-12 bg-[#1a365d]/10 rounded-lg mb-6 flex items-center justify-center group-hover:bg-[#1a365d] group-hover:text-white transition-all duration-300">
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a365d] group-hover:text-[#2c5282] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-36 ">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4"
            >
              Why Choose TrueNorth Buildworks?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              We combine expertise, innovation, and dedication to deliver
              exceptional results.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              {
                title: "Expert Team",
                description: "Skilled professionals with years of experience",
              },
              {
                title: "Quality Work",
                description: "We never compromise on quality and safety",
              },
              {
                title: "Customer First",
                description: "Your satisfaction is our top priority",
              },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#1a365d]/20 hover:cursor-pointer"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#1a365d] group-hover:text-[#2c5282] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
