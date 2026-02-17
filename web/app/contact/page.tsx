import { Menu } from "@/components/Menu";

export default function Page(){
    return <>
          <Menu />
          {/* <section className="container mx-auto w-full">
            <h2 className="text-lg">Let's talk!</h2>
          </section> */}
          <section className="container mx-auto w-full mt-2">
            <h2 className="text-2xl">enrique.longton@gmail.com</h2>
          </section>
          <section className="container mx-auto w-full">
            <div className="gap-4 flex">
            <a className="text-indigo-500" href="">LinkedIn</a>
            <a className="text-indigo-500" href="">GitHub</a>
            <a className="text-indigo-500" href="">Discord</a>
            </div>
          </section>
          <section className="container mx-auto w-full mt-10">
            <h3 className="text-lg">What I'm open to:</h3>
            <ul className="list-disc ml-5">
              <li>Product and engineering roles</li>
              <li>Early-stage product conversations</li>
              <li>AI-native tools and systems</li>
              <li>Thoughful collaboration</li>
            </ul>
          </section>
    </>;
}