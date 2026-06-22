import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="Contacto" className="scroll-mt-32 bg-bg py-24 text-text">

      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-3 font-medium text-primary">
            Contacto
          </p>

          <h2 className="mb-6 text-5xl font-bold text-text">
            Hablemos
          </h2>

          <p className="text-lg leading-8 text-text/70">
            Si tienes una oportunidad laboral, una idea de proyecto o simplemente
            deseas ponerte en contacto conmigo, estaré encantado de responderte.
          </p>

        </div>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {/* CARD COMPONENT STYLE (repetido pero limpio) */}

          {/* LOCATION */}
          <div className="group flex gap-5 rounded-2xl border border-border p-6 transition duration-300 hover:border-primary hover:bg-bg">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30 transition group-hover:scale-110">
              <MapPin size={24} className="text-white" />
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold text-text">
                Ubicación
              </h3>

              <p className="leading-7 text-text/70">
                Santa Cruz, Guanacaste
                <br />
                Costa Rica
              </p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="group flex gap-5 rounded-2xl border border-border p-6 transition duration-300 hover:border-primary hover:bg-bg">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30 transition group-hover:scale-110">
              <Mail size={24} className="text-white" />
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold text-text">
                Email
              </h3>

              <a
                href="mailto:carlosanavarror19@gmail.com?subject=Oportunidad%20Laboral&body=Hola%20Carlos,%20me%20gustaría%20ponerme%20en%20contacto%20contigo."
                className="break-all text-text/70 transition hover:text-primary"
              >
                carlosanavarror19@gmail.com
              </a>
            </div>
          </div>

          {/* PHONE */}
          <div className="group flex gap-5 rounded-2xl border border-border p-6 transition duration-300 hover:border-primary hover:bg-bg">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30 transition group-hover:scale-110">
              <Phone size={24} className="text-white" />
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold text-text">
                Teléfono
              </h3>

              <a
                href="tel:+50686136400"
                className="text-text/70 transition hover:text-primary"
              >
                +506 8613-6400
              </a>
            </div>
          </div>

          {/* LINKEDIN */}
          <div className="group flex gap-5 rounded-2xl border border-border p-6 transition duration-300 hover:border-primary hover:bg-bg">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30 transition group-hover:scale-110">
              <FaLinkedin className="text-2xl text-white" />
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold text-text">
                LinkedIn
              </h3>

              <a
                href="https://linkedin.com/in/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-text/70 transition hover:text-primary"
              >
                linkedin.com/in/tuusuario
              </a>
            </div>
          </div>

          {/* GITHUB */}
          <div className="group flex gap-5 rounded-2xl border border-border p-6 transition duration-300 hover:border-primary hover:bg-bg">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30 transition group-hover:scale-110">
              <FaGithub className="text-2xl text-white" />
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold text-text">
                GitHub
              </h3>

              <a
                href="https://github.com/CARLOSNAVARRO19"
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-text/70 transition hover:text-primary"
              >
                https://github.com/CARLOSNAVARRO19
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;