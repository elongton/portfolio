"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type AnimationType = "slide" | "fade";

export type CarouselProps = {
  slides: ReactNode[];
  intervalMs?: number;
  animation?: AnimationType;
  autoPlay?: boolean;
  loop?: boolean;
  pauseOnHover?: boolean;
  showArrows?: boolean;
  showDots?: boolean;
  initialIndex?: number;
  onIndexChange?: (index: number) => void;
  className?: string;
  ariaLabel?: string;
};

const clampIndex = (index: number, count: number) => {
  if (count <= 0) return 0;
  if (index < 0) return 0;
  if (index > count - 1) return count - 1;
  return index;
};

export const Carousel = ({
  slides,
  intervalMs = 6000,
  animation = "slide",
  autoPlay = true,
  loop = true,
  pauseOnHover = true,
  showArrows = true,
  showDots = true,
  initialIndex = 0,
  onIndexChange,
  className = "",
  ariaLabel = "Carousel",
}: CarouselProps) => {
  const count = slides.length;
  const [activeIndex, setActiveIndex] = useState(() =>
    clampIndex(initialIndex, count)
  );
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const autoplayRef = useRef<number | null>(null);

  useEffect(() => {
    setActiveIndex((current) => clampIndex(current, count));
  }, [count]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(media.matches);
    update();
    if (media.addEventListener) {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }
    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const nextIndex = loop
        ? ((index % count) + count) % count
        : clampIndex(index, count);
      setActiveIndex(nextIndex);
      onIndexChange?.(nextIndex);
    },
    [count, loop, onIndexChange]
  );

  const goNext = useCallback(() => {
    if (!count) return;
    goTo(activeIndex + 1);
  }, [activeIndex, count, goTo]);

  const goPrev = useCallback(() => {
    if (!count) return;
    goTo(activeIndex - 1);
  }, [activeIndex, count, goTo]);

  useEffect(() => {
    if (!autoPlay || !count) return;
    if (pauseOnHover && isHovered) return;
    if (prefersReducedMotion) return;

    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
    }

    autoplayRef.current = window.setInterval(() => {
      goNext();
    }, intervalMs);

    return () => {
      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current);
      }
    };
  }, [
    autoPlay,
    count,
    goNext,
    intervalMs,
    isHovered,
    pauseOnHover,
    prefersReducedMotion,
  ]);

  const translateX = useMemo(
    () => `-${activeIndex * 100}%`,
    [activeIndex]
  );

  if (count === 0) return null;

  return (
    <section
      className={`relative w-full overflow-hidden ${className}`}
      aria-label={ariaLabel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {animation === "slide" && (
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(${translateX})`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={`slide-${index}`}
              className="w-full shrink-0 grow-0 basis-full"
              aria-hidden={index !== activeIndex}
            >
              {slide}
            </div>
          ))}
        </div>
      )}

      {animation === "fade" && (
        <div className="relative min-h-[1px]">
          {slides.map((slide, index) => (
            <div
              key={`slide-${index}`}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={index !== activeIndex}
            >
              {slide}
            </div>
          ))}
        </div>
      )}

      {showArrows && count > 1 && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3">
          <button
            type="button"
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={goPrev}
            aria-label="Previous slide"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={goNext}
            aria-label="Next slide"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      )}

      {showDots && count > 1 && (
        <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === activeIndex
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex}
            />
          ))}
        </div>
      )}
    </section>
  );
};
