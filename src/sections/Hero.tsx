import {
    SiReact,
    SiSpringboot,
    SiMysql,
    SiTailwindcss,
} from "react-icons/si";

import ButtonGitHub from "../components/buttons/ButtonGitHub";
import ButtonProject from "../components/buttons/ButtonProject";

const Hero = () => {
    return (
        <section
            id="Inicio"
            className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 text-text bg-bg"
        >
            <div className="grid w-full items-center gap-16 md:grid-cols-2">

                {/* CONTENT */}
                <div className="min-w-0">

                    <p className="mb-3 text-lg font-medium text-primary">
                        Hola, soy
                    </p>

                    <h1 className="mb-6 text-5xl font-extrabold leading-tight text-text md:text-6xl">
                        Carlos Navarro
                    </h1>

                    <h2 className="mb-6 text-2xl font-semibold text-primary">
                        Desarrollador Full Stack
                    </h2>

                    <p className="mb-8 max-w-lg text-lg leading-8 text-text/70">
                        Soy Ingeniero en Sistemas apasionado por el desarrollo
                        web. Me especializo en crear aplicaciones modernas con
                        React, Spring Boot, MySQL y Tailwind CSS, desarrollando
                        interfaces intuitivas y soluciones escalables.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <ButtonProject
                            text="Ver Proyectos"
                            href="#projects"
                        />

                        <ButtonGitHub
                            text="GitHub"
                        />
                    </div>
                </div>

                {/* VISUAL */}
                <div className="flex min-w-0 items-center justify-center">
                    <div className="relative isolate aspect-square w-full max-w-[420px] overflow-hidden">

                        {/* CENTER TEXT */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center select-none">
                            <h3 className="text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
                                Full
                            </h3>

                            <span className="bg-gradient-to-r from-primary via-sky-400 to-cyan-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
                                Stack
                            </span>
                        </div>

                        {/* REACT */}
                        <div
                            className="absolute left-1/2 top-[8%] -translate-x-1/2 transition duration-300 hover:scale-110"
                            style={{ animation: "float 6s ease-in-out infinite" }}
                        >
                            <SiReact
                                size={82}
                                className="text-primary drop-shadow-[0_0_16px_rgba(59,130,246,0.45)]"
                                style={{ animation: "spin 12s linear infinite" }}
                            />
                        </div>

                        {/* SPRING */}
                        <div
                            className="absolute left-[8%] top-1/2 -translate-y-1/2 transition duration-300 hover:scale-110"
                            style={{ animation: "float 6.5s ease-in-out infinite" }}
                        >
                            <SiSpringboot
                                size={82}
                                className="text-green-500 drop-shadow-[0_0_16px_rgba(34,197,94,.45)]"
                            />
                        </div>

                        {/* TAILWIND */}
                        <div
                            className="absolute right-[8%] top-1/2 -translate-y-1/2 transition duration-300 hover:scale-110"
                            style={{ animation: "float 7s ease-in-out infinite" }}
                        >
                            <SiTailwindcss
                                size={82}
                                className="text-primary drop-shadow-[0_0_16px_rgba(59,130,246,0.45)]"
                            />
                        </div>

                        {/* MYSQL */}
                        <div
                            className="absolute bottom-[8%] left-1/2 -translate-x-1/2 transition duration-300 hover:scale-110"
                            style={{ animation: "float 7.5s ease-in-out infinite" }}
                        >
                            <SiMysql
                                size={82}
                                className="text-orange-400 drop-shadow-[0_0_16px_rgba(251,146,60,.45)]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ANIMATION */}
            <style>{`
@keyframes float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`}</style>
        </section>
    );
};

export default Hero;