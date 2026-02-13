import { Menu } from "@/components/Menu";
import Image from "next/image";

/**
 * Full-width hero with responsive background positioning/zoom.
 * Tweak scale/object-position per breakpoint via Tailwind classes below.
 */
export const Banner = () => {
  return (
    <section className="relative isolate w-full min-h-[70vh] overflow-hidden text-white">
      <Image
        src="/instructing.webp"
        alt="Background image"
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover object-[50%_38%] sm:object-[50%_34%] md:object-[50%_30%] lg:object-center scale-[1.02] sm:scale-[1.05] md:scale-[1.08]"
      />

      {/* Optional overlay for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-slate-900/70" />

      {/* Sculpted top curve divider */}
      <svg
        className="pointer-events-none absolute -top-1 left-0 h-[30px] w-full sm:h-[36px] md:h-[42px]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,0 L1440,0 L1440,52 C1260,48 1110,36 920,38 C730,40 590,58 400,56 C250,54 130,48 0,50 Z"
          fill="none"
        />
        <path
          d="M0,50 C140,44 260,56 390,59 C570,66 720,38 920,35 C1120,32 1270,47 1440,52"
          className="fill-none stroke-slate-100/22"
          strokeWidth="3.5"
        />
        <path
          d="M0,34 C150,29 280,43 400,47 C570,55 720,29 920,31 C1120,33 1270,45 1440,50"
          className="fill-none stroke-slate-200/15"
          strokeWidth="2.5"
        />
        <path
          d="M0,67 C140,63 280,72 410,75 C570,82 730,55 930,55 C1130,55 1270,67 1440,72"
          className="fill-none stroke-slate-300/10"
          strokeWidth="2"
        />
      </svg>

      {/* Sculpted curve divider */}
      <svg
        className="pointer-events-none absolute -bottom-1 left-0 h-[30px] w-full sm:h-[36px] md:h-[42px]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hero-cutaway-bottom" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>
        <path
          d="M0,70 C130,72 250,66 400,64 C590,62 730,80 920,82 C1110,84 1260,72 1440,68 L1440,120 L0,120 Z"
          fill="url(#hero-cutaway-bottom)"
        />
        {/* Theme-consistent accent lines */}
        <path
          d="M0,70 C140,76 260,65 390,62 C570,54 720,82 920,85 C1120,88 1270,73 1440,68"
          className="fill-none stroke-slate-100/22"
          strokeWidth="3.5"
        />
        <path
          d="M0,56 C150,63 280,52 400,49 C570,41 720,70 920,73 C1120,76 1270,62 1440,58"
          className="fill-none stroke-slate-200/15"
          strokeWidth="2.5"
        />
        <path
          d="M0,85 C140,91 280,80 410,77 C570,71 730,94 930,95 C1130,96 1270,83 1440,80"
          className="fill-none stroke-slate-200/10"
          strokeWidth="2"
        />
      </svg>

      {/* Torso overlay copy */}
      <div
        className="absolute top-[70%] z-20 -translate-x-1/6 -translate-y-1/2 sm:top-[52%] sm:left-[48%] md:top-[80%] md:left-[42%] lg:left-[20%] xl:left-[20%]"
        aria-label="Statement overlay"
      >
        {/* <p className="max-w-md px-4 py-3 text-xl leading-relaxed text-white">
          "I build AI-native systems that turn messy work into reliable software."</p> */}
      </div>
    </section>
  );
};
