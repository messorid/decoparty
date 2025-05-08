// components/FloatingContactButtons.jsx
"use client";

import Link from "next/link";
import { FiPhone, FiClipboard } from "react-icons/fi";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Call button */}
      <a
        href="tel:+16292072786"
        className="
          flex items-center justify-center
          w-14 h-14
          bg-[var(--color-primary)]
          hover:bg-[var(--color-logo)]
          text-white text-2xl
          rounded-full
          shadow-lg
          transition
          duration-300
        "
        aria-label="Call us"
      >
        <FiPhone />
      </a>

      {/* Get a Quote button */}
      <Link
        href="/contact"
        className="
          flex items-center justify-center
          px-4 py-3
          bg-[var(--color-primary)]
          hover:bg-[var(--color-logo)]
          text-white font-semibold
          rounded-full
          shadow-lg
          transition
          duration-300
        "
      >
        <FiClipboard className="mr-2 text-xl" />
        Get a Quote
      </Link>
    </div>
  );
}
