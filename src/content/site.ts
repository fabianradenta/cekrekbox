// Konten situs. Komponen membaca semua teks, harga, dan gambar dari sini.
import type { StaticImageData } from "next/image";

import { rupiah } from "@/lib/format";

import eventParty from "@/assets/images/event-party.jpg";
import eventRakernas from "@/assets/images/event-rakernas.jpg";
import eventColorful from "@/assets/images/event-colorful.jpg";
import eventAif from "@/assets/images/event-aif.jpg";
import groupEndless from "@/assets/images/group-endless.webp";
import stripBwA from "@/assets/images/strip-bw-a.jpg";

import bca from "@/assets/images/clients/bca.webp";
import lps from "@/assets/images/clients/lps.webp";
import btn from "@/assets/images/clients/btn.webp";
import pegadaian from "@/assets/images/clients/pegadaian.webp";
import amway from "@/assets/images/clients/amway.webp";
import repsol from "@/assets/images/clients/repsol.webp";
import uph from "@/assets/images/clients/uph.webp";
import pnm from "@/assets/images/clients/pnm.webp";
import grandhika from "@/assets/images/clients/grandhika.webp";
import axis from "@/assets/images/clients/axis.webp";
import bebelac from "@/assets/images/clients/bebelac.webp";
import hilo from "@/assets/images/clients/hilo.webp";
import artistry from "@/assets/images/clients/artistry.webp";
import underprice from "@/assets/images/clients/underprice.webp";
import cussonsBaby from "@/assets/images/clients/cussons-baby.webp";
import kahf from "@/assets/images/clients/kahf.webp";
import reginaMaris from "@/assets/images/clients/regina-maris.webp";
import ivoryPadel from "@/assets/images/clients/ivory-padel.webp";
import gekrafs from "@/assets/images/clients/gekrafs.webp";
import miracle from "@/assets/images/clients/miracle.webp";

import geoExpo from "@/assets/images/events/geo-expo.webp";
import marketpreneur from "@/assets/images/events/marketpreneur.webp";
import diesNatalisFkg from "@/assets/images/events/dies-natalis-fkg-usu.webp";
import aif from "@/assets/images/events/aif.webp";
import arcana from "@/assets/images/events/arcana.webp";
import csa23 from "@/assets/images/events/csa-23.webp";
import diesNatalisFkm from "@/assets/images/events/dies-natalis-fkm-usu.webp";
import youthpreneur from "@/assets/images/events/youthpreneur-bpc.webp";
import impactCircle from "@/assets/images/events/impact-circle.webp";
import sounds from "@/assets/images/events/sounds.webp";
import potion from "@/assets/images/events/potion.webp";
import cylens from "@/assets/images/events/cylens.webp";
import managementHalloween from "@/assets/images/events/management-halloween.webp";
import festivalPilkada from "@/assets/images/events/festival-pilkada.webp";
import psiakrab from "@/assets/images/events/psiakrab.webp";
import hmaGathering from "@/assets/images/events/hma-gathering.webp";
import collegeDropout from "@/assets/images/events/college-dropout.webp";
import kiniHallowestNight from "@/assets/images/events/kini-hallowest-night.webp";
import euphoriartistic from "@/assets/images/events/euphoriartistic.webp";
import rakernasPsmkgi from "@/assets/images/events/rakernas-psmkgi.webp";

import vinna from "@/assets/images/team/vinna.jpg";
import daffa from "@/assets/images/team/daffa.jpg";
import harfan from "@/assets/images/team/harfan.jpg";
import amir from "@/assets/images/team/amir.jpg";
import siti from "@/assets/images/team/siti.jpg";
import dear from "@/assets/images/team/dear.jpg";
import rezky from "@/assets/images/team/rezky.jpg";

// Kontak
const street = "Jl. Jend. AH Nasution No. 2A";
const city = "Medan";

export const contact = {
  brand: "CekrekBox",
  company: "PT Astavindo Kreasi Utama",
  whatsapp: "6285183006412",
  whatsappDisplay: "0851-8300-6412",
  email: "cekrekboxteam@gmail.com",
  instagram: "cekrekbox",
  linktree: "https://linktr.ee/cekrekbox",
  street,
  city,
  address: `${street}, ${city}`,
  region: "Sumatera Utara",
  defaultMessage: "Halo CekrekBox, saya ingin cek ketersediaan tanggal untuk acara saya.",
};

export const legal = [
  { label: "Badan usaha", value: "PT Astavindo Kreasi Utama" },
  { label: "SK Kemenkumham", value: "AHU-0065331.AH.01.01.Tahun 2025" },
  { label: "Nomor Induk Berusaha", value: "2009240100645" },
  { label: "Alamat", value: contact.address },
];

