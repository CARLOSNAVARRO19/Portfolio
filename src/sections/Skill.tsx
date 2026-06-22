import { useState } from "react";
import SkillsSlider from "../components/slider/SkillsSlider";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
] as const;

const Skills = () => {
  const [category, setCategory] = useState<
    "All" | "Frontend" | "Backend" | "Database" | "Tools"
  >("All");

  return (
    <section id="Habilidades" className="scroll-mt-32 bg-bg py-24 text-text">

      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <p className="mb-3 text-center font-medium text-primary">
          Skills
        </p>

        <h2 className="mb-12 text-center text-5xl font-bold text-text">
          Tecnologías
        </h2>

        {/* TABS */}
        <div className="mb-14 flex flex-wrap justify-center gap-4">

          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`
                rounded-lg border px-6 py-2 transition

                ${
                  category === item
                    ? "border-primary bg-primary text-white"
                    : "border-border text-text/70 hover:border-primary hover:text-text"
                }
              `}
            >
              {item}
            </button>
          ))}

        </div>

        {/* SLIDER */}
        <SkillsSlider category={category} />

      </div>
    </section>
  );
};

export default Skills;