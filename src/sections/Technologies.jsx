import { createElement } from "react"
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLinux, FaCss3Alt, FaJava } from "react-icons/fa"
import {
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiAngular,
  SiMysql,
} from "react-icons/si"
import gitkrakenLogo from "../assets/gitkraken-logo.svg"
import netbeansLogo from "../assets/netbeans-logo.svg"
import vscodeLogo from "../assets/vscode-logo.svg"

const BrandLogo = ({ src, alt }) => (
  <img className="brand-logo" src={src} alt={alt} />
)

const groups = [
  { title: "Lenguajes", eyebrow: "La base", accent: "blue", items: [["HTML", SiHtml5], ["CSS", FaCss3Alt], ["JavaScript", SiJavascript], ["Java", FaJava]] },
  { title: "Frontend", eyebrow: "Lo visible", accent: "violet", items: [["React", FaReact], ["Angular", SiAngular], ["Tailwind CSS", SiTailwindcss]] },
  { title: "Backend", eyebrow: "La lógica", accent: "green", items: [["Node.js", FaNodeJs]] },
  { title: "Bases de datos", eyebrow: "Los datos", accent: "amber", items: [["PostgreSQL", SiPostgresql], ["MySQL", SiMysql], ["MongoDB", SiMongodb]] },
  { title: "Herramientas", eyebrow: "Mi entorno", accent: "cyan", items: [["Git", FaGitAlt], ["GitHub", FaGithub], ["GitKraken", () => <BrandLogo src={gitkrakenLogo} alt="Logo de GitKraken" />], ["VS Code", () => <BrandLogo src={vscodeLogo} alt="Logo de Visual Studio Code" />], ["NetBeans", () => <BrandLogo src={netbeansLogo} alt="Logo de Apache NetBeans" />], ["Linux", FaLinux]] },
]

export default function Technologies() {
  return (
    <section className="min-h-screen px-6 pt-16 pb-32 flex justify-center">
      <div className="max-w-5xl w-full">
        <p className="text-cyan-300 text-sm uppercase tracking-[0.3em]">Stack en crecimiento</p>
        <h2 className="mt-3 text-4xl md:text-6xl font-semibold">Tecnologías</h2>
        <p className="mt-5 max-w-2xl text-gray-400 leading-relaxed">Herramientas con las que aprendo, construyo interfaces y exploro soluciones de software.</p>
        <div className="tech-groups mt-12">
          {groups.map(group => (
            <article className={`tech-group tech-group-${group.accent}`} key={group.title}>
              <div className="tech-group-heading">
                <div>
                  <p className="tech-eyebrow">{group.eyebrow}</p>
                  <h3>{group.title}</h3>
                </div>
              </div>
              <div className="tech-grid">
                {group.items.map(([name, Icon]) => (
                  <article className="tech-card" key={name}>
                    {createElement(Icon, { className: "tech-icon", size: 42, "aria-hidden": true })}
                    <span>{name}</span>
                  </article>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}