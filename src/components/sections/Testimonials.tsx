"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

type T = {
  name: string;
  role: string;
  roleShort: string;
  avatar: string;
  stars: number;
  cardText: string;
  featuredTitle: string;
  fullQuote: string;
};

const TESTIMONIALS: T[] = [
  {
    name: "Laurent SAADI",
    role: "Directeur Général – COO – Directeur des opérations & transformation",
    roleShort: "Experte en prise de parole · Directeur Général – COO",
    avatar: "/assets/testimonial-laurent.jpg",
    stars: 5,
    cardText:
      "Je tiens à te dire mon admiration pour ton travail. Dans un monde de l'entreprise souvent pollué par des faux-semblants, tu offres un espace de vérité aux leaders. C'est une mission d'utilité publique. C'est là que nos visions se rejoignent : la rigueur et la structure ne sont que des outils au service de cette authenticité, pour qu'elle puisse s'exprimer avec force et durabilité.",
    featuredTitle:
      "Dans un monde de l'entreprise souvent pollué par des faux-semblants, tu offres un espace de vérité aux leaders. C'est une mission d'utilité publique.",
    fullQuote:
      "Je tiens à te dire mon admiration pour ton travail. Dans un monde de l'entreprise souvent pollué par des faux-semblants, tu offres un espace de vérité aux leaders. C'est une mission d'utilité publique. C'est là que nos visions se rejoignent : la rigueur et la structure ne sont que des outils au service de cette authenticité, pour qu'elle puisse s'exprimer avec force et durabilité.",
  },
  {
    name: "Jean-Marc Dibango",
    role: "Directeur Commercial",
    roleShort: "Directeur Commercial",
    avatar: "/assets/testimonial-jeanmarc.jpg",
    stars: 5,
    cardText:
      "Une méthode claire et applicable. J'ai doublé mes vues et reçu 12 propositions de poste en 3 mois. Le travail de fond sur ma posture éditoriale a tout changé.",
    featuredTitle:
      "Une méthode claire et applicable. J'ai doublé mes vues et reçu 12 propositions de poste en 3 mois.",
    fullQuote:
      "William m'a aidé à reprendre confiance et à mettre en valeur mes compétences. Aujourd'hui, je reçois des propositions de poste chaque semaine sans même les solliciter.",
  },
  {
    name: "Sophie Tchamba",
    role: "Consultante RH",
    roleShort: "Consultante RH",
    avatar: "/assets/testimonial-sophie.jpg",
    stars: 5,
    cardText:
      "Cynthia m'a redonné confiance et clarté. Son contenu inspire toute une génération de pros. Je recommande sans hésiter à quiconque veut prendre sa place sur LinkedIn.",
    featuredTitle:
      "Cynthia m'a redonné confiance et clarté. Son contenu inspire toute une génération de professionnels.",
    fullQuote:
      "Ce qui distingue Cynthia, c'est sa capacité à voir le potentiel que tu n'oses pas exprimer. Mon profil est devenu mon meilleur commercial.",
  },
  {
    name: "Karim Adebayo",
    role: "Founder, AfricaTalent",
    roleShort: "Founder, AfricaTalent",
    avatar: "/assets/testimonial-karim.jpg",
    stars: 5,
    cardText:
      "Le meilleur investissement de l'année. Sa stratégie LinkedIn m'a permis de lever des fonds et de trouver des partenaires stratégiques en un temps record.",
    featuredTitle:
      "Le meilleur investissement de l'année. Sa stratégie m'a permis de lever des fonds.",
    fullQuote:
      "Grâce à la stratégie éditoriale, j'ai construit une audience qualifiée d'investisseurs. Trois mois plus tard, je bouclais ma première levée de fonds.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20">
          <path
            d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.62l5.34-.78z"
            fill={i < count ? "#f5a623" : "rgba(0,0,0,0.12)"}
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const total = TESTIMONIALS.length;
  const current = TESTIMONIALS[active];

  const next = () => setActive((p) => (p + 1) % total);
  const prev = () => setActive((p) => (p - 1 + total) % total);

  return (
    <section
      id="testimonials"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(160deg, #fdf6ef 0%, #faf8f4 55%, #fff8f2 100%)",
      }}
      className="px-6 lg:py-20 py-8"
    >
      {/* Ambient blobs */}
      <div style={{ position: "absolute", right: "-80px", top: "40px", width: "288px", height: "288px", borderRadius: "50%", background: "rgba(240,106,15,0.12)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: "-80px", bottom: "40px", width: "320px", height: "320px", borderRadius: "50%", background: "rgba(240,106,15,0.09)", filter: "blur(80px)", pointerEvents: "none" }} />

      <div className="lg:w-5/6 w-full" style={{ margin: "0 auto", position: "relative" }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <span  className="brand-gradient-text" style={{
            display: "inline-block",
            fontFamily: "Inter, sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "16px",
          }}>
            · Témoignages
          </span>

          <h2 style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(20px, 4vw, 36px)",
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            margin: 0,
            color: "black"
          }}>
            <span className="brand-gradient-text px-2" style={{ fontStyle: "italic" }}> Ils{" "} ont franchis</span>
            <br />
            <span style={{ fontStyle: "italic" }}>le cap.</span>
            {" "}
            <span className="brand-gradient" style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              color: "#fff",
              fontSize: "17px",
              verticalAlign: "middle",
              flexShrink: 0,
            }}>✦</span>
          </h2>
        </div>
        {/* ── Body grid ── */}
        <div
          className="testi-grid"
          style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: "64px", alignItems: "center" }}
        >

          {/* ── LEFT: stacked cards + side arrows ── */}
          <div style={{ position: "relative" }}>
            {/* Card stack */}
            <div className="flex justify-center items-center h-[400px] lg:h-[250px] sm:h-[450px] md:h-[300px]" style={{ position: "relative"}}>
              {TESTIMONIALS.map((t, i) => {
                const offset = (i - active + total) % total;
                const isActive = offset === 0;
                const isVisible = offset < 3;

                return (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => setActive(i)}
                    style={{
                      position: "absolute",
                      left: 0,
                      right: "48px",        /* leave room for arrows on the right */
                      top: `${offset * 28}px`,
                      transform: `scale(${1 - offset * 0.045})`,
                      transformOrigin: "top center",
                      zIndex: isActive ? 30 : 10 - offset,
                      opacity: isVisible ? 1 : 0,
                      pointerEvents: isVisible ? "auto" : "none",
                      transition: "all 0.45s cubic-bezier(0.4,0,0.2,1)",
                      /* Card styles */
                      background: isActive
                        ? "linear-gradient(145deg, #ffffff 60%, #fff7f0 100%)"
                        : "rgba(255,255,255,0.75)",
                      borderRadius: "20px",
                      border: isActive
                        ? "1px solid rgba(240,106,15,0.25)"
                        : "1px solid rgba(218,223,231,0.7)",
                      boxShadow: isActive
                        ? "0 30px 70px -20px rgba(240,106,15,0.28), 0 8px 24px -8px rgba(0,0,0,0.10)"
                        : "0 4px 16px -4px rgba(0,0,0,0.08)",
                      padding: "24px",
                      textAlign: "left",
                      cursor: "pointer",
                      backdropFilter: "blur(8px)",
                    }}
                    className="md:w-auto w-full"
                  >
                    {/* Avatar + name row */}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                      <div style={{
                        width: "46px", height: "46px", borderRadius: "50%", flexShrink: 0,
                        background: "linear-gradient(135deg, #f5d9b6, #f06a0f)",
                        overflow: "hidden",
                        border: "2px solid rgba(240,106,15,0.3)",
                      }}>
                        <img
                          src={t.avatar}
                          alt={t.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                        />
                      </div>
                      <div>
                        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 700, color: "#0f1b3d", margin: 0, lineHeight: 1.3 }}>
                          {t.name}
                        </p>
                        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "#5a6a7e", margin: "2px 0 0", lineHeight: 1.3 }}>
                          {t.roleShort}
                        </p>
                      </div>
                    </div>

                    {/* Quote text */}
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", lineHeight: 1.75, color: "rgba(15,27,61,0.80)", margin: "0 0 16px" }}>
                      {t.cardText}
                    </p>

                    {/* Stars */}
                    <Stars count={t.stars} />
                  </button>
                );
              })}
            </div>

            {/* Side arrows — vertically centered on the stack */}
            <div className="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:flex md:flex-col gap-[10px] md:z-40 relative top-auto translate-y-0 flex justify-center items-center">
              <button
                onClick={prev}
                aria-label="Précédent"
                style={{
                  width: "44px", height: "44px", borderRadius: "50%",
                  background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(218,223,231,0.9)",
                  backdropFilter: "blur(8px)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                  color: "#0f1b3d",
                  transition: "all 0.15s",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                <ChevronUp size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Suivant"
                style={{
                  width: "44px", height: "44px", borderRadius: "50%",
                  background: "linear-gradient(135deg, #1a1a1a 0%, #e85d04 100%)",
                  border: "none",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                  color: "#fff",
                  transition: "all 0.15s",
                  boxShadow: "0 4px 16px rgba(240,106,15,0.4)",
                }}
              >
                <ChevronDown size={18} />
              </button>
            </div>
          </div>

          {/* ── RIGHT: featured quote ── */}
          <div style={{ paddingLeft: "8px" }}>
            {/* Big bold title */}
            <h3 style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(16px, 2vw, 20px)",
              fontWeight: 800,
              lineHeight: 1.25,
              letterSpacing: "-0.025em",
              color: "#0d0d0d",
              margin: "0 0 32px",
              transition: "opacity 0.3s",
            }}>
              {current.featuredTitle}
            </h3>

            {/* Quote block */}
            <div style={{ position: "relative", paddingLeft: "44px", marginBottom: "40px" }}>
              {/* Opening guillemet */}
              <span style={{
                position: "absolute",
                left: 0, top: "-6px",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "56px",
                lineHeight: 1,
                color: "#e85d04",
                fontWeight: 900,
                userSelect: "none",
              }}>
                "
              </span>

              <p style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                lineHeight: 1.85,
                color: "rgba(13,13,13,0.72)",
                margin: 0,
              }}>
                {current.fullQuote}
                {/* Closing guillemet */}
                <span style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "36px",
                  lineHeight: 0,
                  verticalAlign: "-0.38em",
                  color: "#e85d04",
                  fontWeight: 900,
                  marginLeft: "4px",
                  userSelect: "none",
                }}>"</span>
              </p>
            </div>

            {/* Signature label */}
            <p style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "19px",
              fontStyle: "italic",
              color: "#0d0d0d",
              margin: "0 0 18px",
              letterSpacing: "-0.01em",
            }}>
              Signature
            </p>

            {/* Avatar + name */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
              <div style={{
                width: "60px", height: "60px", borderRadius: "50%", flexShrink: 0,
                background: "linear-gradient(135deg, #f5d9b6, #f06a0f)",
                overflow: "hidden",
                border: "2px solid rgba(240,106,15,0.3)",
              }}>
                <img
                  src={current.avatar}
                  alt={current.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
              </div>
              <div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", fontWeight: 700, color: "#0d0d0d", margin: 0 }}>
                  {/* Last word in orange */}
                  {current.name.split(" ").slice(0, -1).join(" ")}{" "}
                  <span style={{ color: "#e85d04" }}>{current.name.split(" ").slice(-1)[0]}</span>
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(13,13,13,0.5)", margin: "4px 0 0", lineHeight: 1.4 }}>
                  {current.role}
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "20px", fontWeight: 900, color: "#0d0d0d", minWidth: "28px" }}>
                {String(active + 1).padStart(2, "0")}
              </span>
              <div style={{ flex: 1, height: "1px", background: "rgba(13,13,13,0.15)", position: "relative", borderRadius: "1px" }}>
                <div style={{
                  position: "absolute",
                  top: 0, left: 0,
                  height: "1px",
                  borderRadius: "1px",
                  background: "linear-gradient(90deg, #1a1a1a 0%, #e85d04 100%)",
                  width: `${((active + 1) / total) * 100}%`,
                  transition: "width 0.45s cubic-bezier(0.4,0,0.2,1)",
                }} />
              </div>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "20px", color: "rgba(13,13,13,0.35)", minWidth: "28px", textAlign: "right" }}>
                {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testi-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}