import { Menu } from "@/components/Menu";
import Image from "next/image";

const HERO_BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDABgQEhUSDxgVExUaGRgcIzsmIyAgI0gzNis7VUtaWFRLUlFeaodzXmSAZVFSdqB3gIyQl5mXW3GmsqWTsIeUl5L/2wBDARkaGiMfI0UmJkWSYVJhkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpL/wAARCAAkABgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwChdQxK8RRicZPStLQriKJpxLIiblAG4gZ61kyzNJgyNnA9KdfyRholjRRhBnA6+5qWUjY1Rol0qSNJIny4PyY9v8KK50nvtx+FFJIdxJWpbl8rAG4ymM/iaeiRvcRozbY2OHPTFVpdiSMpYyBSQDWilpYzsCTyRM2ME4I5GfaioVOW55HeipKAyu/DHj6U3uaKKYhKKKKAP//Z";

/**
 * Full-width hero with responsive background positioning/zoom.
 * Tweak scale/object-position per breakpoint via Tailwind classes below.
 */
export const Hero = () => {
  return (
    <section className="relative isolate w-full min-h-[100svh] overflow-hidden bg-slate-900 text-white">
      <Image
        src="/maxlongton_smile_hero.jpg"
        alt="Background image"
        fill
        priority
        quality={82}
        placeholder="blur"
        blurDataURL={HERO_BLUR_DATA_URL}
        sizes="100vw"
        className="pointer-events-none object-cover object-[50%_38%] sm:object-[50%_34%] md:object-[50%_30%] lg:object-[70%_32%] scale-100 sm:scale-[1.01] md:scale-[1.03]"
      />

      {/* Sticky nav over hero */}
      <div className="fixed inset-x-0 top-0 z-30">
        <Menu />
      </div>

      <div
        id="my-title"
        className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-screen-xl items-end justify-center px-4 pb-28 pt-24 sm:items-center sm:justify-end sm:px-6 sm:pb-20 sm:pt-28 lg:px-8"
      >
        <div className="max-w-xl space-y-3 text-center sm:space-y-4 sm:text-right">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Max Longton
          </h1>
          <p className="text-base text-slate-100/80 sm:text-xl">
            Designer. Engineer. Product Manager.
          </p>
        </div>
      </div>

      {/* Optional overlay for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/35 to-slate-900/80" />

      {/* Sculpted curve divider */}
      <svg
        className="pointer-events-none absolute -bottom-1 left-0 h-[90px] w-full sm:h-[105px] md:h-[120px]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hero-cutaway" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>
        <path
          d="M0,20 C300,70 600,95 840,88 C1080,82 1260,62 1440,44 L1440,120 L0,120 Z"
          fill="url(#hero-cutaway)"
        />
        {/* Theme-consistent accent lines */}
        <path
          d="M0,78 C320,104 640,112 880,106 C1120,100 1280,86 1440,70"
          className="fill-none stroke-slate-200/15"
          strokeWidth="2"
        />
        <path
          d="M0,20 C300,70 600,95 840,88 C1080,82 1260,62 1440,44"
          className="fill-none stroke-slate-100/25"
          strokeWidth="3"
        />
        <path
          d="M0,32 C280,78 580,100 830,94 C1080,88 1260,70 1440,56"
          className="fill-none stroke-slate-200/10"
          strokeWidth="1.5"
        />
      </svg>

      {/* Torso overlay copy */}
      <div
        className="absolute bottom-14 left-4 right-4 z-20 sm:bottom-20 sm:left-auto sm:right-6 sm:max-w-md md:bottom-20 md:right-10 lg:bottom-16 lg:left-[20%] lg:right-auto lg:max-w-lg"
        aria-label="Statement overlay"
      >
        <p className="max-w-md px-0 py-0 text-base leading-relaxed text-white sm:px-4 sm:py-3 sm:text-xl">
          I build AI-native systems that turn messy work into reliable software.
        </p>
      </div>
    </section>
  );
};
