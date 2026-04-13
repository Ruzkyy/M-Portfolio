import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Kirby from "./components/Kirby"

function App() {
  const [section, setSection] = useState("home")

  return (
    <>
      <Navbar setSection={setSection} />

      {section === "home" && <Hero setSection={setSection} />}
      {section === "about" && <About />}
      {section === "contact" && <Contact />}
      <Kirby section={section} />
    </>
  )
}

export default App