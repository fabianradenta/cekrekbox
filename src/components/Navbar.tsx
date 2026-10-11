"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import logo from "@/assets/images/logo.webp";
import wordmark from "@/assets/images/wordmark.webp";
import { navLinks } from "@/content/site";
import { waLink } from "@/lib/utils";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./Icons";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Escape atau resize ke layout desktop menutup menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 1000 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const isCurrent = (href: string) => (href.startsWith("/#") ? false : pathname === href);

  return (
    <div className="nav-wrap">
      <header className="nav">
        <div className="nav__bar">
          <Link className="brand" href="/" aria-label="CekrekBox, ke beranda">
            <Image src={logo} alt="" height={42} preload />
            <Image className="brand__wordmark" src={wordmark} alt="" preload />          </Link>

          <nav className="nav__links" aria-label="Menu utama">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} aria-current={isCurrent(link.href) ? "page" : undefined}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="nav__actions">
            <a className="btn btn--orange btn--sm" href={waLink()} target="_blank" rel="noopener" aria-label="Cek tanggal lewat WhatsApp">
              <WhatsAppIcon />
              <span className="nav__cta-text">Cek Tanggal</span>
            </a>
            <button
              className="nav__toggle"
              type="button"
              aria-expanded={open}
              aria-controls="nav-panel"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <nav id="nav-panel" className="nav__panel" aria-label="Menu" hidden={!open}>
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={() => setOpen(false)}>
            Beranda
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
    </div>
  );
}
