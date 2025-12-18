"use client";

import { motion } from "framer-motion";
import {
    ArrowRight,
    Check,
    Download,
    MapPin,
    Briefcase,
    Clock3,
    Sparkles,
} from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/config";

const stackTags = ["C#","Laravel","SolidJS","Next.js", "UI/UX polish", "Accessibility"];

const valueProps = [
    "Ship fast without sacrificing polish.",
    "Design-accessible UI with clean, typed code.",
    "Collaborate tightly with product & design.",
];

interface HighlightCardProps {
    label: string;
    value: string;
    icon: React.ComponentType<{ className?: string }>;
}

function HighlightCard({ label, value, icon: Icon }: HighlightCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
            className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--surface-elevated)] to-[var(--surface)] p-4 transition-all hover:border-[var(--accent)]/30 hover:shadow-lg"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent)]/15 to-[var(--accent)]/8 text-[var(--accent)] border border-[var(--accent)]/20 shadow-sm group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-1.5">{label}</p>
                    <p className="text-sm font-medium text-[var(--text)] leading-relaxed">{value}</p>
                </div>
            </div>
        </motion.div>
    );
}

interface ProfileCardProps {
    highlights: Array<{ label: string; value: string; icon: React.ComponentType<{ className?: string }> }>;
}

function ProfileCard({ highlights }: ProfileCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
        >
            {/* Enhanced glow effects */}
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[var(--accent)]/8 via-[var(--accent)]/4 to-transparent blur-3xl" />
            <div className="absolute -inset-3 rounded-2xl bg-[var(--accent)]/3 blur-xl" />
            
            {/* Main card with gradient border effect */}
            <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--surface)] via-[var(--surface)] to-[var(--surface-elevated)]/50 backdrop-blur-xl shadow-xl">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/3 via-transparent to-transparent pointer-events-none" />
                
                <div className="relative p-8">
                    {/* Header with improved styling */}
                    <div className="mb-8">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <motion.p
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.35 }}
                                    className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)] mb-2"
                                >
                                    Profile Overview
                                </motion.p>
                                <motion.h3
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.4 }}
                                    className="text-3xl font-bold text-[var(--text)] leading-tight"
                                >
                                    What you get
                                </motion.h3>
                            </div>
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.45 }}
                                className="px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[var(--accent)]/20 to-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30 shadow-sm shrink-0"
                            >
                                Product-minded
                            </motion.span>
                        </div>
                    </div>

                    {/* Highlights - vertical stack for better visual flow */}
                    <div className="space-y-3 mb-8">
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={highlight.label}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                            >
                                <HighlightCard {...highlight} />
                            </motion.div>
                        ))}
                    </div>

                    {/* Value propositions with enhanced design */}
                    <div className="relative pt-6 border-t border-[var(--border)]/60">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.8 }}
                            className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-4"
                        >
                            Core Values
                        </motion.p>
                        <div className="space-y-4">
                            {valueProps.map((line, index) => (
                                <motion.div
                                    key={line}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.85 + index * 0.08 }}
                                    className="group flex items-start gap-4"
                                >
                                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--accent)]/15 to-[var(--accent)]/8 text-[var(--accent)] border border-[var(--accent)]/20 shadow-sm group-hover:scale-110 transition-transform shrink-0 mt-0.5">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    <p className="text-sm font-medium text-[var(--text)] leading-relaxed pt-0.5">{line}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function Hero() {
    const highlights = [
        { label: "Location", value: siteConfig.location, icon: MapPin },
        { label: "Experience", value: "+1 year", icon: Clock3 },
        {
            label: "Availability",
            value: siteConfig.availability,
            icon: Briefcase,
        },
    ];

    return (
        <section className="relative overflow-hidden min-h-[90vh] flex items-center px-4 py-24">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -left-10 -top-10 w-80 h-80 bg-[var(--background-accent)]/35 rounded-full blur-3xl" />
                <div className="absolute right-0 top-8 w-[520px] h-[520px] bg-[var(--accent)]/12 rounded-full blur-[120px]" />
                <div className="absolute left-1/3 bottom-0 w-[360px] h-[360px] bg-[var(--accent-hover)]/14 rounded-full blur-[110px]" />
            </div>

            <div className="section-container relative z-10 w-full">
                <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="max-w-3xl">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45 }}
                            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--text-secondary)] shadow-sm"
                        >
                            <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                            <span>{siteConfig.role}</span>
                        </motion.div>

                        {/* Main heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05]"
                        >
                            {siteConfig.headline.split(" ").map((word, i) => (
                                <span key={i}>
                                    {word.toLowerCase() === "resilient" ? (
                                        <span className="text-[var(--accent)]">{word}</span>
                                    ) : (
                                        word
                                    )}{" "}
                                </span>
                            ))}
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="text-lg sm:text-xl text-[var(--text-secondary)] mb-8 max-w-2xl leading-relaxed"
                        >
                            {siteConfig.description}
                        </motion.p>

                        {/* Stack tags */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-wrap gap-2 mb-8"
                        >
                            {stackTags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-sm rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="flex flex-wrap gap-4 mb-6"
                        >
                            <Link href="#projects" className="btn-primary group">
                                View my work
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link href={siteConfig.resumeUrl} target="_blank" className="btn-secondary">
                                <Download className="w-4 h-4" />
                                Download CV
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right column with highlights */}
                    <ProfileCard highlights={highlights} />
                </div>
            </div>
        </section>
    );
}