"use client";

import { FiUsers, FiStar, FiFlag, FiSmile } from "react-icons/fi";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const defaultStats = [
  { icon: FiUsers, label: "Events Decorated", value: 500 },
  { icon: FiStar, label: "Happy Clients", value: 450 },
  { icon: FiFlag, label: "Years in Business", value: 10},
  { icon: FiSmile, label: "Team Members", value: 10 }
];

function StatItem({ icon: Icon, label, value, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 30);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 30);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.1 }}
    >
      <motion.div
        className="w-12 h-12 mb-2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay }}
      >
        <Icon className="w-full h-full text-white" />
      </motion.div>
      <motion.span
        className="text-4xl font-bold"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: delay + 0.3 }}
      >
        {count}+  
      </motion.span>
      <motion.span
        className="mt-1 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.6 }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}

export default function StatsBanner({ stats = defaultStats }) {
  return (
    <motion.section
      className="py-16 bg-[var(--color-primary)] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <StatItem key={stat.label} {...stat} delay={index * 0.3} />
        ))}
      </div>
    </motion.section>
  );
}
