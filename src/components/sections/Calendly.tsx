"use client";

import { ArrowLeft, Clock, CalendarDays, Globe, ChevronLeft, ChevronRight } from "lucide-react";

const week = ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"];
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const offset = 5;
const available = new Set([4, 5, 7, 11, 12, 14, 18, 19, 21, 25, 26, 28]);

export default function Calendly() {
  const CALENDLY_URL =
  "https://calendly.com/acospvv/30min" +
  "?background_color=141414&text_color=ffffff&primary_color=f5c518";
  return (
    <section id="contact" className="px-6 lg:py-20 py-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center gap-3 text-center">
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
            · Qu'attends-tu ?
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
            <span className="brand-gradient-text px-2" style={{ fontStyle: "italic" }}> Réserve{" "} ton interview</span>
            <br />
            <span style={{ fontStyle: "italic" }}>maintenant.</span>
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
        </div>
        <div className="relative mt-2 rounded-3xl bg-white/30 p-2 shadow-[0_0_30px_rgba(240,106,15,0.25)]">
          <iframe
            src="https://calendly.com/acospvv/30min"
            width="100%"
            height="700"
            frameBorder="0"
            scrolling="no"
            style={{
              display: "block",
              minWidth: "320px",
              border: "none",
            }}
            title="Réserver un appel découverte avec Cynthia Eliezer"
          />
        </div>
      </div>
    </section>
  );
}