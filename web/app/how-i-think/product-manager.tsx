import { Modal } from "@/components/Modal";
import React from "react";

export default function AsProductManager() {
    return (
        <section className="max-w-screen-sm mx-auto mb-5">

            <h2 className="text-2xl">
                As a Product Manager
            </h2>
            <hr />

            <p className="text-mg mt-5">
                Product management is not backlog grooming.
                It is structured decision-making under ambiguity.
            </p>

            <p className="text-mg">
                The role sits at the intersection of user value, business value,
                and technical reality. My responsibility is to reconcile those forces
                and turn them into coherent direction.
            </p>

            <h3 className="text-xl my-2">
                The Core Questions
            </h3>

            <ul className="text-mg">
                <li>What problem are users actually facing?</li>
                <li>Why does solving it matter to the business?</li>
                <li>Is the solution feasible given our technical constraints?</li>
                <li>What tradeoffs are we making?</li>
            </ul>

            <h3 className="text-xl my-2">
                The Roadmap Is a Living Argument
            </h3>

            <p className="text-mg">
                I don’t treat the roadmap as authority handed down.
                It’s a living argument — a constantly evolving hypothesis about
                where value lies.
            </p>

            <p className="text-mg">
                The best ideas win. Not the loudest ones.
            </p>

            <h3 className="text-xl my-2">
                Prioritization Is Multi-Dimensional
            </h3>

            <p className="text-mg">
                Prioritization isn’t just feature value.
                It includes technical debt, effort, platform dependencies,
                organizational alignment, and long-term architectural direction.
            </p>

            <p className="text-mg">
                Sometimes the highest-leverage move is not a feature —
                it’s infrastructure.
            </p>

            <h3 className="text-xl my-2">
                Data, Then Dialogue
            </h3>

            <p className="text-mg">
                Behavioral and performance analytics are essential.
                They tell you what is happening.
            </p>

            <p className="text-mg">
                But data alone is insufficient.
                It raises questions that only users can answer.
            </p>

            <p className="text-mg">
                That’s why I conduct direct interviews —
                to uncover the “why” behind the behavior.
            </p>

            <h3 className="text-xl my-2">
                My Focus
            </h3>

            <ul className="text-mg">
                <li>Extract the real problem.</li>
                <li>Translate it into a clear narrative.</li>
                <li>Align the team around that narrative.</li>
                <li>Continuously adjust as new information emerges.</li>
            </ul>

            <p className="text-mg">
                Product management, at its best, is clarity creation.
            </p>

            <div className="flex gap-2">
                <Modal
                    title="Project Management Agent"
                    trigger={<button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">View PM Agent</button>}
                    content={<PMAgent/>}
                />
            </div>

        </section>
    );
}


const PMAgent = () => {

    return <>
        maintains a running list of features for the product
        listens to user feedback (core support channel and GitHub issues of Cigna Product called Alchemy)
        tries to identify the features the feedback is referring to
        categorizes new features
        identifies lack of documentation or bad UX for any given feature
        listens to meetings, or meeting outcomes (transcriptions)
        reviews usage metrics from adobe / google analytics
        features are constructed in a predictable, repeatable way, within analytics
        ties analytics back to the features
        Generates a backlog of todo items to be reviewed and prioritized


    </>
}
