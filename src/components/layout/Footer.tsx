export default function Footer() {
  return (
    <footer className="px-6 py-6">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e85d04]">
            <span className="text-sm font-black text-white">CE</span>
          </div>
          <div className="leading-tight">
            <div className="text-base font-black tracking-tight brand-gradient-text">
              Cynthia{" "}ELIEZER
            </div>
            <div className="text-[11px] text-[#0d0d0d]/50">
              Celle qui révèle l'humain 🎙️❤️
            </div>
          </div>
        </div>

        {/* Icônes sociales */}
        <div className="flex items-center gap-3">
          {/* LinkedIn */}
          <a
            href="#"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:opacity-80"
            style={{ background: "linear-gradient(145deg, #2a1a0a, #8B4513)" }}
          >
            <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:opacity-80"
            style={{ background: "linear-gradient(145deg, #2a1a0a, #8B4513)" }}
          >
            <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm9.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="#"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:opacity-80"
            style={{ background: "linear-gradient(145deg, #2a1a0a, #8B4513)" }}
          >
            <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:contact@cynthiaeliezer.com"
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:opacity-80"
            style={{ background: "linear-gradient(145deg, #2a1a0a, #8B4513)" }}
          >
            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm italic text-[#0d0d0d]/40">
          © 2026 Cynthia Eliezer. Tous droits réservés.
        </p>

      </div>
    </footer>
  );
}