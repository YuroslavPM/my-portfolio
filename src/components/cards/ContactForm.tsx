"use client";

import { useState, FormEvent } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to send message");
            }

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });

            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            setStatus("error");
            setErrorMessage(
                error instanceof Error ? error.message : "Something went wrong. Please try again."
            );
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="card p-8 animate-fade-up">
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--text)] mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg"
                        placeholder="Your name"
                    />
                </div>

                <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--text)] mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg"
                        placeholder="your.email@example.com"
                    />
                </div>

                <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--text)] mb-2">
                        Message
                    </label>
                    <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg resize-none"
                        placeholder="Tell me about your project or idea..."
                    />
                </div>

                {status === "success" && (
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-[rgba(52,211,153,0.1)] border border-[rgba(52,211,153,0.3)] text-[var(--green-status)] animate-fade-in">
                        <CheckCircle2 className="w-5 h-5 shrink-0" />
                        <p className="text-sm font-medium">Message sent! I'll get back to you soon.</p>
                    </div>
                )}

                {status === "error" && (
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[rgba(240,82,82,0.1)] border border-[rgba(240,82,82,0.3)] text-red-400 animate-fade-in">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <p className="text-sm font-medium">{errorMessage}</p>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === "loading" ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send className="w-4 h-4" />
                            Send Message
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
