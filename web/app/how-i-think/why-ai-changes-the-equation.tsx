"use client";

import Image from "next/image";
import React from "react";

export default function WhyAIChangesTheEquation() {
  return (
    <section className="mx-auto mb-5 mt-20 max-w-screen-lg px-4 mb-20">
      <div className="grid items-start gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl">Why AI Changes the Equation</h2>
          <hr />

          <p className="mt-5 text-md">
            The bottleneck has shifted from building things to{" "}
            <strong>deciding what is worth building</strong> and ensuring it is
            coherent, simple, and aligned with real needs. I think leverage
            belongs to those who can frame problems clearly, exercise judgment
            under uncertainty, and take responsibility for outcomes.
          </p>
        </div>

        <div className="md:pl-2">
          <Image
            src="/scarcity_infographic.png"
            alt="Scarcity infographic"
            width={2166}
            height={1048}
            className="h-auto w-full rounded-md"
            priority
          />
        </div>
      </div>

      {/* <p className="text-lg mt-5">
                For most of modern software history, value creation followed a predictable pattern, and it included the following roles:
            </p>

            <div className="flex justify-between my-5">
                <div>
                    <h3 className="font-bold">Product Manager</h3>
                    <p>Decided what to build.</p>
                </div>

                <div>
                    <h3 className="font-bold">Designer</h3>
                    <p>Designed the experience.</p>
                </div>

                <div>
                    <h3 className="font-bold">Engineer</h3>
                    <p>Built the solution.</p>
                </div>
            </div>

            <p>
                Iteration cycles were long. Roles were siloed.
                Knowledge lived in pockets.
                Shipping was rife with friction.
            </p>

            <h3 className="text-2xl my-5">Fast Foward to Now</h3>

            <p className="text-lg">
                Large Language Models (LLMs) can draft specs, generate design systems, write production-ready code, create tests,
                summarize analytics, and propose roadmaps.
            </p>

            <h3 className="text-2xl my-5">So what becomes scarce?</h3>

            <div className="text-lg">
                <p>Clear thinking under ambiguity.</p>
                <p>Deep empathy for users.</p>
                <p>Vision.</p>
                <p>Systems thinking - not feature thinking.</p>
            </div>

            <div>
                <p className="text-xl">
                    The highest leverage person in an AI-native world is the one who can articulate:
                </p>

                <ul className="text-lg">
                    <li>Why we're doing this.</li>
                    <li>Why this matters.</li>
                    <li>Why this approach is right.</li>
                </ul>
            </div> */}
    </section>
  );
}
