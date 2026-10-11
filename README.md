# Website Company Profile CekrekBox
> *Source code* ini dibuat untuk website *company profile* CekrekBox, layanan sewa *photobooth* di Medan yang dikelola oleh PT Astavindo Kreasi Utama.

## Deskripsi Singkat Program
Program ini merupakan website *company profile* yang terdiri dari tiga halaman, yaitu Beranda (`/`), Paket & Harga (`/paket`), dan Tentang Kami (`/about`). Pengunjung dapat melihat layanan, klien, galeri, dan cara *booking*, membandingkan paket, menghitung estimasi biaya melalui kalkulator, serta menghubungi CekrekBox langsung melalui WhatsApp dengan pesan yang sudah terisi. Seluruh halaman dirender statis, sedangkan *sitemap*, `robots.txt`, ikon, dan gambar pratinjau link dibuat otomatis oleh Next.js.

Hampir seluruh konten website, seperti kontak, harga, fasilitas paket, logo klien, galeri, FAQ, dan struktur perusahaan, tersimpan di [src/content/site.ts](src/content/site.ts). Perubahan pada file tersebut otomatis diterapkan ke seluruh halaman, termasuk kalkulator harga.

## Requirements
- Node.js 20.9 atau lebih baru
- Next.js 16 (App Router)
- React 19 dan TypeScript

## Cara Menjalankan Program
1. Pastikan Node.js sudah terpasang di perangkat anda. Status pemasangan dapat diperiksa dengan menjalankan *command* `node --version` pada *terminal*.
2. *Clone repository* dan masuk ke *directory* proyek dengan *command* berikut
```
git clone <url-repository>
cd cekrekbox-next
```
3. Pasang *dependency*
```
npm install
```
4. Siapkan *environment variable*. Isi `NEXT_PUBLIC_SITE_URL` dengan domain website agar *sitemap* dan gambar pratinjau link memakai alamat yang benar.
```
cp .env.example .env
```
5. Jalankan program dalam mode *development*
```
npm run dev
```
6. Buka `http://localhost:3000` pada *browser*.

Untuk menjalankan versi produksi, gunakan *command* berikut
```
npm run build
npm run start
```

## Pengujian
Proyek ini belum memiliki pengujian otomatis. Pemeriksaan kode dan *build* produksi dapat dijalankan dengan *command* berikut
```
npm run lint
npm run build
```

## Catatan
- Program siap di-*deploy* ke Vercel. Untuk *hosting* statis seperti Netlify, GitHub Pages, atau cPanel, jalankan `STATIC_EXPORT=1 npm run build` lalu unggah isi folder `out/`. Pada mode ini optimasi gambar otomatis tidak aktif.
- Peta Google di *footer* hanya dimuat di domain asli. Di `localhost`, yang tampil adalah ilustrasi peta.
- Sebelum website tayang, beberapa hal berikut masih perlu dilengkapi: tiga jawaban FAQ yang masih berupa *placeholder* (ditandai `TODO` di [src/content/site.ts](src/content/site.ts)), konfirmasi harga sesuai *pricelist* terbaru, dan izin penggunaan logo klien.

## Authors
Nama : Fabian Radenta Bangun<br>
Profile Github : [fabianradenta](https://github.com/fabianradenta)

Nama : Nurul Annisa<br>
Profile Github : [nurulannnisa](https://github.com/nurulannnisa)
