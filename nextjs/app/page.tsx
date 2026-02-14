import { Infoblock } from "@/app/root-components/Infoblock";
import { Hero } from "./root-components/hero";
import { essay } from "@/static/essay";
import { WordcloudSatellite } from "@/components/Wordcloud_satellite";
import { Carousel } from "./root-components/carousel";
import { EasterEgg } from "@/components/EasterEgg";
import { Slide1 } from "./root-components/slides/slide1";
import { Slide2 } from "./root-components/slides/slide2";
import { Slide3 } from "./root-components/slides/slide3";
import { Slide4 } from "./root-components/slides/slide4";

export default function Home() {
  const designerDetails = [
    "Finds the problems.",
    "Shapes the interface.",
    "Reduces cognitive load.",
  ];
  const engineerDetails = [
    "Models the system.",
    "Builds reliable software.",
    "Handles contraints and scale.",
  ];
  const productManagerDetails = [
    "Chooses what not to build.",
    "Sets Priorities.",
    "Aligns effort with outcomes.",
  ];
  return (
    <>
      <EasterEgg />
      <Hero />
      <section
        id="infoblocks"
        className="container mx-auto flex w-full grow gap-6 flex-col md:flex-row"
      >
        <Infoblock title="Designer" details={designerDetails} link="/designer" />
        <Infoblock title="Engineer" details={engineerDetails} link="/engineer" />
        <Infoblock title="Product Manager" details={productManagerDetails} link="/product-manager" />
      </section>
      <div className="container mx-auto">
        <hr />
      </div>
      <section className="container mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-4 text-center ">A Short Introduction</h2>
        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl shadow-lg">
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
      <div className="container mx-auto mb-10">
        <hr />
      </div>
      <section className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4 ">Core concepts in my orbit</h2>
        <WordcloudSatellite text={essay} links={{ "that": "/contact" }} />
      </section>
      <div className="container mx-auto mb-10">
        <hr />
      </div>
      <section className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4 ">Featured Work</h2>
        <Carousel slides={[<Slide1 key={1} />, <Slide2 key={2} />, <Slide3 key={3} />, <Slide4 key={4} />]} />
      </section>
      <div className="container mx-auto mb-10 mt-10">
        <hr />
      </div>
      <section className="container mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Want to talk about building AI-native tools that <u>actually</u> hold up in the real world?</h2>

        <div className={'flex justify-center gap-10'}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">Share my resume</button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">Start a conversation</button>
        </div>

      </section>
    </>
  );
}
