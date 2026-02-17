import React from "react";

export default function AsEngineer() {
    return (
        <section className="max-w-screen-sm mx-auto mb-5">

            <h2 className="text-2xl">
                As an Engineer
            </h2>
            <hr />
            <p className="text-md my-2">
                Engineering is the discipline of making reality coherent.
            </p>

            <p className="text-md my-2">
                My responsibility is to ensure that changes to the system —
                wherever they occur — remain compatible, stable, and sustainable.
            </p>

            <h3 className="text-xl">
                Partnering Early
            </h3>

            <p className="text-md my-2">
                I partner with product and design to review user stories and proposed designs
                for feasibility, risk, resource constraints, and missing implementation detail.
            </p>

            <p className="text-md my-2">
                Engineers should help shape scope — not just receive it.
            </p>

            <h3 className="text-xl">
                Building for Integrity
            </h3>

            <ul className="text-md my-2">
                <li>Implement with reuse and reduction in mind (DRY).</li>
                <li>Prefer deletion over unnecessary complexity.</li>
                <li>Write unit tests to protect local correctness.</li>
                <li>Write end-to-end tests to protect system-level behavior.</li>
            </ul>

            <p className="text-md my-2">
                End-to-end tests guard integrations, data flows, and performance
                in real deployed environments. Deployments should not ship broken contracts.
            </p>

            <h3 className="text-xl">
                Knowing When Not to Optimize
            </h3>

            <p className="text-md my-2">
                Engineers can spot designs that are too complex for an MVP.
                We understand the true cost of abstraction and optimization.
            </p>

            <p className="text-md my-2">
                Sometimes the highest-leverage move is simplification.
            </p>

            <h3 className="text-xl">
                Understanding System Hierarchy
            </h3>

            <p className="text-md my-2">
                Not all functions are equal.
            </p>

            <ul className="text-md my-2">
                <li>Core functions that must not fail.</li>
                <li>Functions whose failure degrades experience.</li>
                <li>Functions that can fail safely without cascading impact.</li>
            </ul>

            <p className="text-md my-2">
                This hierarchy informs test strategy, monitoring, and operational investment.
            </p>

            <h3 className="text-xl">
                Infrastructure Ownership
            </h3>

            <p className="text-md my-2">
                Engineers own CI/CD pipelines, shared libraries,
                internal documentation, and reference implementations.
            </p>

            <p className="text-md my-2">
                These systems determine how safely and quickly a team can evolve.
            </p>

            <h3 className="text-xl">
                External Awareness
            </h3>

            <p className="text-md my-2">
                I build deep understanding of external services:
                APIs, integrations, data contracts, timing characteristics,
                and system dependencies.
            </p>

            <p className="text-md my-2">
                Strong engineering requires awareness beyond the local codebase.
            </p>

        </section>
    );
}
