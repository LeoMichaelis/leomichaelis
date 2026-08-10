import Image from "next/image";

export function Universe() {
  return (
    <section
      id="mon-univers"
      className="relative overflow-hidden bg-[#17131f] py-12 text-white sm:py-16"
    >
      <div className="absolute left-[-10%] top-[-20%] size-[520px] rounded-full bg-[#7657e8]/20 blur-[120px]" />

      <div className="relative mx-auto w-[min(1380px,calc(100%-32px))]">
        <div className="mb-12 flex flex-col justify-between gap-8 px-2 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#a98cff]">
              Univers interactif
            </p>

            <h2 className="max-w-5xl text-[clamp(3rem,7vw,6.5rem)] font-black leading-[1.1] tracking-[-0.065em]">
              Chaque detail raconte
              <span className="text-[#a98cff]"> son histoire.</span>
            </h2>
          </div>
        </div>

        <div className="relative h-[72svh] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#211a2d] shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
          <Image
            src="/room-placeholder.webp"
            alt="Aperçu de l’univers interactif du portfolio"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1380px"
          />
        </div>
      </div>
    </section>
  );
}