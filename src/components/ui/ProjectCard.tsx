"use client";

import { Project } from "@/types";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group card overflow-hidden flex flex-col h-full"
        >
            {/* Image Section */}
            <div className="relative aspect-video w-full overflow-hidden bg-[var(--surface-elevated)]">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center">
                        <div className="text-center">
                            <Code2 className="w-12 h-12 mx-auto mb-2 text-[var(--muted)]" />
                            <p className="text-sm text-[var(--muted)]">Project Preview</p>
                        </div>
                    </div>
                )}
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.github && (
                        <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Github className="w-5 h-5" />
                        </Link>
                    )}
                    <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ExternalLink className="w-5 h-5" />
                    </Link>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col p-6">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-[var(--text-secondary)] text-sm mb-4 flex-1 leading-relaxed">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-3 py-1 rounded-md bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-secondary)]"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.article>
    );
}

function Code2({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    );
}