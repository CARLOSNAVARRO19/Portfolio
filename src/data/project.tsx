import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Market Cart",
    description:
      "Sistema de gestión para supermercados desarrollado con React y Spring Boot.",
    image: "/images/projects/market-cart.png",
    technologies: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
    github: "https://github.com/CarlosNavarro/MarketCart",
    demo: "",
  },
  {
    id: 2,
    title: "Portfolio",
    description:
      "Mi portafolio personal desarrollado con React, TypeScript y Tailwind CSS.",
    image: "/images/projects/portfolio.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/CarlosNavarro/Portfolio",
    demo: "",
  },
  {
    id: 3,
    title: "Pokedex",
    description:
      "Aplicación web consumiendo la PokeAPI utilizando React.",
    image: "/images/projects/pokedex.png",
    technologies: ["React", "CSS", "API REST"],
    github: "https://github.com/CarlosNavarro/Pokedex",
    demo: "",
  },
];