"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import { socialLinks } from "@/data/social";
import { ContactForm } from "@/components/cards/ContactForm";

const iconMap: Record<string, React.ElementType> = {
    mail: Mail,
    github: Github,
    linkedin: Linkedin,
};

export function Contact() {
    return (
        <section id="contact" className="py-24 px-4">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        Let&apos;s Work Together
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? I'm always open to discussing new opportunities and ideas.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-8"
                    >
                        <ContactForm />
                    </motion.div>

                    {/* Alternative Contact Methods */}
                    {/*<motion.div*/}
                    {/*    initial={{ opacity: 0, y: 20 }}*/}
                    {/*    whileInView={{ opacity: 1, y: 0 }}*/}
                    {/*    viewport={{ once: true }}*/}
                    {/*    transition={{ duration: 0.5, delay: 0.2 }}*/}
                    {/*    className="card p-8 mb-8 text-center"*/}
                    {/*>*/}
                    {/*    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--accent)]/10 mb-6">*/}
                    {/*        <Send className="w-8 h-8 text-[var(--accent)]" />*/}
                    {/*    </div>*/}
                    {/*    <h3 className="text-2xl font-semibold mb-3">*/}
                    {/*        Prefer email?*/}
                    {/*    </h3>*/}
                    {/*    <p className="text-[var(--text-secondary)] mb-6">*/}
                    {/*        You can also reach me directly via email.*/}
                    {/*    </p>*/}
                    {/*    <Link*/}
                    {/*        href={`mailto:${siteConfig.email}`}*/}
                    {/*        className="btn-secondary inline-flex"*/}
                    {/*    >*/}
                    {/*        <Mail className="w-4 h-4" />*/}
                    {/*        {siteConfig.email}*/}
                    {/*    </Link>*/}
                    {/*</motion.div>*/}

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                    >
                        {socialLinks.map((social, index) => {
                            const Icon = iconMap[social.icon] || Mail;
                            return (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    target={social.href.startsWith('http') ? '_blank' : undefined}
                                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="card p-6 group hover:border-[var(--accent)]/40 text-center"
                                >
                                    <Icon className="w-6 h-6 mx-auto mb-3 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" />
                                    <p className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text)] transition-colors">
                                        {social.label}
                                    </p>
                                </Link>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
