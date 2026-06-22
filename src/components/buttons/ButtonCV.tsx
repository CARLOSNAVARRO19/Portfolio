import type { ReactNode } from "react";

interface ButtonCVProps {
  text: string;
  icon?: ReactNode;
  href?: string;
}

const ButtonCV = ({
  text,
  icon,
  href = "#",
}: ButtonCVProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
};

export default ButtonCV;