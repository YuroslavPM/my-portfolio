import { Project } from "@/types";

export const projects: Project[] = [
    {
        id:"1",
        title: "Estate Shop",
        description: "A modern real estate management platform with a Laravel backend API and a SolidJS frontend styled with Tailwind CSS. This full-stack application provides property listings, search functionality, and administrative tools for managing real estate properties.",
        technologies: ["Laravel", "SolidJS","Tailwind"],
        link: "https://www.estateshop.bg",
        github: "https://github.com/yourusername/project",
        image: "/images/project-1.png", // Ensure you add this image to public/images later
    },
    {
        id:"2",
        title: "AI Chatbot",
        description: "Real-time chat application built with SolidJS. Features authentication, multiple chatbots, WebSocket messaging, voice input, markdown rendering, and chat history. Includes i18n support and offline storage.",
        technologies: ["SolidJS","Tailwind"],
        link: "https://www.ai.arkami.org",
        github: "https://github.com/yourusername/portfolio",
        image: "/images/project-8.png",
    },
    {
        id:"3",
        title: "Dushevnamozaika",
        description: "An ASP.NET Core MVC web application featuring appointment booking, article management, newsletter subscriptions, and role-based admin controls. Built with Entity Framework Core, MySQL, ASP.NET Identity and Tailwind CSS.",
        technologies: ["C#", ".NET 8", "Tailwind"],
        link: "https://www.dushevnamozaika.com",
        github: "https://github.com/yourusername/chat",
        image: "/images/project-9.png",
    },
    {
        id:"4",
        title: "VikoClima",
        description: "Full-stack e-commerce platform for climate control products. Built with Laravel backend and SolidJS frontend styled with Tailwind CSS, featuring product management, order processing, Stripe payments, and admin dashboard.",
        technologies: ["Laravel", "SolidJS","Tailwind"],
        link: "https://www.vikoclima.com",
        github: "https://github.com/yourusername/portfolio",
        image: "/images/project-4.png",
    },
    {
        id:"5",
        title: "Cool-Climat",
        description: "Full-stack e-commerce platform with a Rust (Axum) REST API and a SolidJS + Tailwind CSS frontend. Includes product catalog, order management, Stripe payments, multi-currency support, user authentication, and an admin panel. Built with MySQL and async/await for performance.",
        technologies: ["Laravel","Rust", "SolidJS","Tailwind"],
        link: "https://www.vikoclima.com",
        github: "https://github.com/yourusername/portfolio",
        image: "/images/project-5.png",
    },
    {
        id:"6",
        title: "NorthstarTattoo",
        description: "Laravel REST API backend for a reservation and artist management system. Features include artist availability, reservations, gallery, blog, and reviews. Admin panel built with Filament. Frontend built with SolidJS and Tailwind CSS for a responsive, performant interface.",
        technologies: ["Laravel", "SolidJS","Tailwind"],
        link: "https://www.northstar.arkami.org",
        github: "https://github.com/yourusername/portfolio",
        image: "/images/project-6.png",
    },
    {
        id:"7",
        title: "Imotopia",
        description: "Imotopia — Real estate management platform with property listings, categories, and financial tracking. Frontend built with SolidJS and Tailwind CSS, backend powered by Laravel and Filament.",
        technologies: ["Laravel", "SolidJS","Tailwind"],
        link: "https://imotopia.com",
        github: "https://github.com/yourusername/portfolio",
        image: "/images/project-7.png",
    },

];