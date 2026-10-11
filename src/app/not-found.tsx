import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "70vh" }}>
      <div className="page-hero__slash" aria-hidden />
      <div className="container page-hero__inner">
        <h1>Halaman tidak ditemukan</h1>
        <p>Sepertinya momen yang kamu cari belum diabadikan. Kembali ke beranda untuk melihat layanan CekrekBox.</p>
        <Link className="btn btn--white btn--lg" href="/" style={{ alignSelf: "flex-start" }}>
          Kembali ke beranda
        </Link>
      </div>
    </section>
  );
}
