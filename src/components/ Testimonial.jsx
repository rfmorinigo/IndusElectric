import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Excelente atención y buenos precios. Siempre encuentro lo que necesito para mis obras.",
      name: "Carlos Rodríguez",
      role: "Electricista independiente",
      rating: 5,
    },
    {
      text: "Como contratista, valoro mucho la rapidez en la entrega y la calidad de los materiales.",
      name: "María González",
      role: "Contratista eléctrico",
      rating: 5,
    },
    {
      text: "Para nuestra fábrica era clave encontrar un proveedor confiable. Llevamos 3 años trabajando juntos.",
      name: "Industrias Pérez S.A.",
      role: "Cliente industrial",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-slate-400">
            Electricistas y empresas que confían en nosotros
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-b
                         from-slate-900 to-slate-800
                         border border-slate-800"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-300 italic mb-6">
                “{testimonial.text}”
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-slate-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
