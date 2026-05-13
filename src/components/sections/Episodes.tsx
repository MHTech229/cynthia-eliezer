import { Mic, Clock, Folder, Play } from "lucide-react";

const EPISODES = [
  {
    n: "11",
    title: "Je ne construis pas des stratégies. Je construis des transformations.",
    author: "Alexia Uri",
    duration: "34min47s",
    category: "Histoire",
    desc: "Alexia rayonne sur tous les écrans.\nMais derrière les chiffres et les stratégies se cache une femme qui a dû s'arrêter pour s'écouter.Et qui en parle ici , sans filtre , pour la première fois.",
    img: "/assets/episode-alexia.jpg",
    link: "https://youtu.be/YrQP4O-oUAQ?si=Hd1nA7F2I2pjx7xh"
  },
  {
    n: "02",
    title: "Ce que personne ne dit sur la réussite | Conversation à cœur ouvert avec Frédéric William King",
    author: "Frédéric Wiliam King",
    duration: "23min26s",
    category: "Histoire",
    desc: "Dans cet épisode du podcast À Cœurs Ouverts🎙️♥️, j'accueille Frédéric William King pour une conversation simple, sincère et profonde autour du parcours, de la voix et des vérités.Dans cet épisode, Frédéric William King, voix engagée sur LinkedIn",
    img: "/assets/episode-frederic.jpg",
    link: "https://youtu.be/TjkRcXYadzQ?si=4vQRFiplw6riJvtg"
  },
  {
    n: "08",
    title: "Elle ne voulait plus vivre… aujourd'hui elle sauve des jeunes",
    author: "Katia",
    duration: "23min32s",
    category: "Histoire",
    desc: "Katia a grandi dans l'anxiété.\nUn jour, elle ne voulait plus être ici.\nAujourd'hui, elle aide des jeunes à ne pas sombrer.\nDans cet épisode, elle raconte comment elle a transformé sa douleur en mission : accompagner ceux qui vivent le harcèlement, l'isolement et les influences toxiques.",
    img: "/assets/episode-katia.jpg",
    link: "https://youtu.be/uLZYJFpBtdM?si=sRtYoHcxPEgIfTm6"
  },
  {
    n: "09",
    title: "1m90 de puissance, 0% de violence : La leçon de vie de Jean-Marc Colombero.",
    author: "Jean-Marc Colombero",
    duration: "35min59s",
    category: "Histoire",
    desc: "On juge souvent l'écorce sans regarder les racines. Pour ce nouvel épisode d'À Cœurs Ouvert's, j'ai reçu un homme dont la stature impose le respect, mais dont la douceur impose le silence : Jean-Marc Colombero.",
    img: "/assets/episode-jean-marc.jpg",
    link: "https://youtu.be/Tpi5e_5kQUg?si=dHLCG_MPsVfTraXS"
  },
];

export default function Episodes() {
  return (
    <section id="episodes" className="bg-[#FAF8F4] px-6 lg:py-20 py-8">
      <div className="mx-auto max-w-[1200px]">

        {/* Header */}
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0d0d0d]/50">
          Top Trending
        </p>
        <h2 className="mt-3 max-w-2xl text-2xl font-black leading-tight tracking-tight text-[#0f0f0f] sm:text-4xl">
          Découvrez les dernières<br />
          Tendances de{" "}
          <span className="text-[#e85d04]">ACO's</span>
        </h2>

        {/* Grille 2 colonnes */}
        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-16 lg:grid-cols-2">
          {EPISODES.map((e) => (
            <article key={e.n} className="flex flex-col gap-4">

              {/* Thumbnail */}
              <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a]">
                <img
                  src={e.img}
                  alt={e.title}
                  className="aspect-[16/10] w-full object-cover"
                />
                {/* Overlay bas */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                {/* Badge épisode */}
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-[#111111]/90 py-1.5 pl-1.5 pr-4 backdrop-blur-sm">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e85d04]">
                    <Play className="h-3 w-3 fill-white text-white" />
                  </span>
                  <span className="text-xs font-semibold text-white">
                    Episode:{" "}
                    <span className="text-[#e85d04]">{e.n}</span>
                  </span>
                </div>
              </div>

              {/* Titre */}
              <h3 className="text-[1.35rem] font-black leading-snug tracking-tight text-[#0f0f0f]">
                {e.title}
              </h3>

              {/* Meta */}
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-[#0d0d0d]/60">
                <li className="inline-flex items-center gap-1.5">
                  <Mic className="h-3.5 w-3.5 text-[#e85d04]" />
                  {e.author}
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[#e85d04]" />
                  {e.duration}
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <Folder className="h-3.5 w-3.5 text-[#e85d04]" />
                  {e.category}
                </li>
              </ul>

              {/* Description */}
              <p className="text-[14px] leading-6 text-[#0d0d0d]/70 whitespace-pre-line">
                {e.desc}
              </p>

              {/* Lien */}
              <a
                href={e.link}
                className="inline-flex w-fit items-center gap-1 text-sm font-semibold brand-gradient-text underline"
              >
                Lire cette{" "}
                Episode
              </a>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}