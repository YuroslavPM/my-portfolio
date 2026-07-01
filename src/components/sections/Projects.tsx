"use client";

import { useState, useRef, useEffect } from "react";
import { inView } from "motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";

type Filter = "all" | "work" | "personal";

const filters: { label: string; value: Filter }[] = [
    { label: "All Projects", value: "all" },
    { label: "Work", value: "work" },
    { label: "Personal", value: "personal" },
];

export function Projects() {
    const [activeFilter, setActiveFilter] = useState<Filter>("all");
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    const filtered = projects.filter(
        (p) => activeFilter === "all" || p.type === activeFilter
    );

    useEffect(() => {
        if (headerRef.current) {
            inView(headerRef.current, () => {
                headerRef.current!.animate(
                    [
                        { opacity: 0, transform: "translateY(20px)" },
                        { opacity: 1, transform: "translateY(0)" },
                    ],
                    { duration: 600, easing: "cubic-bezier(0.22,1,0.36,1)", fill: "forwards" }
                );
            }, { margin: "-10% 0px" });
        }
    }, []);

    useEffect(() => {
        if (gridRef.current) {
            const cards = Array.from(gridRef.current.children) as HTMLElement[];
            cards.forEach((card, i) => {
                card.animate(
                    [
                        { opacity: 0, transform: "translateY(24px)" },
                        { opacity: 1, transform: "translateY(0)" },
                    ],
                    { duration: 500, delay: i * 70, easing: "cubic-bezier(0.22,1,0.36,1)", fill: "forwards" }
                );
            });
        }
    }, [activeFilter]);

    return (
        <section id="projects" className="py-28 px-4">
            <div className="section-container">
                <div ref={headerRef} className="text-center mb-14" style={{ opacity: 0 }}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">Portfolio</p>
                    <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-[var(--text)]">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                        A mix of professional work and personal projects — from enterprise platforms to independent builds.
                    </p>
                </div>

                <div className="flex justify-center gap-2 mb-10 flex-wrap">
                    {filters.map((f) => (
                        <button
                            key={f.value}
                            onClick={() => setActiveFilter(f.value)}
                            className={`filter-tab${activeFilter === f.value ? " active" : ""}`}
                        >
                            {f.label}
                            <span className="ml-2 text-xs opacity-70">
                                ({f.value === "all"
                                    ? projects.length
                                    : projects.filter((p) => p.type === f.value).length})
                            </span>
                        </button>
                    ))}
                </div>

                <div ref={gridRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}