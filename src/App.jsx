import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Projects from "./sections/Projects"
import Technologies from "./sections/Technologies"
import Certificates from "./sections/Certificates"
import QrWidget from "./components/QrWidget"
import Kirby from "./components/Kirby"

function App() {
  const [section, setSection] = useState("home")

  return (
    <>
      <Navbar setSection={setSection} />

      {section === "home" && <Hero setSection={setSection} />}
      {section === "about" && <About />}
      {section === "technologies" && <Technologies />}
      {section === "projects" && <Projects />}
      {section === "certificates" && <Certificates />}
      {section === "contact" && <Contact />}
      <QrWidget />
      <Kirby section={section} />
    </>
  )
}

export default App