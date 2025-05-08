"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/hero.webp"
        alt="Decoparty Nashville Hero"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 transition-transform duration-500 hover:scale-105">
          Welcome to Decoparty Nashville
        </h1>
        <p className="max-w-xl text-lg text-white/90 mb-6 transition-opacity duration-700">
          We specialize in creating unforgettable experiences with vibrant balloon decorations and high-quality event rentals.
        </p>
        <Link
          href="#services"
          className="inline-block px-8 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-logo)] text-white rounded-full font-semibold transition-colors duration-300"
        >
          Discover Services
        </Link>
      </div>
    </section>
  );
}