"use client";

import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import GalleryCTA from "./components/GalleryCTA";
import Hero from "./components/Hero";
import Services from "./components/Services";
import StatsBanner from "./components/StatsBanner";
import Testimonials from "./components/testimonials";
import Welcome from "./components/Welcome";
import WhyChoose from "./components/WhyChoose";


export default function HomePage() {
  return (
    <main className="flex flex-col">

      <Hero />
      <StatsBanner/>
      <Welcome/>
      <WhyChoose/>
      <Services/>
      <GalleryCTA/>
      <Testimonials/>
      <FAQ/>
      <CTA/>
    </main>
  );
}
