import { useState } from "react"
import { QrCode, X } from "lucide-react"

export default function QrWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const portfolioUrl = typeof window === "undefined" ? "https://portfolio.example" : window.location.href
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(portfolioUrl)}`

  return (
    <div className="fixed right-4 bottom-24 sm:right-6 z-50">
      {isOpen && (
        <div className="qr-widget-panel mb-3 w-56 rounded-2xl p-4 text-center">
          <div className="flex items-center justify-between gap-3 text-sm font-semibold">
            <span>Compartir portafolio</span>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white" aria-label="Cerrar código QR">
              <X size={16} />
            </button>
          </div>
          <img src={qrUrl} alt="Código QR del portafolio" className="mt-3 w-full rounded-lg" />
        </div>
      )}
      <button onClick={() => setIsOpen(open => !open)} className="qr-widget-button" aria-label="Mostrar código QR del portafolio">
        <QrCode size={20} />
      </button>
    </div>
  )
}