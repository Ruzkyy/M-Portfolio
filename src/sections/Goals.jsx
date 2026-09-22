import { useEffect, useState } from "react"

const goals = [
  "Quiero ser Cloud Engineer y diseñar soluciones que escalen con propósito.",
  "Mi magia es no rendirme: avanzo con la determinación de Asta en Black Clover.",
  "Si no es por talento, será por esfuerzo, disciplina y constancia.",
  "Me gusta diseñar páginas, pero mi norte principal es la nube y la infraestructura.",
]

export function GoalPanel({ minimal = false }) {
  const [activeGoal, setActiveGoal] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActiveGoal(current => (current + 1) % goals.length), 4200)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <div className={`goal-panel ${minimal ? "goal-panel-minimal" : ""}`}>
          {!minimal && <div className="goal-panel-topline">
            <span>Idea {activeGoal + 1}</span>
            <span className="goal-panel-line" aria-hidden="true"></span>
            <span>{String(goals.length).padStart(2, "0")} propósitos</span>
          </div>}
          <p className="goal-quote">“{goals[activeGoal]}”</p>
          <div className={`goal-panel-footer ${minimal ? "goal-panel-footer-minimal" : ""}`}>
            {!minimal && <span className="goal-panel-caption">Construir. Aprender. Persistir.</span>}
            <div className="flex gap-2" aria-label="Selector de metas">
            {goals.map((goal, index) => <button key={goal} onClick={() => setActiveGoal(index)} aria-label={`Ver meta ${index + 1}`} className={`goal-dot ${activeGoal === index ? "active" : ""}`} />)}
            </div>
          </div>
        </div>
    </div>
  )
}

export default function Goals() {
  return (
    <section className="min-h-screen px-6 pt-16 pb-32 flex justify-center">
      <div className="max-w-5xl w-full">
        <p className="text-cyan-300 text-sm uppercase tracking-[0.3em]">Dirección y propósito</p>
        <h2 className="mt-3 text-4xl md:text-6xl font-semibold">Metas</h2>
        <GoalPanel />
      </div>
    </section>
  )
}