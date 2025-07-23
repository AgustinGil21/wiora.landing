"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { CheckCircle2, Star, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const Pricing = () => {
  const { toast } = useToast()
  const [billingCycle, setBillingCycle] = useState("monthly")

  const handlePlanClick = (planName: string) => {
    toast({
      title: `Plan ${planName} seleccionado`,
      description: "🚧 La funcionalidad de pago aún no está implementada. ¡Pero puedes solicitarla!",
      duration: 3000,
    })
  }

  const plans = {
    monthly: [
      {
        name: "Básico",
        price: "$0",
        period: "/mes",
        description: "Perfecto para empezar a explorar Wiora.",
        features: ["1 plan de estudio por semana", "Análisis de aprendizaje básico", "Soporte por comunidad"],
        isPopular: false,
      },
      {
        name: "Pro",
        price: "$9",
        period: "/mes",
        description: "Para estudiantes que buscan el máximo rendimiento.",
        features: [
          "Planes de estudio ilimitados",
          "Análisis de IA avanzado",
          "Seguimiento de progreso detallado",
          "Soporte prioritario por email",
        ],
        isPopular: true,
      },
      {
        name: "Equipo",
        price: "$15",
        period: "/mes/usuario",
        description: "Ideal para grupos de estudio y tutores.",
        features: ["Todo lo del plan Pro", "Dashboard de equipo", "Colaboración en planes", "Facturación centralizada"],
        isPopular: false,
      },
    ],
    yearly: [
      {
        name: "Básico",
        price: "$0",
        period: "/año",
        description: "Perfecto para empezar a explorar Wiora.",
        features: ["1 plan de estudio por semana", "Análisis de aprendizaje básico", "Soporte por comunidad"],
        isPopular: false,
      },
      {
        name: "Pro",
        price: "$86",
        period: "/año",
        description: "Ahorra un 20% con el plan anual.",
        features: [
          "Planes de estudio ilimitados",
          "Análisis de IA avanzado",
          "Seguimiento de progreso detallado",
          "Soporte prioritario por email",
        ],
        isPopular: true,
      },
      {
        name: "Equipo",
        price: "$144",
        period: "/año/usuario",
        description: "La mejor opción para colaboración a largo plazo.",
        features: ["Todo lo del plan Pro", "Dashboard de equipo", "Colaboración en planes", "Facturación centralizada"],
        isPopular: false,
      },
    ],
  }

  const currentPlans = plans[billingCycle as keyof typeof plans]

  return (
    <section id="pricing" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Planes para cada <span className="text-purple-300">estudiante</span>
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades y empieza a estudiar de forma más inteligente.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-purple-800/50 p-1 rounded-full flex items-center space-x-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-colors",
                billingCycle === "monthly" ? "bg-purple-600 text-white" : "text-purple-200 hover:bg-purple-700/50",
              )}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-colors relative",
                billingCycle === "yearly" ? "bg-purple-600 text-white" : "text-purple-200 hover:bg-purple-700/50",
              )}
            >
              Anual
              <span className="absolute -top-2 -right-2 bg-green-400 text-green-900 text-xs font-bold px-2 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {currentPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={cn(
                "bg-white/10 backdrop-blur-md rounded-2xl p-8 border flex flex-col transition-all duration-300 relative",
                plan.isPopular ? "border-purple-400 shadow-2xl shadow-purple-500/20" : "border-purple-300/20",
              )}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-violet-600 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    MÁS POPULAR
                  </div>
                </div>
              )}
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  {plan.name === "Básico" && <CheckCircle2 className="w-6 h-6 text-green-400" />}
                  {plan.name === "Pro" && <Star className="w-6 h-6 text-yellow-400" />}
                  {plan.name === "Equipo" && <Zap className="w-6 h-6 text-blue-400" />}
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                </div>
                <p className="text-purple-200 mb-6 h-12">{plan.description}</p>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-purple-200">{plan.period}</span>
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-purple-100">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Button
                  onClick={() => handlePlanClick(plan.name)}
                  className={cn(
                    "w-full text-lg py-6 rounded-lg transition-all duration-300",
                    plan.isPopular
                      ? "bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white"
                      : "bg-purple-500/30 hover:bg-purple-500/50 text-white",
                  )}
                >
                  Elegir Plan
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
