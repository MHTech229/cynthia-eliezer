"use client";

import { ArrowLeft, Clock, CalendarDays, Globe, ChevronLeft, ChevronRight } from "lucide-react";

const week = ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"];
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const offset = 5;
const available = new Set([4, 5, 7, 11, 12, 14, 18, 19, 21, 25, 26, 28]);

export default function Calendly() {
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
          <div className="absolute inset-0 rounded-3xl p-px brand-gradient [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude]" />
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl bg-white lg:grid-cols-[1fr_1.2fr]">
            <aside className="border-b border-[#1a1a1a14] p-8 lg:border-b-0 lg:border-r">
              <button className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1a1a1a14] text-[#0f0f0f]">
                <ArrowLeft className="h-4 w-4" />
              </button>
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#f5d9b6] to-[#f06a0f]" />
              <p className="mt-3 text-sm font-semibold text-[#0f0f0f]">Cynthia Eliezer</p>
              <h3 className="mt-1 font-sans text-2xl font-bold tracking-tight text-[#0f1b3d]">Appel découverte</h3>
              <ul className="mt-8 space-y-3 text-sm text-[#3a3a3a]">
                <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#f06a0f]" /> 30 min</li>
                <li className="flex items-start gap-2"><CalendarDays className="mt-0.5 h-4 w-4 text-[#f06a0f]" /> Web conferencing details provided upon confirmation.</li>
              </ul>
            </aside>
            <main className="p-8">
              <h2 className="font-sans text-xl font-bold text-[#0f1b3d]">Select a Date &amp; Time</h2>
              <div className="mt-5 flex items-center justify-between">
                <button className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5"><ChevronLeft className="h-5 w-5" /></button>
                <p className="font-sans text-base font-bold italic text-[#0f1b3d]">May 2026</p>
                <button className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5"><ChevronRight className="h-5 w-5" /></button>
              </div>
              <div className="mt-3 grid grid-cols-7 gap-1 text-center text-xs font-bold italic text-[#0f1b3d]">
                {week.map((d) => <div key={d} className="py-2">{d}</div>)}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: offset }).map((_, i) => <div key={`e${i}`} />)}
                {days.map((d) => {
                  const isAvail = available.has(d);
                  return (
                    <button key={d} disabled={!isAvail} className={`flex h-10 items-center justify-center rounded-full text-sm font-bold italic transition ${isAvail ? "bg-[#e7f0ff] text-[#1a73e8] hover:bg-[#1a73e8] hover:text-white" : "text-[#9a9a9a]"}`}>
                      {d}
                    </button>
                  );
                })}
              </div>
              <div className="mt-6 border-t border-[#1a1a1a14] pt-4">
                <p className="text-xs font-bold italic text-[#0f1b3d]">Time zone</p>
                <div className="mt-1 inline-flex items-center gap-2 text-sm font-bold italic text-[#0f1b3d]">
                  <Globe className="h-4 w-4" /> UTC Time
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}