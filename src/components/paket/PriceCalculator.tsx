"use client";

import { useState } from "react";

import { maxUnlimitedHours, pricing } from "@/content/site";
import { rupiah, waLink } from "@/lib/utils";
import { WhatsAppIcon } from "../Icons";

type Pkg = "normal" | "unlimited";

const MIN_QTY = 10;
const MAX_QTY = 500;
const STEP = 10;

/** Harga per cetak mengikuti tingkatan tertinggi yang terpenuhi. */
function pricePerPrint(qty: number): number {
  const tiers = [...pricing.normal.printTiers].sort((a, b) => b.minQty - a.minQty);
  return (tiers.find((t) => qty >= t.minQty) ?? tiers[tiers.length - 1]).price;
}

export default function PriceCalculator() {
  const [pkg, setPkg] = useState<Pkg>("normal");
  const [qty, setQty] = useState(100);
  const [hours, setHours] = useState(2);

  const { normal, unlimited } = pricing;
  const isNormal = pkg === "normal";
  const perPrint = pricePerPrint(qty);
  const hourly = unlimited.hourly.find((h) => h.hours === hours) ?? unlimited.hourly[0];
  const total = isNormal ? normal.basePerDay + qty * perPrint : hourly.price;
  const pkgName = isNormal ? normal.name : unlimited.shortName;
  const detail = isNormal ? `${qty} cetak` : `${hours} jam`;
  const message = `Halo CekrekBox, saya ingin booking ${pkgName} (${detail}), estimasi ${rupiah(total)}. Apakah tanggal [tanggal acara] masih tersedia?`;
  const bulkTier = normal.printTiers[normal.printTiers.length - 1];

  const clamp = (n: number) => Math.min(MAX_QTY, Math.max(MIN_QTY, n));

  return (
    <section className="section section--surface" id="simulasi">
      <div className="container calc" style={{ maxWidth: 1088 }}>
        <div className="calc__form">
          <div className="section-head">
            <span className="chip">Simulasi biaya</span>
            <h2 className="h2">
              Hitung <span className="accent">estimasimu</span>
            </h2>
            <p className="lead">Pilih paket dan atur kebutuhanmu. Estimasinya bisa langsung dikirim ke WhatsApp kami.</p>
          </div>

          <div className="seg" role="group" aria-label="Pilih paket">
            <button type="button" aria-pressed={isNormal} onClick={() => setPkg("normal")}>
              Normal
            </button>
            <button type="button" aria-pressed={!isNormal} onClick={() => setPkg("unlimited")}>
              {unlimited.shortName}
            </button>
          </div>

          {isNormal ? (
            <div className="calc__panel">
              <label htmlFor="jumlah-cetak">Perkiraan jumlah cetak</label>
              <div className="stepper">
                <button type="button" aria-label={`Kurangi ${STEP} cetak`} onClick={() => setQty((q) => clamp(q - STEP))}>
                  −
                </button>
                <output htmlFor="jumlah-cetak" aria-live="polite">
                  {qty}
                </output>
                <button type="button" aria-label={`Tambah ${STEP} cetak`} onClick={() => setQty((q) => clamp(q + STEP))}>
                  +
                </button>
              </div>
              <input
                id="jumlah-cetak"
                type="range"
                min={MIN_QTY}
                max={MAX_QTY}
                step={STEP}
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
              />
              <p className="calc__hint">
                Mulai {bulkTier.minQty} cetak, harga turun menjadi {rupiah(bulkTier.price)} per cetak.
              </p>
            </div>
          ) : (
            <div className="calc__panel">
              <span className="label" id="durasi-label">
                Durasi sewa
              </span>
              <div className="hours" role="group" aria-labelledby="durasi-label">
                {unlimited.hourly.map((h) => (
                  <button key={h.hours} type="button" aria-pressed={h.hours === hours} onClick={() => setHours(h.hours)}>
                    {h.hours} jam
                  </button>
                ))}
              </div>
              <p className="calc__hint">Lebih dari {maxUnlimitedHours} jam? Hubungi kami untuk penawaran khusus.</p>
            </div>
          )}
        </div>

        <div className="calc__result">
          <span className="kicker">Estimasi biaya · {isNormal ? normal.name : unlimited.shortName}</span>
          <div className="calc__lines">
            {isNormal ? (
              <>
                <div>
                  <span>Sewa alat 1 hari (tanpa cetak)</span>
                  <strong>{rupiah(normal.basePerDay)}</strong>
                </div>
                <div>
                  <span>
                    {qty} cetak × {rupiah(perPrint)}
                  </span>
                  <strong>{rupiah(qty * perPrint)}</strong>
                </div>
              </>
            ) : (
              <div>
                <span>Unlimited print {hours} jam</span>
                <strong>{rupiah(hourly.price)}</strong>
              </div>
            )}
          </div>
          <div className="calc__rule" />
          <div className="calc__total">
            <span>Total estimasi</span>
            <output aria-live="polite">{rupiah(total)}</output>
          </div>
          <a className="btn btn--orange btn--lg" href={waLink(message)} target="_blank" rel="noopener">
            <WhatsAppIcon />
            <span>Kirim estimasi ke WhatsApp</span>
          </a>
          <p className="calc__fine">Estimasi belum termasuk biaya di luar paket. Harga final dikonfirmasi tim kami.</p>
        </div>
      </div>
    </section>
  );
}
