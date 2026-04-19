// --- DATOS ---

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
    <section className="h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">

      {/* Fondo animado */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-black animate-gradient"></div>

      <div className="backdrop-blur-md bg-white/5 px-8 py-6 rounded-2xl">

        <p className="text-xl text-gray-300">
          {heroData.greeting} <span className="text-white">{heroData.name}</span> {heroData.greetingEmoji}
        </p>

        <p className="mt-2 text-xl text-gray-400">
          {heroData.role}
        </p>

        <p className="mt-2 text-lg text-gray-500">
          {heroData.goal}
        </p>

        <button
          onClick={() => setSection(heroData.buttonTarget)}
          className="mt-6 text-sm text-gray-300 hover:text-white transition"
        >
          {heroData.buttonText}
        </button>

      </div>
    </section>
  )
}