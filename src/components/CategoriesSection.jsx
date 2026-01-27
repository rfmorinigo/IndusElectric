import { ChevronRight } from "lucide-react"

export default function CategoriesSection({ categorias }) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Explora nuestras categorías
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Todo lo que necesitas para instalaciones eléctricas residenciales,
            industriales y comerciales
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categorias.map((categoria) => (
            <div
              key={categoria.id}
              className="relative p-6 rounded-lg
                         bg-gradient-to-b from-slate-900 to-slate-800
                         border border-slate-800 cursor-pointer
                         group overflow-hidden"
            >
              {/* Hover overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-r
                           from-blue-600/20 to-purple-600/20
                           opacity-0 group-hover:opacity-100
                           transition-opacity duration-300"
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-3xl mb-3">
                  {categoria.icon}
                </div>
                <h3 className="font-semibold text-white mb-1">
                  {categoria.nombre}
                </h3>
                <p className="text-sm text-slate-400">
                  {categoria.cantidad} productos
                </p>
              </div>

              {/* Arrow */}
              <div
                className="absolute bottom-4 right-4
                           translate-x-5 opacity-0
                           group-hover:translate-x-0
                           group-hover:opacity-100
                           transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 text-blue-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
