import { Menu } from "@/components/Menu";

export default function Page() {
    return (
        <>
            <Menu />
            <section className="container mx-auto w-full mt-10">
                <h2 className="text-2xl">Wearing all three hats</h2>
                <p>I don't treat design, engineering, and product as separate phases.  I move between then continuously to reduce risk and increase clarity.</p>
            </section>
            <section className="container mx-auto w-full mt-10">
                <h2 className="text-2xl">As a Product Manager</h2>
                <p>I don't treat design, engineering, and product as separate phases.  I move between then continuously to reduce risk and increase clarity.</p>
            </section>
        </>
    );
}