// Navigasi
export const navLinks = [
  { href: "#top", label: "Beranda", page: "/" },
  { href: "#tentang", label: "Tentang Kami", page: "/" },
  { href: "#layanan", label: "Layanan", page: "/" },
  { href: "#paket", label: "Paket & Harga", page: "/" },
  { href: "#galeri", label: "Galeri", page: "/" },
  { href: "#top", label: "Paket & Harga", page: "/paket" },
  { href: "#profil", label: "Tentang Kami", page: "/about" },
];

// Klien
export type Client = { name: string; logo: StaticImageData };
export const clients: Client[] = [
  { name: "BCA", logo: bca },
  { name: "Lembaga Penjamin Simpanan", logo: lps },
  { name: "BTN", logo: btn },
  { name: "Pegadaian", logo: pegadaian },
  { name: "Amway", logo: amway },
  { name: "Repsol", logo: repsol },
  { name: "Universitas Pelita Harapan", logo: uph },
  { name: "Permodalan Nasional Madani", logo: pnm },
  { name: "Hotel Grandhika Indonesia", logo: grandhika },
  { name: "AXIS", logo: axis },
  { name: "Bebelac", logo: bebelac },
  { name: "HiLo", logo: hilo },
  { name: "Artistry", logo: artistry },
  { name: "Underprice Skincare", logo: underprice },
  { name: "Cussons Baby", logo: cussonsBaby },
  { name: "Kahf", logo: kahf },
  { name: "RS Regina Maris", logo: reginaMaris },
  { name: "Ivory Padel Society", logo: ivoryPadel },
  { name: "Gerakan Ekonomi Kreatif Nasional Sumatera Utara", logo: gekrafs },
  { name: "Miracle", logo: miracle },
];
export const clientsClaim = "200+ brand event";

// Event partnership
// subtle: logo pucat, tidak ditampilkan di marquee beranda.
export type EventPartner = { name: string; logo: StaticImageData; subtle?: true };
export const eventPartners: EventPartner[] = [
  { name: "Geo Expo HMJ Pendidikan Geografi", logo: geoExpo },
  { name: "Marketpreneur 2024", logo: marketpreneur },
  { name: "Dies Natalis FKG USU ke-63", logo: diesNatalisFkg },
  { name: "Accounting Intelligence Fair", logo: aif },
  { name: "Psiakrab 5.0", logo: psiakrab, subtle: true },
  { name: "HMA Gathering", logo: hmaGathering, subtle: true },
  { name: "Arcana", logo: arcana },
  { name: "CSA ’23", logo: csa23 },
  { name: "College Dropout", logo: collegeDropout, subtle: true },
  { name: "Dies Natalis FKM USU ke-31", logo: diesNatalisFkm },
  { name: "Youthpreneur BPC", logo: youthpreneur },
  { name: "Kini Hallowest Night", logo: kiniHallowestNight, subtle: true },
  { name: "Impact Circle", logo: impactCircle },
  { name: "Sounds 6.0", logo: sounds },
  { name: "Potion", logo: potion },
  { name: "CyLens Exhibition 2024", logo: cylens },
  { name: "Euphoriartistic", logo: euphoriartistic, subtle: true },
  { name: "Rakernas PSMKGI XIX", logo: rakernasPsmkgi, subtle: true },
  { name: "Management Halloween Party", logo: managementHalloween },
  { name: "Festival Pilkada", logo: festivalPilkada },
];

// Fitur unggulan
export type FeatureIcon = "camera" | "users" | "play" | "image" | "printer" | "gift";
export const features: { icon: FeatureIcon; title: [string, string] }[] = [
  { icon: "camera", title: ["Self-Photobooth", "(Automated)"] },
  { icon: "users", title: ["Live Photobooth", "dengan Operator"] },
  { icon: "play", title: ["GIF", "Booth"] },
  { icon: "image", title: ["Custom Digital", "Frame & Branding"] },
  { icon: "printer", title: ["Print Foto Instan", "& Softcopy Digital"] },
  { icon: "gift", title: ["Special Package", "Price"] },
];

// Paket & harga
const packageFacilities = [
  "Operator photobooth",
  "Software photobooth otomatis, support GIF",
  "iPad interaktif dengan live-view",
  "Kamera, lighting, dan backdrop",
  "Printer cepat 4R dan strip 2R",
  "Softcopy otomatis via QR: GIF, original, layout",
  "Desain frame custom, gratis",
];

export const pricing = {
  normal: {
    name: "Normal Package",
    tagline: "Sewa alat, cetak sesuai kebutuhan",
    basePerDay: 849000,
    printTiers: [
      { label: "1–99 cetak", minQty: 1, price: 15000 },
      { label: "100 cetak ke atas", minQty: 100, price: 10000 },
    ],
    includes: packageFacilities,
  },
  unlimited: {
    name: "Unlimited Print Package",
    shortName: "Unlimited Print",
    tagline: "Cetak tanpa batas selama durasi sewa",
    hourly: [
      { hours: 1, price: 1399000 },
      { hours: 2, price: 1999000 },
      { hours: 3, price: 2499000 },
      { hours: 4, price: 2899000 },
    ],
    includes: ["Cetak tanpa kuota selama durasi sewa", "Tanpa biaya cetak per lembar", ...packageFacilities],
  },
  printNote: "1 cetak 4R = 2 strip ukuran 2R.",
};

