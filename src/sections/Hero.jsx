export default function Hero({ setSection }) {
  return (
    <section className="h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">
      
      {/* Fondo animado */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-black animate-gradient"></div>

      <div className="backdrop-blur-md bg-white/5 px-8 py-6 rounded-2xl">
        
        <p className="text-xl text-gray-300">
          Hola, soy <span className="text-white">Ruzky</span> 👋
        </p>

        <p className="mt-2 text-xl text-gray-400">
          Soy programador full stack
        </p>

        <p className="mt-2 text-lg text-gray-500">
          Quiero ser Cloud Engineer ☁️
        </p>

        <button
          onClick={() => setSection("about")}
          className="mt-6 text-sm text-gray-300 hover:text-white transition"
        >
          → Sobre mí
        </button>

      </div>
    </section>
  )
}