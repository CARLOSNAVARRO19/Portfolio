interface ButtonProjectProps {
    text: string;
    href: string;
}

const ButtonProject = ({ text, href }: ButtonProjectProps) => {
    return (
        <a
            href={href}
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-blue-700"
        >
            {text}
        </a>
    );
};

export default ButtonProject;