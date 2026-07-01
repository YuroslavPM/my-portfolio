"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Download, MapPin, Clock3, Briefcase } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/config";

const stackTags = ["C#", ".NET", "Laravel", "SolidJS", "Next.js", "SQL Server"];

const terminalLines = [
    { type: "comment", text: "// Yuroslav Minchev — Full-Stack Developer" },
    { type: "blank" },
    { type: "keyword", text: "const", rest: " developer = {" },
    { type: "prop", key: "location", value: '"Plovdiv, Bulgaria"' },
    { type: "prop", key: "experience", value: '"1 year"' },
    { type: "prop", key: "stack", value: '["C#", "Laravel", "SolidJS"]' },
    { type: "prop", key: "availability", value: '"Open to opportunities"' },
    { type: "close", text: "};" },
    { type: "blank" },
    { type: "fn", text: 'console.log("Ready to build something great.");' },
];

export function Hero() {
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const tagsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (leftRef.current) {
            const children = Array.from(leftRef.current.children) as HTMLElement[];
            children.forEach((el, i) => {
                el.animate(
                    [
                        { opacity: 0, transform: "translateY(24px)" },
                        { opacity: 1, transform: "translateY(0px)" },
                    ],
                    { duration: 600, delay: i * 80, easing: "cubic-bezier(0.22,1,0.36,1)", fill: "forwards" }
                );
            });
        }

        if (rightRef.current) {
            rightRef.current.animate(
                [
                    { opacity: 0, transform: "translateX(30px)" },
                    { opacity: 1, transform: "translateX(0px)" },
                ],
                { duration: 700, delay: 350, easing: "cubic-bezier(0.22,1,0.36,1)", fill: "forwards" }
            );
        }

        if (tagsRef.current) {
            const tags = Array.from(tagsRef.current.children) as HTMLElement[];
            tags.forEach((tag, i) => {
                tag.animate(
                    [
                        { opacity: 0, transform: "scale(0.85)" },
                        { opacity: 1, transform: "scale(1)" },
                    ],
                    { duration: 400, delay: 400 + i * 40, easing: "cubic-bezier(0.22,1,0.36,1)", fill: "forwards" }
                );
            });
        }
    }, []);

    return (
        <section className="relative overflow-hidden min-h-[92vh] flex items-center px-4 py-24 pt-28">

            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
                <div className="glow-orb w-[600px] h-[600px] -left-32 -top-32 bg-[var(--accent)]/10" />
                <div className="glow-orb w-[500px] h-[500px] right-0 top-1/4 bg-[var(--work-accent)]/8" />
                <div className="glow-orb w-[400px] h-[400px] left-1/3 bottom-0 bg-[var(--accent)]/6" />
            </div>

            <div className="section-container relative z-10 w-full">
                <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">

                    <div ref={leftRef} className="max-w-2xl space-y-6">
                        <h1 style={{ opacity: 0 }} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
                            <span className="text-[var(--accent)]">Resilient</span>{" "}
                            <span className="text-[var(--text)]">web products,</span>
                            <br />
                            <span className="text-[var(--text-secondary)]">thoughtfully engineered.</span>
                        </h1>

                        <p style={{ opacity: 0 }} className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl">
                            {siteConfig.description}
                        </p>

                        <div style={{ opacity: 0 }} className="flex flex-wrap gap-2.5 text-sm text-[var(--text-secondary)]">
                            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)]">
                                <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                                {siteConfig.location}
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)]">
                                <Clock3 className="w-3.5 h-3.5 text-[var(--accent)]" />
                                1 year experience
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)]">
                                <Briefcase className="w-3.5 h-3.5 text-[var(--accent)]" />
                                2 companies
                            </span>
                        </div>

                        <div ref={tagsRef} style={{ opacity: 0 }} className="flex flex-wrap gap-2">
                            {stackTags.map((tag) => (
                                <span
                                    key={tag}
                                    style={{ opacity: 0 }}
                                    className="px-3 py-1.5 text-sm rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--muted)] font-medium hover:border-[var(--accent)]/40 hover:text-[var(--text-secondary)] transition-colors"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div style={{ opacity: 0 }} className="flex flex-wrap gap-4 pt-2">
                            <Link href="#projects" className="btn-primary group">
                                View my work
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link href={siteConfig.resumeUrl} target="_blank" className="btn-secondary">
                                <Download className="w-4 h-4" />
                                Download CV
                            </Link>
                        </div>
                    </div>

                    <div ref={rightRef} style={{ opacity: 0 }} className="hidden lg:block">
                        <TerminalCard />
                    </div>
                </div>
            </div>
        </section>
    );
}

function TerminalCard() {
    return (
        <div className="overflow-hidden rounded-2xl border border-[#2a2d45] shadow-[0_12px_50px_rgba(15,23,42,0.14),0_0_0_1px_rgba(99,102,241,0.10)]">

            <div className="flex items-center gap-2 px-5 py-3.5 bg-[#1e2030] border-b border-[#2a2d45]">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-[#6c7086] font-mono select-none">developer.ts</span>
            </div>

            <div className="bg-[#1e2030] flex">
                <div className="select-none px-3 pt-5 pb-5 text-[#3d4060] font-mono text-[0.75rem] leading-[1.8] text-right min-w-[2.5rem] border-r border-[#2a2d45]">
                    {terminalLines.map((_, i) => (
                        <div key={i}>{i + 1}</div>
                    ))}
                </div>

                <div className="terminal-block flex-1 px-5 py-5">
                    {terminalLines.map((line, i) => (
                        <div
                            key={i}
                            className="animate-fade-in"
                            style={{ animationDelay: `${0.4 + i * 0.07}s` }}
                        >
                            {line.type === "blank" ? (
                                <div className="h-[calc(0.75rem*1.8)]" />
                            ) : line.type === "comment" ? (
                                <span className="terminal-comment">{line.text}</span>
                            ) : line.type === "keyword" ? (
                                <span>
                                    <span className="terminal-keyword">{line.text}</span>
                                    <span className="terminal-prop">{line.rest}</span>
                                </span>
                            ) : line.type === "prop" ? (
                                <span className="pl-5">
                                    <span className="terminal-prop">{line.key}</span>
                                    <span className="terminal-prop">: </span>
                                    <span className="terminal-string">{line.value}</span>
                                    <span className="terminal-prop">,</span>
                                </span>
                            ) : line.type === "close" ? (
                                <span className="terminal-prop">{line.text}</span>
                            ) : line.type === "fn" ? (
                                <span>
                                    <span className="terminal-fn">console</span>
                                    <span className="terminal-prop">.log(</span>
                                    <span className="terminal-string">&quot;Ready to build something great.&quot;</span>
                                    <span className="terminal-prop">);</span>
                                    <span className="typing-cursor" />
                                </span>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-between px-4 py-2 bg-[#6366F1] text-[10px] text-white/90 font-mono select-none">
                <span className="flex items-center gap-1.5 font-semibold">
                    <span className="text-white/70">⬡</span>
                    TypeScript
                </span>
                <span className="text-white/70">UTF-8 · LF</span>
                <span className="flex items-center gap-1">
                    <span className="text-white">✓</span> No errors
                </span>
            </div>
        </div>
    );
}