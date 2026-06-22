import { FaGithub } from "react-icons/fa";

interface ButtonGitHubProps {
    text: string;
}

const ButtonGitHub = ({ text }: ButtonGitHubProps) => {
    return (
        <a
            href="https://github.com/CarlosNavarro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg px-5 py-2.5 text-sm font-medium text-text transition duration-300 hover:border-primary hover:text-primary"
        >
            <FaGithub className="text-base" />
            <span>{text}</span>
        </a>
    );
};

export default ButtonGitHub;