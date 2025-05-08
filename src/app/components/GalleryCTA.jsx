// components/GalleryCTA.jsx
"use client";

import Link from "next/link";

export default function GalleryCTA() {
  return (
    <section className="py-16 bg-[var(--color-logo)]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Explore Our Gallery
        </h2>
        <p className="text-white/90 mb-8">
          See how DecoParty Nashville brings events to life with color and creativity.
        </p>
        <Link
          href="/gallery"
          className="
            inline-block
            px-8 py-4
            bg-[var(--color-primary)]
            hover:bg-[var(--color-light)]
            text-[var(--color-logo)]
            font-semibold
            rounded-full
            shadow-lg
            transform
            transition
            duration-300
            hover:-translate-y-1
            hover:scale-105
          "
        >
          View Gallery
        </Link>
      </div>
    </section>
  );
}
