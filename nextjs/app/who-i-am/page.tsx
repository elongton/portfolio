import { Menu } from "@/components/Menu"
import { Modal } from "@/components/Modal";
import { Timeline, TimelineEntry, TimelineYear } from "@/components/Timeline";

export default function Page() {
  return (
    <>
      <Menu />
      <section className="container mx-auto mt-2 mb-10">
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
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-center ">Where I started</h2>

      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center ">A short timeline</h2>

        <Timeline className="container mx-auto py-10">
          <TimelineYear year="2012">
            <TimelineEntry
              title="First Steps"
              descriptionSide="left"
              imageSide="right"
              image={<img src="/me_and_boat.png" alt="Garage" className="h-full w-full object-cover" />}
            >
              Built my first prototype in a garage and learned by shipping weekly.
            </TimelineEntry>
          </TimelineYear>

          <TimelineYear year="2016">
            <TimelineEntry
              descriptionSide="right"
              imageSide="left"
              image={<img src="/me_and_bike.png" alt="Studio" className="h-full w-full object-cover" />}
            >
              <div className="mb-3">
              Expanded into a studio and began collaborating on larger products.
              </div>
              <Modal
                title="Quick Detail"
                trigger={ <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">See More</button>}
                content={<div>Any React component can go here.</div>}
              />
            </TimelineEntry>
          </TimelineYear>
          <TimelineYear year="2026">
            <TimelineEntry
              descriptionSide="left"
            >
              Expanded into a studio and began collaborating on larger products.
            </TimelineEntry>
          </TimelineYear>
        </Timeline>
      </section>
    </>
  );
}