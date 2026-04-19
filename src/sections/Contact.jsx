import { 
  FaLinkedin, 
  FaGithub, 
  FaInstagram,
  FaDiscord,
  FaEnvelope
} from "react-icons/fa"

// --- DATOS ---

/**
 * Lista de redes sociales y métodos de contacto.
 * Contiene la configuración visual y los enlaces para cada tarjeta de contacto.
 * @type {Array<{name: string, url: string, icon: Function, hoverColor: string}>}
 */
const contacts = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/julian-ruiz-gonzalez-a58b4028a/",
    icon: FaLinkedin,
    hoverColor: "hover:text-blue-400"
  },
  {
    name: "GitHub",
    url: "https://github.com/Ruzkyy",
    icon: FaGithub,
    hoverColor: "hover:text-gray-200"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/ruzky_27_/",
    icon: FaInstagram,
    hoverColor: "hover:text-pink-400"
  },
  {
    name: "Discord",
    url: "https://discord.com/users/123456789012345678",
    icon: FaDiscord,
    hoverColor: "hover:text-indigo-400"
  },
  {
    name: "Correo",
    url: "mailto:ruizgonzalezjulianarley25@gmail.com?subject=Contacto%20desde%20tu%20portafolio",
    icon: FaEnvelope,
    hoverColor: "hover:text-red-400"
  }
];

// --- COMPONENTES REUTILIZABLES ---

/**
 * Renderiza una tarjeta interactiva para un método de contacto.
 * @param {Object} props
 * @param {string} props.name - Nombre de la red social o método
 * @param {string} props.url - Enlace destino
 * @param {Function} props.icon - Componente del ícono (react-icons)
 * @param {string} props.hoverColor - Clase de Tailwind para el color al pasar el ratón
 */
const ContactCard = ({ name, url, icon: Icon, hoverColor }) => (
  <a 
    href={url} 
    target="_blank"
    rel="noopener noreferrer"
    className={`bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-4 hover:scale-105 hover:bg-white/10 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)] ${hoverColor}`}
  >
    <Icon size={40} />
    <p className="text-lg">{name}</p>
  </a>
);

/**
 * Componente principal de "Contacto" (Contact).
 * Muestra una cuadrícula con todas las formas de contacto disponibles.
 */
export default function Contact() {
  return (
    <section className="min-h-screen px-20 pt-16 pb-20 flex justify-center">
      
      <div className="max-w-[1100px] w-full flex flex-col gap-12">

        <h2 className="text-3xl font-semibold text-center">
          Contáctame
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <ContactCard 
              key={index}
              name={contact.name}
              url={contact.url}
              icon={contact.icon}
              hoverColor={contact.hoverColor}
            />
          ))}
        </div>

      </div>
    </section>
  )
}