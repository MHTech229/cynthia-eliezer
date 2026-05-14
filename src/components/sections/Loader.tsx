"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const strokeRef = useRef<SVGTextElement>(null);
  const nameRef   = useRef<HTMLDivElement>(null);
  const lineRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !loaderRef.current ||
      !strokeRef.current ||
      !nameRef.current  ||
      !lineRef.current
    ) return;

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.45,
          ease: "power2.in",
          onComplete: () => {
            if (loaderRef.current) {
              loaderRef.current.style.display = "none";
            }
            onComplete();
          },
        });
      },
    });

    tl.to(strokeRef.current, {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: "power2.inOut",
      })
      .to(nameRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      }, "-=0.15")
      .to(lineRef.current, {
        width: 140,
        duration: 0.6,
        ease: "power2.inOut",
      }, "-=0.08")
      .to({}, { duration: 0.55 });

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[10000] flex items-center justify-center flex-col gap-4"
      style={{ background: "#FFFFFF" }}
    >
      {/* SVG "ACO'S" qui se trace */}
      <svg
        viewBox="0 0 320 100"
        overflow="visible"
        style={{ width: "clamp(180px, 40vw, 320px)", height: "auto" }}
      >
        <defs>
          <linearGradient id="acoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#1a0a00" />
            <stop offset="50%"  stopColor="#c04a00" />
            <stop offset="100%" stopColor="#f06a0f" />
          </linearGradient>
        </defs>
        <text
          ref={strokeRef}
          x="50%"
          y="82"
          textAnchor="middle"
          fill="none"
          stroke="url(#acoGrad)"
          strokeWidth="1.5"
          fontSize="88"
          fontFamily="Inter, sans-serif"
          fontWeight="800"
          style={{
            strokeDasharray: 1800,
            strokeDashoffset: 1800,
          }}
        >
          ACO'S
        </text>
      </svg>

      {/* "by Cynthia Eliezer" */}
      <div
        ref={nameRef}
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "11px",
          fontWeight: "bold",
          letterSpacing: "0.45em",
          color: "rgba(240, 106, 15, 0.65)",
          textTransform: "uppercase",
          opacity: 0,
        }}
      >
        by Cynthia Eliezer
      </div>

      {/* Ligne orangée */}
      <div
        ref={lineRef}
        style={{
          width: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, #f06a0f, transparent)",
        }}
      />
    </div>
  );
}