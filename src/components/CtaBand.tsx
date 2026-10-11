import Image from "next/image";

import camera from "@/assets/images/camera.webp";
import { contact } from "@/content/site";
import { waLink } from "@/lib/utils";
import { MailIcon, WhatsAppIcon } from "./Icons";

type Props = {
  title: React.ReactNode;
  text: string;
  /** Versi lengkap (beranda) menampilkan tombol email dan ilustrasi kamera. */
  variant?: "full" | "compact";
};

export default function CtaBand({ title, text, variant = "compact" }: Props) {
  const chat = (
    <a className={`btn ${variant === "full" ? "btn--blue" : "btn--white"} btn--lg`} href={waLink()} target="_blank" rel="noopener">
      <WhatsAppIcon />
      <span>Chat {contact.whatsappDisplay}</span>
    </a>
  );

  if (variant === "compact") {
    return (
      <section className="cta cta--compact">
        <div className="cta__slash" aria-hidden />
        <div className="container cta__grid">
          <div className="cta__copy" style={{ gap: 12 }}>
            <h2 className="cta__title">{title}</h2>
            <p className="cta__text">{text}</p>
          </div>
          {chat}
        </div>
      </section>
    );
  }

  return (
    <section className="cta">
      <div className="cta__slash" aria-hidden />
      <div className="container cta__grid">
        <div className="cta__copy">
          <h2 className="cta__title">{title}</h2>
          <p className="cta__text">{text}</p>
          <div className="btn-row">
            {chat}
            <a className="btn btn--white" href={`mailto:${contact.email}`}>
              <MailIcon size={20} />
              <span>{contact.email}</span>
            </a>
          </div>
        </div>
        <div className="cta__art">
          <Image src={camera} alt="" sizes="300px" />
        </div>
      </div>
    </section>
  );
}
