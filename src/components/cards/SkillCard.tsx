import type { Skill } from "../../types/skill";

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div className="group flex h-60 flex-col items-center justify-center rounded-2xl border border-border bg-bg p-8 transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/20">

      {/* ICON */}
      <div className="mb-6 text-6xl text-primary transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_14px_rgba(59,130,246,0.6)]">
        {skill.icon}
      </div>

      {/* NAME */}
      <h3 className="mb-2 text-2xl font-semibold text-text transition-colors duration-300 group-hover:text-primary">
        {skill.name}
      </h3>

      {/* CATEGORY */}
      <span className="rounded-full bg-border px-4 py-1 text-sm text-text/70 transition-colors duration-300 group-hover:bg-border/80">
        {skill.category}
      </span>

    </div>
  );
};

export default SkillCard;