import { useEffect, useState } from "react"
import idleGif from "../assets/kirby-tieso.gif"
import walkGif from "../assets/kirby-walk.gif"
import runGif from "../assets/kirby-run.gif"
import sleepGif from "../assets/kirby-sleeping.gif"
import byeGif from "../assets/kirby-bye.gif"
import downGif from "../assets/kirby-down.gif"
import changeGif from "../assets/kirby-change.gif"

export default function Kirby({ section }) {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [direction, setDirection] = useState(1)
  const [state, setState] = useState("idle")
  const [scale, setScale] = useState(1)
  const [waiting, setWaiting] = useState(false)
  const [dragging, setDragging] = useState(false)

  // 🎬 CAMBIO DE SECCIÓN
  useEffect(() => {
    setState("change")

    const timer = setTimeout(() => {
      setY(-window.innerHeight)
      setState("drop")
    }, 1000)

    return () => clearTimeout(timer)
  }, [section])

  // 🌧️ CAÍDA
  useEffect(() => {
    if (state !== "drop") return

    const fall = setInterval(() => {
      setY((prev) => {
        if (prev >= 0) {
          clearInterval(fall)
          setState("idle")
          return 0
        }
        return prev + 1.2
      })

      setX((prev) => prev + Math.sin(Date.now() * 0.002) * 2.3)
    }, 16)

    return () => clearInterval(fall)
  }, [state])

  // 🤖 MOVIMIENTO NORMAL
  useEffect(() => {
    if (state === "bye" || state === "drop" || state === "change" || dragging) return

    let moveInterval
    let behaviorTimeout

    const limit = () => window.innerWidth / 2 - 60

    const startMoving = (speed, mode) => {
      clearInterval(moveInterval)
      setState(mode)

      moveInterval = setInterval(() => {
        setX((prev) => {
          let next = prev + direction * speed

          if (next > limit() || next < -limit()) {
            if (!waiting) {
              setWaiting(true)

              setTimeout(() => {
                setDirection((d) => -d)
                setWaiting(false)
              }, 2000)
            }
            return prev
          }

          return next
        })
      }, 16)
    }

    const stopMoving = () => {
      clearInterval(moveInterval)
      setState("idle")
    }

    const randomBehavior = () => {
      const action = Math.random()

      if (action < 0.7) {
        setDirection(Math.random() < 0.5 ? -1 : 1)

        const runChance = Math.random()

        if (runChance < 0.3) {
          startMoving(6, "run")
        } else {
          startMoving(2, "walk")
        }

        behaviorTimeout = setTimeout(() => {
          stopMoving()
          randomBehavior()
        }, 2000 + Math.random() * 3000)
      } else {
        stopMoving()

        behaviorTimeout = setTimeout(() => {
          randomBehavior()
        }, 1000 + Math.random() * 2000)
      }
    }

    randomBehavior()

    return () => {
      clearInterval(moveInterval)
      clearTimeout(behaviorTimeout)
    }
  }, [direction, state, waiting, dragging])

  // 🖱️ DRAG
  useEffect(() => {
    const handleMove = (e) => {
      if (dragging) {
        const centerX = window.innerWidth / 2
        setX(e.clientX - centerX)
        setY(e.clientY - window.innerHeight + 120)
      }
    }

    const handleUp = () => {
      if (dragging) {
        setDragging(false)
        setState("drop")
      }
    }

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("mouseup", handleUp)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("mouseup", handleUp)
    }
  }, [dragging])

  // 🎨 GIF
  let currentGif = idleGif
  if (state === "walk") currentGif = walkGif
  if (state === "run") currentGif = runGif
  if (state === "sleep") currentGif = sleepGif
  if (state === "bye") currentGif = byeGif
  if (state === "drop") currentGif = downGif
  if (state === "change") currentGif = changeGif

  return (
    <div
      className="fixed bottom-0 left-1/2 z-40"
      style={{
        transform: `
          translateX(-50%)
          translateX(${x}px)
          translateY(${y + (state === "walk" ? 10 : 0)}px)
        `
      }}
    >
      <div
        className={`w40 h56 flex items-end justify-center ${
          dragging ? "cursor-grabbing" : "cursor-pointer"
        }`}
        style={{ transform: "translateY(-5px)" }}
        onMouseDown={(e) => {
          if (e.button === 0) {
            e.preventDefault()
            setDragging(true)
            setState("bye")
          }
        }}
        onDoubleClick={() => {
          setState("bye")

          let shrink = setInterval(() => {
            setScale((prev) => {
              if (prev <= 0) {
                clearInterval(shrink)

                setY(-window.innerHeight)
                setScale(1)
                setState("drop")

                return 1
              }
              return prev - 0.05
            })
          }, 50)
        }}
      >
        <img
          src={currentGif}
          alt="kirby"
          className={`${
            state === "walk"
              ? "w-32"
              : state === "run"
              ? "w-28"
              : state === "drop"
              ? "w-32"
              : "w-24"
          }`}
          style={{
            transform: `
              scale(${scale})
              scaleX(${direction})
            `,
            pointerEvents: "none",
            imageRendering: "pixelated"
          }}
        />
      </div>
    </div>
  )
}