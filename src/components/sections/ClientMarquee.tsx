import Image, { type StaticImageData } from "next/image";
import { clients, clientsClaim, eventPartners } from "@/content/site";
import { logoSize } from "@/lib/logo";

type Logo = { name: string; logo: StaticImageData };

const eventLogos = eventPartners.filter((e) => !e.subtle);

function Marquee({ logos, reverse }: { logos: Logo[]; reverse?: boolean }) {
  // Dirender dua kali agar loop animasi tidak terputus.
  const group = (hidden: boolean) => (
    <div className="marquee__group" aria-hidden={hidden || undefined}>
      {logos.map((c) => {
        // Skala mengikuti viewport: penuh di 1320px, minimal 60%.
        const { width } = logoSize(c.logo, 8000, 76);
        const style = { width: `clamp(${Math.round(width * 0.6)}px, ${(width / 13.2).toFixed(2)}vw, ${width}px)` };
        return <Image key={c.name} src={c.logo} alt={hidden ? "" : c.name} style={style} sizes="200px" />;
      })}
    </div>
  );

  return (
    <div className={`marquee${reverse ? " marquee--reverse" : ""}`}>
      <div className="marquee__track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}

export default function ClientMarquee() {
  return (
    <section className="clients" id="klien" aria-label="Klien kami">
      <p className="clients__label">
        Dipercaya <strong>{clientsClaim}</strong> dalam 3 tahun terakhir
      </p>
      <Marquee logos={clients} />
      <p className="clients__label clients__label--sub">Juga mendukung event kampus &amp; komunitas</p>
      <Marquee logos={eventLogos} reverse />
    </section>
  );
}