export const maxUnlimitedHours = pricing.unlimited.hourly[pricing.unlimited.hourly.length - 1].hours;

const printCosts = pricing.normal.printTiers.map((t) => `${t.label}: ${rupiah(t.price)}`).join("\n");
// Dua durasi per baris.
const hourlyPrices = pricing.unlimited.hourly
  .map((h) => `${h.hours} jam ${rupiah(h.price)}`)
  .reduce((text, item, i) => text + (i === 0 ? "" : i % 2 ? " · " : "\n") + item, "");

export const comparisonRows: { label: string; normal: string | true; unlimited: string | true }[] = [
  { label: "Cara bayar", normal: "Sewa alat per hari, cetak dibayar per lembar", unlimited: "Per durasi sewa, cetak tanpa kuota" },
  { label: "Biaya cetak", normal: printCosts, unlimited: "Sudah termasuk" },
  { label: "Durasi", normal: "1 hari", unlimited: hourlyPrices },
  { label: "Operator photobooth", normal: true, unlimited: true },
  { label: "Software photobooth otomatis (support GIF)", normal: true, unlimited: true },
  { label: "iPad dengan live-view", normal: true, unlimited: true },
  { label: "Kamera, lighting, backdrop", normal: true, unlimited: true },
  { label: "Softcopy via QR (GIF, original, layout)", normal: true, unlimited: true },
  { label: "Desain frame custom", normal: "Gratis", unlimited: "Gratis" },
  { label: "Printer cepat 4R / strip 2R", normal: true, unlimited: true },
  { label: "Paling cocok untuk", normal: "Acara yang jumlah cetaknya bisa diperkirakan", unlimited: "Acara ramai yang ingin semua tamu mencetak" },
];

// Galeri
export type GalleryItem = {
  slot: "a" | "c" | "d" | "e" | "g";
  image: StaticImageData;
  alt: string;
  large?: boolean;
  position?: string;
  sticker?: string;
  tone?: "blue";
};
export const gallery: GalleryItem[] = [
  { slot: "a", image: eventParty, alt: "Tamu pesta berfoto ramai-ramai di booth CekrekBox", large: true, sticker: "#MomentsMatter" },
  { slot: "c", image: eventRakernas, alt: "Peserta Rakernas XIX berpose" },
  { slot: "d", image: eventColorful, alt: "Tamu berfoto di depan backdrop Colorful GeForce RTX 50 Series" },
  { slot: "e", image: eventAif, alt: "Panitia AIF 2.0 berfoto di booth CekrekBox", large: true, position: "center 40%" },
  { slot: "g", image: groupEndless, alt: "Sekelompok tamu berekspresi di depan kamera", position: "center top", tone: "blue" },
];
export const galleryPrint = { image: stripBwA, alt: "Contoh hasil cetak strip foto CekrekBox", caption: ["hasil cetak strip 2R,", "langsung dibawa pulang!"] };

// Cara booking
export const bookingSteps = [
  { title: "Hubungi kami", text: `Ceritakan kebutuhan acaramu lewat WhatsApp ${contact.whatsappDisplay}.` },
  { title: "Pilih paket", text: "Sesuaikan paket dengan konsep, skala, jumlah tamu, dan budget acaramu." },
  { title: "Konfirmasi pesanan", text: "Setelah detail disepakati, kami kunci tanggal acaramu dan menyiapkan semuanya." },
  { title: "Enjoy your moment!", text: "Tim kami memasang booth di lokasi dan memastikan tamu menikmati setiap sesi foto." },
];

