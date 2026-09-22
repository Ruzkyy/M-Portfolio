import { useState } from "react"
import { Home, User, Mail, Code2, FolderKanban, Award } from "lucide-react"

/**
 * Componente Navbar: Barra de navegación principal.
 * 
 * Renderiza un menú flotante estilo "glassmorphism" (cristalizado) en la parte 
 * inferior de la pantalla. Permite al usuario navegar entre las diferentes 
 * secciones del portafolio de manera interactiva.
 * 
 * @param {Object} props
 * @param {Function} props.setSection - Función para cambiar la sección activa de la página.
 */
export default function Navbar({ setSection }) {
  // Estado para controlar sobre qué botón está el cursor (para mostrar el Tooltip)
  const [hover, setHover] = useState(null)

  // Configuración de los botones de navegación (ID, icono y etiqueta)
  const items = [
    { id: "home", icon: <Home size={20} />, label: "Inicio" },
    { id: "about", icon: <User size={20} />, label: "Sobre mí" },
    { id: "technologies", icon: <Code2 size={20} />, label: "Tecnologías" },
    { id: "projects", icon: <FolderKanban size={20} />, label: "Proyectos" },
    { id: "certificates", icon: <Award size={20} />, label: "Certificados" },
    { id: "contact", icon: <Mail size={20} />, label: "Contacto" },
  ]

  return (
    // Contenedor principal: fijo en la parte inferior y centrado
    <div className="fixed bottom-6 w-full flex justify-center z-50">

      {/* Fondo cristalizado (Glassmorphism) con padding y esquinas redondeadas */}
      <div className="max-w-[calc(100vw-1rem)] overflow-x-auto bg-white/10 backdrop-blur-md px-4 sm:px-6 py-3 rounded-full flex gap-5 sm:gap-6">

        {items.map((item, index) => (
          <div
            key={item.id} // Se usa un ID único en lugar del índice para evitar problemas de renderizado
            className="relative flex flex-col items-center"
            // Se actualiza el estado al pasar o quitar el mouse
            onMouseEnter={event => setHover({ index, rect: event.currentTarget.getBoundingClientRect() })}
            onMouseLeave={() => setHover(null)}
          >

            {/* Tooltip flotante: Solo aparece si el mouse está sobre este botón */}
            {/* Botón interactivo de navegación */}
            <button
              onClick={() => setSection(item.id)}
              className="text-white hover:scale-125 transition"
              aria-label={item.label}
            >
              {item.icon}
            </button>

          </div>
        ))}

      </div>
      {hover && (
        <span
          className="navbar-tooltip"
          style={{ top: hover.rect.top - 10, left: hover.rect.left + hover.rect.width / 2 }}
        >
          {items[hover.index].label}
        </span>
      )}
    </div>
  )
}