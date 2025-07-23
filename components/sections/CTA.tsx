"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const CTA = () => {
  const handleScrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist")
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="cta" className="py-24 px-4 bg-gradient-to-r from-purple-600 to-violet-700">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">Una revolución en marcha</h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Este es el primer acto. Una introducción apenas, al cambio profundo que estamos decididos a provocar. Si
            compartís este sueño, podés ser parte de esta historia.
          </p>

          <div className="space-y-8">
            <Button
              onClick={handleScrollToWaitlist}
              className="bg-white text-purple-600 hover:bg-purple-50 px-12 py-6 text-xl rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold"
            >
              Únete a la lista de espera
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-purple-300/30 max-w-3xl mx-auto space-y-6">
            <p className="text-purple-100 leading-relaxed text-lg">
              "No vamos a cambiar el mundo de un día para el otro. Pero sí podemos cambiar la forma en que cada persona
              se enfrenta al conocimiento. Y eso, en el fondo, también es cambiar el mundo."
            </p>
            <p className="text-purple-200 font-medium">Wiora ya está en marcha. Y esto, apenas empieza.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
