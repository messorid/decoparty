import Link from "next/link";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact Us | Decoparty Nashville",
  description:
    "Get in touch with Decoparty Nashville for quotes, inquiries, and booking your event decorations.",
  openGraph: {
    title: "Contact Us | Decoparty Nashville",
    description:
      "Get in touch with Decoparty Nashville for quotes, inquiries, and booking your event decorations.",
    url: "https://yourdomain.com/contact",
    siteName: "Decoparty Nashville"
  }
};

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      {/* Header */}
      <section className="py-16 bg-[var(--color-light)]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-[var(--color-logo)] mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-[var(--color-foreground)]">
            Have questions or ready to book? Get in touch with us using the options below.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-[var(--color-background)]">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone Card */}
          <div className="bg-[var(--color-light)] p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <FiPhone className="w-12 h-12 text-[var(--color-primary)] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <Link href="tel:+16292072786" className="text-[var(--color-logo)] font-medium">
              (629) 207-2786
            </Link>
          </div>

          {/* Email Card */}
          <div className="bg-[var(--color-light)] p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <FiMail className="w-12 h-12 text-[var(--color-primary)] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <Link href="mailto:info@decopartynashville.com" className="text-[var(--color-logo)] font-medium">
              info@decopartynashville.com
            </Link>
          </div>

          {/* Location Card */}
          <div className="bg-[var(--color-light)] p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <FiMapPin className="w-12 h-12 text-[var(--color-primary)] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Location</h3>
            <p className="text-[var(--color-logo)] font-medium">
              Nashville & Smyrna, TN, USA
            </p>
          </div>
        </div>
      </section>
      <ContactForm />
    </main>
  );
}
