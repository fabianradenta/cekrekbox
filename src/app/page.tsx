import Hero from "@/components/sections/Hero";
import ClientMarquee from "@/components/sections/ClientMarquee";
import Features from "@/components/sections/Features";
import AboutTeaser from "@/components/sections/AboutTeaser";
import PricingCards from "@/components/sections/PricingCards";
import Gallery from "@/components/sections/Gallery";
import BookingSteps from "@/components/sections/BookingSteps";
import CtaBand from "@/components/CtaBand";
import { contact, pricing } from "@/content/site";
import { siteUrl } from "@/lib/site-url";

const prices = [pricing.normal.basePerDay, ...pricing.unlimited.hourly.map((h) => h.price)];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: contact.brand,
  legalName: contact.company,
  url: siteUrl,
  image: `${siteUrl}/opengraph-image.jpg`,
  description: "Penyedia jasa sewa photobooth otomatis dengan cetak instan dan digital sharing di Medan.",
  telephone: `+${contact.whatsapp}`,
  email: contact.email,
  priceRange: `Rp${Math.min(...prices).toLocaleString("id-ID")} - Rp${Math.max(...prices).toLocaleString("id-ID")}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.street,
    addressLocality: contact.city,
    addressRegion: contact.region,
    addressCountry: "ID",
  },
  sameAs: [`https://www.instagram.com/${contact.instagram}`, contact.linktree],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Hero />
      <ClientMarquee />
      <AboutTeaser />
      <Features />
      <PricingCards />
      <BookingSteps />
      <Gallery />
      <CtaBand
        variant="full"
        title={
          <>
            Allow us to
            <br />
            illuminate your event!
          </>
        }
        text="Ceritakan tanggal, lokasi, dan konsep acaramu. Tim kami bantu pilihkan paket yang paling pas."
      />
    </>
  );
}
