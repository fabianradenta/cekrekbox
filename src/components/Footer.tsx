import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/logo.webp";
import wordmark from "@/assets/images/wordmark.webp";
import { contact } from "@/content/site";
import { mapsLink, waLink } from "@/lib/utils";
import { InstagramIcon, LinkIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";
import MapEmbed from "./MapEmbed";

export default function Footer() {
  return (
    <>
      <footer className="footer" id="kontak">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <Link className="brand" href="/" aria-label="CekrekBox, ke beranda">
                <Image src={logo} alt="" height={40} />
                <Image className="brand__wordmark" src={wordmark} alt="" />
              </Link>
              <p>Mobilized photobooth untuk event, party, wedding, dan acara lainnya.</p>
              <p className="small">Dikelola oleh {contact.company}</p>
            </div>

            <nav className="footer__col" aria-label="Menu footer">
              <h2>Menu</h2>
              <Link href="/">Beranda</Link>
              <Link href="/paket">Paket &amp; Harga</Link>
              <Link href="/#galeri">Galeri</Link>
              <Link href="/about">Tentang Kami</Link>
            </nav>

            <div className="footer__col">
              <h2>Kontak</h2>
              <a href={waLink()} target="_blank" rel="noopener">
                <PhoneIcon />
                {contact.whatsappDisplay}
              </a>
              <a href={`mailto:${contact.email}`}>
                <MailIcon />
                {contact.email}
              </a>
              <a href={`https://www.instagram.com/${contact.instagram}`} target="_blank" rel="noopener">
                <InstagramIcon />@{contact.instagram}
              </a>
              <a href={contact.linktree} target="_blank" rel="noopener">
                <LinkIcon />
                {contact.linktree.replace("https://", "")}
              </a>
            </div>

            <div className="footer__col">
              <h2>Lokasi</h2>
              <MapEmbed />
              <p className="footer__addr">
                <PinIcon style={{ flex: "0 0 auto", marginTop: 2 }} />
                <span>
                  {contact.address}
                  <br />
                  <a href={mapsLink} target="_blank" rel="noopener">
                    Buka di Google Maps ↗
                  </a>
                </span>
              </p>
            </div>
          </div>

          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} {contact.company}. Semua hak dilindungi.</span>
            <span className="tag">MOMENTS MATTER</span>
          </div>
        </div>
      </footer>

      <a className="wa-float" href={waLink()} target="_blank" rel="noopener" aria-label="Chat WhatsApp CekrekBox">
        <WhatsAppIcon size={32} />
      </a>
    </>
  );
}
