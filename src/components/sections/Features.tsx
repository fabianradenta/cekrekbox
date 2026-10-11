import Image from "next/image";

import stripCollabA from "@/assets/images/strip-collab-a.jpg";
import stripCollabB from "@/assets/images/strip-collab-b.jpg";
import { features } from "@/content/site";
import { FeatureGlyph } from "../Icons";

export default function Features() {
  return (
    <section className="section section--blue on-blue" id="layanan">
      <div className="container features__grid">
        <div className="features__copy">
          <span className="chip chip--on-blue">Fitur unggulan</span>
          <h2 className="h2">
            Our special <span className="accent">feature</span>
          </h2>
          <p className="lead">Pengalaman photobooth yang lebih lengkap dan menyenangkan.</p>
          <div className="feature-cards">
            {features.map((f) => (
              <div className="feature-card" key={f.icon}>
                <FeatureGlyph name={f.icon} />
                <h3>
                  {f.title[0]}
                  <br />
                  {f.title[1]}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="strips-art">
          <svg className="strips-art__doodle" aria-hidden viewBox="0 0 480 576" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M388 34l12-22M410 46l18-14M424 68l22-6" />
            <path d="M440 150c-20-8-30 14-16 22 16 8 30-14 8-28-24-14-40 14-26 34" />
            <path d="M28 210c22-26 44 22 66-4" />
            <path d="M40 470c-18 6-24 28-6 34 20 6 34-20 14-34" />
            <path d="M450 330c-16 18-4 40 16 30" />
            <path d="M60 64l6 22M44 84l20 4" />
          </svg>
          <Image className="strips-art__a" src={stripCollabA} alt="Strip foto dengan frame kolaborasi custom untuk acara ulang tahun ke-17" sizes="(max-width: 600px) 38vw, 190px" />
          <Image className="strips-art__b" src={stripCollabB} alt="" sizes="(max-width: 600px) 38vw, 190px" />
          <div className="brush">
            <svg aria-hidden viewBox="0 0 420 96" preserveAspectRatio="none">
              <path d="M10 30C60 18 140 14 230 12C300 10 360 8 412 6L404 22L416 34L402 48L414 62L398 74C330 80 240 84 160 86C100 88 50 90 6 92L16 78L4 64L18 52L6 40Z" fill="#F75C07" />
            </svg>
            <span>Free Custom Design!</span>
          </div>
        </div>
      </div>
    </section>
  );
}
