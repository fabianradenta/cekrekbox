import Image from "next/image";
import Link from "next/link";

import eventParty from "@/assets/images/event-party.jpg";
import eventRakernas from "@/assets/images/event-rakernas.jpg";
import stripsBlueOrange from "@/assets/images/strips-blue-orange.jpg";
import boothOrange from "@/assets/images/booth-orange.webp";
import { waLink } from "@/lib/utils";
import { ArrowRightIcon } from "../Icons";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__copy">
          <h1 className="hero__title">
            <span className="t-blue">Moments</span>
            <span className="t-orange">Matter</span>
            <span className="visually-hidden">, sewa photobooth CekrekBox di Medan</span>
          </h1>
          <p className="hero__text">
            Abadikan setiap momen spesial dengan photobooth modern, seru, dan berkualitas dari CekrekBox.
          </p>
          <div className="btn-row">
            <a className="btn btn--orange btn--lg" href={waLink()} target="_blank" rel="noopener">
              Booking Sekarang <ArrowRightIcon />
            </a>
            <Link className="btn btn--outline btn--lg" href="/paket">
              Lihat Paket
            </Link>
          </div>
        </div>

        <div className="collage">
          <div className="collage__band" aria-hidden />
          <div className="collage__stripe" aria-hidden />
          <figure className="print print--a">
            <Image src={eventParty} alt="Tamu berfoto bersama di photobooth CekrekBox" sizes="(max-width: 600px) 60vw, 340px" preload />
            <figcaption>CEKREKBOX · MOMENTS MATTER</figcaption>
          </figure>
          <Image className="collage__strip" src={stripsBlueOrange} alt="Contoh strip foto dengan frame CekrekBox" sizes="(max-width: 600px) 30vw, 175px" />
          <figure className="print print--b">
            <Image src={eventRakernas} alt="Peserta Rakernas XIX berfoto di booth CekrekBox" sizes="(max-width: 600px) 58vw, 330px" />
            <figcaption>RAKERNAS XIX</figcaption>
          </figure>
          <Image className="collage__booth" src={boothOrange} alt="Unit photobooth CekrekBox berwarna oranye" sizes="100px" />
          <div className="burst">
            <span>Free Custom Design!</span>
          </div>
        </div>
      </div>
    </section>
  );
}
