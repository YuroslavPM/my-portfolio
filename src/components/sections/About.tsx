"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Zap, Users } from "lucide-react";

const skills = [
    {
        icon: Code2,
        title: "Full-Stack Development",
        description: "Building scalable web applications from concept to deployment with modern frameworks and best practices.",
        color: "blue"
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "Creating intuitive, accessible interfaces that users love. Clean design systems without unnecessary complexity.",
        color: "purple"
    },
    {
        icon: Zap,
        title: "Performance",
        description: "Optimizing for speed and efficiency. Every millisecond counts when building exceptional user experiences.",
        color: "yellow"
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working seamlessly with teams across time zones. Clear communication and async-first workflows.",
        color: "green"
    }
];

const techStack = [
    "C#", "Laravel", "Rust", "SolidJS", "NextJS",
    "TypeScript", "Tailwind CSS", "MySQL","Git"
];

export default function About() {
    return (
        <section id="about" className="py-24 px-4">
            <div className="section-container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        About Me
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                        I'm a full-stack developer passionate about creating elegant solutions to complex problems.
                        Here's what I bring to the table.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="card p-6 group hover:border-[var(--accent)]/40"
                        >
                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 bg-${skill.color}-500/10`}>
                                <skill.icon className={`w-6 h-6 text-${skill.color}-400`} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                {skill.title}
                            </h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                {skill.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="card p-8"
                >
                    <h3 className="text-2xl font-semibold mb-6 text-center">
                        Technologies I Work With
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {techStack.map((tech, index) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="px-4 py-2 bg-[var(--surface-elevated)] border border-[var(--border)] rounded-lg text-sm font-medium hover:border-[var(--accent)]/40 transition-colors"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}