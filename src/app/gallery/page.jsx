// app/gallery/page.jsx
import Gallery from "../components/Gallery";
import fs from "fs/promises";
import path from "path";

export const metadata = {
  title: "Gallery | Decoparty Nashville",
  description: "Mira nuestra galería de decoraciones y eventos inolvidables.",
  openGraph: {
    title: "Gallery | Decoparty Nashville",
    description: "Mira nuestra galería de decoraciones y eventos inolvidables.",
    url: "/gallery",
    siteName: "Decoparty Nashville",
    images: [{ url: "/images/gallery/og-gallery.jpg", width: 1200, height: 630 }]
  }
};

export default async function GalleryPage() {
  const galleryDir = path.join(process.cwd(), "public", "images", "gallery");
  const files = await fs.readdir(galleryDir);

  const images = files
    .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
    .map((f) => `/images/gallery/${f}`);

  return <Gallery images={images} />;
}
