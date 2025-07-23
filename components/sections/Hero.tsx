"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { ArrowRight, BookOpen, Users, TrendingUp } from "lucide-react"

const Hero = () => {
  const { toast } = useToast()

  const handleScrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist")
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const stats = [
    { icon: Users, value: "65%", label: "de estudiantes se siente abrumado por la información" },
    { icon: BookOpen, value: "50%", label: "abandona sus carreras por falta de organización" },
    { icon: TrendingUp, value: "33%", label: "ya usa IA para estudiar, pero sin método" },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-32 pt-32 md:pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div className="text-center space-y-12" variants={containerVariants} initial="hidden" animate="visible">
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="bg-gradient-to-r from-white via-purple-100 to-violet-200 bg-clip-text text-transparent">
                Tu estudio,
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                a tu medida
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            ¿Y si el aprendizaje pudiera adaptarse a vos, y no al revés? Wiora transforma tu contenido desordenado en un
            camino de aprendizaje claro, estructurado y personalizado.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center" variants={itemVariants}>
            <Button
              onClick={handleScrollToWaitlist}
              size="lg"
              className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 group font-semibold"
            >
              Únete a la lista de espera
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Problem Stats */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-8" variants={itemVariants}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-purple-300/20 hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl mb-6">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-4">{stat.value}</div>
                <div className="text-purple-200 text-sm leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Problem Statement */}
          <motion.div className="max-w-4xl mx-auto pt-8" variants={itemVariants}>
            <p className="text-lg text-purple-200 leading-relaxed">
              El problema no es la falta de contenido, sino el desorden. Wiora nace de esa necesidad: transformar el
              caos del conocimiento en un proceso de aprendizaje guiado, donde tu contenido se adapta a tu ritmo y
              objetivos.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
