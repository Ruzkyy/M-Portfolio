// --- DATOS ---
import { motion } from "framer-motion"
import { GoalPanel } from "./Goals"

const Motion = motion

const introContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
}

const introItem = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
}

/**
 * Información principal mostrada en la sección "Hero" (Inicio).
 * Centralizamos los textos aquí para facilitar su edición en el futuro.
 * @type {Object}
 */
const heroData = {
  greeting: "Hola, soy",
  name: "Ruzky",
  greetingEmoji: "👋",
  role: "Soy programador full stack",
  goal: "Quiero ser Cloud Engineer ☁️",
  buttonText: "→ Sobre mí",
  buttonTarget: "about" // ID de la sección a la que navegará el botón
};

// --- COMPONENTE PRINCIPAL ---

/**
 * Componente "Hero" (Sección de Inicio / Portada).
 * Es la primera vista que el usuario ve al cargar la página.
 * Muestra una presentación rápida con un fondo animado y un botón de navegación.
 * 
 * @param {Object} props
 * @param {Function} props.setSection - Función para cambiar la vista activa de la página
 */
export default function Hero({ setSection }) {
  return (
    <section className="home-section min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 relative overflow-hidden">

      {/* Fondo animado */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-black animate-gradient"></div>

      <div className="home-goals">
        <GoalPanel minimal />
      </div>

      <Motion.div
        className="home-content backdrop-blur-md bg-white/5 px-8 py-6 rounded-2xl"
        variants={introContainer}
        initial="hidden"
        animate="visible"
      >

        <Motion.p className="text-xl text-gray-300" variants={introItem}>
          {heroData.greeting} <span className="text-white">{heroData.name}</span> {heroData.greetingEmoji}
        </Motion.p>

        <Motion.p className="mt-2 text-xl text-gray-400" variants={introItem}>
          {heroData.role}
        </Motion.p>

        <Motion.p className="mt-2 text-lg text-gray-500" variants={introItem}>
          {heroData.goal}
        </Motion.p>

        <Motion.button
          onClick={() => setSection(heroData.buttonTarget)}
          className="mt-6 text-sm text-gray-300 hover:text-white transition"
          variants={introItem}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          {heroData.buttonText}
        </Motion.button>

      </Motion.div>

    </section>
  )
}