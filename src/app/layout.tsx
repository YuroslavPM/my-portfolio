import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import {Footer} from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Yuroslav Minchev | Full-Stack Developer",
    description: "Product-focused engineer creating fast, accessible web experiences with Next.js, TypeScript, and modern tools.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
        <body className={`${inter.className} antialiased`}>
        {/* Navbar sits above the children */}
        <Navbar />

        {/* Main Content */}
        <main className="flex min-h-screen flex-col pt-16">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}