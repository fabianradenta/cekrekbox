import type { Metadata } from "next";
import Image from "next/image";

import eventAif from "@/assets/images/event-aif.jpg";
import PageHero from "@/components/PageHero";
import OrgChart from "@/components/about/OrgChart";
import CtaBand from "@/components/CtaBand";
import { WhatsAppIcon } from "@/components/Icons";
import { about, contact, eventPartners, legal, reasons } from "@/content/site";
import { logoSize } from "@/lib/logo";
import { waLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `Kenali CekrekBox dan ${contact.company}: profil, legalitas, visi dan misi, serta tim di balik layanan photobooth kami di Medan.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="Tentang kami" crumb="Tentang Kami" text="Kenali cerita, visi, dan orang-orang di balik CekrekBox." />

      <section className="section" id="profil">
        <div className="container profile">
          <div className="profile__copy">
            <span className="chip">Profil perusahaan</span>
            <div className="about-name">
              <h2 className="big">{contact.brand}</h2>
              <p className="pt">{contact.company}</p>
            </div>
            <p className="body">{about.long[0]}</p>
            <p className="body">
              Dengan konsep <strong>“{about.concept}”</strong>, kami menghadirkan <strong>photobooth</strong> yang fleksibel, mudah
              dipasang di berbagai lokasi, serta dilengkapi dengan fitur cetak instan dan <strong>automatic digital sharing</strong>.
            </p>
            <p className="body">{about.long[1]}</p>
          </div>
          <div className="profile__side">
            <Image className="profile__photo" src={eventAif} alt="Panitia AIF 2.0 berfoto di booth CekrekBox" sizes="(max-width: 900px) 100vw, 480px" />
            <div className="legal">
              <h2>Legalitas</h2>
              <dl>
                {legal.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface" id="visi-misi">
        <div className="container stack-48">
          <h2 className="split-title">
            <span className="thin">Our</span>
            <br />
            <span className="bold" style={{ color: "var(--orange)" }}>
              Vision &amp; Mission
            </span>
          </h2>
          <div className="vm">
            <div className="vm__col">
              <h3 className="tag-block">Visi</h3>
              <p className="vision">
                Menjadi mitra photobooth <strong>top of mind</strong> {about.vision}
              </p>
            </div>
            <div className="vm__col vm__col--wide">
              <h3 className="tag-block">Misi</h3>
              <ul className="mission">
                {about.missions.map((m) => (
                  <li key={m.title}>
                    <strong>{m.title}:</strong> {m.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="alasan">
        <div className="container why">
          <div className="why__intro">
            <span className="chip">Kenapa kami</span>
            <h2 className="h2">
              Kenapa pilih
              <br />
              <span className="accent">CekrekBox?</span>
            </h2>
            <p className="lead">Dari setup sampai sesi foto terakhir, ini yang membuat acaramu berjalan lancar dan berkesan.</p>
            <a className="btn btn--orange" href={waLink()} target="_blank" rel="noopener">
              <WhatsAppIcon />
              <span>Tanya lewat WhatsApp</span>
            </a>
          </div>
          <ol className="why__list">
            {reasons.map((r, i) => (
              <li key={r.title}>
                <span className="why__num" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--surface" id="struktur">
        <div className="container stack-48">
          <div className="org-title">
            <h2 className="split-title">
              <span className="thin">Our</span>
              <br />
              <span className="bold" style={{ color: "var(--blue)" }}>
                Structure
              </span>
            </h2>
            <p className="pt">{contact.company}</p>
          </div>
          <OrgChart />
        </div>
      </section>

      <section className="section" id="event">
        <div className="container stack-48" style={{ gap: 32 }}>
          <div className="section-head">
            <span className="chip">Event partnership</span>
            <h2 className="h2">
              Event kampus &amp; <span className="accent">komunitas</span>
            </h2>
            <p className="lead">Sebagian acara kampus dan komunitas yang sudah kami abadikan bersama CekrekBox.</p>
          </div>
          <ul className="event-grid">
            {eventPartners.map((e) => (
              <li key={e.name}>
                <Image src={e.logo} alt={e.name} sizes="200px" style={{ width: logoSize(e.logo, 11000, 84).width }} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Siap abadikan momenmu?" text="Konsultasikan kebutuhan acaramu, tim kami siap membantu." />
    </>
  );
}
