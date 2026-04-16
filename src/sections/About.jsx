import foto from "../assets/fotos_perfil.png"
import logoU from "../assets/logo-konrad.png"
import googleLogo from "../assets/google-cloud.png"
import linuxLogo from "../assets/linux.png"
import ccnaLogo from "../assets/cisco.png"

import {
  FaUserTie,
  FaMapMarkerAlt,
  FaBriefcase,
  FaCloud,
  FaQuestionCircle
} from "react-icons/fa"

import { BsCalendar } from "react-icons/bs"

export default function About() {
  return (
    <section className="px-20 pt-16 pb-20 flex justify-center">
      
      <div className="grid md:grid-cols-2 gap-20 max-w-[1400px] w-full">

        {/* 🧑 PERFIL */}
        <div className="flex justify-center items-start">
          <div className="fixed top-1/2 -translate-y-1/2 self-start bg-white/5 border border-white/10 rounded-2xl p-20 backdrop-blur-md w-full max-w-xl">

            <div className="flex flex-col items-center text-center">
              
              <img
                src={foto}
                alt="Julián Ruiz"
                className="w-56 h-56 rounded-full object-cover mb-4 border border-white/10 shadow-lg"
              />

              <h2 className="text-3xl font-semibold mb-1">
                Julián Ruiz
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-4 text-lg">
                Desarrollador Full Stack
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-300">

                <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300">
                  <FaUserTie size={12} /> Ingeniero de Sistemas
                </span>

                {/* EDAD */}
                <span className="relative group flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full transition-all duration-300hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_12px_rgba(255,255,255,0.25)]">
                  <BsCalendar size={12} /> 20 años
                    <span className="
                      absolute bottom-full mb-2
                      left-1/2 -translate-x-1/2
                      opacity-0 translate-y-2
                      group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-300
                      bg-black/90 backdrop-blur-md
                      text-white text-xs px-5 py-2
                      rounded-xl shadow-lg
                      whitespace-nowrap
                      pointer-events-none
                    ">
                      actualizado el 27/05/2026
                    </span>
              
                </span>

                <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300">
                  <FaBriefcase size={12} /> Buscando empleo
                </span>

                <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300">
                  <FaCloud size={12} /> Cloud Engineer
                </span>

                <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300">
                  <FaMapMarkerAlt size={12} /> Bogotá, Colombia
                </span>

              </div>
            </div>
          </div>
        </div>

        {/* 📄 CONTENIDO */}
        <div className="flex flex-col gap-12">

          {/* SOBRE MI */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Sobre mí</h3>

            <p className="text-gray-400 leading-relaxed">
              Soy estudiante de séptimo semestre de Ingeniería de Sistemas en la Universidad Konrad Lorenz, en jornada nocturna, con conocimientos en programación, desarrollo de software y bases de datos. Tengo experiencia en Java, desarrollo web en HTML y creación de interfaces gráficas, además de haber trabajado en proyectos bajo el modelo MVC. Manejo herramientas como Visual Studio Code, NetBeans, Eclipse, IntelliJ IDEA y GitHub. Actualmente, estoy profundizando en infraestructura a través de un curso de Google Skills, con un enfoque especial en el área de computación en la nube. Me interesa desarrollarme profesionalmente como Cloud Engineer y adquirir experiencia como desarrollador o auxiliar de redes.
            </p>
          </div>

          {/* EDUCACIÓN */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Educación</h3>

            <div className="space-y-4 text-gray-400">

              {/* Bachiller */}
              <div className="flex items-center justify-between">
                <p>Título de bachiller</p>

                <div className="relative group flex items-center justify-center w-5 h-5">
                  <FaQuestionCircle className="text-gray-400 hover:text-white transition-all duration-300" />

                  <span className="
                    absolute bottom-full mb-2
                    left-1/2 -translate-x-1/2
                    opacity-0 translate-y-2
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-300
                    bg-black/90 text-white text-xs px-5 py-2
                    rounded-xl shadow-lg whitespace-nowrap
                    pointer-events-none
                  ">
                    Graduado en 2022
                  </span>
                </div>
              </div>

              {/* Universidad */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={logoU} className="w-6 h-6" />
                  <p>Ingeniería de Sistemas (FUKL)</p>
                </div>

                <div className="relative group flex items-center justify-center w-5 h-5">
                  <FaQuestionCircle className="text-gray-400 hover:text-white transition-all duration-300" />

                  <span className="
                    absolute bottom-full mb-2
                    left-1/2 -translate-x-1/2
                    opacity-0 translate-y-2
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-300
                    bg-black/90 text-white text-xs px-5 py-2
                    rounded-xl shadow-lg whitespace-nowrap
                    pointer-events-none
                  ">
                    2023 - en curso
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* CERTIFICACIONES */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Certificaciones</h3>

            <div className="space-y-6 text-gray-400">

              {/* Google */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img src={googleLogo} className="w-6 h-6" />
                  <p>Google Cloud Computing Foundations</p>
                </div>

                <div className="relative group flex items-center justify-center w-5 h-5">
                  <FaQuestionCircle className="text-gray-400 hover:text-white transition-all duration-300" />

                  <span className="
                    absolute bottom-full mb-2
                    left-1/2 -translate-x-1/2
                    opacity-0 translate-y-2
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-300
                    bg-black/90 text-white text-xs px-5 py-2
                    rounded-xl shadow-lg whitespace-nowrap
                    pointer-events-none
                  ">
                    2026 - en curso
                  </span>
                </div>
              </div>

              {/* Linux */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img src={linuxLogo} className="w-6 h-6" />
                  <p>Linux Essentials</p>
                </div>

                <div className="relative group flex items-center justify-center w-5 h-5">
                  <FaQuestionCircle className="text-gray-400 hover:text-white transition-all duration-300" />

                  <span className="
                    absolute bottom-full mb-2
                    left-1/2 -translate-x-1/2
                    opacity-0 translate-y-2
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-300
                    bg-black/90 text-white text-xs px-5 py-2
                    rounded-xl shadow-lg whitespace-nowrap
                    pointer-events-none
                  ">
                    2026 - en curso
                  </span>
                </div>
              </div>

              {/* CCNA */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img src={ccnaLogo} className="w-6 h-6" />
                  <p>CCNA: Introducción a las redes</p>
                </div>

                <div className="relative group flex items-center justify-center w-5 h-5">
                  <FaQuestionCircle className="text-gray-400 hover:text-white transition-all duration-300" />

                  <span className="
                    absolute bottom-full mb-2
                    left-1/2 -translate-x-1/2
                    opacity-0 translate-y-2
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-300
                    bg-black/90 text-white text-xs px-5 py-2
                    rounded-xl shadow-lg whitespace-nowrap
                    pointer-events-none
                  ">
                    2025
                  </span>
                </div>
              </div>

            </div>
          </div>
            {/* TECNOLOGÍAS */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6">Tecnologías</h3>

              <div className="flex flex-col gap-6">

                {/* Lenguajes */}
                <div>
                  <h4 className="text-sm text-gray-400 mb-2">Lenguajes</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/10 px-3 py-1 rounded-md text-xs text-gray-300 
                    hover:bg-white/20 hover:scale-105 transition-all duration-300 
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      HTML
                    </span>
                    <span className="bg-white/10 px-3 py-1 rounded-md text-xs text-gray-300 
                    hover:bg-white/20 hover:scale-105 transition-all duration-300 
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      CSS
                    </span>
                    <span className="bg-white/10 px-3 py-1 rounded-md text-xs text-gray-300 
                    hover:bg-white/20 hover:scale-105 transition-all duration-300 
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      JavaScript
                    </span>
                    <span className="bg-white/10 px-3 py-1 rounded-md text-xs text-gray-300 
                    hover:bg-white/20 hover:scale-105 transition-all duration-300 
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      Java
                    </span>
                  </div>
                </div>

                {/* Frontend */}
                <div>
                  <h4 className="text-sm text-gray-400 mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/10 px-3 py-1 rounded-md text-xs text-gray-300 
                    hover:bg-white/20 hover:scale-105 transition-all duration-300 
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      React
                    </span>
                    <span className="bg-white/10 px-3 py-1 rounded-md text-xs text-gray-300 
                    hover:bg-white/20 hover:scale-105 transition-all duration-300 
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      Angular
                    </span>
                    <span className="bg-white/10 px-3 py-1 rounded-md text-xs text-gray-300 
                    hover:bg-white/20 hover:scale-105 transition-all duration-300 
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      Tailwind CSS
                    </span>
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <h4 className="text-sm text-gray-400 mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/10 px-3 py-1 rounded-md text-xs text-gray-300 
                    hover:bg-white/20 hover:scale-105 transition-all duration-300 
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      Node.js
                    </span>
                  </div>
                </div>

                {/* Bases de datos */}
                <div>
                  <h4 className="text-sm text-gray-400 mb-2">Bases de datos</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/10 px-3 py-1 rounded-md text-xs text-gray-300 
                    hover:bg-white/20 hover:scale-105 transition-all duration-300 
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      PostgreSQL
                    </span>
                    <span className="bg-white/10 px-3 py-1 rounded-md text-xs text-gray-300 
                    hover:bg-white/20 hover:scale-105 transition-all duration-300 
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      MySQL
                    </span>
                    <span className="bg-white/10 px-3 py-1 rounded-md text-xs text-gray-300 
                    hover:bg-white/20 hover:scale-105 transition-all duration-300 
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      MongoDB
                    </span>
                  </div>
                </div>

                {/* Herramientas */}
                <div>
                  <h4 className="text-sm text-gray-400 mb-2">Herramientas</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/10 px-3 py-1 rounded-md text-xs text-gray-300 
                    hover:bg-white/20 hover:scale-105 transition-all duration-300 
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      Git
                    </span>
                    <span className="bg-white/10 px-3 py-1 rounded-md text-xs text-gray-300 
                    hover:bg-white/20 hover:scale-105 transition-all duration-300 
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      GitHub
                    </span>
                    <span className="bg-white/10 px-3 py-1 rounded-md text-xs text-gray-300 
                    hover:bg-white/20 hover:scale-105 transition-all duration-300 
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      GitKraken
                    </span>
                    <span className="bg-white/10 px-3 py-1 rounded-md text-xs text-gray-300 
                    hover:bg-white/20 hover:scale-105 transition-all duration-300 
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      VS Code
                    </span>
                    <span className="bg-white/10 px-3 py-1 rounded-md text-xs text-gray-300 
                    hover:bg-white/20 hover:scale-105 transition-all duration-300 
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      NetBeans
                    </span>
                    <span className="bg-white/10 px-3 py-1 rounded-md text-xs text-gray-300 
                    hover:bg-white/20 hover:scale-105 transition-all duration-300 
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      Cisco
                    </span>
                    <span className="bg-white/10 px-3 py-1 rounded-md text-xs text-gray-300 
                    hover:bg-white/20 hover:scale-105 transition-all duration-300 
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      Linux
                    </span>
                  </div>
                </div>

              </div>
            </div>

        </div>
      </div>
    </section>
  )
}