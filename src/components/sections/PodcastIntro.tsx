const offers = [
  "Une vidéo authentique publiée sur YouTube et mise en avant sur LinkedIn",
  "Un contenu qui travaille pour toi pendant des mois",
  "Et souvent, une clarté sur toi-même que peu d'espaces t'auront offerte",
];

export default function PodcastIntro() {
  return (
    <section id="offers" className="bg-[#FAF8F4] px-6 lg:py-20 py-8">
      <div className="mx-auto max-w-[1300px]">

        {/* Ligne 1 : Titre à gauche, bouton à droite */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="max-w-[780px]">
            <h2 className="text-2xl font-black leading-tight tracking-tight text-[#0f0f0f] sm:text-3xl lg:text-4xl">
              À Cœurs Ouverts , le podcast qui révèle ce que les autres taisent.
            </h2>
            <p className="mt-5 max-w-[600px] text-[15px] leading-7 text-[#0d0d0d]/70">
              ACO'S n'est pas un podcast comme les autres. Ici, pas de discours polis ni de façades
              lisses. Chaque épisode, un leader accepte de baisser la garde et de partager ce qui
              l'a vraiment construit , les doutes, les tournants, les vérités qu'on n'ose pas dire en public.
            </p>
          </div>

          {/* Bouton top right */}
          <div className="hidden lg:block pt-2">
            <a
              href="https://www.linkedin.com/in/a-coeurs-ouverts"
              className="inline-flex brand-gradient items-center rounded-full px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Écouter le podcast
            </a>
          </div>
        </div>

        {/* Ligne 2 : Offres | Photos | Plateformes */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr_220px] lg:items-start">

          {/* Colonne gauche — Offres */}
          <div>
            <h3 className="text-2xl font-black tracking-tight text-[#0f0f0f]">
              Les offres de ACO's
            </h3>
            <ul className="mt-5 space-y-4">
              {offers.map((o) => (
                <li key={o} className="flex items-start gap-2 text-[14px] leading-6 text-[#0d0d0d]/75">
                  <span className="mt-0.5 shrink-0">🎤</span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne centre — Grille de photos */}
          <div className="flex flex-col gap-3">
            {/* Rangée du haut : 2 photos côte à côte */}
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[#1a1a1a]">
                <img
                  src="/assets/episode-thumb-1.jpg"
                  alt="Episode invité 1"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[#2a1a0a]">
                <img
                  src="/assets/episode-thumb-2.jpg"
                  alt="Episode invité 2"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            {/* Grande photo en bas */}
            <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-[#1a0a0a]">
              <img
                src="/assets/episode-thumb-3.jpg"
                alt="Cynthia ELIEZER"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          {/* Colonne droite — Plateformes */}
          <div className="flex flex-col gap-3 pt-2">
            {/* LinkedIn */}
            <a
              href="#"
              className="flex items-center gap-3 rounded-2xl bg-[#F0EDE6] px-4 py-4 transition hover:bg-[#e8e4dc]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0A66C2]">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </span>
              <span className="font-semibold text-[#0f0f0f]">Linkedin</span>
            </a>

            {/* YouTube */}
            <a
              href="#"
              className="flex items-center gap-3 rounded-2xl bg-[#F0EDE6] px-4 py-4 transition hover:bg-[#e8e4dc]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF0000]">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </span>
              <span className="font-semibold text-[#0f0f0f]">YouTube</span>
            </a>
          </div>

        </div>

        {/* Bouton mobile */}
        <div className="mt-8 flex justify-center lg:hidden">
          <a
            href="#"
            className="inline-flex items-center rounded-full px-6 py-3.5 text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #e85d04 100%)" }}
          >
            Écouter le podcast
          </a>
        </div>

      </div>
    </section>
  );
}