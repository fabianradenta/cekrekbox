import Image from "next/image";
import Link from "next/link";

import podium from "@/assets/images/podium.webp";
import boothOrange from "@/assets/images/booth-orange.webp";
import boothStand from "@/assets/images/booth-stand.webp";
import { about, contact } from "@/content/site";
import { ArrowRightIcon } from "../Icons";

export default function AboutTeaser() {
  return (
    <section className="section" id="tentang">
      <div className="container about-teaser__grid">
        <div className="about-teaser__copy">
          <span className="chip">Tentang kami</span>
          <div className="about-name">
            <h2 className="big">{contact.brand}</h2>
            <p className="pt">{contact.company}</p>
          </div>
          <p className="body">{about.short[0]}</p>
          <p className="body">
            Dengan konsep <strong>“{about.concept}”</strong>, kami menghadirkan <strong>photobooth</strong> yang fleksibel, mudah
            dipasang di berbagai lokasi, serta dilengkapi dengan fitur cetak instan dan <strong>automatic digital sharing</strong>.
          </p>
          <Link className="btn btn--orange btn--lg" href="/about" style={{ alignSelf: "flex-start", marginTop: 8 }}>
            Kenalan Lebih Lanjut <ArrowRightIcon />
          </Link>
        </div>

        <div className="machines">
          <div className="machines__blob" aria-hidden />
          <Image className="machines__podium" src={podium} alt="" sizes="(max-width: 600px) 88vw, 480px" />
          <Image className="machines__a" src={boothOrange} alt="Mesin self-photobooth CekrekBox berwarna oranye" sizes="160px" />
          <Image className="machines__b" src={boothStand} alt="Mesin photobooth dengan monitor sentuh dan lampu payung" sizes="160px" />
        </div>
      </div>
    </section>
  );
}
