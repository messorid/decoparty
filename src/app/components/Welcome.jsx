"use client";
import Image from "next/image";

export default function Welcome() {
  return (
    <section className="py-16 bg-[var(--color-background)] text-[var(--color-foreground)]">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        {/* Texto a la izquierda */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
            Welcome to DecoParty Nashville
          </h2>
          <p className="text-lg mb-6">
            At DecoParty Nashville, we transform your events with creative balloon decorations and premium rentals. From intimate gatherings to grand celebrations, our designs bring joy and elegance to every occasion.
          </p>
          <p className="text-lg">
            Let us bring your vision to life with vibrant colors, unique themes, and exceptional service.
          </p>
        </div>

        {/* Imagen a la derecha */}
        <div className="lg:w-1/2 relative w-full h-80 md:h-[600px]">
          <Image
            src="/welcome.jpg"
            alt="DecoParty setup"
            fill
            className="object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>
      </div>
    </section>
  );
}
