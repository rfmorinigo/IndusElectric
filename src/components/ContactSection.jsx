import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"

export default function ContactSection() {
  const contacts = [
    {
      icon: Phone,
      iconColor: "text-blue-400",
      title: "Teléfono",
      info: "(011) 4470-4380",
      action: "Llamar ahora",
      onClick: () => window.open("tel:+5491144704380"),
    },
    {
      icon: Mail,
      iconColor: "text-emerald-400",
      title: "Email",
      info: "ventas@induselectric.com.ar",
      action: "Enviar email",
      onClick: () => window.open("mailto:ventas@induselectric.com.ar"),
    },
    {
      icon: MapPin,
      iconColor: "text-amber-400",
      title: "Local comercial",
      info: "Av. Los Quilmes 1502, Bernal, Buenos Aires",
      action: "Ver en mapa",
      onClick: () => window.open("https://www.google.com/maps/search/?api=1&query=Indus+Electric+S.A."),
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold text-white mb-6">
          Contactanos fácilmente
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => {
            const Icon = contact.icon

            return (
              <div
                key={index}
                onClick={contact.onClick}
                className="p-6 rounded-xl bg-gradient-to-br
                           from-slate-900/50 to-slate-800/50
                           border border-slate-800 cursor-pointer
                           hover:border-slate-700 transition-colors"
              >
                <div className="mb-4 flex justify-center">
                  <Icon className={`w-8 h-8 ${contact.iconColor}`} />
                </div>

                <h3 className="font-semibold text-white mb-1">
                  {contact.title}
                </h3>

                <p className="text-slate-300 mb-4">
                  {contact.info}
                </p>

                <button
                  type="button"
                  className="text-sm font-medium text-white
                             opacity-80 hover:opacity-100
                             flex items-center justify-center gap-1 mx-auto"
                >
                  {contact.action}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
