// app/layout.js
import FloatingContactButtons from "./components/FloatingContactButtons";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans"
});

// Base URL for resolving relative metadata (OG images, Twitter cards)
export const metadataBase = new URL("https://decopartynashville.com");

export const metadata = {
  title: "Decoparty Nashville | Event Decorations & Rentals",
  description:
    "Decoparty Nashville: vibrant balloon decorations & event rentals in Nashville and Smyrna.",
  openGraph: {
    title: "Decoparty Nashville | Event Decorations & Rentals",
    description:
      "Vibrant balloon decorations & event rentals in Nashville and Smyrna. Book your event today!",
    url: "/",
    siteName: "Decoparty Nashville",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }]
  }
};

// Viewport settings moved out of metadata
export const viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-[var(--color-background)] text-[var(--color-foreground)] font-sans">
        
        <Navbar/>
        <main className="pt-20">
        {children}
        <FloatingContactButtons/>
        <Footer/>
        </main>

      </body>
    </html>
  );
}
