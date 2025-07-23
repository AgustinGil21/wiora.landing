"use client"
import { motion } from "framer-motion"
import { useToast } from "@/hooks/use-toast"
import { BookOpen, Brain, Target, Users, Clock, Zap } from "lucide-react"

const Features = () => {
  const { toast } = useToast()

  const handleFeatureClick = () => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
      duration: 3000,
    })
  }

  const featuresData = [
    {
      icon: BookOpen,
      title: "Tu contenido, tu camino",
      description:
        "Carga tus apuntes, PDFs o libros. Wiora los transforma en un recorrido de aprendizaje estructurado y progresivo.",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: Brain,
      title: "IA que se adapta a vos",
      description:
        "Algoritmos inteligentes que entienden tu nivel, ritmo y objetivos para crear una experiencia verdaderamente personalizada.",
      color: "from-violet-500 to-indigo-600",
    },
    {
      icon: Target,
      title: "Objetivos claros",
      description:
        "Define qué querés aprender y recibí un plan detallado dividido en niveles, desde lo básico hasta lo avanzado.",
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: Zap,
      title: "Ejercicios interactivos",
      description:
        "Practicá en tiempo real con retroalimentación adaptativa que se ajusta a tus errores y dudas más frecuentes.",
      color: "from-purple-600 to-violet-500",
    },
    {
      icon: Clock,
      title: "Progreso gamificado",
      description:
        "Niveles, logros y métricas de avance que mantienen tu motivación y refuerzan hábitos de estudio positivos.",
      color: "from-violet-600 to-indigo-500",
    },
    {
      icon: Users,
      title: "Autonomía total",
      description:
        "No dependés de cursos cerrados ni materiales externos. Con lo que ya tenés, podés empezar a aprender mejor.",
      color: "from-indigo-600 to-purple-500",
    },
  ]

  return (
    <section id="features" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Una solución <span className="text-purple-300">verdaderamente integral</span>
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Wiora combina IA, estructura, motivación y práctica continua en un solo flujo adaptado para tus necesidades
            reales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={handleFeatureClick}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 border border-purple-300/20 h-full hover:bg-white/15 transition-all duration-300 hover:shadow-2xl">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-6">{feature.title}</h3>
                <p className="text-purple-200 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
