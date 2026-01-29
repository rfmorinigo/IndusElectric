import { useEffect, useState } from 'react'
import { productosMock, categoriasMock } from '../components/MockData'

// 3.COMPONENTES PRINCIPALES
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import BenefitSection from '../components/BenefitSection'
import FAQSection from '../components/FAQSection'
import ContactSection from '../components/ContactSection'
import TestimonialsSection from '../components/ Testimonial'
import BigCtaSection from '../components/CTASection'
import FeaturedProductsSection from '../components/FeaturedsProductSection'
import CategoriesSection from '../components/CategoriesSection'

// 4. COMPONENTE PRINCIPAL APP

export default function App() {
  const [productos, setProductos] = useState([])
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    // Simula carga de datos
    setTimeout(() => {
      setProductos(productosMock)
      setCategorias(categoriasMock)
    }, 500)
  }, [])

  const comprar = (producto) => {
    const msg = encodeURIComponent(
      `Hola, quiero consultar por el producto: ${producto.nombre} (Código: ${producto.id})`
    )
    window.open(`https://wa.me/5491123456789?text=${msg}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <Hero />

      {/* SECCIÓN BENEFICIOS */}
      <BenefitSection/>

      {/* CATEGORÍAS */}
      <CategoriesSection categorias={categorias} />

      {/* PRODUCTOS DESTACADOS */}
      <FeaturedProductsSection
        productos={productos}
        onComprar={comprar}
      />

      {/* CTA GRANDE */}
      <BigCtaSection/>

      {/* TESTIMONIOS */}
      <TestimonialsSection/>

      {/* FAQ */}
      <FAQSection/>

      {/* CONTACTO RÁPIDO */}
      <ContactSection/>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}