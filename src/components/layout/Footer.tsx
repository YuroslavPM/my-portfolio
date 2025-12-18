"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
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
        <footer className="border-t border-[var(--border)] bg-[var(--surface)]/30 py-12 px-4">
            <div className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-bold mb-2">{siteConfig.name}</h3>
                        <p className="text-sm text-[var(--text-secondary)] mb-4">
                            {siteConfig.role}
                        </p>
                        <p className="text-xs text-[var(--muted)]">
                            {siteConfig.location}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About", href: "#about" },
                                { name: "Projects", href: "#projects" },
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

                    {/* Social Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">
                            Connect
                        </h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => {
                                const Icon = iconMap[social.icon] || Mail;
                                return (
                                    <Link
                                        key={social.label}
                                        href={social.href}
                                        target={social.href.startsWith('http') ? '_blank' : undefined}
                                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--surface-elevated)] transition-colors"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-4 h-4" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--muted)]">
                    <p>
                        © {currentYear} {siteConfig.name}. All rights reserved.
                    </p>
                    <p className="flex items-center gap-2">
                        Built using Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}