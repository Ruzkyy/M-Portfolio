import { useEffect, useState } from "react"

const goals = [
  "Quiero ser Cloud Engineer y diseñar soluciones que escalen con propósito.",
  "Mi magia es no rendirme: avanzo con la determinación de Asta en Black Clover.",
  "Si no es por talento, será por esfuerzo, disciplina y constancia.",
  "Me gusta diseñar páginas, pero mi norte principal es la nube y la infraestructura.",
]

export function GoalPanel({ minimal = false }) {
  const [activeGoal, setActiveGoal] = useState(0)
  const [quoteStyle, setQuoteStyle] = useState({})

  // Cambiar frase automáticamente
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveGoal((current) => (current + 1) % goals.length)
    }, 4200)

    return () => clearInterval(timer)
  }, [])

  // Posiciones aleatorias
  useEffect(() => {
    const positions = [
      // ───────── PARTE SUPERIOR ─────────
      { top: "5%", left: "4%", rotate: "-8deg" },
      { top: "7%", right: "5%", rotate: "7deg" },
      { top: "10%", left: "20%", rotate: "-5deg" },
      { top: "12%", right: "20%", rotate: "6deg" },

      // ───────── LADOS ─────────
      { top: "30%", left: "3%", rotate: "-5deg" },
      { top: "35%", right: "4%", rotate: "5deg" },
      { top: "45%", left: "5%", rotate: "-4deg" },
      { top: "48%", right: "5%", rotate: "4deg" },

      // ───────── PARTE INFERIOR ─────────
      { bottom: "18%", left: "5%", rotate: "-6deg" },
      { bottom: "15%", right: "5%", rotate: "6deg" },
      { bottom: "10%", left: "20%", rotate: "-4deg" },
      { bottom: "12%", right: "20%", rotate: "4deg" },
    ]

    const randomPosition =
      positions[Math.floor(Math.random() * positions.length)]

    setQuoteStyle({
      top: randomPosition.top,
      bottom: randomPosition.bottom,
      left: randomPosition.left,
      right: randomPosition.right,
      "--quote-rotation": randomPosition.rotate,
    })
  }, [activeGoal])

  // =====================================================
  // FRASE FLOTANTE
  // =====================================================

  if (minimal) {
    return (
      <p
        key={activeGoal}
        className="goal-quote-background"
        style={quoteStyle}
      >
        “{goals[activeGoal]}”
      </p>
    )
  }

  // =====================================================
  // PANEL NORMAL
  // =====================================================

  return (
    <div className="goal-panel">

      <div className="goal-panel-topline">
        <span>Idea {activeGoal + 1}</span>

        <span
          className="goal-panel-line"
          aria-hidden="true"
        ></span>

        <span>
          {String(goals.length).padStart(2, "0")} propósitos
        </span>
      </div>

      <p className="goal-quote">
        “{goals[activeGoal]}”
      </p>

      <div className="goal-panel-footer">

        <span className="goal-panel-caption">
          Construir. Aprender. Persistir.
        </span>

        <div
          className="flex gap-2"
          aria-label="Selector de metas"
        >
          {goals.map((goal, index) => (
            <button
              key={goal}
              onClick={() => setActiveGoal(index)}
              aria-label={`Ver meta ${index + 1}`}
              className={`goal-dot ${
                activeGoal === index ? "active" : ""
              }`}
            />
          ))}
        </div>

      </div>

    </div>
  )
}


// =====================================================
// SECCIÓN METAS
// =====================================================

export default function Goals() {
  return (
    <section className="min-h-screen px-6 pt-16 pb-32 flex justify-center relative">

      {/* FRASE FLOTANTE GLOBAL */}
      <GoalPanel minimal />

      <div className="max-w-5xl w-full">

        <p className="text-cyan-300 text-sm uppercase tracking-[0.3em]">
          Dirección y propósito
        </p>

        <h2 className="mt-3 text-4xl md:text-6xl font-semibold">
          Metas
        </h2>

        <GoalPanel />

      </div>

    </section>
  )
}