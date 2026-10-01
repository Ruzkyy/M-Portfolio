import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { QrCode, X } from "lucide-react"

const Motion = motion

export default function QrWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const portfolioUrl = typeof window === "undefined" ? "https://portfolio.example" : window.location.href
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(portfolioUrl)}`

  return (
    <div className="fixed right-4 bottom-24 sm:right-6 z-50">
      <AnimatePresence>
        {isOpen && (
        <Motion.div
          id="qr-widget-panel"
          className="qr-widget-panel mb-3 w-56 rounded-2xl p-4 text-center"
          initial={{ opacity: 0, scale: 0.78, y: 24, rotateX: -12 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 12, rotateX: 5 }}
          transition={{ type: "spring", stiffness: 360, damping: 24 }}
          style={{ transformOrigin: "bottom right" }}
        >
          <div className="flex items-center justify-between gap-3 text-sm font-semibold">
            <span>Compartir portafolio</span>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white" aria-label="Cerrar código QR">
              <X size={16} />
            </button>
          </div>
          <Motion.div
            className="qr-scan-frame mt-3"
            initial={{ opacity: 0, scale: 0.88, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.32, delay: 0.12, ease: "easeOut" }}
          >
            <img src={qrUrl} alt="Código QR del portafolio" className="qr-widget-image" />
            <span className="qr-scan-line" aria-hidden="true" />
          </Motion.div>
        </Motion.div>
        )}
      </AnimatePresence>
      <Motion.button
        onClick={() => setIsOpen(open => !open)}
        className="qr-widget-button"
        aria-label={isOpen ? "Ocultar código QR del portafolio" : "Mostrar código QR del portafolio"}
        aria-expanded={isOpen}
        aria-controls="qr-widget-panel"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9, rotate: isOpen ? -8 : 8 }}
      >
        {isOpen && (
          <Motion.span
            className="qr-widget-ring"
            aria-hidden="true"
            animate={{ scale: [1, 1.65], opacity: [0.55, 0] }}
            transition={{ duration: 0.85, repeat: 2, ease: "easeOut" }}
          />
        )}
        <QrCode size={20} />
      </Motion.button>
    </div>
  )
}