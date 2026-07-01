"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/config";
import { socialLinks } from "@/data/social";

const iconMap: Record<string, React.ElementType> = {
    mail: Mail,
    github: Github,
    linkedin: Linkedin,
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-[var(--border)] bg-[var(--surface)]/40 py-14 px-4">
            <div className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                    <div>
                        <h3 className="text-xl font-bold text-[var(--text)] mb-3">{siteConfig.name}</h3>
                        <p className="text-sm text-[var(--text-secondary)] mb-2">{siteConfig.role}</p>
                        <p className="text-xs text-[var(--muted)]">{siteConfig.location}</p>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-5">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Experience", href: "#experience" },
                                { name: "Projects", href: "#projects" },
                                { name: "About", href: "#about" },
                                { name: "Contact", href: "#contact" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-5">
                            Connect
                        </h4>
                        <div className="flex flex-col gap-3">
                            {socialLinks.map((social) => {
                                const Icon = iconMap[social.icon] || Mail;
                                return (
                                    <Link
                                        key={social.label}
                                        href={social.href}
                                        target={social.href.startsWith("http") ? "_blank" : undefined}
                                        rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors group"
                                        aria-label={social.label}
                                    >
                                        <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] group-hover:border-[var(--accent)]/50 group-hover:bg-[var(--accent)]/10 transition-all">
                                            <Icon className="w-4 h-4" />
                                        </span>
                                        {social.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[var(--muted)]">
                    <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
                    <p>Designed & built by Yuroslav Minchev</p>
                </div>
            </div>
        </footer>
    );
}