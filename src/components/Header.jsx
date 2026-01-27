import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  Zap,
  Phone,
  Mail,
  Search,
  ShoppingCart,
  MessageSquare,
  Menu,
  X,
  ChevronDown,
} from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartItems] = useState(3)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { label: "Inicio", href: "#" },
    {
      label: "Productos",
      href: "#",
      submenu: [
        { label: "Electricidad", href: "https://listado.mercadolibre.com.ar/pagina/induselectric/listado/construccion/electricidad/#client=HOME&component_id=menu_corridors&component=menu_corridors&label=Electricidad&tracking_id=04aceb83-71b0-44f0-9514-48eabad8c708&global_position=1" },
        { label: "Sanitario y baños", href: "#" },
        { label: "Iluminación", href: "#" },
      ],
    },
    { label: "Ofertas", href: "#", badge: true },
    { label: "Empresas", href: "#" },
    { label: "Contacto", href: "#" },
  ]

  return (
    <>
      {/* Barra superior */}
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-blue-900 to-slate-900 text-white text-sm hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(011) 4470-4380</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>ventas@induselectric.com.ar</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Header principal */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/95 backdrop-blur-md shadow-xl"
            : "bg-slate-950"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src='img/logo.png'
                    alt="Logo marca"
                    className="w-8 h-8 object-contain"
                  />
                </div>

              </div>
              <div>
                <h1 className="text-xl font-bold text-white">
                  Indus<span className="text-blue-400">Electric</span>
                </h1>
                <p className="text-xs text-slate-400">
                  Materiales eléctricos
                </p>
              </div>
            </div>

            {/* Navegación Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <div key={item.label} className="relative group">
                  <button className="flex items-center gap-1 text-slate-300 hover:text-white">
                    <span>{item.label}</span>
                    {item.submenu && (
                      <ChevronDown className="w-4 h-4" />
                    )}
                    {item.badge && (
                      <span className="absolute -top-1 -right-2 px-1.5 py-0.5 text-xs bg-red-500 text-white rounded-full">
                        Hot
                      </span>
                    )}
                  </button>

                  {item.submenu && (
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <div className="mt-2 py-2 bg-slate-900/95 backdrop-blur-md rounded-lg border border-slate-800 min-w-[200px]">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Acciones */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center relative">
                <Search className="absolute left-3 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 w-40 lg:w-56"
                />
              </div>

              <button className="relative p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800">
                <ShoppingCart className="w-5 h-5 text-white" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </button>

              <button
                onClick={() =>
                  window.open("https://wa.me/5491123456789", "_blank")
                }
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>

              <button
                onClick={() => setIsMenuOpen((v) => !v)}
                className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="lg:hidden bg-slate-900 border-t border-slate-800"
          >
            <div className="max-w-7xl mx-auto px-4 py-4">
              {menuItems.map((item) => (
                <div key={item.label} className="border-b border-slate-800">
                  <span className="block py-3 text-slate-300">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  )
}
