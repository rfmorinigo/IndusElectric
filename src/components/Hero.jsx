import { motion } from "framer-motion";
import { Shield, Truck, Zap, ArrowRight } from "lucide-react";

export default function Hero() {
  const features = [
    {
      icon: Shield,
      title: "Calidad certificada",
      description: "Todos nuestros productos cumplen normas IRAM",
    },
    {
      icon: Truck,
      title: "Envío en 24/48hs",
      description: "Despachos rápidos a todo el país",
    },
    {
      icon: Zap,
      title: "Asesoramiento técnico",
      description: "Expertos en instalaciones eléctricas",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950/50 to-slate-950">
      {/* Fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 mb-6">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 font-medium">
                Materiales eléctricos profesionales
              </span>
            </div>

            <h1 className="text-5xl font-bold text-white mb-6">
              Todo para tus{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                instalaciones eléctricas
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-xl">
              Proveedor oficial de materiales eléctricos para profesionales e
              industria.
            </p>

            <div className="flex gap-4 mb-12">
              <button
                onClick={() =>
                  window.open("https://wa.me/+5491144704380", "_blank")
                }
                className="cursor-pointer px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl flex items-center gap-3"
              >
                Consultar productos
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                target="_blank"
                href="https://www.mercadolibre.com.ar/pagina/induselectric"
                className="px-8 py-4 border border-slate-700 text-white rounded-xl"
              >
                Ver catálogo
              </a>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    className="group flex items-center gap-3 px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg"
                  >
                    <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-colors">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{feature.title}</p>
                      <p className="text-sm text-slate-400">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Visual */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center space-y-4">
            <img
              src="/img/frente.png"
              alt="Frente Indus Electric"
              className="w-full h-full object-contain rounded-xl"
            />

            <p className="text-slate-300 text-sm md:text-base">
              <span className="font-semibold text-white">Más de 38 años</span>{" "}
              acompañando a la industria, la construcción y el hogar con{" "}
              <span className="text-blue-400 font-semibold">
                materiales eléctricos de calidad. 
              </span>
             {" "}Apoyo, asesoramiento, confianza y muy buen servicio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
