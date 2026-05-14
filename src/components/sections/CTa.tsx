import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCta() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const cardLeftRef = useRef<HTMLDivElement>(null);
  const cardCenterRef = useRef<HTMLDivElement>(null);
  const cardRightRef = useRef<HTMLDivElement>(null);
  const cardBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Titre + texte + CTA en stagger
      gsap.from([titleRef.current, textRef.current, ctaRef.current], {
        opacity: 0,
        y: 32,
        duration: 0.75,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          once: true,
        },
      });

      // Card gauche : entre depuis la gauche
      gsap.from(cardLeftRef.current, {
        opacity: 0,
        x: -40,
        rotation: -10,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Card centrale : entre depuis le bas
      gsap.from(cardCenterRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.9,
        ease: "power2.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Card droite : entre depuis la droite
      gsap.from(cardRightRef.current, {
        opacity: 0,
        x: 40,
        rotation: 10,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Card bottom : entre depuis le bas
      gsap.from(cardBottomRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="px-3 py-12" ref={sectionRef}>
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-3xl brand-gradient p-8 sm:p-12 lg:p-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <h2
              ref={titleRef}
              className="font-manrope text-2xl font-extrabold leading-none tracking-tight text-transparent sm:text-3xl lg:text-4xl"
              style={{ WebkitTextStroke: "1.5px white" }}
            >
              ACO's
            </h2>
            <p
              ref={textRef}
              className="mt-6 font-poppins text-md text-white sm:text-xl lg:text-2xl"
            >
              Et si c'était votre tour ?<br />
              Vous aussi vous portez une histoire qui mérite d'être entendue.<br />
              ACO'S vous ouvre ses portes.
            </p>
            <a
              ref={ctaRef}
              href="#"
              className="sm:w-fit w-full inline-flex items-center gap-1 rounded-xl !bg-white px-7 py-4 text-base font-semibold transition hover:scale-[1.02] hover:shadow-lg"
            >
              <span className="brand-gradient-text">Ecris moi en{" "}message privé</span>
            </a>
          </div>

          <div className="relative h-[320px] w-full sm:h-[420px]">
            <div
              ref={cardLeftRef}
              className="absolute left-4 top-0 w-44 rotate-[-6deg] rounded-2xl bg-white/15 p-3 backdrop-blur sm:w-52"
            >
              <div className="aspect-square rounded-xl bg-gradient-to-br from-white/30 to-white/5" />
              <p className="mt-2 text-xs font-bold text-white">Episode live</p>
            </div>
            <div
              ref={cardCenterRef}
              className="absolute left-1/2 top-6 w-56 -translate-x-1/2 rounded-3xl bg-gradient-to-br from-[#f06a0f] to-[#2a1208] p-3 sm:w-72"
            >
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-white/20 to-black/30" />
            </div>
            <div
              ref={cardRightRef}
              className="absolute right-4 top-24 w-44 rotate-[6deg] rounded-2xl bg-white/15 p-3 backdrop-blur sm:w-52"
            >
              <div className="aspect-square rounded-xl bg-gradient-to-br from-white/30 to-white/5" />
              <p className="mt-2 text-xs font-bold text-white">+5K followers</p>
            </div>
            <div
              ref={cardBottomRef}
              className="absolute bottom-0 left-2 w-56 rounded-2xl bg-white/10 p-4 backdrop-blur sm:w-64"
            >
              <p className="font-manrope text-base font-extrabold text-white">Cynthia ACO's</p>
              <p className="text-xs text-white/80">Des échanges fun et humains</p>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/30">
                <div className="h-full w-1/2 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}