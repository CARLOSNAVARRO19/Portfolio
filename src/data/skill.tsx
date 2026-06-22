import type { Skill } from "../types/skill";

import {
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";

export const skills: Skill[] = [
  {
    id: 1,
    name: "React",
    icon: <FaReact />,
    category: "Frontend",
  },
  {
    id: 2,
    name: "Angular",
    icon: <FaAngular />,
    category: "Frontend",
  },
  {
    id: 3,
    name: "TypeScript",
    icon: <SiTypescript />,
    category: "Frontend",
  },
  {
    id: 4,
    name: "JavaScript",
    icon: <FaJs />,
    category: "Frontend",
  },
  {
    id: 5,
    name: "HTML",
    icon: <FaHtml5 />,
    category: "Frontend",
  },
  {
    id: 6,
    name: "CSS",
    icon: <FaCss3Alt />,
    category: "Frontend",
  },
  {
    id: 7,
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    category: "Frontend",
  },
  {
    id: 8,
    name: "Java",
    icon: <FaJava />,
    category: "Backend",
  },
  {
    id: 9,
    name: "Spring Boot",
    icon: <SiSpringboot />,
    category: "Backend",
  },
  {
    id: 10,
    name: "MySQL",
    icon: <SiMysql />,
    category: "Database",
  },
  {
    id: 11,
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    category: "Database",
  },
  {
    id: 12,
    name: "Git",
    icon: <FaGitAlt />,
    category: "Tools",
  },
  {
    id: 13,
    name: "GitHub",
    icon: <FaGithub />,
    category: "Tools",
  },
  {
    id: 14,
    name: "Postman",
    icon: <SiPostman />,
    category: "Tools",
  },
];