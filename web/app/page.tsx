import { Hero } from "./root-components/hero";
import { Carousel } from "./root-components/carousel";
import { Slide1 } from "./root-components/slides/slide1";
import { Slide2 } from "./root-components/slides/slide2";
import { Slide3 } from "./root-components/slides/slide3";
import { Slide4 } from "./root-components/slides/slide4";

export default function Home() {
  return (
    <main className="pb-16 sm:pb-20">
      <Hero />

      <section className="mx-auto mt-8 w-full max-w-6xl px-4 py-8 sm:mt-10 sm:px-6">
        <h2 className="mb-4 text-xl font-semibold sm:mb-6 sm:text-2xl">
          Quick Introduction
        </h2>
        <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-white/10 shadow-lg sm:rounded-2xl">
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/NrpMjm4x9Vc"
              title="A Short Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-6xl px-4 sm:mt-16 sm:px-6">
        <h2 className="mb-4 text-xl font-semibold sm:mb-6 sm:text-2xl">
          Featured Work
        </h2>
        <Carousel
          slides={[
            <Slide1 key={1} />,
            <Slide2 key={2} />,
            <Slide3 key={3} />,
            <Slide4 key={4} />,
          ]}
        />
      </section>

      <section className="mx-auto mt-14 w-full max-w-6xl px-4 pb-6 sm:mt-20 sm:px-6">
        <h2 className="mx-auto mb-6 max-w-3xl text-center text-xl font-semibold leading-relaxed sm:mb-8 sm:text-2xl">
          Want to talk about building AI-native tools that <u>actually</u> hold
          up in the real world?
        </h2>
        <div className="mx-auto flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <button className="w-full rounded bg-blue-500 px-4 py-2.5 text-white transition hover:bg-blue-700 sm:w-auto">
            Share my resume
          </button>
          <button className="w-full rounded bg-blue-500 px-4 py-2.5 text-white transition hover:bg-blue-700 sm:w-auto">
            Start a conversation
          </button>
        </div>
      </section>
    </main>
  );
}
