import Link from "next/link";

import { maxUnlimitedHours, pricing } from "@/content/site";
import { rupiah, waLink } from "@/lib/utils";
import { ArrowRightIcon, CheckIcon } from "../Icons";

export default function PricingCards() {
  const { normal, unlimited } = pricing;
  const from = unlimited.hourly[0];

  return (
    <section className="section section--surface" id="paket">
      <div className="container stack-48" style={{ maxWidth: 1088 }}>
        <div className="section-head center">
          <span className="chip">Paket &amp; harga</span>
          <h2 className="h2">
            Pilih paket
            <br />
            <span className="accent">sesuai acaramu</span>
          </h2>
          <p className="lead">Semua paket sudah termasuk operator, kamera, lighting, iPad, backdrop, dan softcopy otomatis via QR.</p>
        </div>

        <div className="price-grid">
          <article className="price-card">
            <div>
              <p className="price-card__kicker">{normal.name}</p>
              <h3 className="price-card__title">{normal.tagline}</h3>
            </div>
            <p className="price">
              <span className="price__amount">{rupiah(normal.basePerDay)}</span>
              <span className="price__unit">/ hari, belum termasuk cetak</span>
            </p>
            <div className="rate-table">
              <div>
                <span>Biaya cetak</span>
                <span>Per cetak</span>
              </div>
              {normal.printTiers.map((t) => (
                <div key={t.label}>
                  <span>{t.label}</span>
                  <strong>{rupiah(t.price)}</strong>
                </div>
              ))}
            </div>
            <p className="note">{pricing.printNote}</p>
            <ul className="checklist">
              {normal.includes.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a className="btn btn--outline" href={waLink(`Halo CekrekBox, saya tertarik dengan ${normal.name}.`)} target="_blank" rel="noopener">
              Pilih Paket Normal
            </a>
          </article>

          <article className="price-card price-card--featured">
            <div className="burst" aria-hidden>
              <span>
                Cetak
                <br />
                sepuasnya!
              </span>
            </div>
            <div>
              <p className="price-card__kicker">{unlimited.name}</p>
              <h3 className="price-card__title">{unlimited.tagline}</h3>
            </div>
            <p className="price">
              <span className="price__unit">mulai</span>
              <span className="price__amount">{rupiah(from.price)}</span>
            </p>
            <div className="rate-table">
              <div>
                <span>Durasi</span>
                <span>Harga</span>
              </div>
              {unlimited.hourly.map((h) => (
                <div key={h.hours}>
                  <span>{h.hours} jam</span>
                  <strong>{rupiah(h.price)}</strong>
                </div>
              ))}
            </div>
            <p className="note">Lebih dari {maxUnlimitedHours} jam? Hubungi kami untuk penawaran.</p>
            <ul className="checklist">
              {unlimited.includes.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a className="btn btn--orange" href={waLink(`Halo CekrekBox, saya tertarik dengan ${unlimited.name}.`)} target="_blank" rel="noopener">
              Pilih Unlimited Print
            </a>
          </article>
        </div>

        <div className="price-foot">
          <p>Butuh paket khusus atau event partnership? Hubungi kami.</p>
          <Link className="text-link" href="/paket">
            Lihat detail paket &amp; hitung estimasi <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
