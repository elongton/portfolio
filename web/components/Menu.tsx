"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/who-i-am", label: "Who I am" },
  { href: "/how-i-think", label: "How I think" },
  { href: "/what-i-do", label: "What I do" },
  { href: "/contact", label: "Contact" },
];

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const desktopLinkClass = (href: string) =>
    pathname === href
      ? "text-white underline underline-offset-4"
      : "text-slate-100 hover:text-white";

  const mobileLinkClass = (href: string) =>
    pathname === href
      ? "font-semibold underline underline-offset-4"
      : "hover:underline underline-offset-4";

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", isOpen);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        (document.getElementById("mobile_menu_icon") as HTMLButtonElement | null)?.blur();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <nav className="relative z-50 text-white">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <ul className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={desktopLinkClass(link.href)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button className="hidden rounded bg-blue-500 px-3 py-1.5 text-sm text-white transition hover:bg-blue-700 md:block">
          Resume
        </button>

        <button
          type="button"
          id="mobile_menu_icon"
          className="fixed right-4 top-3 z-[60] h-10 w-10 transition outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <svg
            viewBox="0 0 120 80"
            className={`absolute left-0 top-0 h-10 w-10 fill-white transition-all duration-300 ${
              isOpen ? "rotate-180 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
            aria-hidden="true"
          >
            <rect className="top-rect" y="1.25" width="120" height="8" rx="8" />
            <rect className="middle-rect" y="32.5" width="120" height="8" rx="8" />
            <rect className="bottom-rect" y="65" width="120" height="8" rx="8" />
          </svg>
          <svg
            viewBox="0 0 120 80"
            className={`absolute left-0 top-0 h-10 w-10 transition-all duration-300 ${
              isOpen
                ? "rotate-0 scale-100 fill-white opacity-100"
                : "-rotate-180 scale-50 fill-white opacity-0"
            }`}
            aria-hidden="true"
          >
            <rect
              className="top-rect"
              y="1.25"
              width="120"
              height="8"
              rx="8"
              transform="translate(23,-5) rotate(45)"
            />
            <rect
              className="bottom-rect"
              y="65"
              width="120"
              height="8"
              rx="8"
              transform="translate(-35,35) rotate(-45)"
            />
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-gradient-to-r from-slate-900 to-slate-700 text-black transition-opacity duration-200 ease-in md:hidden ${
          isOpen ? "z-40 opacity-100" : "-z-10 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto w-full max-w-screen-xl px-5 pb-8 pt-28 sm:px-6 text-white">
          <ul className="flex flex-col gap-5 text-2xl">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={mobileLinkClass(link.href)}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <hr className="my-6 border-white/50" />
          <button
            className="w-full rounded py-2 text-left text-2xl transition hover:bg-black/5"
            onClick={closeMenu}
          >
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};


