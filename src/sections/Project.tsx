import ProjectsSlider from "../components/slider/ProjectsSlider";

const Project = () => {
    return (
        <section id="Proyectos" className="scroll-mt-32 bg-bg py-24 text-text">

            <div className="mx-auto max-w-7xl px-6">

                <p className="mb-3 text-center font-medium text-primary">
                    Proyectos
                </p>

                <h2 className="mb-16 text-center text-5xl font-bold text-text">
                    Algunos de mis trabajos
                </h2>

                <ProjectsSlider />

            </div>
        </section>
    );
};

export default Project;