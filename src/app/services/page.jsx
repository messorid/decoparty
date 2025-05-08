// app/services/page.jsx
import Image from "next/image";

export const metadata = {
  title: "Our Services | Decoparty Nashville",
  description:
    "Detailed descriptions of all balloon decorations, special event services, and rentals by Decoparty Nashville.",
  openGraph: {
    title: "Our Services | Decoparty Nashville",
    description:
      "Detailed descriptions of all balloon decorations, special event services, and rentals by Decoparty Nashville.",
    url: "/services",
    siteName: "Decoparty Nashville",
    images: [{ url: "/images/services/og-services.jpg", width: 1200, height: 630 }]
  }
};

const categories = [
  {
    slug: "balloon-decorations",
    title: "Balloon Decorations",
    description:
      "Colorful and themed balloon designs that elevate the atmosphere of any celebration.",
    image: "/images/services/balloon-decorations.png",
    items: [
      {
        name: "Balloon Arches",
        desc: "Elegant arches constructed from high-quality balloons, perfect for framing entrances and photo backdrops."
      },
      {
        name: "Balloon Garlands",
        desc: "Handcrafted garlands adding color and depth to tables, walls, and staircases. Customizable to any theme."
      },
      {
        name: "Balloon Columns",
        desc: "Tall, stylish columns for marking event areas or adding visual impact to any space."
      },
      {
        name: "Balloon Bouquets",
        desc: "Clustered bouquets ideal for centerpieces or gifts, available in a range of sizes and color combinations."
      },
      {
        name: "Helium Balloons",
        desc: "Floating balloons that last for days, perfect for filling rooms or anchoring to bouquets."
      },
      {
        name: "Custom Bubble Balloons",
        desc: "Transparent balloons filled with confetti or small balloons, customizable with text for special messages."
      }
    ]
  },
  {
    slug: "special-event-services",
    title: "Special Event Services",
    description:
      "Tailored decor solutions for themed parties and milestone celebrations of every kind.",
    image: "/images/services/special-events.jpg",
    items: [
      {
        name: "Backdrops Rental",
        desc: "High-quality fabric and vinyl backdrops in various designs to match your event's theme."
      },
      {
        name: "Teepees Party",
        desc: "Charming teepee setups for children’s parties, creating cozy play areas and photo opportunities."
      },
      {
        name: "Gender Reveal",
        desc: "Creative reveal setups including balloon pops and themed decor to surprise your guests."
      },
      {
        name: "Birthday Parties",
        desc: "Full-service decoration packages tailored to birthday celebrations of all ages and styles."
      },
      {
        name: "Baptisms",
        desc: "Elegant, serene decor for baptism ceremonies, complementing the solemnity of the event."
      },
      {
        name: "First Communion",
        desc: "Tasteful decorations for First Communion, creating a respectful and celebratory atmosphere."
      }
    ]
  },
  {
    slug: "event-rentals",
    title: "Event Rentals",
    description:
      "Premium decor elements available to rent, adding style and functionality to your event design.",
    image: "/images/services/event-rentals.jpg",
    items: [
      {
        name: "Chiara Wall",
        desc: "A stunning 3D floral wall for elegant photo backdrops and statement pieces."
      },
      {
        name: "Stand Arch",
        desc: "Lightweight, freestanding arch structures for versatile placement and styling."
      },
      {
        name: "Shimmer Wall",
        desc: "Reflective shimmer panels that catch the light, creating a glamorous ambiance."
      },
      {
        name: "Riser for Dessert",
        desc: "Tiered dessert risers designed to display cakes, pastries, and treats in style."
      },
      {
        name: "Teepees",
        desc: "Cozy teepees for lounge areas or kids' play zones, available with cushions and lighting."
      }
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="flex flex-col">
      {/* Header */}
      <section className="py-16 bg-[var(--color-light)]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-[var(--color-logo)] mb-4">
            Our Services
          </h1>
          <p className="text-lg text-[var(--color-foreground)] max-w-3xl mx-auto">
            Explore our full suite of creative decorations and rentals, each designed to elevate your event.
          </p>
        </div>
      </section>

      {/* Category Sections */}
      {categories.map((cat) => (
        <section key={cat.slug} className="py-20 bg-[var(--color-background)]">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 mb-12">
            {/* Text */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-semibold text-[var(--color-logo)] mb-4">
                {cat.title}
              </h2>
              <p className="text-[var(--color-foreground)]">{cat.description}</p>
            </div>
            {/* Image */}
            <div className="lg:w-1/2 relative w-full h-80 md:h-[600px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Subservices */}
          <div className="container mx-auto px-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cat.items.map((item) => (
              <div
                key={item.name}
                className="bg-[var(--color-light)] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-2">
                  {item.name}
                </h3>
                <p className="text-[var(--color-foreground)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
