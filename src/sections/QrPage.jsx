export default function QrPage() {
  const portfolioUrl = typeof window === "undefined" ? "https://portfolio.example" : window.location.href
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(portfolioUrl)}`

  return (
    <section className="min-h-screen px-6 pt-16 pb-32 flex justify-center">
      <div className="max-w-5xl w-full grid md:grid-cols-[1fr_300px] gap-10 items-center">
        <div>
          <p className="text-cyan-300 text-sm uppercase tracking-[0.3em]">Comparte mi trabajo</p>
          <h2 className="mt-3 text-4xl md:text-6xl font-semibold">QR del portafolio</h2>
          <p className="mt-5 max-w-xl text-gray-400 leading-relaxed">Escanea este código para abrir esta página desde tu teléfono y compartir mi perfil con facilidad.</p>
        </div>
        <div className="qr-card"><img src={qrUrl} alt="Código QR para abrir el portafolio" className="w-full rounded-xl" /></div>
      </div>
    </section>
  )
}