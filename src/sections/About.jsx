import foto from "../assets/fotos_perfil.png"

export default function About() {
  return (
    <section className="min-h-screen px-20 pt-16 pb-24 flex justify-center">
      
      <div className="grid md:grid-cols-2 gap-20 max-w-[1200px] w-full">

        {/* 🧑 PERFIL */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-md hover:border-white/20 transition">
          <div className="flex flex-col items-center text-center">
            
            {/* 🖼️ FOTO */}
            <img
              src={foto}
              alt="Julián Ruiz"
              className="w-36 h-36 rounded-full object-cover mb-6 border border-white/10 shadow-lg"
            />

            <h2 className="text-2xl font-semibold mb-2">
              Julián Ruiz
            </h2>

            <p className="text-gray-400 mb-4">
              Desarrollador Full Stack
            </p>

            <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-300">
              <span className="bg-white/10 px-3 py-1 rounded-full">
                Ingeniería de Sistemas
              </span>
              <span className="bg-white/10 px-3 py-1 rounded-full">
                Cloud Engineer (aspiración)
              </span>
            </div>
          </div>
        </div>

        {/* 📄 CONTENIDO */}
        <div className="flex flex-col gap-10">

          {/* SOBRE MI */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-md hover:border-white/20 transition">
            <h3 className="text-xl font-semibold mb-4">Sobre mí</h3>

            <p className="text-gray-400 leading-relaxed">
              Soy estudiante de séptimo semestre de Ingeniería de Sistemas en la 
              Universidad Konrad Lorenz. Tengo conocimientos en programación, 
              desarrollo de software y bases de datos, con experiencia en Java 
              y desarrollo web.
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Actualmente estoy profundizando en infraestructura y computación en la nube, 
              con el objetivo de convertirme en Cloud Engineer y seguir creciendo profesionalmente.
            </p>
          </div>

          {/* EDUCACIÓN */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-md hover:border-white/20 transition">
            <h3 className="text-xl font-semibold mb-4">Educación</h3>

            <ul className="text-gray-400 space-y-3">
              <li>🎓 Ingeniería de Sistemas — Universidad Konrad Lorenz (en curso)</li>
              <li>🏫 Bachiller con énfasis en gestión empresarial</li>
            </ul>
          </div>

          {/* TECNOLOGÍAS */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-md hover:border-white/20 transition">
            <h3 className="text-xl font-semibold mb-4">Tecnologías</h3>

            <div className="flex flex-wrap gap-3 text-sm text-gray-300">
              {[
                "Java",
                "JavaScript",
                "HTML",
                "CSS",
                "PostgreSQL",
                "Git",
                "GitHub",
                "MVC",
                "Cisco"
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-white/10 px-3 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}