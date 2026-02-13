import { Modal } from "@/components/Modal";
import React from "react";

export default function AsDesigner() {
    return (
        <section className="max-w-screen-sm mx-auto mb-5">

            <h2 className="text-2xl">
                As a Designer
            </h2>
            <hr />

            <p className="text-md my-2">
                Design begins with building accurate mental models of users.
                I translate those models into clear personas — written representations
                of who we are serving and how they think.
            </p>

            <p className="text-md my-2">
                Designers study what users actually do, not what we assume they do.
                Research, analytics, interviews, usability testing, and journey mapping
                inform how behavior unfolds in the real world.
            </p>

            <h3 className="text-xl my-2">
                Reframing the Problem
            </h3>

            <p className="text-md my-2">
                One of the most important design skills is reframing problem statements.
                Teams often jump prematurely to solutions.
                Designers slow that down and ask:
            </p>

            <ul className="text-md my-2">
                <li>What problem are we truly solving?</li>
                <li>Which personas are affected?</li>
                <li>What unintended consequences might emerge?</li>
            </ul>

            <p className="text-md my-2">
                Persona awareness is protection against narrow thinking.
            </p>

            <h3 className="text-xl my-2">
                Sitting Between Vision and Reality
            </h3>

            <p className="text-md my-2">
                Designers sit between product managers and engineers.
                We co-own the “what” with product.
                We shape workflows, interactions, and interfaces.
            </p>

            <p className="text-md my-2">
                We receive constraint insight from engineers —
                technical effort, architectural limits, state management realities —
                and translate research and product goals into practical interaction decisions.
            </p>

            <h3 className="text-xl my-2">
                System-Level Thinking
            </h3>

            <p className="text-md my-2">
                Mature design is not screen-level decoration.
                It considers data flow, state management, and how systems behave over time.
            </p>

            <p className="text-md my-2">
                Designers who think in abstractions — reusable components,
                pattern libraries, and scalable systems — create exponential leverage.
            </p>

            <h3 className="text-xl my-2">
                The Human Edge
            </h3>

            <p className="text-md my-2">
                In the age of AI, execution is increasingly commoditized.
                Empathy is not.
            </p>

            <p className="text-md my-2">
                Design may be the most important role in an AI-native world —
                because it guards the human experience.
            </p>

            <div className="flex gap-2 flex-wrap mt-5">
                <Modal
                    title="Interview Agent"
                    trigger={<button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">View Interview Agent</button>}
                    content={< InterviewAgent />}
                />
                <Modal
                    title="Friction Detector Agent"
                    trigger={<button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">View Friction Detector Agent</button>}
                    content={< FrictionDetectorAgent />}
                />
                <Modal
                    title="Designer Agent"
                    trigger={<button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">View Designer Agent</button>}
                    content={< DesignerAgent />}
                />
                <Modal
                    title="Persona Agent"
                    trigger={<button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">View Persona Agent</button>}
                    content={< PersonaAgent />}
                />
            </div>

        </section>
    );
}


const InterviewAgent = () => {
    return <>
        For inputs - roadmap, target users, hypothesis, and pool of interviewees:
        Drafts interview plans tailored to a hypothesis
        Runs semi-structured interviews as a chat-based “research moderator.”
        Creates a decision log: “We believe X because Y; confidence: medium; next validation: Z

    </>
}

const FrictionDetectorAgent = () => {
    return <>
        For inputs - behavior analytics and interview transcripts:
        Create “journey maps” which can be transformed into analytics funnels
        identify moments that matter (these can be reviewed with more design scrutiny)
        quantify friction (where do time and errors concentrate?)
        suggest design updates based on friction and moments that matter

    </>
}

const DesignerAgent = () => {
    return <>
        For inputs - vague ideas, friction based issues, user suggestions
        Create designs in the form of:
        flow diagrams
        wire frames (but how??)
        Figma nodes
        Requires a strong design system in figma
        constrained to known patterns
        spec-like UI description
        Propose multiple design variants:
        conservative (design-system-native)
        innovative (new pattern)
        “engineer-fast” (minimum viable UI)

    </>
}

const PersonaAgent = () => {
    return <>
        For inputs - interviews, support tickets, usage patterns (the journey maps), an original list of personas:
        generate and maintain a list of personas
        detect drift when a new persona is detected

    </>
}