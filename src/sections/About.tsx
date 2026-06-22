import { Heart, Target, Lightbulb } from "lucide-react";

const About = () => {
    return (
        <section id="Acerca de" className="scroll-mt-32 bg-bg py-24 text-text">

            <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

                {/* INFO */}
                <div>

                    <p className="mb-3 font-medium text-primary">
                        Sobre mí
                    </p>

                    <h2 className="mb-8 text-5xl font-bold text-text">
                        Conoce un poco más sobre mí
                    </h2>

                    <p className="mb-6 text-lg leading-8 text-text/70">
                        Soy{" "}
                        <span className="font-semibold text-text">
                            Ingeniero en Sistemas
                        </span>{" "}
                        con una gran pasión por el desarrollo de software y la creación de
                        soluciones que generen un impacto positivo.
                    </p>

                    <p className="mb-6 text-lg leading-8 text-text/70">
                        Disfruto desarrollar aplicaciones web modernas utilizando
                        tecnologías como{" "}
                        <span className="font-semibold text-text">
                            React, Angular, Spring Boot, Java y SQL
                        </span>
                        , siempre priorizando el código limpio, las buenas prácticas y una
                        excelente experiencia de usuario.
                    </p>

                    <p className="text-lg leading-8 text-text/70">
                        Actualmente continúo fortaleciendo mis habilidades técnicas mientras
                        busco oportunidades para crecer profesionalmente, afrontar nuevos
                        desafíos y aportar valor en cada proyecto en el que participo.
                    </p>
                </div>

                {/* CARDS */}
                <div className="space-y-8">

                    {/* CARD 1 */}
                    <div className="group flex gap-5 rounded-2xl border border-border p-6 transition duration-300 hover:border-primary hover:bg-bg">

                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30 transition duration-300 group-hover:scale-110">
                            <Heart size={24} className="text-white" />
                        </div>

                        <div>
                            <h3 className="mb-2 text-xl font-semibold text-text">
                                Apasionado
                            </h3>

                            <p className="leading-7 text-text/70">
                                Disfruto aprender nuevas tecnologías y desarrollar soluciones
                                que resuelvan problemas reales y generen impacto.
                            </p>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="group flex gap-5 rounded-2xl border border-border p-6 transition duration-300 hover:border-primary hover:bg-bg">

                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30 transition duration-300 group-hover:scale-110">
                            <Target size={24} className="text-white" />
                        </div>

                        <div>
                            <h3 className="mb-2 text-xl font-semibold text-text">
                                Enfocado
                            </h3>

                            <p className="leading-7 text-text/70">
                                Trabajo de forma organizada, orientado a objetivos y buscando
                                siempre entregar software de calidad.
                            </p>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="group flex gap-5 rounded-2xl border border-border p-6 transition duration-300 hover:border-primary hover:bg-bg">

                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30 transition duration-300 group-hover:scale-110">
                            <Lightbulb size={24} className="text-white" />
                        </div>

                        <div>
                            <h3 className="mb-2 text-xl font-semibold text-text">
                                Innovador
                            </h3>

                            <p className="leading-7 text-text/70">
                                Me gusta explorar nuevas ideas, adoptar buenas prácticas y
                                utilizar tecnologías modernas para crear aplicaciones eficientes.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;