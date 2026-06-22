import { FaGithub } from "react-icons/fa";
import type { Project } from "../../types/project";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="overflow-hidden rounded-2xl border border-border bg-bg transition hover:border-primary">

            <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover"
            />

            <div className="p-6">

                <h3 className="mb-3 text-2xl font-semibold text-text">
                    {project.title}
                </h3>

                <p className="mb-6 line-clamp-1 text-text/70">
                    {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="mb-6 flex flex-wrap gap-2">

                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="
                                rounded-full
                                bg-border
                                px-4 py-1
                                text-sm
                                text-text/70
                            "
                        >
                            {tech}
                        </span>
                    ))}

                </div>

                {/* BUTTONS */}
                <div className="flex gap-4">

                    <a
                        href={project.github}
                        target="_blank"
                        className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-white transition hover:opacity-90"
                    >
                        <FaGithub />
                        GitHub
                    </a>

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            className="rounded-lg border border-border px-5 py-2 text-text transition hover:border-primary hover:text-primary"
                        >
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;