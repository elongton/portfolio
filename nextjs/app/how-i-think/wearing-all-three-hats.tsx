import { Modal } from "@/components/Modal";
import React from "react";

export default function WearingAllThreeHats() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <section className="max-w-screen-sm mx-auto mb-5">

            <h2 className="text-2xl">
                Wearing All Three Hats
            </h2>
            <hr />
            <p className="text-md mt-5">
                I don’t treat design, engineering, and product as separate phases.
                I move between them continuously to reduce risk and increase clarity.
            </p>

            <p className="text-md mt-5">
                In {year}, people who wear all three hats, Designer, Engineer, and Product Manager, 
                are high-bandwidth orchestrators of intelligence.
            </p>

            <Modal
                title="How has this evolved?"
                trigger={<button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">How have the roles evolved?</button>}
                content={<div>Any React component can go here.</div>}
            />

            {/* <h3 className="text-xl mt-5">
                The Evolution of Each Role
            </h3>

            <p className="text-md">
                <ul className="list-disc ml-5 mt-2">
                    <li>Product Manager evolves into a strategic conductor.</li>
                    <li>Engineer evolves into a technical architect.</li>
                    <li>Designer evolves into a system experience curator.</li>

                </ul>
            </p>

            <p className="text-md mt-2">
                Triple-skilled people become product system thinkers.
            </p>

            <h3 className="text-xl mt-5">
                What That Actually Means
            </h3>

            <ul className="text-md mt-2">
                <li>Spot weak specs.</li>
                <li>Spot weak UX.</li>
                <li>Spot fragile architecture.</li>
                <li>See tradeoffs across all three.</li>
                <li>Move faster because they don’t need translation layers.</li>
            </ul>

            <p className="text-md">
                They become force multipliers over machines.
            </p>

            <p className="text-md">
                The people who already integrate product, design, and engineering
                become disproportionately powerful.
            </p> */}

        </section>
    );
}
