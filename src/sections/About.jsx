import foto from "../assets/fotos_perfil.png"
import logoU from "../assets/logo-konrad.png"
import googleLogo from "../assets/google-cloud.png"
import linuxLogo from "../assets/linux.png"
import ccnaLogo from "../assets/cisco.png"

import {
  FaUserTie,
  FaMapMarkerAlt,
  FaBriefcase,
  FaCloud,
  FaQuestionCircle
} from "react-icons/fa"

import { BsCalendar } from "react-icons/bs"

// --- DATOS ---

/**
 * Diccionario de tecnologías agrupadas por categoría.
 * Facilita el renderizado dinámico de las pastillas (badges) en la vista.
 * @type {Object.<string, string[]>}
 */
const technologies = {
  "Lenguajes": ["HTML", "CSS", "JavaScript", "Java"],
  "Frontend": ["React", "Angular", "Tailwind CSS"],
  "Backend": ["Node.js"],
  "Bases de datos": ["PostgreSQL", "MySQL", "MongoDB"],
  "Herramientas": ["Git", "GitHub", "GitKraken", "VS Code", "NetBeans", "Cisco", "Linux"]
};

/**
 * Lista de certificaciones obtenidas o en curso.
 * @type {Array<{logo: string, title: string, date: string}>}
 */
const certifications = [
  { logo: googleLogo, title: "Google Cloud Computing Foundations", date: "2026 - en curso" },
  { logo: linuxLogo, title: "Linux Essentials", date: "2026 - en curso" },
  { logo: ccnaLogo, title: "CCNA: Introducción a las redes", date: "2025" }
];

// --- COMPONENTES REUTILIZABLES ---

/**
 * Renderiza una etiqueta descriptiva debajo de la foto de perfil.
 * @param {Object} props
 * @param {Function} props.icon - Componente del ícono de react-icons
 * @param {string} props.text - Texto a mostrar en la etiqueta
 */
const ProfileTag = ({ icon: Icon, text }) => (
  <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300">
    <Icon size={12} /> {text}
  </span>
);

/**
 * Renderiza una fila de información (Educación o Certificaciones).
 * Incluye un logo (opcional), título y un tooltip flotante con más información.
 * @param {Object} props
 * @param {string} [props.logo] - Ruta de la imagen del logo (opcional)
 * @param {string} props.title - Título principal a mostrar
 * @param {string} props.tooltipText - Texto que aparece al hacer hover en el ícono de ayuda
 */
const InfoRow = ({ logo, title, tooltipText, defaultText }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      {logo && <img src={logo} className="w-6 h-6" alt={title} />}
      <p>{title}</p>
    </div>

    <div className="relative group flex items-center justify-center w-5 h-5">
      <FaQuestionCircle className="text-gray-400 hover:text-white transition-all duration-300" />
      <span className="
        absolute bottom-full mb-2
        left-1/2 -translate-x-1/2
        opacity-0 translate-y-2
        group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-300
        bg-black/90 text-white text-xs px-5 py-2
        rounded-xl shadow-lg whitespace-nowrap
        pointer-events-none z-10
      ">
        {tooltipText}
      </span>
    </div>
  </div>
);

/**
 * Renderiza una "pastilla" estilizada para una tecnología individual.
 * @param {Object} props
 * @param {string} props.name - Nombre de la tecnología (ej. "React")
 */
const TechBadge = ({ name }) => (
  <span className="bg-white/10 px-3 py-1 rounded-md text-xs text-gray-300 
    hover:bg-white/20 hover:scale-105 transition-all duration-300 
    hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
    {name}
  </span>
);

/**
 * Componente principal "Sobre mí" (About).
 * Contiene el perfil personal, descripción, educación, certificaciones y tecnologías.
 * Está estructurado en dos columnas principales (Perfil fijo a la izquierda en escritorio).
 */
export default function About() {
  return (
    <section className="px-20 pt-16 pb-20 flex justify-center">

      <div className="grid lg:grid-cols-2 gap-20 max-w-[1400px] w-full">

        {/* 🧑 PERFIL */}
        <div className="flex justify-center items-start">
          <div className="relative lg:fixed lg:top-1/2 lg:-translate-y-1/2 self-start bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-20 backdrop-blur-md w-full max-w-xl">

            <div className="flex flex-col items-center text-center">

              <img
                src={foto}
                alt="Julián Ruiz"
                className="w-56 h-56 rounded-full object-cover mb-4 border border-white/10 shadow-lg"
              />

              <h2 className="text-3xl font-semibold mb-1">
                Julián Ruiz
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                Desarrollador Full Stack
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-300">
                <ProfileTag icon={FaUserTie} text="Ingeniero de Sistemas" />
                
                {/* Etiqueta de Edad (Con Tooltip especial) */}
                <span className="relative group flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_12px_rgba(255,255,255,0.25)]">
                  <BsCalendar size={12} /> 20 años
                  <span className="
                      absolute bottom-full mb-2
                      left-1/2 -translate-x-1/2
                      opacity-0 translate-y-2
                      group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-300
                      bg-black/90 backdrop-blur-md
                      text-white text-xs px-5 py-2
                      rounded-xl shadow-lg
                      whitespace-nowrap
                      pointer-events-none z-10
                    ">
                    actualizado el 27/05/2026
                  </span>
                </span>

                <ProfileTag icon={FaBriefcase} text="Buscando empleo" />
                <ProfileTag icon={FaCloud} text="Cloud Engineer" />
                <ProfileTag icon={FaMapMarkerAlt} text="Bogotá, Colombia" />
              </div>
            </div>
          </div>
        </div>

        {/* 📄 CONTENIDO */}
        <div className="flex flex-col gap-12">

          {/* SOBRE MI */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Sobre mí</h3>
            <p className="text-gray-400 leading-relaxed">
              Soy estudiante de séptimo semestre de Ingeniería de Sistemas en la Universidad Konrad Lorenz, en jornada nocturna, con conocimientos en programación, desarrollo de software y bases de datos. Tengo experiencia en Java, desarrollo web en HTML y creación de interfaces gráficas, además de haber trabajado en proyectos bajo el modelo MVC. Manejo herramientas como Visual Studio Code, NetBeans, Eclipse, IntelliJ IDEA y GitHub. Actualmente, estoy profundizando en infraestructura a través de un curso de Google Skills, con un enfoque especial en el área de computación en la nube. Me interesa desarrollarme profesionalmente como Cloud Engineer y adquirir experiencia como desarrollador o auxiliar de redes.
            </p>
          </div>

          {/* EDUCACIÓN */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Educación</h3>
            <div className="space-y-4 text-gray-400">
              <InfoRow 
                title="Título de bachiller" 
                tooltipText="Graduado en 2022" 
              />
              <InfoRow 
                logo={logoU} 
                title="Ingeniería de Sistemas (FUKL)" 
                tooltipText="2023 - en curso" 
              />
            </div>
          </div>

          {/* CERTIFICACIONES */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Certificaciones</h3>
            <div className="space-y-6 text-gray-400">
              {certifications.map((cert, index) => (
                <InfoRow 
                  key={index}
                  logo={cert.logo}
                  title={cert.title}
                  tooltipText={cert.date}
                />
              ))}
            </div>
          </div>

          {/* TECNOLOGÍAS */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6">Tecnologías</h3>
            
            <div className="flex flex-col gap-6">
              {Object.entries(technologies).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-sm text-gray-400 mb-2">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map(tech => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}