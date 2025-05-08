"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiTarget, FiEye, FiHeart } from "react-icons/fi";

export default function About() {
  const stats = [
    {
      icon: FiTarget,
      title: "Our Mission",
      text:
        "To create joy and bring a touch of magic to every event we decorate, crafting memorable moments for our clients and their guests."
    },
    {
      icon: FiEye,
      title: "Our Vision",
      text:
        "To be the leading provider of balloon decorations and event rentals in Nashville and Smyrna, known for our creativity, quality, and exceptional customer service."
    },
    {
      icon: FiHeart,
      title: "Our Values",
      text:
        "Creativity, Quality, Customer Satisfaction, Reliability, and Passion guide everything we do."
    }
  ];

  return (
    <section className="py-20 bg-[var(--color-background)]">
      {/* Intro Section */}
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[var(--color-logo)] mb-4">
            About Decoparty Nashville
          </h2>
          <p className="mb-4 text-[var(--color-foreground)]">
            Founded in early 2023, Decoparty Nashville began with a simple idea: to make every event a beautiful and unforgettable experience. Our founder saw a need for creative balloon decorations and elegant event rentals in Nashville and Smyrna, and set out to fill it with passion and ingenuity.
          </p>
        </motion.div>

        <motion.div
          className="lg:w-1/2 relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/about.JPG"
            alt="Team setting up event decor"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Experience Highlight */}
      <motion.div
        className="text-center my-12"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-5xl md:text-6xl font-extrabold text-[var(--color-primary)]">
          10+
        </span>
        <span className="ml-2 text-2xl md:text-3xl text-[var(--color-foreground)]">
          Years of Experience
        </span>
      </motion.div>

      {/* Mission, Vision & Values */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              className="flex flex-col items-center p-6 bg-[var(--color-light)] rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 * index, duration: 0.6, type: "spring" }}
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className="w-12 h-12 text-[var(--color-primary)] mb-4" />
              <h3 className="text-2xl font-semibold text-[var(--color-logo)] mb-2">
                {stat.title}
              </h3>
              <p className="text-[var(--color-foreground)]">
                {stat.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
