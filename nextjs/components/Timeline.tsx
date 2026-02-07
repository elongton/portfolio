import type { ReactNode } from "react";

type TimelineProps = {
    children: ReactNode;
    className?: string;
    lineClassName?: string;
};

type TimelineYearProps = {
    year: string | number;
    title?: string;
    children: ReactNode;
    className?: string;
};

type TimelineEntryProps = {
    title?: string;
    children?: ReactNode;
    image?: ReactNode;
    descriptionSide?: "left" | "right";
    imageSide?: "left" | "right";
    className?: string;
};

const getSideClass = (side: "left" | "right") =>
    side === "left" ? "md:col-start-1" : "md:col-start-3";

export const Timeline = ({
    children,
    className = "",
    lineClassName = "border-slate-300",
}: TimelineProps) => {
    return (
        <section className={`relative ${className}`} aria-label="Timeline">
            <div
                className={`pointer-events-none absolute left-1/2 top-0 hidden h-full -translate-x-1/2 border-l-2 border-dashed md:block ${lineClassName}`}
            />
            <div className="space-y-12">{children}</div>
        </section>
    );
};

export const TimelineYear = ({
    year,
    title,
    children,
    className = "",
}: TimelineYearProps) => {
    return (
        <div className={`space-y-8 ${className}`}>
            <div className="relative flex items-center justify-center">
                <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 200 md:block" />
                <div className="relative z-10 rounded-full border px-4 py-1 text-sm font-semibold uppercase tracking-widest bg-slate-800">
                    {year}
                </div>
            </div>
            {title && (
                <h3 className="text-center text-xl font-semibold">
                    {title}
                </h3>
            )}
            <div className="space-y-10">{children}</div>
        </div>
    );
};

export const TimelineEntry = ({
    title,
    children,
    image,
    descriptionSide = "left",
    imageSide = "right",
    className = "",
}: TimelineEntryProps) => {
    const descriptionAlignment =
        descriptionSide === "left" ? "md:ml-auto" : "md:mr-auto";

    const descriptionBlock = children ? (
        <div
            key="description"
            className={`border p-4 w-full md:w-3/4 rounded-sm ${descriptionAlignment}`}
        >
            {title && (
                <h4 className="mb-2 text-base font-semibold">{title}</h4>
            )}
            <div className="text-xs leading-relaxed">{children}</div>
        </div>
    ) : null;

    const imageAlignment = imageSide === "left" ? "md:ml-auto" : "md:mr-auto";

    const imageBlock = image ? (
        <div
            key="image"
            className={`overflow-hidden border w-full md:w-3/4 ${imageAlignment}`}
        >
            {image}
        </div>
    ) : null;

    const leftBlocks: ReactNode[] = [];
    const rightBlocks: ReactNode[] = [];

    if (descriptionBlock) {
        (descriptionSide === "left" ? leftBlocks : rightBlocks).push(
            descriptionBlock
        );
    }
    if (imageBlock) {
        (imageSide === "left" ? leftBlocks : rightBlocks).push(imageBlock);
    }

    return (
        <div
            className={`relative grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-start ${className}`}
        >
            <div className="absolute left-0 top-3 h-full w-px  md:hidden" />
            <span className="absolute left-[-5px] top-3 h-3 w-3   md:hidden" />

            <div className={`space-y-4 ${getSideClass("left")}`}>
                {leftBlocks.length > 0 ? leftBlocks : <div className="hidden md:block" />}
            </div>

            <div className="relative hidden w-6 items-start justify-center md:flex">
                <span className="mt-2 h-3 w-3 " />
            </div>

            <div className={`space-y-4 ${getSideClass("right")}`}>
                {rightBlocks.length > 0 ? rightBlocks : <div className="hidden md:block" />}
            </div>
        </div>
    );
};
