import Image from "next/image";

import { contact, gallery, galleryPrint } from "@/content/site";
import { ArrowRightIcon, ArrowUpRightIcon, InstagramIcon } from "../Icons";

const igUrl = `https://www.instagram.com/${contact.instagram}`;

export default function Gallery() {
  return (
    <section className="section" id="galeri">
      <div className="container" style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        <div className="section-head section-head--split">
          <div>
            <span className="chip">Galeri</span>
            <h2 className="h2">
              Momen yang sudah
              <br />
              <span className="accent">kami abadikan</span>
            </h2>
          </div>
          <a className="btn btn--outline btn--sm" href={igUrl} target="_blank" rel="noopener">
            Lihat semua di Instagram <ArrowRightIcon />
          </a>
        </div>

        <div className="bento">
          {gallery.map((item) => (
            <figure key={item.slot} className={`tile g-${item.slot}${item.tone === "blue" ? " tile--blue" : ""}`}>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes={item.large ? "(max-width: 760px) 100vw, 520px" : "(max-width: 760px) 50vw, 420px"}
                style={item.position ? { objectPosition: item.position } : undefined}
              />
              {item.sticker && (
                <span className="tile__sticker" aria-hidden>
                  {item.sticker}
                </span>
              )}
            </figure>
          ))}

          <figure className="tile tile--print g-b">
            <div className="pinned">
              <Image src={galleryPrint.image} alt={galleryPrint.alt} sizes="(max-width: 760px) 25vw, 150px" />
            </div>
            <figcaption>
              {galleryPrint.caption[0]}
              <br />
              {galleryPrint.caption[1]}
            </figcaption>
          </figure>

          <a className="tile tile--ig g-h" href={igUrl} target="_blank" rel="noopener">
            <span className="top">
              <InstagramIcon size={34} />
              <span className="arrow" aria-hidden>
                <ArrowUpRightIcon />
              </span>
            </span>
            <span>
              <strong>Lebih banyak momen</strong>
              <span className="handle">@{contact.instagram}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
