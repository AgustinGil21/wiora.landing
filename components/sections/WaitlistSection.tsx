"use client"
import { useState } from "react"
import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Mail, CheckCircle, Users, Rocket } from "lucide-react"

const WaitlistSection = () => {
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      toast({
        title: "Email inválido",
        description: "Por favor, ingresa un email válido.",
        duration: 3000,
      })
      return
    }

    setIsLoading(true)

    // Simular envío (aquí iría la integración real)
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
      toast({
        title: "¡Bienvenido a la revolución! 🚀",
        description: "Te notificaremos cuando Wiora esté listo para transformar tu forma de estudiar.",
        duration: 5000,
      })
    }, 1000)
  }

  const benefits = [
    {
      icon: Rocket,
      title: "Acceso temprano",
      description: "Sé de los primeros en probar Wiora antes del lanzamiento público",
    },
    {
      icon: Users,
      title: "Comunidad exclusiva",
      description: "Únete a nuestro Discord y ayuda a co-crear la experiencia",
    },
    {
      icon: CheckCircle,
      title: "Sin compromiso",
      description: "Gratis para siempre, sin tarjeta de crédito requerida",
    },
  ]

  return (
    <section id="waitlist" className="py-24 px-4 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Sé parte del <span className="text-purple-300">cambio</span>
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Únete a la lista de espera y sé de los primeros en experimentar una nueva forma de aprender. Estamos
            construyendo algo especial, y queremos que seas parte de esta historia.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-purple-300/20 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="text-center mb-8">
                <Mail className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Lista de espera exclusiva</h3>
                <p className="text-purple-200">
                  Ingresa tu email y te notificaremos cuando el MVP esté listo para probar
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-purple-300/30 text-white placeholder:text-purple-300 focus:border-purple-400 focus:ring-purple-400/20 rounded-full px-6 py-3 text-lg"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
                >
                  {isLoading ? "Enviando..." : "Unirme"}
                </Button>
              </div>
            </form>
          ) : (
            <motion.div
              className="text-center space-y-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle className="w-20 h-20 text-green-400 mx-auto" />
              <h3 className="text-3xl font-bold text-white">¡Bienvenido a la revolución!</h3>
              <p className="text-xl text-purple-200 max-w-2xl mx-auto">
                Gracias por unirte a nuestra lista de espera. Te notificaremos cuando Wiora esté listo para transformar
                tu forma de estudiar.
              </p>
              <div className="bg-purple-500/20 rounded-2xl p-6 max-w-md mx-auto">
                <p className="text-purple-200 text-sm">
                  📧 Confirmación enviada a: <br />
                  <span className="font-semibold text-white">{email}</span>
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-300/20 hover:bg-white/10 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl mb-6">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-4">{benefit.title}</h4>
              <p className="text-purple-200 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-300 text-sm">
            🔒 Tu email está seguro con nosotros. No spam, solo actualizaciones importantes sobre Wiora.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default WaitlistSection
