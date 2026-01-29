import { motion } from "framer-motion"
import { Package, MessageSquare } from "lucide-react"

export function ProductCard({ producto, onComprar }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      className="group bg-gradient-to-b from-slate-900 to-slate-800 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all"
    >
      <div className="relative overflow-hidden h-48">
        <motion.img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />

        {producto.destacado && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-full">
            MAS VENDIDO
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-white">{producto.nombre}</h3>
          <span className="text-blue-400 font-bold text-lg">
            ${producto.precio.toLocaleString()}
          </span>
        </div>

        <p className="text-slate-400 text-sm mb-4">
          {producto.descripcion}
        </p>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-sm">
            <Package className="w-4 h-4 text-slate-500" />
            <span className="text-slate-400">
              Stock: {producto.stock}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onComprar(producto)}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            Consultar
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
