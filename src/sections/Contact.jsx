import { 
  FaLinkedin, 
  FaGithub, 
  FaInstagram,
  FaDiscord,
  FaEnvelope
} from "react-icons/fa"

export default function Contact() {
  return (
    <section className="min-h-screen px-20 pt-16 pb-20 flex justify-center">
      
      <div className="max-w-[1100px] w-full flex flex-col gap-12">

        <h2 className="text-3xl font-semibold text-center">
          Contáctame
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* LINKEDIN */}
          <a href="https://www.linkedin.com/in/julian-ruiz-gonzalez-a58b4028a/" target="_blank"
            className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-4
            hover:scale-105 hover:bg-white/10 hover:text-blue-400
            transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            <FaLinkedin size={40} />
            <p className="text-lg">LinkedIn</p>
          </a>

          {/* GITHUB */}
          <a href="https://github.com/Ruzkyy" target="_blank"
            className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-4
            hover:scale-105 hover:bg-white/10 hover:text-gray-200
            transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            <FaGithub size={40} />
            <p className="text-lg">GitHub</p>
          </a>

          {/* INSTAGRAM */}
          <a href="https://www.instagram.com/ruzky_27_/" target="_blank"
            className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-4
            hover:scale-105 hover:bg-white/10 hover:text-pink-400
            transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            <FaInstagram size={40} />
            <p className="text-lg">Instagram</p>
          </a>

          {/* DISCORD */}
          <a href="https://discord.com/users/123456789012345678" target="_blank"
            className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-4
            hover:scale-105 hover:bg-white/10 hover:text-indigo-400
            transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            <FaDiscord size={40} />
            <p className="text-lg">Discord</p>
          </a>

          {/* EMAIL */}
          <a href="mailto:ruizgonzalezjulianarley25@gmail.com?subject=Contacto%20desde%20tu%20portafolio"
            className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-4
            hover:scale-105 hover:bg-white/10 hover:text-red-400
            transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            <FaEnvelope size={40} />
            <p className="text-lg">Correo</p>
          </a>

        </div>

      </div>
    </section>
  )
}