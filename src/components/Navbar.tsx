"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import logo from "@/assets/images/logo.webp";
import wordmark from "@/assets/images/wordmark.webp";
import { navLinks } from "@/content/site";
import { CloseIcon, MenuIcon } from "./Icons";

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

  const visibleLinks = navLinks.filter((link) => link.page === pathname);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash || "#top");
    updateHash();
    window.addEventListener("hashchange", updateHash);

    const targets = navLinks
      .filter((link) => link.page === pathname)
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((target): target is HTMLElement => target !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHash(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    targets.forEach((target) => observer.observe(target));

    return () => {
      window.removeEventListener("hashchange", updateHash);
      observer.disconnect();
    };
  }, [pathname]);

  const isCurrent = (href: string) => activeHash === href;

  if (pathname !== "/") {
    return (
      <Link className="back-float" href="/" aria-label="Kembali ke Beranda">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 12H5m0 0 7 7m-7-7 7-7" />
        </svg>
      </Link>
    );
  }

  return (
    <div className="nav-wrap">
      <header className="nav">
        <div className="nav__bar">
          <Link className="brand" href="/" aria-label="CekrekBox, ke beranda">
            <Image src={logo} alt="" height={42} preload />
            <Image className="brand__wordmark" src={wordmark} alt="" preload />          </Link>

          <nav className="nav__links" aria-label="Menu utama">
            {visibleLinks.map((link) => (
              <Link key={link.href} href={link.href} aria-current={isCurrent(link.href) ? "page" : undefined}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="nav__actions">
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
          {visibleLinks.map((link) => (
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
