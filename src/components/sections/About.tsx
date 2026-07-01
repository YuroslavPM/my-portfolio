"use client";

import { useRef, useEffect } from "react";
import { animate, inView } from "motion";
import { Code2, Palette, Zap, Users, Building2, Calendar } from "lucide-react";

const experience = [
    {
        company: "Current Company",
        role: "Junior Full-Stack Developer",
        period: "Jan 2025 – Present",
        duration: "6 months",
        current: true,
        highlights: [
            "Private school management platform — parent & admin portals, eVrotrus digital signatures, candidature workflows",
            "Legacy veterinary warehouse system — diagnosed & fixed production bugs in .NET 3.5 / WinForms, integrated Grafana monitoring",
            "Worked across Office, Server, and Mobile client environments",
        ],
        tech: ["C#", ".NET 8", ".NET 3.5", "WinForms", "Grafana", "SQL Server"],
    },
    {
        company: "Previous Company",
        role: "Junior Full-Stack Developer",
        period: "Jun 2024 – Dec 2024",
        duration: "6 months",
        current: false,
        highlights: [
            "Built full-stack web apps with Laravel + SolidJS + Tailwind",
            "Delivered multiple client-facing e-commerce and real-estate platforms",
            "Worked on authentication, Stripe payments, Filament admin panels",
        ],
        tech: ["Laravel", "SolidJS", "Rust", "Tailwind CSS", "MySQL"],
    },
];

const skills = [
    {
        icon: Code2,
        title: "Full-Stack Development",
        description: "Building scalable web applications from concept to deployment with modern frameworks and best practices.",
        accent: "#6366F1",
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "Creating intuitive, accessible interfaces that users love. Clean design systems without unnecessary complexity.",
        accent: "#a78bfa",
    },
    {
        icon: Zap,
        title: "Performance & Legacy",
        description: "Optimizing modern apps for speed, and modernizing legacy systems (.NET 3.5 / WinForms) without breaking production.",
        accent: "#fbbf24",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working with cross-functional teams, delivering under real deadlines, and communicating clearly with stakeholders.",
        accent: "#34d399",
    },
];

const techStack = [
    "C#", ".NET", "WinForms",
    "React", "Next.js", "Laravel", "Rust",
    "TypeScript", "Tailwind CSS", "PostgreSQL", "Git", "Grafana",
];


