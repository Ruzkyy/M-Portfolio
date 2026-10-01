import { useState } from "react"
import { motion, MotionConfig } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Projects from "./sections/Projects"
import Technologies from "./sections/Technologies"
import Certificates from "./sections/Certificates"
import QrWidget from "./components/QrWidget"
import Kirby from "./components/Kirby"

const Motion = motion

function App() {
  const [section, setSection] = useState("home")

  return (
    <MotionConfig reducedMotion="user">
      <>
        <Navbar setSection={setSection} activeSection={section} />

        <Motion.div
          key={section}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.26, ease: "easeOut" }}
        >
          {section === "home" && <Hero setSection={setSection} />}
          {section === "about" && <About />}
          {section === "technologies" && <Technologies />}
          {section === "projects" && <Projects />}
          {section === "certificates" && <Certificates />}
          {section === "contact" && <Contact />}
        </Motion.div>
        <QrWidget />
        <Kirby section={section} />
      </>
    </MotionConfig>
  )
}

export default App