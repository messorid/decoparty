"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "How do I book a service?",
    answer:
      "Reach out to us via phone or our online booking form. We'll confirm availability and send a customized quote."
  },
  {
    question: "Do you offer setup and teardown?",
    answer:
      "Yes, our team handles full setup and teardown for all decorations and rentals to ensure a seamless event experience."
  },
  {
    question: "Can I customize the colors and themes?",
    answer:
      "Absolutely! We work with you to match your event theme and color palette, offering endless customization options."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[var(--color-background)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[var(--color-logo)] mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map(({ question, answer }, idx) => (
            <div
              key={idx}
              className="border border-[var(--color-light)] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center p-6 bg-[var(--color-light)] hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300"
              >
                <span className="text-lg font-medium">{question}</span>
                {openIndex === idx ? (
                  <FiChevronUp className="w-6 h-6" />
                ) : (
                  <FiChevronDown className="w-6 h-6" />
                )}
              </button>
              <div
                className={`p-6 text-[var(--color-foreground)] transition-max-height duration-300 overflow-hidden ${
                  openIndex === idx ? "max-h-40" : "max-h-0"
                }`}
              >
                {answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
