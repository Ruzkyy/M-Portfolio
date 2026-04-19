import { useState } from "react"
import { Home, User, Mail } from "lucide-react"

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
    { id: "contact", icon: <Mail size={20} />, label: "Contacto" },
  ]

  return (
    // Contenedor principal: fijo en la parte inferior y centrado
    <div className="fixed bottom-6 w-full flex justify-center z-50">

      {/* Fondo cristalizado (Glassmorphism) con padding y esquinas redondeadas */}
      <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full flex gap-6">

        {items.map((item, index) => (
          <div
            key={item.id} // Se usa un ID único en lugar del índice para evitar problemas de renderizado
            className="relative flex flex-col items-center"
            // Se actualiza el estado al pasar o quitar el mouse
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
          >

            {/* Tooltip flotante: Solo aparece si el mouse está sobre este botón */}
            {hover === index && (
              <span className="absolute -top-8 text-xs bg-white text-black px-2 py-1 rounded">
                {item.label}
              </span>
            )}

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
    </div>
  )
}