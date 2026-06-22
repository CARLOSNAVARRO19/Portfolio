import type { ReactNode } from "react";

export interface Skill {
    id: number;
    name: string;
    icon: ReactNode;
    category: "Frontend" | "Backend" | "Database" | "Tools";
}