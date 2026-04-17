import { useEffect, useState, useCallback } from "react";
import idleGif from "../assets/kirbyAssets/kirby-tieso.gif"
import walkGif from "../assets/kirbyAssets/kirby-walk.gif"
import runGif from "../assets/kirbyAssets/kirby-run.gif"
import sleepGif from "../assets/kirbyAssets/kirby-sleeping.gif"
import byeGif from "../assets/kirbyAssets/kirby-bye.gif"
import downGif from "../assets/kirbyAssets/kirby-down.gif"
import changeGif from "../assets/kirbyAssets/kirby-change.gif"

/**
 * Componente Kirby: Mascota Virtual Interactiva (Desktop Pet).
 * 
 * Este componente renderiza a Kirby en pantalla con comportamientos autónomos.
 * Cuenta con un motor de gravedad, inteligencia artificial básica para tomar 
 * decisiones (caminar, correr, descansar) y soporte para interacciones del 
 * usuario mediante Drag & Drop (arrastrar y soltar).
 * 
 * @param {Object} props
 * @param {string} props.section - Sección actual de la página. Provoca que Kirby vuelva a caer.
 */
export default function Kirby({ section }) {
  // =========================================================
  // 1. ESTADOS DEL COMPONENTE
  // =========================================================

  // Posición absoluta en pantalla (x, y)
  const [pos, setPos] = useState({ x: 0, y: 0 });
  // Configuración visual: 'dir' (1 derecha, -1 izquierda), 'scale' (tamaño base)
  const [config, setConfig] = useState({ dir: 1, scale: 1 });
  // Estado actual de la animación (idle, walk, run, sleep, drop, bye, change)
  const [state, setState] = useState("idle");

  // Controladores de eventos interactivos
  const [isDragging, setIsDragging] = useState(false); // ¿El usuario lo está arrastrando?
  const [isWaiting, setIsWaiting] = useState(false);   // ¿Está en pausa tras chocar con un borde?

  // =========================================================
  // 2. UTILIDADES
  // =========================================================

  // Calcula dinámicamente el borde de la pantalla para evitar que Kirby se salga
  const getHorizontalLimit = useCallback(() => window.innerWidth / 2 - 60, []);

  // =========================================================
  // 3. MOTORES Y LÓGICA PRINCIPAL (EFFECTS)
  // =========================================================

  /**
   * Motor de Eventos: Cambio de Sección
   * Cuando el usuario navega a otra sección del portafolio, Kirby hace una 
   * animación de aviso ('change'), se teletransporta al techo y comienza a caer.
   */
  useEffect(() => {
    setState("change");
    const timer = setTimeout(() => {
      setPos(p => ({ ...p, y: -window.innerHeight }));
      setState("drop");
    }, 1000);
    return () => clearTimeout(timer);
  }, [section]);

  /**
   * Motor de Físicas: Gravedad y Caída Libre
   * Solo se ejecuta cuando Kirby está en estado 'drop' (cayendo).
   * Desciende constantemente hasta tocar el suelo (el Navbar) con un ligero bamboleo.
   */
  useEffect(() => {
    if (state !== "drop") return;

    const fallInterval = setInterval(() => {
      setPos((prev) => {
        // -75px es aproximadamente la altura a la que se encuentra el top del Navbar
        if (prev.y >= -20) {
          clearInterval(fallInterval);
          setState("idle");
          return { ...prev, y: -15 };
        }
        return {
          x: prev.x + Math.sin(Date.now() * 0.002) * 2.3, // Bamboleo
          y: prev.y + 1.2 // Velocidad de caída constante (reducida a la mitad)
        };
      });
    }, 16);

    return () => clearInterval(fallInterval);
  }, [state]);

  /**
   * Motor de Inteligencia Artificial (El Cerebro)
   * Controla las decisiones autónomas de Kirby. Solo funciona si Kirby está
   * en el suelo y el usuario no lo está agarrando.
   */
  const isAiActive = !["bye", "drop", "change"].includes(state) && !isDragging;

  useEffect(() => {
    if (!isAiActive) return;

    let moveInterval;
    let brainTimeout;

    const executeBehavior = () => {
      // LIMPIAR el movimiento anterior para que no se acumulen y Kirby no "tiemble"
      clearInterval(moveInterval);

      const rollDice = Math.random();

      if (rollDice < 0.7) { // 70% Probabilidad de moverse
        const isRunning = Math.random() < 0.3;
        const speed = isRunning ? 6 : 2;
        const newDir = Math.random() < 0.5 ? -1 : 1;

        setConfig(prev => ({ ...prev, dir: newDir }));
        setState(isRunning ? "run" : "walk");

        moveInterval = setInterval(() => {
          setPos(prev => {
            const limit = getHorizontalLimit();
            let nextX = prev.x + (newDir * speed);

            if (nextX > limit || nextX < -limit) {
              if (!isWaiting) {
                setIsWaiting(true);
                setTimeout(() => { setIsWaiting(false); setConfig(c => ({ ...c, dir: -c.dir })); }, 2000);
              }
              return prev;
            }
            return { ...prev, x: nextX };
          });
        }, 16);
      } else {
        setState("idle");
      }

      brainTimeout = setTimeout(executeBehavior, 3000 + Math.random() * 2000);
    };

    executeBehavior();

    return () => {
      clearInterval(moveInterval);
      clearTimeout(brainTimeout);
    };
  }, [isAiActive, isWaiting, getHorizontalLimit]);

  // =========================================================
  // 4. INTERACTIVIDAD (DRAG & DROP)
  // =========================================================

  /**
   * Permite al usuario agarrar a Kirby con el click y arrastrarlo por la pantalla.
   * Al soltarlo, se desactiva el agarre y la gravedad hace que caiga de vuelta.
   */
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e) => {
      setPos({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight + 120
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setState("drop");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  // =========================================================
  // 5. RENDERIZADO Y ESTILOS
  // =========================================================

  // Diccionario que vincula cada estado con su respectivo archivo GIF
  const assets = {
    idle: idleGif, walk: walkGif, run: runGif,
    sleep: sleepGif, bye: byeGif, drop: downGif, change: changeGif
  };

  return (
    <div
      className="fixed bottom-0 left-1/2 z-40 pointer-events-none"
      style={{
        transform: `translateX(-50%) translate(${pos.x}px, ${pos.y}px)`
      }}
    >
      <div
        className={`w-40 h-56 flex items-end justify-center pointer-events-auto ${isDragging ? "cursor-grabbing" : "cursor-pointer"}`}
        onMouseDown={(e) => { if (e.button === 0) { setIsDragging(true); setState("bye"); } }}
      >
        <img
          src={assets[state] || assets.idle}
          alt="Kirby"
          // Se elimina "transition-transform" para que el volteo (scaleX) sea instantáneo
          style={{
            width: state === "walk" ? "135px" : state === "run" ? "100px" : state === "idle" ? "108px" : state === "drop" ? "150px" : state === "change" ? "85px" : "96px",
            transform: `scale(${config.scale}) scaleX(${config.dir}) ${state === "walk" ? "translateY(24px)" : state === "idle" ? "translateY(10px)" : state === "run" ? "translateY(6px)" : ""}`,
            imageRendering: "pixelated"
          }}
        />
      </div>
    </div>
  );
}