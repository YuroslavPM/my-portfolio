"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/data/config";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
                    : "bg-transparent"
            )}
        >
            <div className="section-container">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="group">
                        <span className="text-lg font-bold tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-200">
                            {siteConfig.name}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="relative px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors duration-200 rounded-lg hover:bg-[var(--surface)] group"
                            >
                                {item.name}
                                <span className="absolute bottom-1 left-4 right-4 h-px bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </Link>
                        ))}
                        <Link href="#contact" className="ml-4 btn-primary text-sm">
                            Get in touch
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-[var(--surface)] transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
                    mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="border-t border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-xl">
                    <div className="section-container py-4 space-y-1">

                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center px-4 py-3 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--surface)] rounded-lg transition-all duration-200"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block mx-0 mt-2 btn-primary text-center justify-center"
                        >
                            Get in touch
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}