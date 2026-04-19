import { useState } from "react"
import { Home, User, Mail } from "lucide-react"

/**
 * Componente Navbar (Barra de Navegación Flotante)
 * 
 * Barra inferior con efecto de vidrio esmerilado (glassmorphism).
 * Permite cambiar entre las secciones principales ("home", "about", "contact").
 * 
 * @param {Object} props
 * @param {Function} props.setSection - Función para actualizar la vista activa
 */
export default function Navbar({ setSection }) {
  // Estado para saber qué botón tiene el mouse encima (para mostrar su tooltip)
  const [hover, setHover] = useState(null)

  // Configuración de botones: ID (para setSection), el ícono de lucide-react y la etiqueta
  const items = [
    { id: "home", icon: <Home size={20} />, label: "Inicio" },
    { id: "about", icon: <User size={20} />, label: "Sobre mí" },
    { id: "contact", icon: <Mail size={20} />, label: "Contacto" },
  ]

  return (
    // fixed bottom-6: fija la barra abajo. z-50: se asegura que esté sobre otros elementos
    <div className="fixed bottom-6 w-full flex justify-center z-50">
      
      {/* bg-white/10 + backdrop-blur-md: crea el efecto de cristal semitransparente */}
      <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full flex gap-6">

        {items.map((item, index) => (
          <div
            key={item.id} // Se usa un ID único en lugar del índice para evitar problemas de renderizado
            className="relative flex flex-col items-center"
            // Se actualiza el estado al pasar o quitar el mouse
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
          >

            {/* Tooltip: Aparece flotando arriba (-top-8) solo cuando tiene el mouse encima */}
            {hover === index && (
              <span className="absolute -top-8 text-xs bg-white text-black px-2 py-1 rounded">
                {item.label}
              </span>
            )}

            {/* Botón interactivo: hover:scale-125 crea un efecto de crecimiento suave al pasar el mouse */}
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