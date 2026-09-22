export default function Projects() {
  return (
    <section className="min-h-screen px-6 pt-16 pb-32 flex justify-center">
      <div className="max-w-5xl w-full">
        <p className="text-cyan-300 text-sm uppercase tracking-[0.3em]">Trabajo en progreso</p>
        <h2 className="mt-3 text-4xl md:text-6xl font-semibold">Proyectos</h2>
        <p className="mt-5 max-w-2xl text-gray-400 leading-relaxed">
          Este espacio está preparado para mostrar proyectos reales, experimentos y soluciones que construya durante mi camino como desarrollador.
        </p>
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <article className="project-placeholder md:col-span-2">
            <span className="text-cyan-300 text-sm">Próximamente</span>
            <h3 className="mt-3 text-2xl font-semibold">Aquí aparecerá mi próximo proyecto</h3>
            <p className="mt-3 text-gray-400">Estoy preparando una selección de trabajos con su objetivo, tecnologías y aprendizajes.</p>
          </article>
        </div>
      </div>
    </section>
  )
}