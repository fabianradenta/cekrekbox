import type { Metadata } from "next";

import PageHero from "@/components/PageHero";
import ComparisonTable from "@/components/paket/ComparisonTable";
import PriceCalculator from "@/components/paket/PriceCalculator";
import Faq from "@/components/paket/Faq";
import CtaBand from "@/components/CtaBand";
import { pricing } from "@/content/site";
import { rupiah } from "@/lib/utils";

const normalFrom = rupiah(pricing.normal.basePerDay);
const unlimitedFrom = rupiah(pricing.unlimited.hourly[0].price);

export const metadata: Metadata = {
  title: "Paket & Harga",
  description: `Harga sewa photobooth CekrekBox: Normal Package mulai ${normalFrom} per hari dan Unlimited Print mulai ${unlimitedFrom} per jam. Hitung estimasi biaya acaramu.`,
  alternates: { canonical: "/paket" },
};

export default function PaketPage() {
  return (
    <>
      <PageHero
        title="Paket & harga"
        text="Dua pilihan paket untuk acara kecil sampai besar. Semuanya sudah termasuk operator, peralatan lengkap, softcopy via QR, dan desain frame custom gratis."
      >
        <div className="pill-links">
          <a href="#bandingkan">Normal · mulai {normalFrom}/hari</a>
          <a href="#bandingkan">Unlimited Print · mulai {unlimitedFrom}/jam</a>
        </div>
      </PageHero>
      <ComparisonTable />
      <PriceCalculator />
      <Faq />
      <CtaBand title="Masih bingung pilih paket?" text="Ceritakan acaramu, tim kami bantu pilihkan." />
    </>
  );
}
