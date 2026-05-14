"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";

const NAV = [
  { label: "Offres ACO's", link: "#offers" },
  { label: "Episodes ACO's", link: "#episodes" },
  { label: "References", link: "#references" },
  { label: "Témoignages", link: "#testimonials" },
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f06a0f]">
        <span className="font-display text-sm font-bold text-white">CE</span>
      </div>
      <div className="leading-tight">
        <div className="font-display text-base font-bold tracking-tight brand-gradient-text">
          Cynthia ELIEZER
        </div>
        <div className="text-[10px] uppercase tracking-[0.18em] text-[#9a8d76]">
          ACO's | À Cœurs Ouverts
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    gsap.fromTo(
      headerRef.current,
      { y: -24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", delay: 0.1 }
    );
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-4 z-50 mx-auto w-full max-w-[1400px] px-3"
      style={{ opacity: 0 }}
    >
      <div className="rounded-md border border-[#d9cfbf] bg-white/70 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)] backdrop-blur-md">
        <div className="flex items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
          <Logo />
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {NAV.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.link}
                    className="text-sm font-semibold text-[#3a3a3a] transition hover:text-[#f06a0f]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full brand-gradient px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-95 sm:inline-flex"
            >
              Réserver un appel
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d9cfbf] text-[#0f0f0f] lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-[#d9cfbf]/60 px-6 py-4 lg:hidden">
            <ul className="flex flex-col gap-3">
              {NAV.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.link}
                    className="block py-1 text-sm font-semibold text-[#3a3a3a]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="mt-2 inline-flex w-full justify-center rounded-full brand-gradient px-5 py-2.5 text-sm font-medium text-white"
                >
                  Réserver un appel
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}