function fadeUp(el: HTMLElement, delay: number) {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.animate(
        [
            { opacity: 0, transform: "translateY(20px)" },
            { opacity: 1, transform: "translateY(0px)" },
        ],
        { duration: 600, delay: delay * 1000, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" }
    );
}

function slideRight(el: HTMLElement, delay: number) {
    el.style.opacity = "0";
    el.animate(
        [
            { opacity: 0, transform: "translateX(-24px)" },
            { opacity: 1, transform: "translateX(0px)" },
        ],
        { duration: 600, delay: delay * 1000, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" }
    );
}

function scalePop(el: HTMLElement, delay: number) {
    el.style.opacity = "0";
    el.animate(
        [
            { opacity: 0, transform: "scale(0.85)" },
            { opacity: 1, transform: "scale(1)" },
        ],
        { duration: 350, delay: delay * 1000, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" }
    );
}

export default function About() {
    const timelineRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const techRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (timelineRef.current) {
            const items = Array.from(
                timelineRef.current.querySelectorAll<HTMLElement>(".timeline-item")
            );
            inView(timelineRef.current, () => {
                items.forEach((el, i) => slideRight(el, i * 0.15));
            }, { margin: "-10% 0px" });
        }

        if (skillsRef.current) {
            const cards = Array.from(skillsRef.current.children) as HTMLElement[];
            inView(skillsRef.current, () => {
                cards.forEach((el, i) => fadeUp(el, i * 0.1));
            }, { margin: "-10% 0px" });
        }

        if (techRef.current) {
            const tags = Array.from(techRef.current.querySelectorAll<HTMLElement>("span"));
            inView(techRef.current, () => {
                tags.forEach((el, i) => scalePop(el, i * 0.035));
            }, { margin: "-5% 0px" });
        }
    }, []);

    return (
        <section id="about" className="py-28 px-4">
            <div className="section-container space-y-24">

                <div id="experience">
                    <div className="text-center mb-14 animate-fade-up">
                        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">Career</p>
                        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-[var(--text)]">
                            Work Experience
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
                            1 year of professional development across two companies, shipping real products for real users.
                        </p>
                    </div>

                    <div ref={timelineRef} className="relative max-w-3xl mx-auto">
                        <div className="timeline-line" />

                        <div className="space-y-8 pl-14">
                            {experience.map((job) => (
                                <div
                                    key={job.company}
                                    className="timeline-item relative"
                                    style={{ opacity: 0 }}
                                >
                                    <div
                                        className="absolute -left-[3.35rem] top-5 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                                        style={{
                                            borderColor: job.current ? "var(--accent)" : "var(--border-light)",
                                            backgroundColor: job.current ? "var(--accent)" : "var(--surface)",
                                            boxShadow: job.current ? "0 0 12px var(--accent-glow-strong)" : "none",
                                        }}
                                    >
                                        {job.current && <span className="w-2 h-2 rounded-full bg-white" />}
                                    </div>

                                    <div className="card p-6 hover:border-[var(--border-accent)] group">
                                        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <Building2 className="w-4 h-4 text-[var(--muted)]" />
                                                    <span className="text-sm font-semibold text-[var(--text-secondary)]">{job.company}</span>
                                                    {job.current && (
                                                        <span className="px-2 py-0.5 text-xs rounded-full bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30 font-medium">
                                                            Current
                                                        </span>
                                                    )}
                                                </div>
                                                <h3 className="text-xl font-bold text-[var(--text)]">{job.role}</h3>
                                            </div>
                                            <div className="text-right">
                                                <div className="flex items-center gap-1.5 text-sm text-[var(--muted)] justify-end">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {job.period}
                                                </div>
                                                <p className="text-xs text-[var(--muted)] mt-1">{job.duration}</p>
                                            </div>
                                        </div>

                                        <ul className="space-y-2 mb-4">
                                            {job.highlights.map((h) => (
                                                <li key={h} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)]/60 shrink-0" />
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-1.5">
                                            {job.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="px-2.5 py-1 text-xs rounded-md bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--muted)] font-medium"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="text-center mb-14 animate-fade-up delay-100">
                        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">What I bring</p>
                        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-[var(--text)]">About Me</h2>
                        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                            I'm a full-stack developer who thrives on solving real problems — from building greenfield products to untangling legacy systems.
                        </p>
                    </div>

                    <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {skills.map((skill) => (
                            <div
                                key={skill.title}
                                className="card p-6 group hover:border-[var(--border-accent)] flex gap-5"
                                style={{ opacity: 0 }}
                            >
                                <div
                                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border"
                                    style={{
                                        backgroundColor: `${skill.accent}15`,
                                        borderColor: `${skill.accent}30`,
                                        color: skill.accent,
                                    }}
                                >
                                    <skill.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2 text-[var(--text)]">{skill.title}</h3>
                                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{skill.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card p-8">
                    <h3 className="text-2xl font-bold mb-2 text-center text-[var(--text)]">Technologies I Work With</h3>
                    <p className="text-sm text-[var(--text-secondary)] text-center mb-8">From modern web frameworks to legacy enterprise systems.</p>
                    <div ref={techRef} className="flex flex-wrap justify-center gap-2.5">
                        {techStack.map((tech) => (
                            <span
                                key={tech}
                                style={{ opacity: 0 }}
                                className="px-4 py-2 bg-[var(--surface-elevated)] border border-[var(--border)] rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:border-[var(--accent)]/40 hover:text-[var(--text)] transition-colors cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}