// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-logo)] text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xl font-semibold mb-4">Decoparty Nashville</h4>
          <p className="text-sm text-[var(--color-light)]">
            Transformamos tus eventos en experiencias inolvidables con decoraciones vibrantes y alquileres de alta calidad.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Navegación</h4>
          <ul className="space-y-2 text-[var(--color-light)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[var(--color-primary)] transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-[var(--color-primary)] transition-colors">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[var(--color-primary)] transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[var(--color-primary)] transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Contacto</h4>
          <p className="text-[var(--color-light)]">
            Teléfono:{" "}
            <Link href="tel:+16292072786" className="hover:text-[var(--color-primary)] transition-colors">
              +1 (629) 207-2786
            </Link>
          </p>
          <p className="text-[var(--color-light)] mt-2">
            Nashville & Smyrna, TN
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Ubicación</h4>
          <p className="text-[var(--color-light)]">Nashville, Tennessee</p>
          <p className="text-[var(--color-light)] mt-2">Smyrna, Tennessee</p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-[var(--color-light)]">
        © {year} Decoparty Nashville. All rights reserved.
      </div>
      <div className="mt-2 text-center text-sm text-[var(--color-light)]">
        Creado por{" "}
        <Link
          href="https://www.boostori.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--color-primary)]"
        >
          Boostori
        </Link>
      </div>
    </footer>
  );
}
