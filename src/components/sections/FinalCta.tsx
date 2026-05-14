export default function FinalCta() {
  return (
    <section className="px-3 lg:py-12 py-8">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-3xl brand-gradient p-8 sm:p-12 lg:p-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-manrope text-6xl font-extrabold leading-none tracking-tight text-transparent sm:text-7xl lg:text-8xl" style={{ WebkitTextStroke: "1.5px white" }}>
              ACO's
            </h2>
            <p className="mt-6 font-poppins text-xl text-white sm:text-2xl lg:text-3xl">
              Et si c'était votre tour ?<br />
              Vous aussi vous portez une histoire qui mérite d'être entendue.<br />
              ACO'S vous ouvre ses portes.
            </p>
            <a href="#" className="mt-8 inline-flex w-fit rounded-lg bg-white px-6 py-4 font-poppins text-lg font-bold tracking-tight">
              <span className="brand-gradient-text">Écris-moi en message privé</span>
            </a>
          </div>
          <div className="relative h-[320px] w-full sm:h-[420px]">
            <div className="absolute left-4 top-0 w-44 rotate-[-6deg] rounded-2xl bg-white/15 p-3 backdrop-blur sm:w-52  sm:block hidden">
              <div className="aspect-square rounded-xl h-72 w-full overflow-hidden bg-gradient-to-br from-white/30 to-white/5" >
                <img src="/assets/cta-1.jpg" alt="" />
              </div>
              <p className="mt-2 text-xs font-bold text-white">Episode live</p>
            </div>
            <div className="absolute left-1/2 top-6 w-56 -translate-x-1/2 rounded-3xl bg-gradient-to-br from-[#f06a0f] to-[#2a1208] p-3 sm:w-72">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-white/20 to-black/30 flex justify-end items-end" >
                <img className="w-full" src="/assets/cynthia-hero.png" alt="" />
              </div>
            </div>
            <div className="absolute right-4 top-24 w-44 rotate-[6deg] rounded-2xl bg-white/15 p-3 backdrop-blur sm:w-52 sm:block hidden">
              <div className="aspect-square rounded-xl h-72 w-full overflow-hidden bg-gradient-to-br from-white/30 to-white/5" >
                <img src="/assets/cta-2.jpg" alt="" />
              </div>
              <p className="mt-2 text-xs font-bold text-white">+5K followers</p>
            </div>
            <div className="absolute bottom-0 left-2 w-56 rounded-2xl bg-white/10 p-4 backdrop-blur sm:w-64">
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