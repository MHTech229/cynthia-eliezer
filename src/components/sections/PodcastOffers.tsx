"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function HeadphonesIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 20.25C20.83 20.25 18.25 22.83 18.25 26V34C18.25 37.17 20.83 39.75 24 39.75C27.17 39.75 29.75 37.17 29.75 34V26C29.75 22.83 27.17 20.25 24 20.25ZM28.25 34C28.25 36.34 26.34 38.25 24 38.25C21.66 38.25 19.75 36.34 19.75 34V32.75H28.25V34ZM28.25 28.25H26C25.59 28.25 25.25 28.59 25.25 29C25.25 29.41 25.59 29.75 26 29.75H28.25V31.25H19.75V29.75H22C22.41 29.75 22.75 29.41 22.75 29C22.75 28.59 22.41 28.25 22 28.25H19.75V26.75H22C22.41 26.75 22.75 26.41 22.75 26C22.75 25.59 22.41 25.25 22 25.25H19.83C20.18 23.26 21.91 21.75 24 21.75C26.09 21.75 27.82 23.26 28.17 25.25H26C25.59 25.25 25.25 25.59 25.25 26C25.25 26.41 25.59 26.75 26 26.75H28.25V28.25Z" fill="#F06A0F"/>
      <path d="M32.75 32V34C32.75 38.57 29.22 42.33 24.75 42.71V45.25C24.75 45.25 26.9944 45.25 27 45.25C27.924 45.25 27.9706 46.75 27 46.75C27 46.75 21.0258 46.75 21.0001 46.75C20.0473 46.75 20.028 45.25 21 45.25H23.25V42.71C18.78 42.33 15.25 38.57 15.25 34C15.25 34 15.25 32.0084 15.25 32C15.25 31.0399 16.75 31.0252 16.75 32V34C16.75 38 20 41.25 24 41.25C28 41.25 31.25 38 31.25 34C31.25 34 31.25 32.0115 31.25 32.0001C31.25 31.0439 32.75 31.0249 32.75 32Z" fill="#F06A0F"/>
      <path d="M44.75 25.37V22C44.75 10.56 35.44 1.25 24 1.25C12.56 1.25 3.25 10.56 3.25 22V25.37C2.09998 25.7 1.25 26.75 1.25 28V32C1.25 33.52 2.47998 34.75 4 34.75H5.33002C5.66999 36.46 7.19001 37.75 9 37.75C11.07 37.75 12.75 36.07 12.75 34V26C12.75 23.93 11.07 22.25 9 22.25C7.19 22.25 5.66998 23.54 5.33002 25.25H4.75V22C4.75 16.96 6.71002 12.38 9.89001 8.95001L10.82 9.88C11.7998 10.8598 13.3973 10.9294 14.5 10.06C17.23 7.89997 20.51 6.75 24 6.75C27.49 6.75 30.77 7.89996 33.5 10.06C34.61 10.95 36.19 10.87 37.18 9.88001L38.11 8.95002C41.29 12.38 43.25 16.96 43.25 22V25.25H42.67C42.33 23.54 40.81 22.25 39 22.25C36.93 22.25 35.25 23.93 35.25 26V34C35.25 36.07 36.93 37.75 39 37.75C40.81 37.75 42.33 36.46 42.67 34.75H44C45.52 34.75 46.75 33.52 46.75 32V28C46.75 26.75 45.9 25.7 44.75 25.37ZM6.75 26C6.75 24.76 7.76001 23.75 9 23.75C10.24 23.75 11.25 24.76 11.25 26V34C11.25 35.24 10.24 36.25 9 36.25C7.76001 36.25 6.75 35.24 6.75 34V26ZM5.25 26.75V33.25H4C3.31 33.25 2.75 32.69 2.75 32V28C2.75 27.31 3.31 26.75 4 26.75H5.25ZM36.12 8.82001C35.67 9.26996 34.95 9.29999 34.43 8.89002C31.44 6.51001 27.83 5.25 24 5.25C20.17 5.25 16.56 6.51001 13.57 8.89001C13.05 9.29998 12.33 9.26995 11.88 8.82L10.95 7.89001C14.38 4.70996 18.96 2.75 24 2.75C29.04 2.75 33.62 4.70996 37.05 7.89001L36.12 8.82001ZM41.25 34C41.25 35.24 40.24 36.25 39 36.25C37.76 36.25 36.75 35.24 36.75 34V26C36.75 24.76 37.76 23.75 39 23.75C40.24 23.75 41.25 24.76 41.25 26V34ZM45.25 32C45.25 32.69 44.69 33.25 44 33.25H42.75V26.75H44C44.69 26.75 45.25 27.31 45.25 28V32Z" fill="#F06A0F"/>
      <path d="M19.7413 20.1367C22.2354 18.3223 25.7645 18.3223 28.2587 20.1366C29.02 20.6904 29.9465 19.5081 29.1417 18.9238C27.6358 17.8291 25.8575 17.25 24.0001 17.25C22.1427 17.25 20.3645 17.829 18.8587 18.9237C18.1075 19.4697 18.9611 20.7004 19.7413 20.1367Z" fill="#F06A0F"/>
      <path d="M30.9111 16.4932C28.8984 15.0254 26.5088 14.25 24 14.25C21.4912 14.25 19.1015 15.0254 17.0889 16.4932C16.7539 16.7373 16.6807 17.207 16.9238 17.541C17.168 17.8769 17.6377 17.9482 17.9717 17.7061C19.7265 16.4258 21.8115 15.75 24 15.75C26.1883 15.75 28.2731 16.4257 30.0281 17.7059C30.7985 18.2678 31.697 17.066 30.9111 16.4932Z" fill="#F06A0F"/>
    </svg>
  );
}

function EpisodeCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-[#ede8e0] bg-white p-8 shadow-sm">
      <HeadphonesIcon />
      <h3 className="text-xl font-semibold text-[#0f0f0f]">{title}</h3>
      <div className="text-[14px] leading-6 text-[#0d0d0d]/70">{children}</div>
    </div>
  );
}

function VideoCard({ src, alt, link }: { src: string; alt: string; link: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#1a0a00] aspect-video">
      <img src={src} alt={alt} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <a
        href={link}
        className="absolute bottom-4 left-4 inline-flex items-center gap-2.5 rounded-full bg-white/95 py-1.5 pl-1.5 pr-5 shadow-md transition hover:scale-[1.02]"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e85d04]">
          <Play className="h-3.5 w-3.5 fill-white text-white" />
        </span>
        <span className="text-sm font-semibold text-[#0f0f0f]">Explore Studios</span>
      </a>
    </div>
  );
}

export default function PodcastOffers() {
  const titleRef  = useRef<HTMLHeadingElement>(null);
  const video1Ref = useRef<HTMLDivElement>(null);
  const video2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Titre - fade up
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Vidéo 1 - révélation depuis la droite
      gsap.fromTo(
        video1Ref.current,
        { opacity: 0, x: 24 },
        {
          opacity: 1, x: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: video1Ref.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Vidéo 2 - révélation depuis la gauche
      gsap.fromTo(
        video2Ref.current,
        { opacity: 0, x: -24 },
        {
          opacity: 1, x: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: video2Ref.current,
            start: "top 85%",
            once: true,
          },
        }
      );

    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="interview-feature" className="bg-[#FAF8F4] px-6 lg:py-20 py-8">
      <div className="mx-auto max-w-[1200px]">

        <p className="text-base font-semibold italic text-[#e85d04]">
          "Je suis comme toi, moi aussi j'ai des peurs..."
        </p>

        <h2
          ref={titleRef}
          style={{ opacity: 0 }}
          className="mt-4 max-w-[720px] text-xl font-black leading-snug tracking-tight text-[#0f0f0f] sm:text-2xl"
        >
          C'est ainsi que{" "}
          <span className="font-black brand-gradient-text">Joëlle DAGO-SERRY</span>
          <br />
          <span className="text-[#e85d04]">✨Coach-Fée✨</span>
          {" "}m'a parlé dans cette 2e partie de notre échange À Cœur Ouvert.
        </h2>

        <div className="mt-12 flex flex-col gap-5">

          {/* Ligne 1 */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_2fr]">
            <EpisodeCard title="La Partie 1">
              <p>
                🎙️ Et si on parlait VRAIMENT de leadership ?
                Authentique. Spirituel. Puissant. Mais vulnérable aussi.
                1ère partie de l'épisode 1 de la saison 2« À Cœur Ouvert - Des parcours, des voix, des vérités» avec une invitée qui transforme chaque mot en déclic :
                <br /><strong>Joëlle DAGO-SERRY ✨Coach-Fée ✨</strong>
              </p>
            </EpisodeCard>
            <div ref={video1Ref} style={{ opacity: 0 }}>
              <VideoCard
                link="https://www.linkedin.com/feed/update/urn:li:activity:7359523785370181634/"
                src="/assets/episode-joelle-partie1.png"
                alt="Leadership : La Vérité - Partie 1 avec Joëlle Dago-Serry"
              />
            </div>
          </div>

          {/* Ligne 2 */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[2fr_1fr]">
            <div ref={video2Ref} style={{ opacity: 0 }}>
              <VideoCard
                link="https://www.linkedin.com/feed/update/urn:li:activity:7359863530918965249/"
                src="/assets/episode-joelle-partie2.png"
                alt="Leadership : La Vérité - Partie 2 avec Joëlle Dago-Serry"
              />
            </div>
            <EpisodeCard title="La Partie 2">
              <p className="mb-3">Elle nous parle de :</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-sm">🟢</span>
                  <span>Ses peurs, même au sommet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-sm">🟢</span>
                  <span>Pourquoi l'accompagnement transforme vraiment les trajectoires</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-sm">🟢</span>
                  <span>Et cette vérité essentielle : chaque personne a quelque chose de précieux à offrir</span>
                </li>
              </ul>
            </EpisodeCard>
          </div>

        </div>
      </div>
    </section>
  );
}