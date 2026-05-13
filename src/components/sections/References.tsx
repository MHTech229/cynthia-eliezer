const REFERENCES = [
  {
    name: "FRÉDÉRIC WILLIAM KINGUE 👑",
    role: "LINKEDIN COMMUNITY MANAGER",
    img: "/assets/ref-frederic.png",
    align: "right" as const,
    marginTop: 80,
    height: 507,
    bw: false,
  },
  {
    name: "ALEXIA URI",
    role: "MENTORE BUSINESS",
    img: "/assets/ref-alexia.png",
    align: "left" as const,
    marginTop: 40,
    height: 561,
    bw: false,
  },
  {
    name: "JOËLLE DAGO-SERRY",
    role: "PORTE-PAROLE POWER HOUSE | CHRONIQUEUSE RMC (GRANDES GUEULES)",
    img: "/assets/ref-joelle.png",
    align: "right" as const,
    marginTop: 0,
    height: 527,
    bw: false,
  },
  {
    name: "JEAN-MARC COLOMBERO",
    role: "FORMATEUR DÉFENSE",
    img: "/assets/ref-jean-marc.png",
    align: "left" as const,
    marginTop: 40,
    height: 506,
    bw: false,
  },
  {
    name: "NATHALIE JAMAIN",
    role: "PRÉSIDENTE DE LA DÉLÉGATION FCE PROVENCE VERTE",
    img: "/assets/ref-nathalie.png",
    align: "right" as const,
    marginTop: 80,
    height: 507,
    bw: true,
  },
];

// Orange beam positions as % of total width — matching Figma gaps between cards
// Beams sit at the junction between card 0-1, 1-2, 2-3, 3-4
const BEAM_POSITIONS = ["20%", "40%", "60%", "80%"];

export default function References() {
  return (
    <section
      id="references"
      style={{
        background: "#FEFBF3",
        overflow: "hidden",
        paddingTop: "72px",
        paddingBottom: "72px",
      }}
      className="flex flex-col justify-center items-center"
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
        {/* Header */}
        <div className="lg:mb-12 mb-4" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", textAlign: "center" }}>
          <p className="brand-gradient-text" style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            margin: 0,
          }}>
            Mes Références
          </p>
          <h2 style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(20px, 4vw, 36px)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#0f0f0f",
            margin: 0,
          }}>
            Ils ont{" "}
            <span style={{ fontStyle: "italic", color: "#e85d04" }}>racontés</span>
            <br />
            <span style={{ fontStyle: "italic" }}>leurs histoires.</span>{" "}
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #1a1a1a, #e85d04)",
              color: "#fff",
              fontSize: "14px",
              verticalAlign: "middle",
            }}>◆</span>
          </h2>
        </div>
      </div>

      {/* ── Cards panoramic strip ── */}
      <div
        className="refs-desktop md:flex justify-center items-center hidden w-5/6"
        style={{
          position: "relative",
          gap: "0",
          paddingLeft: "0",
          paddingRight: "0",
          overflow: "hidden",
        }}
      >
        {/* Cards */}
        {REFERENCES.map((r, i) => (
          <div
            key={r.name}
            style={{
              position: "relative",
              flex: "1 1 0",
              minWidth: 0,
              height: `${r.height}px`,
              marginTop: `${r.marginTop}px`,
              /* No border-radius on sides that touch other cards — only outer edges */
              borderRadius: i === 0
                ? "0px 0 0 0px"
                : i === REFERENCES.length - 1
                ? "0 0px 0px 0"
                : "0",
              overflow: "hidden",
              zIndex: i === 2 ? 10 : i === 1 || i === 3 ? 5 : 1,
            }}
          >
            {/* Photo + dark overlay */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "#A4A4A4",
              filter: r.bw ? "grayscale(1)" : "none",
            }}>
              <img
                src={r.img}
                alt={r.name}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              {/* Per-card gradient overlay from Figma */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: i === 0
                  ? "linear-gradient(180deg, rgba(28,33,53,0) 0%, #1C2135 100%)"
                  : i === 1
                  ? "linear-gradient(180deg, rgba(28,33,53,0.2) 57%, #1C2135 100%)"
                  : i === 2
                  ? "linear-gradient(180deg, rgba(28,33,53,0.2) 0%, #1C2135 100%)"
                  : i === 3
                  ? "linear-gradient(169deg, rgba(28,33,53,0.3) 52%, #1C2135 92%)"
                  : "linear-gradient(180deg, rgba(28,33,53,0) 0%, #1C2135 100%)",
              }} />
            </div>

            {/* Name + role */}
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "0 16px 20px",
              textAlign: r.align,
              zIndex: 20,
            }}>
              <p style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                color: "rgba(255,255,255,0.85)",
                margin: 0,
                lineHeight: 1.2,
              }}>
                {r.name}
              </p>
              <p style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "10px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "rgba(255,255,255,0.45)",
                margin: "5px 0 0",
                lineHeight: 1.4,
              }}>
                {r.role}
              </p>
            </div>
          </div>
        ))}

        {/* ── Orange light beam dividers ──
            These are absolutely positioned on top of ALL cards,
            matching the Figma Rectangle 520/523/524 elements.
            Each beam = a thin 1px orange line with a soft glow halo,
            spanning the full height of the strip, on top of everything. */}
        {BEAM_POSITIONS.map((left, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left,
              width: "1px",
              zIndex: 40,
              /* Core orange line */
              background: "#e85d04",
              /* Glow halo via box-shadow spread */
              boxShadow: "0 0 12px 3px rgba(240,106,15,0.55), 0 0 32px 8px rgba(240,106,15,0.25)",
              pointerEvents: "none",
            }}
          />
        ))}
      </div>

      {/* ── Mobile grid ── */}
      <div
        className="refs-mobile flex md:hidden w-full h-auto"
        style={{
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          padding: "32px 16px 0",
        }}
      >
        {REFERENCES.map((r) => (
          <article
            key={r.name}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "12px",
              aspectRatio: "3/4",
              background: "#FAFAFA",
              filter: r.bw ? "grayscale(1)" : "none",
            }}
          >
            <img
              src={r.img}
              alt={r.name}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(28,33,53,0.1) 0%, #1C2135 100%)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "10px 12px 14px" }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.03em", color: "rgba(255,255,255,0.85)", margin: 0, lineHeight: 1.2 }}>
                {r.name}
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", color: "rgba(255,255,255,0.45)", margin: "4px 0 0", lineHeight: 1.35 }}>
                {r.role}
              </p>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .refs-desktop { display: flex !important; }
          .refs-mobile  { display: none !important; }
        }
        @media (max-width: 1023px) {
          .refs-desktop { display: none !important; }
          .refs-mobile  { display: grid !important; }
        }
      `}</style>
    </section>
  );
}