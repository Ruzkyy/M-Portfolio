import { useState } from "react"
import { Home, User, Mail } from "lucide-react"

export default function Navbar({ setSection }) {
  const [hover, setHover] = useState(null)

  const items = [
    { id: "home", icon: <Home size={20} />, label: "Inicio" },
    { id: "about", icon: <User size={20} />, label: "Sobre mí" },
    { id: "contact", icon: <Mail size={20} />, label: "Contacto" },
  ]

  return (
    <div className="fixed bottom-6 w-full flex justify-center z-50">
      <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full flex gap-6">

        {items.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
          >

            {/* Tooltip */}
            {hover === index && (
              <span className="absolute -top-8 text-xs bg-white text-black px-2 py-1 rounded">
                {item.label}
              </span>
            )}

            {/* Botón */}
            <button
              onClick={() => setSection(item.id)}
              className="text-white hover:scale-125 transition"
            >
              {item.icon}
            </button>

          </div>
        ))}

      </div>
    </div>
  )
}