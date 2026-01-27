import { Zap, Truck, MessageSquare, Shield, ArrowRight } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: "Calidad profesional",
      description: "Materiales certificados y de primera línea",
      color: "from-amber-500/10 to-amber-900/5",
      iconColor: "text-amber-500",
    },
    {
      icon: Truck,
      title: "Entrega rápida",
      description: "Despacho en 24-48hs. Retiro en local sin cargo",
      color: "from-emerald-500/10 to-emerald-900/5",
      iconColor: "text-emerald-500",
    },
    {
      icon: MessageSquare,
      title: "Atención personalizada",
      description: "Asesoramiento técnico por especialistas",
      color: "from-blue-500/10 to-blue-900/5",
      iconColor: "text-blue-500",
    },
    {
      icon: Shield,
      title: "Garantía asegurada",
      description: "Todos nuestros productos tienen garantía",
      color: "from-purple-500/10 to-purple-900/5",
      iconColor: "text-purple-500",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          ¿Por qué elegirnos?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
              <div
                key={index}
                className={`relative p-6 rounded-xl bg-gradient-to-br ${benefit.color}
                  border border-slate-800 hover:border-slate-700 transition-all duration-300 group`}
              >
                <div className="mb-4">
                  <Icon className={`w-10 h-10 ${benefit.iconColor}`} />
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>

                <p className="text-slate-400">
                  {benefit.description}
                </p>

                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}