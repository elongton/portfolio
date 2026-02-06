import { Infoblock } from "@/app/root-components/Infoblock";
import { Hero } from "./root-components/hero";
import { Wordcloud } from "@/components/Wordcloud_rocket";
import { essay } from "@/static/essay";
import { WordcloudSatellite } from "@/components/Wordcloud_satellite";

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
        <WordcloudSatellite text={essay} links={{"that": "/contact"}}/>
      </section>
    </>
  );
}
