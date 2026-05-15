"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    roleShort: "Directeur Général – COO",
    avatar: "/assets/testimonial-laurent.jpg",
    stars: 5,
    cardText:
      "Dans un monde de l'entreprise souvent pollué par des faux-semblants, tu offres un espace de vérité aux leaders. C'est une mission d'utilité publique...",
    featuredTitle:
      "Tu offres un espace de vérité aux leaders. C'est une mission d'utilité publique.",
    fullQuote:
      "Je tiens à te dire mon admiration pour ton travail. Dans un monde de l'entreprise souvent pollué par des faux-semblants, tu offres un espace de vérité aux leaders. C'est une mission d'utilité publique. C'est là que nos visions se rejoignent : la rigueur et la structure ne sont que des outils au service de cette authenticité, pour qu'elle puisse s'exprimer avec force et durabilité.",
  },
  {
    name: "Léticia G. KADINZA",
    role: "Training & Communication Manager",
    roleShort: "Training & Communication Manager",
    avatar: "/assets/testimonial-leticia.jpg",
    stars: 5,
    cardText:
      "Cynthia Eliezer, 'Cycy' est une femme incroyable, dotée d'un pouvoir relationnel indescriptible. Notre collaboration a débuté sur LinkedIn et s'est rapidement transformée en une belle relation professionnelle ...",
    featuredTitle:
      "Cynthia Eliezer, 'Cycy' est une femme incroyable, dotée d'un pouvoir relationnel indescriptible.",
    fullQuote:
      "Participer à son Podcast 'À Coeurs Ouverts' a été une expérience enrichissante qui m'a permis non seulement de me reconnecter à moi mais aussi de découvrir sa personnalité authentique, ses valeurs profondes et son talent pour créer des liens avec les autres. Je vous la recommande vivement à toute personne cherchant à travailler avec une collaboratrice exceptionnelle, passionnée et bienveillante."
  },
  {
    name: "Dorian Soler",
    role: "Conférencier TEDx · Auteur 'Osons les difficultés'",
    roleShort: "Conférencier TEDx · Auteur",
    avatar: "/assets/testimonial-dorian.jpg",
    stars: 5,
    cardText:
      "Un grand merci à Cynthia pour son podcast dans lequel j'ai eu la chance d'intervenir. Un podcast où l'authenticité et le partage à cœur ouvert sont roi...",
    featuredTitle:
      "Un podcast où l'authenticité et le partage à cœur ouvert sont roi.",
    fullQuote:
      "Un grand merci à Cynthia pour son podcast dans lequel j'ai eu la chance d'intervenir. Un podcast où l'authenticité et le partage à cœur ouvert sont roi. Continue de faire ce que tu fais, c'est magnifique.",
  },
  {
    name: "Rachidath BOURAIMA",
    role: "Coach en expression orale & développement du leadership",
    roleShort: "Coach en expression orale",
    avatar: "/assets/testimonial-rachidath.jpg",
    stars: 5,
    cardText:
      "On sous-estime souvent la puissance d’un bon interviewer. Et pourtant … Une bonne personne en face de toi peut complètement transformer la qualité de ce que tu partages....",
    featuredTitle:
      "Les retours ont été élogieux, et cela en dit long sur la qualité de l’espace qu’elle crée.",
    fullQuote:
      "On sous-estime souvent la puissance d’un bon interviewer. Et pourtant… Une bonne personne en face de toi peut complètement transformer la qualité de ce que tu partages. C'est ce que j'ai vécu avec Cynthia autour du podcast “À cœur ouvert”. Une expérience exceptionnelle. L’échange était fluide, humain, sincère. Et surtout… impactant. Les retours ont été élogieux, et cela en dit long sur la qualité de l’espace qu’elle crée. Un espace où tu te sens vraiment écoutée. Un espace où tu peux déposer tes mots sans filtre. Un espace où tu te surprends toi-même par la profondeur de ce que tu exprimes.",
  },
  {
    name: "Jean-Marc COLOMBERO",
    role: "Formateur Défense · Expert en management et leadership",
    roleShort: "Formateur Défense · Expert management",
    avatar: "/assets/testimonial-jean-marc.jpg",
    stars: 5,
    cardText:
      "J'ai passé un très bon moment avec Cynthia, aussi bien pendant la préparation que pendant l'enregistrement du podcast. Cet investissement intellectuel m'a permis...",
    featuredTitle:
      "J'ai passé un très bon moment avec Cynthia, aussi bien pendant la préparation que pendant l'enregistrement du podcast.",
    fullQuote:
      "J'ai passé un très bon moment avec Cynthia, aussi bien pendant la préparation que pendant l'enregistrement du podcast. Cet investissement intellectuel m'a permis d'enrichir la compréhension de mon sujet et la nécessité de me remettre perpétuellement en question... cent mille recommandations😁❤️💪"
  },
  {
    name: "Katia Énergétique",
    role: "Coach · Énergéticienne en individuel",
    roleShort: "Coach · Énergéticienne en individuel",
    avatar: "/assets/testimonial-katia.jpg",
    stars: 5,
    cardText:
      "Une personne exceptionnelle qui sait cerner les atouts et valeurs de ses invités. Elle mène les podcasts avec coeur, amour de l'humain et sincérité....",
    featuredTitle:
      "Une personne exceptionnelle qui sait cerner les atouts et valeurs de ses invités.",
    fullQuote:
      "Une personne exceptionnelle qui sait cerner les atouts et valeurs de ses invités. Elle mène les podcasts avec coeur, amour de l'humain et sincérité. Un moment précieux passé en compagnie de Cynthia Eliezer. Longue vie à ton podcast 😀🙏"
  },
  {
    name: "Aurélien Danchin",
    role: "Coach de cadres | Réussir sans se renier",
    roleShort: "Coach de cadres | Réussir sans se renier",
    avatar: "/assets/testimonial-aurelien.jpg",
    stars: 5,
    cardText:
      "J’ai eu la chance d’être l’invité du podcast de Cynthia et je peux dire que ç’a été un super moment. Elle a su me mettre à l’aise et me laisser l’espace pour me livrer pleinement à son micro. Je la recommande vivement !",
    featuredTitle:
      "J’ai eu la chance d’être l’invité du podcast de Cynthia et je peux dire que ç’a été un super moment.",
    fullQuote:
      "J’ai eu la chance d’être l’invité du podcast de Cynthia et je peux dire que ç’a été un super moment. Elle a su me mettre à l’aise et me laisser l’espace pour me livrer pleinement à son micro. Je la recommande vivement !",
  },
  {
    name: "Frédéric William KINGUE",
    role: "Top 100 Leaders & Entrepreneurs Afrique Francophone · Coach Emploi & Management",
    roleShort: "Top 100 Leaders Afrique · Coach Emploi",
    avatar: "/assets/testimonial-frederic.jpg",
    stars: 5,
    cardText:
      "Échanger avec Cynthia sur son podcast a été un vrai moment de vérité. Une parole posée. Une vision lucide. De la bienveillance. Une authenticité qui fait du bien...",
    featuredTitle:
      "Échanger avec Cynthia sur son podcast a été un vrai moment de vérité.",
    fullQuote:
      "Échanger avec Cynthia sur son podcast a été un vrai moment de vérité. Une parole posée. Une vision lucide. De la bienveillance qui fait du bien. Merci pour cet échange riche, sain, et profondément humain. Si vous ne connaissez pas encore À Cœurs Ouverts 🎙️❤️, je vous recommande vivement de suivre Cynthia et de découvrir des parcours qui touchent le fond de la richesse en chaque personne.",
  },
  {
    name: "Feriel Bahri",
    role: "🎙️ Podcast en préparation : Femmes x Entrepreneuriat.Pas des rôles modèles parfaits.",
    roleShort: "Podcaster · Femmes & Entrepreneuriat",
    avatar: "/assets/testimonial-feriel.jpg",
    stars: 5,
    cardText:
      "J’ai eu le plaisir de participer au podcast de Cynthia, et je tiens à souligner la qualité de son travail. Cynthia a ce talent rare de créer un espace à la fois sécurisant, fluide et profondément humain. Son écoute est réelle, attentive, sans jamais être intrusive. Elle pose des questions justes, pertinentes, qui amènent naturellement à aller plus loin que les réponses convenues...",
    featuredTitle:
      "Participer à son podcast n’est pas un simple exercice d’interview, c’est une vraie rencontre, guidée avec douceur, curiosité et professionnalisme.",
    fullQuote:
      "J’ai eu le plaisir de participer au podcast de Cynthia, et je tiens à souligner la qualité de son travail. Cynthia a ce talent rare de créer un espace à la fois sécurisant, fluide et profondément humain. Son écoute est réelle, attentive, sans jamais être intrusive. Elle pose des questions justes, pertinentes, qui amènent naturellement à aller plus loin que les réponses convenues. On sent une véritable intelligence émotionnelle, beaucoup de bienveillance, mais aussi une grande maîtrise de son sujet. Elle sait mettre en confiance, valoriser la parole de son invité et faire émerger des échanges authentiques, sans artifice."
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

  // Refs pour les animations scroll
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsColRef = useRef<HTMLDivElement>(null);
  const quoteColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Header : fade + slide up
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 28,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 88%",
          once: true,
        },
      });

      // Colonne gauche (cards) : fade + slide depuis la gauche
      gsap.from(cardsColRef.current, {
        opacity: 0,
        x: -36,
        duration: 0.85,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsColRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // Colonne droite (quote) : fade + slide depuis la droite
      gsap.from(quoteColRef.current, {
        opacity: 0,
        x: 36,
        duration: 0.85,
        ease: "power2.out",
        scrollTrigger: {
          trigger: quoteColRef.current,
          start: "top 85%",
          once: true,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
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

        {/* - Header - */}
        <div ref={headerRef} style={{ textAlign: "center", marginBottom: "32px" }}>
          <span className="brand-gradient-text" style={{
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
            color: "black",
          }}>
            <span className="brand-gradient-text px-2" style={{ fontStyle: "italic" }}> Ils{" "}ont franchis</span>
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

        {/* - Body grid - */}
        <div
          className="testi-grid"
          style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: "64px", alignItems: "center" }}
        >

          {/* - LEFT: stacked cards + side arrows - */}
          <div ref={cardsColRef} style={{ position: "relative" }}>
            <div className="flex justify-center items-center h-[400px] lg:h-[250px] sm:h-[450px] md:h-[300px]" style={{ position: "relative" }}>
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
                      right: "48px",
                      top: `${offset * 28}px`,
                      transform: `scale(${1 - offset * 0.045})`,
                      transformOrigin: "top center",
                      zIndex: isActive ? 30 : 10 - offset,
                      opacity: isVisible ? 1 : 0,
                      pointerEvents: isVisible ? "auto" : "none",
                      transition: "all 0.45s cubic-bezier(0.4,0,0.2,1)",
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

                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", lineHeight: 1.75, color: "rgba(15,27,61,0.80)", margin: "0 0 16px" }}>
                      {t.cardText}
                    </p>

                    <Stars count={t.stars} />
                  </button>
                );
              })}
            </div>

            {/* Side arrows */}
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

          {/* - RIGHT: featured quote - */}
          <div ref={quoteColRef} style={{ paddingLeft: "8px" }}>
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

            <div style={{ position: "relative", paddingLeft: "44px", marginBottom: "40px" }}>
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
                />
              </div>
              <div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", fontWeight: 700, color: "#0d0d0d", margin: 0 }}>
                  {current.name.split(" ").slice(0, -1).join(" ")}{" "}
                  <span style={{ color: "#e85d04" }}>{current.name.split(" ").slice(-1)[0]}</span>
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(13,13,13,0.5)", margin: "4px 0 0", lineHeight: 1.4 }}>
                  {current.role}
                </p>
              </div>
            </div>

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