// components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { Poppins } from "next/font/google";

// Cargamos Poppins solo para el menú
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-menu"
});

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home",     href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery",  href: "/gallery" },
    { name: "About",    href: "/about" },
    { name: "Contact",  href: "/contact" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[var(--color-background)]/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo text */}
        <Link href="/" className="text-2xl font-bold text-[var(--color-logo)]">
          <span>Decoparty</span>
        </Link>

        {/* Desktop links con Poppins */}
        <ul className={`hidden md:flex gap-8 ${poppins.variable}`}>
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="
                  relative
                  tracking-wide
                  font-medium
                  text-[var(--color-foreground)]
                  transition-colors
                  group
                  py-1
                  after:content-['']
                  after:absolute
                  after:left-0
                  after:bottom-0
                  after:h-0.5
                  after:w-0
                  after:bg-[var(--color-primary)]
                  after:transition-all
                  after:duration-300
                  hover:text-[var(--color-primary)]
                  hover:after:w-full
                "
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-[var(--color-foreground)]"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile menu overlay con Poppins */}
      {open && (
        <div className={`md:hidden fixed inset-0 bg-[var(--color-background)] flex flex-col items-center justify-center gap-6 ${poppins.variable}`}>
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
                uppercase
                tracking-wide
                font-medium
                text-2xl
                text-[var(--color-foreground)]
                transition-colors
                hover:text-[var(--color-primary)]
              "
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
