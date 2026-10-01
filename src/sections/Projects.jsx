import { ArrowUpRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import switchPreviewFallback from "../assets/switch-support-preview.png"

const projects = [
  {
    title: "Soporte Nintendo Switch 2",
    category: "Chatbot especializado",
    description:
      "Asistente centrado en resolver dudas sobre Nintendo Switch 2, con respuestas basadas en los documentos PDF oficiales de la consola.",
    url: "https://chatbot-soporte-nintendoswitch2.onrender.com/",
    repository: "https://github.com/Ruzkyy/ChatBot_Soporte_NintendoSwitch2.git",
    image: switchPreviewFallback,
    imageAlt: "Vista ilustrativa del chatbot de soporte para Nintendo Switch 2",
    tags: ["Chatbot", "Base documental", "Nintendo Switch 2"],
    accent: "project-accent-cyan",
  },
  {
    title: "Laboratorio Decorator",
    category: "Guía visual interactiva",
    description:
      "Una guía interactiva del patrón estructural Decorator, con ejemplos visuales y una IA con Gemini que responde sobre el patrón.",
    url: "https://decoratorpaginaweb.vercel.app/",
    repository: "https://github.com/Ruzkyy/Decorator.git",
    image: "https://decoratorpaginaweb.vercel.app/",
    imageAlt: "Vista previa de la guía interactiva del patrón Decorator",
    tags: ["Patrones de diseño", "Decorator", "IA con Gemini"],
    accent: "project-accent-pink",
  },
]

export default function Projects() {
  return (
    <section className="min-h-screen px-6 pt-16 pb-32 flex justify-center">
      <div className="max-w-6xl w-full">
        <p className="text-cyan-300 text-sm uppercase tracking-[0.3em]">Proyectos seleccionados</p>
        <h2 className="mt-3 text-4xl md:text-6xl font-semibold">Proyectos</h2>
        <p className="mt-5 max-w-2xl text-gray-400 leading-relaxed">
          Experimentos y soluciones que combinan desarrollo web, diseño de software e inteligencia artificial.
        </p>
        <div className="project-grid mt-12">
          {projects.map(project => (
            <article className={`project-card ${project.accent}`} key={project.title}>
              <a
                className="project-preview"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Abrir ${project.title}`}
              >
                <img
                  src={project.image.startsWith("https://")
                    ? `https://s.wordpress.com/mshots/v1/${encodeURIComponent(project.image)}?w=1200`
                    : project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={event => event.currentTarget.remove()}
                />
                <span className="project-preview-label">Vista previa</span>
              </a>
              <div className="project-card-content">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-tags" aria-label="Temas del proyecto">
                  {project.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
                <div className="project-actions">
                  <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                    Visitar proyecto <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                  <a className="project-link project-repository-link" href={project.repository} target="_blank" rel="noreferrer">
                    <FaGithub size={17} aria-hidden="true" /> Ver repositorio
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}