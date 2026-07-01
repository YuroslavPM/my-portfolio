"use client";

import { useRef, useEffect } from "react";
import { inView } from "motion";
import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { socialLinks } from "@/data/social";
import { ContactForm } from "@/components/cards/ContactForm";

const iconMap: Record<string, React.ElementType> = {
    mail: Mail,
    github: Github,
    linkedin: Linkedin,
};

export function Contact() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            const items = Array.from(
                sectionRef.current.querySelectorAll<HTMLElement>(".contact-animate")
            );
            inView(sectionRef.current, () => {
                items.forEach((el, i) => {
                    el.animate(
                        [
                            { opacity: 0, transform: "translateY(20px)" },
                            { opacity: 1, transform: "translateY(0)" },
                        ],
                        { duration: 600, delay: i * 120, easing: "cubic-bezier(0.22,1,0.36,1)", fill: "forwards" }
                    );
                });
            }, { margin: "-10% 0px" });
        }
    }, []);

    return (
        <section id="contact" className="py-28 px-4">
            <div className="section-container">
                <div ref={sectionRef}>

                    <div className="contact-animate text-center mb-14" style={{ opacity: 0 }}>
                        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">Contact</p>
                        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-[var(--text)]">
                            Let&apos;s Work Together
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                            Have a project in mind or want to talk? I&apos;m open to new opportunities and interesting projects.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="contact-animate" style={{ opacity: 0 }}>
                            <ContactForm />
                        </div>

                        <div className="contact-animate grid grid-cols-1 sm:grid-cols-3 gap-4" style={{ opacity: 0 }}>
                            {socialLinks.map((social) => {
                                const Icon = iconMap[social.icon] || Mail;
                                return (
                                    <Link
                                        key={social.label}
                                        href={social.href}
                                        target={social.href.startsWith("http") ? "_blank" : undefined}
                                        rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="card p-5 group hover:border-[var(--border-accent)] text-center transition-all"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center mx-auto mb-3 group-hover:border-[var(--accent)]/50 group-hover:bg-[var(--accent)]/10 transition-all">
                                            <Icon className="w-5 h-5 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" />
                                        </div>
                                        <p className="text-sm font-semibold text-[var(--text-secondary)] group-hover:text-[var(--text)] transition-colors">
                                            {social.label}
                                        </p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
