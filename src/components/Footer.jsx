import { 
  Zap, Facebook, Instagram, Twitter, Linkedin, 
  Mail, Phone, MapPin, CreditCard, Shield, Truck,
  MessageSquare, ChevronRight
} from 'lucide-react'

// FOOTER
const Footer = () => {
  const footerLinks = {
    productos: [
      { label: 'Cables eléctricos', href: '#' },
      { label: 'Protección y seguridad', href: '#' },
      { label: 'Iluminación LED', href: '#' },
    ],
    empresa: [
      { label: 'Sobre nosotros', href: '#' },
      { label: 'Nuestras marcas', href: '#' },
      { label: 'Sucursales', href: '#' },
    ],
    ayuda: [
      { label: 'Preguntas frecuentes', href: '#' },
      { label: 'Cómo comprar', href: '#' },
      { label: 'Envíos y entregas', href: '#' },
    ]
  }

  const socialMedia = [
    { icon: <Facebook className="w-5 h-5" />, href: '#' },
    { icon: <Instagram className="w-5 h-5" />, href: '#' },
    { icon: <Twitter className="w-5 h-5" />, href: '#' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#' }
  ]

  return (
    <footer className="bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
      {/* Newsletter */}
      <div className="bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold text-white flex items-center justify-center lg:justify-start gap-2">
                <Mail className="w-5 h-5 text-blue-400" />
                Suscribite a nuestro newsletter
              </h3>
              <p className="text-slate-400 mt-1">
                Recibí ofertas exclusivas y novedades técnicas
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 flex-grow"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2">
                Suscribirme
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Electro<span className="text-blue-400">Pro</span>
                </h2>
                <p className="text-slate-400">Materiales eléctricos profesionales</p>
              </div>
            </div>
            
            <p className="text-slate-400 mb-6">
              Proveedores oficiales de materiales eléctricos para profesionales 
              e industria. Más de 15 años brindando calidad y confianza.
            </p>
            
            {/* Redes sociales */}
            <div className="flex gap-3 mb-8">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* WhatsApp */}
            <button
              onClick={() => window.open('https://wa.me/5491123456789', '_blank')}
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-lg hover:from-green-700 hover:to-emerald-600 transition-all w-full lg:w-auto justify-center"
            >
              <MessageSquare className="w-5 h-5" />
              <div className="text-left">
                <div className="font-semibold">Consultas por WhatsApp</div>
                <div className="text-sm opacity-90">Respondemos en minutos</div>
              </div>
            </button>
          </div>

          {/* Enlaces rápidos */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Información de contacto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-slate-800">
          {[
            { icon: <Phone className="w-5 h-5" />, text: '(011) 1234-5678', action: 'tel:' },
            { icon: <Mail className="w-5 h-5" />, text: 'ventas@electropro.com', action: 'mailto:' },
            { icon: <MapPin className="w-5 h-5" />, text: 'Av. Siempre Viva 123, CABA', action: 'https://maps.google.com' }
          ].map((contact, index) => (
            <a
              key={index}
              href={contact.action + contact.text}
              className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors"
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                {contact.icon}
              </div>
              <div className="text-white font-medium">
                {contact.text}
              </div>
            </a>
          ))}
        </div>

        {/* Garantías */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-slate-800">
          {[
            { icon: <Shield className="w-6 h-6" />, text: 'Productos certificados' },
            { icon: <Truck className="w-6 h-6" />, text: 'Envíos a todo el país' },
            { icon: <CreditCard className="w-6 h-6" />, text: 'Compra segura' },
            { icon: <Zap className="w-6 h-6" />, text: 'Asistencia técnica' }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 px-4 py-2">
              <div className="text-blue-400">
                {item.icon}
              </div>
              <span className="text-slate-400">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-slate-950 border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 text-sm">
              © 2024 ElectroPro. Todos los derechos reservados.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-white">Política de privacidad</a>
              <a href="#" className="hover:text-white">Términos de servicio</a>
              <a href="#" className="hover:text-white">Mapa del sitio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

  
export default Footer