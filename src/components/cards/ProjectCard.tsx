"use client";

import { Project } from "@/types";
import { Github, ExternalLink, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const isWork = project.type === "work";
    const isPrivate = project.isPrivate;

    return (
        <article
            className={`group card overflow-hidden flex flex-col h-full transition-all duration-300 ${isWork
                    ? "border-[var(--border)] hover:border-[rgba(167,139,250,0.4)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.5),0_0_0_1px_rgba(167,139,250,0.15)]"
                    : "border-[var(--border)] hover:border-[var(--border-accent)] hover:shadow-[var(--shadow-hover)]"
                }`}
        >
            <div className="relative aspect-video w-full overflow-hidden bg-[var(--surface-elevated)]">
                {isPrivate ? (
                    <PrivatePlaceholder isWork={isWork} title={project.title} />
                ) : project.image ? (
                    <>
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                            {project.github && (
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors border border-white/10"
                                    onClick={(e) => e.stopPropagation()}
                                    aria-label="View source on GitHub"
                                >
                                    <Github className="w-5 h-5" />
                                </Link>
                            )}
                            {project.link && (
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors border border-white/10"
                                    onClick={(e) => e.stopPropagation()}
                                    aria-label="Visit live project"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </Link>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="flex h-full w-full items-center justify-center">
                        <div className="text-center text-[var(--muted)]">
                            <ExternalLink className="w-10 h-10 mx-auto mb-2 opacity-30" />
                            <p className="text-xs">No preview</p>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex-1 flex flex-col p-5">
                <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                            {isWork && (
                                <span className="badge badge-work text-[10px] px-2 py-0.5">Work</span>
                            )}
                            {isPrivate && (
                                <span className="badge badge-private text-[10px] px-2 py-0.5">
                                    <Lock className="w-2.5 h-2.5" />
                                    Private
                                </span>
                            )}
                        </div>
                        <h3 className={`text-lg font-bold leading-snug ${isWork
                                ? "text-[var(--text)] group-hover:text-[var(--work-accent)]"
                                : "text-[var(--text)] group-hover:text-[var(--accent)]"
                            } transition-colors`}>
                            {project.title}
                        </h3>
                    </div>
                    {project.link && !isPrivate && (
                        <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 p-1.5 rounded-lg text-[var(--muted)] hover:text-[var(--accent)] hover:bg-[var(--surface-elevated)] transition-all"
                            aria-label="Open project"
                        >
                            <ExternalLink className="w-4 h-4" />
                        </Link>
                    )}
                </div>

                <p className="text-sm text-[var(--text-secondary)] mb-4 flex-1 leading-relaxed">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded-md bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--muted)] font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {!isPrivate && project.github && (
                    <div className="mt-4 pt-4 border-t border-[var(--border)]">
                        <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors font-medium"
                        >
                            <Github className="w-3.5 h-3.5" />
                            View source
                        </Link>
                    </div>
                )}
            </div>
        </article>
    );
}

function PrivatePlaceholder({ isWork, title }: { isWork: boolean; title: string }) {
    const bg = isWork
        ? "from-[rgba(124,58,237,0.06)] to-[rgba(99,102,241,0.03)]"
        : "from-[rgba(99,102,241,0.06)] to-[rgba(99,102,241,0.03)]";

    const color = isWork ? "#7C3AED" : "#6366F1";

    return (
        <div className={`w-full h-full bg-gradient-to-br ${bg} flex flex-col items-center justify-center gap-3 p-6`}>
            <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center border"
                style={{
                    backgroundColor: `${color}15`,
                    borderColor: `${color}30`,
                    color,
                }}
            >
                <Lock className="w-6 h-6" />
            </div>
            <div className="text-center">
                <p className="text-sm font-semibold text-[var(--text-secondary)]">Professional Work</p>
                <p className="text-xs text-[var(--muted)] mt-0.5">Private · NDA</p>
            </div>
        </div>
    );
}