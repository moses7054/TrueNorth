"use client";

import Image from "next/image";

const imageNumbers = [...Array(74).keys()].map((n) => `${n + 1}TN.jpeg`);

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4">
          Gallery
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our recent projects and construction highlights.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {imageNumbers.map((img, i) => (
          <div
            key={img}
            className="group relative overflow-hidden rounded-xl bg-gray-100 shadow hover:shadow-lg transition-all"
          >
            <Image
              src={`/${img}`}
              alt={`Gallery image ${i + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              placeholder="empty"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