// FAQ
export const faqs: { q: string; a: string }[] = [
  { q: "Bagaimana cara booking?", a: `Hubungi kami lewat WhatsApp ${contact.whatsappDisplay} dan ceritakan kebutuhan acaramu. Kami bantu memilih paket, lalu setelah detail disepakati tanggal acara dikonfirmasi dan tim kami menyiapkan booth untuk dipasang di lokasi.` },
  { q: "Bagaimana tamu mendapatkan softcopy foto?", a: "Setelah sesi foto, tamu cukup scan QR yang muncul. File GIF, foto asli, dan versi berlayout langsung tersimpan di ponsel mereka." },
  { q: "Apa bedanya cetak 4R dan strip 2R?", a: "Satu lembar cetak 4R bisa dipotong menjadi dua strip ukuran 2R, sehingga satu kuota cetak menghasilkan dua strip." },
  { q: `Bisa sewa lebih dari ${maxUnlimitedHours} jam?`, a: "Bisa. Hubungi kami lewat WhatsApp dan ceritakan durasi acaramu, nanti kami kirimkan penawarannya." },
  { q: "Area mana saja yang dilayani?", a: "Kami melayani acara di Kota Medan maupun di luar Kota Medan. Untuk acara di luar Kota Medan, dikenakan biaya transportasi. Silakan tanyakan besaran biayanya kepada admin." },
  { q: "Apa saja yang perlu disiapkan di lokasi?", a: "Siapkan area booth minimal 3 × 4 meter, sumber listrik 900 watt, meja, dan kursi. Waktu setup sekitar 30 menit. Jika area yang tersedia lebih kecil, silakan diskusikan dengan admin." },
  { q: "Bagaimana ketentuan DP dan pembatalan?", a: "DP sebesar 50% dari total pesanan dan dibayarkan paling lambat 2 hari setelah tagihan uang muka diberikan. Jika pesanan dibatalkan setelah DP dibayarkan, DP tidak dapat dikembalikan, tetapi dapat digunakan untuk event lain di kemudian hari." },
];

// Tentang kami
export const about = {
  short: [
    "CekrekBox adalah penyedia layanan photobooth inovatif yang menghadirkan pengalaman mengabadikan momen dengan cara yang lebih seru, modern, dan berkesan.",
  ],
  long: [
    "CekrekBox adalah penyedia layanan photobooth inovatif yang menghadirkan pengalaman mengabadikan momen dengan cara yang lebih seru, modern, dan berkesan. Kami memahami bahwa setiap acara memiliki cerita unik yang layak untuk diabadikan, itulah sebabnya kami hadir dengan solusi photobooth yang praktis, cepat, dan berkualitas tinggi.",
    "CekrekBox telah dipercaya oleh berbagai event, mulai dari corporate gathering, organizational event, product brand launching, seminar, wedding, hingga acara komunitas dan kampus.",
  ],
  concept: "Mobilized Fully Automated Quickprint Photobooth",
  vision:
    "bagi pelajar, organisasi, korporat, dan event lokal di Medan, dengan solusi foto yang personal, kreatif, dan berkesan, yang mengubah momen biasa menjadi pengalaman tak terlupakan.",
  missions: [
    { title: "Excellence in Customer Experience", text: "menyediakan layanan photobooth yang personal dan mudah digunakan, mengubah momen biasa menjadi berkesan, sekaligus menjadi brand activation untuk event dan bisnis." },
    { title: "Continuous Business Improvement & Innovation", text: "rutin memperbarui dan meningkatkan layanan berdasarkan masukan pelanggan, dengan inovasi berkelanjutan yang berpusat pada pelanggan." },
    { title: "Building Strong B2B Partnerships", text: "membangun kolaborasi yang kuat dengan organisasi mahasiswa, NGO, EO lokal, kampus, dan sekolah, serta memperluas pasar ke corporate event dan wedding." },
  ],
};

export const reasons = [
  { title: "Mobilize Photobox", text: "Setup cepat dan fleksibel, cocok untuk berbagai jenis event, dari corporate gathering hingga private party." },
  { title: "Cetak Foto Instan", text: "Hasil cetak berkualitas tinggi dan tahan lama dalam hitungan detik, jadi setiap tamu pulang membawa kenangan." },
  { title: "Personalisasi Frame & Layout", text: "Desain frame, logo, dan tema disesuaikan dengan branding atau konsep acaramu." },
  { title: "Digital Sharing", text: "Foto langsung dikirim lewat email atau scan QR, siap diunggah tamu ke media sosial." },
  { title: "Tim Profesional & Berpengalaman", text: `Telah menangani ${clientsClaim} dalam 3 tahun terakhir, memastikan layanan photobooth berjalan lancar dan mengesankan.` },
];

// Struktur perusahaan
export type Person = { id: string; name: string; role: string; photo: StaticImageData };
export const team: Record<string, Person> = {
  vinna: { id: "vinna", name: "Vinna Efriyani", role: "Komisaris Utama", photo: vinna },
  daffa: { id: "daffa", name: "Daffa Rizki Hervindo", role: "Direktur Utama (CEO)", photo: daffa },
  harfan: { id: "harfan", name: "Harfan Zulfa", role: "Accounting Manager", photo: harfan },
  amir: { id: "amir", name: "Amir Hasibuan", role: "Brand & Marketing Manager", photo: amir },
  siti: { id: "siti", name: "Siti Raya", role: "Sales & Partnership Manager", photo: siti },
  dear: { id: "dear", name: "Dear Sinaga", role: "Social Media Content Strategist", photo: dear },
  rezky: { id: "rezky", name: "Rezky Nobertus", role: "Operation Manager", photo: rezky },
};
