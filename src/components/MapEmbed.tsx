"use client";

import { useSyncExternalStore } from "react";
import { contact } from "@/content/site";
import { mapsEmbed } from "@/lib/utils";

// Ilustrasi selalu dirender sebagai fallback; iframe Maps hanya dimuat di luar localhost.
const subscribe = () => () => {};
const canEmbedOnClient = () => !/^(localhost|127\.0\.0\.1)$/.test(window.location.hostname);
const canEmbedOnServer = () => false;

export default function MapEmbed() {
  const canEmbed = useSyncExternalStore(subscribe, canEmbedOnClient, canEmbedOnServer);

  return (
    <div className="map">
      <MapIllustration />
      {canEmbed && (
        <iframe
          src={mapsEmbed}
          title={`Peta lokasi CekrekBox, ${contact.address}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
    </div>
  );
}

function MapIllustration() {
  return (
    <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="400" height="225" fill="#E8ECF7" />
      <rect x="18" y="14" width="78" height="46" rx="6" fill="#DCE1F1" />
      <rect x="18" y="88" width="64" height="58" rx="6" fill="#DCE1F1" />
      <rect x="176" y="10" width="92" height="40" rx="6" fill="#DCE1F1" />
      <rect x="300" y="108" width="84" height="44" rx="6" fill="#DCE1F1" />
      <rect x="168" y="150" width="96" height="30" rx="6" fill="#DCE1F1" />
      <rect x="292" y="12" width="96" height="62" rx="10" fill="#CDE8D3" />
      <path d="M0 196C70 178 130 214 214 196S344 168 400 182V225H0Z" fill="#BCD3F1" />
      <path d="M128 0L150 225M282 0L268 225M0 74L400 98" stroke="#FFFFFF" strokeWidth="9" />
      <path d="M-10 168C96 140 214 118 410 62" stroke="#F9C9A8" strokeWidth="16" strokeLinecap="round" />
      <path d="M-10 168C96 140 214 118 410 62" stroke="#FFE2CC" strokeWidth="10" strokeLinecap="round" />
      <text x="34" y="150" transform="rotate(-13 34 150)" fontFamily="Poppins, sans-serif" fontSize="10" fontWeight="600" fill="#6B7090">
        Jl. Jend. AH Nasution
      </text>
      <path d="M205 124c-11-13-17-22-17-31a17 17 0 0 1 34 0c0 9-6 18-17 31z" fill="#F75C07" />
      <circle cx="205" cy="93" r="6.5" fill="#FFFFFF" />
      <rect x="226" y="80" width="96" height="28" rx="8" fill="#FFFFFF" />
      <text x="274" y="99" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="12.5" fontWeight="700" fill="#121CD4">
        CekrekBox
      </text>
    </svg>
  );
}
