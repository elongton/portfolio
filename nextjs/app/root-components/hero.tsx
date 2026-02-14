import { Menu } from "@/components/menu";
import Image from "next/image";

/**
 * Full-width hero with responsive background positioning/zoom.
 * Tweak scale/object-position per breakpoint via Tailwind classes below.
 */
export const Hero = () => {
  return (
    <section className="relative isolate w-full min-h-[70vh] overflow-hidden bg-slate-900 text-white">
      <Image
        src="/hero_1.png"
        alt="Background image"
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover object-[50%_40%] sm:object-[50%_35%] md:object-[50%_30%] lg:object-center scale-[1.05] sm:scale-[1.08] md:scale-[1.12]"
      />

      {/* Sticky nav over hero */}
      <div className="fixed inset-x-0 top-0 z-30">
        <Menu />
      </div>

      <div
        id="my-title"
        className="relative z-10 container mx-auto flex h-full items-center justify-end px-6 pb-20 pt-24 sm:pt-28"
      >
        <div className="max-w-xl space-y-4 text-right">
          <h1 className="text-5xl font-semibold leading-tight sm:text-5xl">
            Max Longton
          </h1>
          <p className="text-xl text-slate-100/80">
            Designer. Engineer. Product Manager.
          </p>
        </div>
      </div>

      {/* Optional overlay for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-slate-900/70" />

      {/* Torso overlay copy */}
      <div
        className="absolute top-[55%] z-20 -translate-x-1/6 -translate-y-1/2 sm:top-[52%] sm:left-[48%] md:top-[50%] md:left-[42%] lg:left-[40%] xl:left-[38%]"
        aria-label="Statement overlay"
      >
        <p className="max-w-md px-4 py-3 text-xl leading-relaxed text-white">
          I build AI-native systems that turn messy work into reliable software.
        </p>
      </div>
    </section>
  );
};
