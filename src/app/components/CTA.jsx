"use client";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-[var(--color-logo)] text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready to Make Your Event Unforgettable?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Contact us today to book your custom decorations and rentals. Let’s bring your vision to life!
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-light)] text-[var(--color-logo)] font-semibold rounded-full shadow-lg transform transition duration-300 hover:-translate-y-1 hover:scale-105"
        >
          Get a Quote
        </Link>
      </div>
    </section>
  );
}