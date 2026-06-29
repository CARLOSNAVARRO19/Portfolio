import { useEffect, useState } from "react";
import { Menu, X, Download, Sun, Moon, Phone } from "lucide-react";

import ButtonCV from "./buttons/ButtonCV";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-border bg-bg text-text backdrop-blur">

      {/* Top Bar */}
      <div className="border-b border-border bg-bg backdrop-blur">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6">

          <div className="flex items-center gap-2 text-sm">
            <Phone size={15} className="text-primary" />
            <a
              href="tel:+50688888888"
              className="transition hover:text-primary"
            >
              +506 8888-8888
            </a>
          </div>

          <p className="hidden text-sm md:block">
            Disponible para oportunidades laborales
          </p>

        </div>
      </div>

      {/* Main Nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Logo"
            className="h-8"
          />

          <span className="text-xl font-bold text-text">
            Carlos Navarro
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8">

            {["Inicio", "Acerca de", "Habilidades", "Proyectos", "Contacto"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="font-medium transition hover:text-primary"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}

          </ul>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">

          {/* Theme Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-lg border border-border p-2 transition hover:border-primary hover:bg-bg"
            aria-label="Cambiar tema"
          >
            {darkMode ? (
              <Moon size={20} className="text-primary" />
            ) : (
              <Sun size={20} className="text-primary" />
            )}
          </button>

          {/* CV Button */}
          <div className="hidden md:block">
            <ButtonCV
              icon={<Download size={16} />}
              text="Descargar CV"
              href="../../public/CV_Carlos_Navarro_Espanol.pdf"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg border border-border p-2 text-text transition hover:border-primary hover:bg-bg md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-4 right-4 top-full mt-3 overflow-hidden rounded-2xl border border-border bg-bg shadow-2xl transition-all duration-300 md:hidden ${isOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-4 opacity-0"
          }`}
      >
        <ul className="flex flex-col items-center gap-6 p-8">

          {["Inicio", "Acerca de", "Habilidades", "Proyectos", "Contacto"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={closeMenu}
                className="text-lg font-medium text-text transition hover:text-primary"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}

          <div className="h-px w-full bg-border" />

          <ButtonCV
            icon={<Download size={16} />}
            text="Descargar CV"
            href="/CV_Carlos_Navarro_Espanol.pdf"
          />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;