// components/Services.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    image: "/images/services/balloon-decorations.png",
    title: "Balloon Decorations",
    items: [
      "Balloon Arches",
      "Balloon Garlands",
      "Balloon Columns",
      "Balloon Bouquets",
      "Helium Balloons",
      "Custom Bubble Balloons",
    ],
  },
  {
    image: "/images/services/special-events.jpg",
    title: "Special Event Services",
    items: [
      "Backdrops Rental",
      "Teepees Party",
      "Gender Reveal",
      "Birthday Parties",
      "Baptisms",
      "First Communion",
    ],
  },
  {
    image: "/images/services/event-rentals.jpg",
    title: "Event Rentals",
    items: [
      "Chiara Wall",
      "Stand Arch",
      "Shimmer Wall",
      "Riser for Dessert",
      "Teepees",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[var(--color-background)]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[var(--color-logo)] mb-4">
          Our Services
        </h2>
        {/* CTA Button */}
        <div className="mb-12">
          <Link
            href="/services"
            className="
              inline-block
              px-6 py-3
              bg-[var(--color-primary)]
              text-white
              rounded-full
              hover:bg-[var(--color-logo)]
              transition
              duration-300
            "
          >
            View All Services
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ image, title, items }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            >
              {/* Service Image */}
              <div className="overflow-hidden rounded-t-2xl">
                <Image
                  src={image}
                  alt={title}
                  width={600}
                  height={360}
                  className="w-full h-64 md:h-100 object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              <div className="bg-[var(--color-light)] p-8 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">
                  {title}
                </h3>
                <ul className="flex-1 space-y-2 text-[var(--color-foreground)]">
                  {items.map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="
                    mt-6 inline-block
                    text-[var(--color-logo)]
                    font-semibold
                    hover:text-[var(--color-primary)]
                    transition-colors
                    duration-300
                  "
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
