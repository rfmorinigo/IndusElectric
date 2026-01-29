import {
  Building,
  MessageSquare,
  Phone,
  CheckCircle,
  CreditCard,
  Package,
  Users,
} from "lucide-react"

export default function BigCtaSection() {
  const perks = [
    {
      icon: CheckCircle,
      color: "text-emerald-400",
      text: "Respuesta en 24hs",
    },
    {
      icon: CreditCard,
      color: "text-blue-400",
      text: "Múltiples medios de pago",
    },
    {
      icon: Package,
      color: "text-amber-400",
      text: "Logística propia",
    },
    {
      icon: Users,
      color: "text-purple-400",
      text: "Atención personalizada",
    },
  ]

  return (
    <section id="CTA_section" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <div className="inline-block mb-6">
          <div className="px-6 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20
                          rounded-full border border-blue-500/30
                          inline-flex items-center gap-2">
            <Building className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 font-medium">
              Empresas y contratistas
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          ¿Necesitás cotización para{" "}
          <span className="text-transparent bg-clip-text
                           bg-gradient-to-r from-blue-400 to-purple-400">
            obra o empresa
          </span>
          ?
        </h2>

        {/* Text */}
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Atendemos electricistas, industrias y constructoras. Presupuestos sin
          compromiso y descuentos por volumen.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() =>
              window.open("https://wa.me/5491123456789", "_blank")
            }
            className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500
                       text-white rounded-xl font-semibold
                       flex items-center justify-center gap-3
                       hover:from-emerald-700 hover:to-emerald-600
                       transition-all shadow-lg shadow-emerald-500/20"
          >
            <MessageSquare className="w-5 h-5" />
            Contactar por WhatsApp
          </button>

          <button
            onClick={() => window.open("tel:+5491144704380")}
            className="px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-900
                       text-white rounded-xl font-semibold
                       flex items-center justify-center gap-3
                       hover:from-slate-700 hover:to-slate-800
                       transition-all border border-slate-700"
          >
            <Phone className="w-5 h-5" />
            Llamar por teléfono
          </button>
        </div>

        {/* Perks */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-slate-800">
          {perks.map((perk, i) => {
            const Icon = perk.icon
            return (
              <div key={i} className="flex items-center gap-2">
                <Icon className={`w-5 h-5 ${perk.color}`} />
                <span className="text-slate-400">{perk.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
