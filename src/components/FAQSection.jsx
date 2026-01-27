export default function FaqSection() {
  const faqs = [
    {
      question: "¿Hacen envíos a todo el país?",
      answer:
        "Sí, coordinamos envíos a todo el país a través de logística propia y empresas de transporte.",
    },
    {
      question: "¿Qué medios de pago aceptan?",
      answer:
        "Aceptamos efectivo, transferencia bancaria, tarjetas de crédito y débito, y MercadoPago.",
    },
    {
      question: "¿Venden por mayor?",
      answer:
        "Sí, tenemos precios especiales para mayoristas, contratistas y empresas.",
    },
    {
      question: "¿Los productos tienen garantía?",
      answer:
        "Todos nuestros productos tienen garantía del fabricante.",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-slate-400">
            Todo lo que necesitás saber antes de comprar
          </p>
        </div>

        {/* List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-b from-slate-900 to-slate-800
                         border border-slate-800 hover:border-slate-700
                         transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-2
                             flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r
                                from-blue-600 to-purple-600
                                flex items-center justify-center">
                  <span className="text-sm font-bold">?</span>
                </div>
                {faq.question}
              </h3>

              <p className="text-slate-400 pl-11">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
