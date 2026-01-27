// Componente ProductCard
import { ProductCard } from '../components/ProductCard'
import { motion } from "framer-motion"

export const ProductGrid = ({ productos, onComprar }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8 py-8"
    >
      {productos.map((producto) => (
        <ProductCard producto={producto} onComprar={onComprar} />
      ))}
    </motion.div>
  )
}