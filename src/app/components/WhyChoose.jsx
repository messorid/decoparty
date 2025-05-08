"use client";
import { FiUserCheck, FiTag, FiBox, FiHeadphones } from "react-icons/fi";

export default function WhyChoose() {
  const reasons = [
    {
      icon: FiUserCheck,
      title: "Experience & Expertise",
      description: "Our skilled team brings years of decoration experience to every event."
    },
    {
      icon: FiTag,
      title: "Affordable Packages",
      description: "Quality event decoration that fits any budget without compromise."
    },
    {
      icon: FiBox,
      title: "High-Quality Products",
      description: "We use durable, premium materials for stunning, long-lasting decor."
    },
    {
      icon: FiHeadphones,
      title: "Exceptional Customer Service",
      description: "From consultation to setup, we ensure a seamless planning experience."
    }
  ];

  return (
    <section className="py-20 bg-[var(--color-light)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[var(--color-logo)] mb-12">
          Why Choose Decoparty?
        </h2>
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-[var(--color-background)] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[var(--color-primary)] text-white rounded-full mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-[var(--color-logo)] mb-2">
                {title}
              </h3>
              <p className="text-[var(--color-foreground)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}