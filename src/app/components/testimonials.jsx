"use client";

import { FiStar, FiUser } from "react-icons/fi";

const testimonials = [
  {
    name: "Emily R.",
    service: "Balloon Decorations",
    review:
      "Absolutely stunning balloon arch at our wedding! They exceeded our expectations and were so professional."
  },
  {
    name: "Michael S.",
    service: "Special Event Services",
    review:
      "The gender reveal setup was flawless and so fun! Our guests were amazed by the creativity and quality."
  },
  {
    name: "Sarah L.",
    service: "Event Rentals",
    review:
      "The Chiara Wall backdrop made our corporate event look elegant and sleek. Highly recommend their rentals!"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[var(--color-light)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[var(--color-logo)] mb-12">
          What Our Clients Say
        </h2>
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ name, service, review }) => (
            <div
              key={name}
              className="group bg-[var(--color-background)] p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                <FiUser className="w-12 h-12 text-[var(--color-logo)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-logo)] mb-1">
                {name}
              </h3>
              <p className="text-sm text-[var(--color-primary)] mb-2 italic">
                {service}
              </p>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="w-5 h-5 text-[var(--color-primary)] mr-1"
                  />
                ))}
              </div>
              <p className="text-[var(--color-foreground)]">“{review}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
