import { useEffect, useState } from "react"
import introPreview from "../assets/Certificado introducion a redes.png"
import switchingPreview from "../assets/Certificado 2 redes.jpeg"
import honorPdf from "../assets/Fundación Universitaria Konrad Lorenz.pdf"

const certificates = [
  { image: introPreview, issuer: "Cisco Networking Academy", title: "CCNA: Introducción a las redes", date: "21 Nov 2025", language: "Certificado en español", description: "Fundamentos de redes, conectividad y conceptos esenciales para iniciar una trayectoria en networking." },
  { image: switchingPreview, issuer: "Cisco Networking Academy", title: "CCNA: Switching, Routing, and Wireless Essentials", date: "23 May 2026", language: "Certificado en español", description: "Formación práctica en switching, routing y fundamentos de redes inalámbricas." },
  {
    document: honorPdf,
    issuer: "Fundación Universitaria Konrad Lorenz",
    title: "Mención de Honor",
    date: "28 sep 2026 · Periodo 2026-1",
    language: "Promedio académico: 44.75 / 50",
    description: "Distinción por alto rendimiento académico y cumplimiento de los requisitos del Reglamento Académico Institucional.",
    actionLabel: "Abrir reconocimiento",
  },
]

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  useEffect(() => {
    const closeOnEscape = event => {
      if (event.key === "Escape") setSelectedCertificate(null)
    }
    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [])

  return (
    <>
      <section className="min-h-screen px-6 pt-16 pb-32 flex justify-center">
        <div className="max-w-5xl w-full">
        <p className="text-cyan-300 text-sm uppercase tracking-[0.3em]">Formación verificada</p>
        <h2 className="mt-3 text-4xl md:text-6xl font-semibold">Certificaciones y Reconocimientos</h2>
        <div className="certificate-grid mt-10">
          {certificates.map(certificate => (
            <article
              className="certificate-card"
              key={certificate.title}
              role="button"
              tabIndex="0"
              onClick={() => setSelectedCertificate(certificate)}
              onKeyDown={event => {
                if (event.key === "Enter" || event.key === " ") setSelectedCertificate(certificate)
              }}
            >
              <div className="certificate-preview-wrap">
                {certificate.document ? (
                  <iframe
                    src={`${certificate.document}#page=1&toolbar=0&navpanes=0&scrollbar=0`}
                    title={`Vista previa de ${certificate.title}`}
                    className="certificate-preview"
                    loading="lazy"
                  />
                ) : (
                  <img src={certificate.image} alt={`Previsualización de ${certificate.title}`} className="certificate-preview" />
                )}
                <span className="certificate-open-label">{certificate.actionLabel || "Abrir certificado"}</span>
              </div>
              <div className="certificate-details">
                <p className="text-xs uppercase tracking-widest text-cyan-300">{certificate.issuer}</p>
                <h3 className="mt-2 text-xl font-semibold">{certificate.title}</h3>
                <p className="mt-2 text-gray-400">{certificate.date}</p>
                <p className="mt-1 text-sm text-gray-500">{certificate.language}</p>
                <p className="mt-4 text-sm leading-relaxed text-gray-400">{certificate.description}</p>
                {certificate.id && <p className="mt-3 text-xs text-gray-500">ID: {certificate.id}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
      </section>
      {selectedCertificate && (
        <div className="certificate-image-modal" role="presentation" onClick={() => setSelectedCertificate(null)}>
          <div className="certificate-image-modal-content" role="dialog" aria-modal="true" aria-label={selectedCertificate.title} onClick={event => event.stopPropagation()}>
            <button className="certificate-image-close" onClick={() => setSelectedCertificate(null)} aria-label="Cerrar imagen ampliada">Cerrar</button>
            {selectedCertificate.document ? (
              <iframe
                src={`${selectedCertificate.document}#toolbar=1&navpanes=0`}
                title={selectedCertificate.title}
              />
            ) : (
              <img src={selectedCertificate.image} alt={selectedCertificate.title} />
            )}
          </div>
        </div>
      )}
    </>
  )
}