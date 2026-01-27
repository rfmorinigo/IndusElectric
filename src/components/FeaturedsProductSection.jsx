import { ArrowRight } from "lucide-react"
import { ProductGrid } from "../components/ProductGrid"

export default function FeaturedProductsSection({ productos, onComprar }) {
  const destacados = productos.filter((p) => p.destacado)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Productos más pedidos
            </h2>
            <p className="text-slate-400 mt-2">
              Los productos favoritos de nuestros clientes
            </p>
          </div>

          {/* CTA desktop */}
          <button
            type="button"
            className="hidden md:flex items-center gap-2 px-6 py-3
                       bg-gradient-to-r from-blue-600 to-purple-600
                       text-white rounded-lg
                       hover:from-blue-700 hover:to-purple-700
                       transition-all"
          >
            Ver todos los productos
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Grid */}
        <ProductGrid productos={destacados} onComprar={onComprar} />

        {/* CTA mobile */}
        <div className="flex justify-center mt-12 md:hidden">
          <button
            type="button"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600
                       text-white rounded-lg
                       hover:from-blue-700 hover:to-purple-700
                       transition-all"
          >
            Ver catálogo completo
          </button>
        </div>
      </div>
    </section>
  )
}
