import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Zap,
  Phone,
  Mail,
  Search,
  MessageSquare,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Inicio", href: "/" },

    {
      label: "Categorias",
      submenu: [
        {
          label: "Construcción",
          submenu: [
            {
              label: "Electricidad",
              href: "https://www.mercadolibre.com.ar/pagina/induselectric/listado/construccion/electricidad",
            },
            {
              label: "Baños y Sanitarios",
              href: "https://www.mercadolibre.com.ar/pagina/induselectric/listado/construccion/banos-sanitarios",
            },
          ],
        },
        {
          label: "Hogar, Muebles y Jardín",
          submenu: [
            {
              label: "Lámparas",
              href: "https://www.mercadolibre.com.ar/pagina/induselectric/listado/hogar-muebles-jardin/iluminacion-hogar/lamparas",
            },
            {
              label: "Focos",
              href: "https://www.mercadolibre.com.ar/pagina/induselectric/listado/hogar-muebles-jardin/iluminacion-hogar/focos",
            },
            {
              label: "Luces de Emergencia",
              href: "https://www.mercadolibre.com.ar/pagina/induselectric/listado/hogar-muebles-jardin/iluminacion-hogar/luces-emergencia",
            },
            {
              label: "Reflectores",
              href: "https://www.mercadolibre.com.ar/pagina/induselectric/listado/hogar-muebles-jardin/iluminacion-hogar/reflectores",
            },
          ],
        },
        {
          label: "Otras categorías",
          submenu: [
            {
              label: "Industria y Oficina",
              href: "https://www.mercadolibre.com.ar/pagina/induselectric/listado/industrias-oficinas/",
            },
            {
              label: "Computación",
              href: "https://www.mercadolibre.com.ar/pagina/induselectric/listado/computacion/",
            },
            {
              label: "Electrodomésticos y Aires acondicionados",
              href: "https://www.mercadolibre.com.ar/pagina/induselectric/listado/electrodomesticos-aires-ac/",
            },
          ],
        },
      ],
    },

    {
      label: "Tienda",
      href: "https://www.mercadolibre.com.ar/pagina/induselectric",
      badge: true,
    },
    { label: "Empresas", href: "#CTA_section" },
    { label: "Contacto", href: "#contacto" },
  ];

  const NavItem = ({ item }) => {
  if (item.href) {
    return (
      <a
        href={item.href}
        className="flex items-center gap-1 text-slate-300 hover:text-white"
      >
        <span>{item.label}</span>
      </a>
    );
  }

  return (
    <button className="flex items-center gap-1 text-slate-300 hover:text-white">
      <span>{item.label}</span>
      <ChevronDown className="w-4 h-4" />
    </button>
  );
};


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
            <a href='/'>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src="img/logo.png"
                    alt="Logo marca"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">
                  Indus<span className="text-blue-400">Electric</span>
                </h1>
                <p className="text-xs text-slate-400">Materiales eléctricos</p>
              </div>
            </div>
            </a>

            {/* Navegación Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <div key={item.label} className="relative group">
                  <NavItem item={item} />

                  {item.submenu && (
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <div className="mt-2 p-4 bg-slate-900/95 backdrop-blur-md rounded-lg border border-slate-800 min-w-[260px] space-y-4">
                        {item.submenu.map((group) => (
                          <div key={group.label}>
                            {/* Grupo */}
                            <p className="text-sm font-semibold text-slate-400 mb-2">
                              {group.label}
                            </p>

                            {/* Subcategorías */}
                            <div className="space-y-1">
                              {group.submenu.map((sub) => (
                                <a
                                  key={sub.label}
                                  href={sub.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block px-3 py-2 rounded text-slate-300 hover:text-white hover:bg-slate-800/60 text-sm"
                                >
                                  {sub.label}
                                </a>
                              ))}
                            </div>
                          </div>
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
                  <button
                    onClick={() =>
                      setOpenMobileMenu(
                        openMobileMenu === item.label ? null : item.label,
                      )
                    }
                    className="w-full flex items-center justify-between py-3 text-slate-300"
                  >
                    <span>{item.label}</span>
                    {item.submenu && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openMobileMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* SUBMENÚ */}
                  {item.submenu && openMobileMenu === item.label && (
                    <div className="pl-4 pb-3 space-y-3">
                      {item.submenu.map((group) => (
                        <div key={group.label}>
                          <p className="text-xs text-slate-400 uppercase mb-1">
                            {group.label}
                          </p>
                          {group.submenu.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block py-1 text-sm text-slate-300 hover:text-white"
                            >
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
