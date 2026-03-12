import { Menu } from "@/components/Menu";
import Image from "next/image";

export default function Page() {
  return (
    <section className="relative isolate w-full min-h-screen overflow-hidden bg-slate-900 text-white">
      <Image
        src="/maxlongton_contactme.jpg"
        alt="Contact background image"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="pointer-events-none object-cover object-[60%_15%] scale-[1.02]"
      />

      <div className="fixed inset-x-0 top-0 z-30">
        <Menu />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/55 via-slate-900/35 to-slate-900/70" />

      <div className="relative z-10 container mx-auto flex min-h-screen items-center px-6 pb-16 pt-24 sm:pt-28">
        <div className="max-w-xl p-6 mb-30">
          <h2 className="text-2xl sm:text-3xl">enrique.longton@gmail.com</h2>
          <div className="mt-3 flex gap-4">
            <a className="text-indigo-300 hover:text-indigo-200" href="">
              LinkedIn
            </a>
            <a className="text-indigo-300 hover:text-indigo-200" href="">
              GitHub
            </a>
            <a className="text-indigo-300 hover:text-indigo-200" href="">
              Discord
            </a>
          </div>

          <section className="mt-8">
            <h3 className="text-lg">What I&apos;m open to:</h3>
            <ul className="ml-5 mt-2 list-disc space-y-1 text-slate-100/95">
              <li>Product and engineering roles</li>
              <li>Early-stage product conversations</li>
              <li>AI-native tools and systems</li>
              <li>Thoughful collaboration</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
