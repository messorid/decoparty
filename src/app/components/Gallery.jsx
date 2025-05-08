// components/Gallery.jsx
"use client";

import Image from "next/image";

export default function Gallery({ images }) {
  return (
    <section className="py-16 bg-[var(--color-background)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[var(--color-logo)] text-center mb-8">
          Our Gallery
        </h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                placeholder="blur"
                blurDataURL={src}
                priority={idx < 4}
              />
              <div className="absolute inset-0 bg-[var(--color-primary)] bg-opacity-20 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
