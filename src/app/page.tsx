import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import About from "@/components/sections/About";

export default function Home() {
    return (
        <div className="flex flex-col gap-0 pb-0">
            <Hero />
            <Projects />
            <About />
            <Contact />
        </div>
    );
}