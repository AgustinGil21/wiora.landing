"use client"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Lucas Steckler",
      role: "Co-fundador de Wiora",
      content:
        "Como estudiante universitario, sé lo frustrante que puede ser enfrentarse a una montaña de contenidos desordenados, sin una guía clara. Wiora nace de esa necesidad real.",
      category: "Fundador",
    },
    {
      name: "Agustín Gil",
      role: "Co-fundador de Wiora",
      content:
        "Creemos que la tecnología educativa todavía tiene mucho por evolucionar. Hay una enorme oportunidad en ofrecer soluciones más humanas, flexibles y accesibles.",
      category: "Fundador",
    },
    {
      name: "Estudiante Universitario",
      role: "Target Principal",
      content:
        "Muchas veces no es que falte voluntad para estudiar, sino una herramienta que nos ayude a organizar, priorizar y transformar ese contenido en un proceso de aprendizaje claro.",
      category: "Usuario Objetivo",
    },
  ]

  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Una <span className="text-purple-300">necesidad real</span>
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Wiora nace de la experiencia directa de quienes enfrentan el desafío de aprender con autonomía en un mundo
            lleno de información desordenada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-10 border border-purple-300/20 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Quote className="w-8 h-8 text-purple-400 mb-6" />
              <p className="text-purple-100 italic mb-8 leading-relaxed text-lg">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full mr-4 bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center font-bold text-xl text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-purple-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-purple-500/20 text-purple-200 text-xs px-2 py-1 rounded-full">
                  {testimonial.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-violet-600/20 backdrop-blur-sm rounded-2xl p-10 border border-purple-300/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Nuestro compromiso</h3>
            <p className="text-purple-200 leading-relaxed text-lg mb-6">
              "No venimos del mundo corporativo ni de incubadoras: venimos del deseo genuino de resolver un problema que
              sentimos cerca, todos los días. Cada funcionalidad que diseñamos está pensada desde la experiencia real de
              quien necesita aprender con claridad."
            </p>
            <p className="text-purple-300 font-medium">- Lucas y Agustín, Fundadores de Wiora</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
