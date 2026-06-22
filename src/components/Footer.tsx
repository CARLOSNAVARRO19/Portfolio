import { ArrowUp } from "lucide-react";

const Footer = () => {
    return (
        <footer className="border-t border-border bg-bg text-text">

            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">

                {/* Logo */}
                <a href="/" className="flex items-center space-x-3">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-8"
                        alt="Logo"
                    />

                    <span className="text-xl font-bold text-text">
                        Carlos Navarro
                    </span>
                </a>

                {/* Links */}
                <ul className="flex flex-wrap items-center justify-center gap-6 text-sm">
                    <li>
                        <a href="#Habilidades" className="transition hover:text-primary">
                            Habilidades
                        </a>
                    </li>

                    <li>
                        <a href="#Proyectos" className="transition hover:text-primary">
                            Proyectos
                        </a>
                    </li>

                    <li>
                        <a href="#Contacto" className="transition hover:text-primary">
                            Contacto
                        </a>
                    </li>

                    <li>
                        <a
                            href="#Inicio"
                            className="flex items-center gap-2 transition hover:text-primary"
                            aria-label="Volver al inicio"
                        >
                            <ArrowUp size={18} />
                            Volver al inicio
                        </a>
                    </li>
                </ul>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-border py-4">
                <p className="text-center text-sm text-text">
                    © {new Date().getFullYear()} Carlos Navarro. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;