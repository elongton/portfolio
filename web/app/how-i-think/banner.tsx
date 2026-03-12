import { Modal } from "@/components/Modal";
import Image from "next/image";

/**
 * Full-width hero with responsive background positioning/zoom.
 * Tweak scale/object-position per breakpoint via Tailwind classes below.
 */
export const Banner = () => {
  const year = new Date().getFullYear();

  return (
    <section className="relative isolate -mt-5 w-full min-h-[70vh] overflow-hidden text-white">
      <Image
        src="/maxlongton_working.jpg"
        alt="Background image"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="pointer-events-none object-cover object-[50%_38%] sm:object-[50%_34%] md:object-[50%_20%] lg:object-[50%_20%] scale-[1.02] sm:scale-[1.05] md:scale-[1.08]"
      />

      {/* Optional overlay for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-900/55 to-slate-950/80" />

      {/* Sculpted top curve divider */}
      <svg
        className="pointer-events-none absolute -top-1 left-0 h-[30px] w-full sm:h-[36px] md:h-[42px]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hero-cutaway-top" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>
        <path
          d="M0,0 L1440,0 L1440,68 C1260,72 1110,84 920,82 C730,80 590,62 400,64 C250,66 130,72 0,70 Z"
          fill="url(#hero-cutaway-top)"
        />
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

      <div className="relative z-20 mx-auto flex min-h-[70vh] max-w-screen-lg items-center justify-end px-4 py-14">
        <div className="w-full max-w-xl rounded-2xl  p-6 m md:ml-auto">
          <h2 className="text-2xl">Wearing All Three Hats</h2>
          <hr className="mt-2" />
          <p className="mt-5 text-md">
            I do not treat design, engineering, and product as separate phases.
            I move between them continuously to reduce risk and increase
            clarity.
          </p>

          <p className="mt-5 text-md">
            In {year}, people who wear all three hats, Designer, Engineer, and
            Product Manager, are high-bandwidth orchestrators of intelligence.
          </p>

          <Modal
            title="How has this evolved?"
            trigger={
              <button className="mt-5 rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-700">
                How have the roles evolved?
              </button>
            }
            content={<div>Any React component can go here.</div>}
          />
        </div>
      </div>
    </section>
  );
};
