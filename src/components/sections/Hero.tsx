"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const badgeRef  = useRef<HTMLDivElement>(null);
  const titleRef  = useRef<HTMLHeadingElement>(null);
  const ctaRef    = useRef<HTMLAnchorElement>(null);
  const photoRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !ctaRef.current || !photoRef.current || !badgeRef.current) return;

    const tl = gsap.timeline({ delay: 0.5 });

    // Badge → titre → CTA en séquence rapide
    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    )
    .fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.2"
    )
    .fromTo(
      ctaRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
      "-=0.15"
    );

    // Photo depuis la droite - indépendante, légèrement décalée
    gsap.fromTo(
      photoRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.9, ease: "power2.out", delay: 0.6 }
    );

    return () => { tl.kill(); };
  }, []);

  return (
    <section className="px-3 pt-8">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-3xl brand-gradient">
        <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-[1fr_auto] min-h-[520px] lg:min-h-[640px]">

          {/* Colonne texte */}
          <div className="flex flex-col gap-6 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-24">

            {/* Badge étoiles */}
            <div
              ref={badgeRef}
              style={{ opacity: 0 }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-3.5 w-3.5 text-[#f5c451]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-white">
                <span className="font-bold">4.9/5</span>
                <span className="text-white/70"> · +20 voix inspirantes</span>
              </span>
            </div>

            {/* Titre */}
            <h1
              ref={titleRef}
              style={{ opacity: 0 }}
              className="font-sans text-xl font-black leading-tight tracking-tight text-white sm:text-2xl lg:text-4xl"
            >
              ACO'S - À Cœurs Ouvert's<br />
              <span className="text-white/90">
                Le podcast qui révèle l'humain derrière le leader
              </span>
            </h1>

            <p className="max-w-xl font-poppins text-base text-white/85 sm:text-lg">
              À Cœurs Ouverts, c'est l'interview qui change tout. Pas un template. Pas un script.
              Juste votre histoire, racontée avec force et authenticité.
            </p>

            {/* Avatars */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  "/assets/avatar-1.jpg",
                  "/assets/avatar-2.jpg",
                  "/assets/avatar-3.jpg",
                  "/assets/avatar-4.jpg",
                ].map((src, i) => (
                  <div key={i} className="h-8 w-8 rounded-full overflow-hidden border-2 border-[#0f0a08]">
                    <img src={src} alt="" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-white">
                <span className="font-bold">2K+</span>
                <span className="text-white/70"> professionnels me suivent</span>
              </p>
            </div>

            {/* CTA */}
            <a
              ref={ctaRef}
              style={{ opacity: 0 }}
              target="_blank"
              href="https://www.linkedin.com/in/a-coeurs-ouverts/"
              className="sm:w-fit w-full inline-flex items-center gap-1 rounded-xl !bg-white px-7 py-4 text-base font-semibold transition hover:scale-[1.02] hover:shadow-lg"
            >
              <span className="brand-gradient-text">
                Proposez votre Histoire
              </span>
            </a>
          </div>

          {/* Photo Cynthia */}
          <div
            ref={photoRef}
            style={{ opacity: 0 }}
            className="relative flex items-end justify-center lg:justify-end"
          >
            <img
              src="/assets/cynthia-hero.png"
              alt="Cynthia ELIEZER, hôte du podcast À Cœurs Ouverts"
              width={1024}
              height={1280}
              className="h-full max-h-[640px] w-full max-w-[560px] object-cover object-bottom lg:max-h-[720px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}