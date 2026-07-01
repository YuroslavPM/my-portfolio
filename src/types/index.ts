export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
    image?: string;
    type: "personal" | "work";
    isPrivate?: boolean;
}

export interface NavItem {
    name: string;
    href: string;
}

export interface SocialLink {
    label: string;
    href: string;
    icon: "github" | "linkedin" | "mail" | "dribbble" | "twitter";
}