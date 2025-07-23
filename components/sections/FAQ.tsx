"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  MessageCircle,
  Shield,
  Globe,
  DollarSign,
  Upload,
  Users,
  Clock,
  User,
} from "lucide-react";

const FAQ = () => {
  const faqItems = [
    {
      id: "¿Qué es Wiora?",
      icon: HelpCircle,
      question: "¿Qué es Wiora?",
      answer:
        "Wiora es una plataforma educativa impulsada por inteligencia artificial que convierte tus apuntes, guías o PDFs en un plan de estudio estructurado y adaptado a vos. Está diseñada para quienes estudian con autonomía y buscan claridad, orden y acompañamiento real en su proceso.",
      color: "from-purple-500 to-violet-600",
    },
    {
      id: "¿Cómo funciona?",
      icon: MessageCircle,
      question: "¿Cómo funciona?",
      answer:
        "Solo tenés que subir tu contenido de estudio (PDFs, textos, guías, etc.), y Wiora lo transforma en un recorrido guiado con niveles, ejercicios y retroalimentación. La IA organiza el contenido, prioriza lo importante y genera actividades para ayudarte a aprender de forma activa.",
      color: "from-violet-500 to-indigo-600",
    },
    {
      id: "¿Es gratis?",
      icon: DollarSign,
      question: "¿Es gratis?",
      answer:
        "Sí. Wiora tiene una versión gratuita que te permite acceder a todas las funciones esenciales. En el futuro ofreceremos una versión premium con beneficios adicionales, pero el acceso básico será siempre gratuito y sin tarjeta de crédito.",
      color: "from-indigo-500 to-purple-600",
    },
    {
      id: "¿Wiora reemplaza a un profesor o una carrera?",
      icon: Users,
      question: "¿Wiora reemplaza a un profesor o una carrera?",
      answer:
        "No. Wiora es una herramienta de apoyo que complementa tu aprendizaje. No busca reemplazar a los profesores, sino ofrecer un recurso adicional que te ayude a organizar y asimilar mejor la información.",
      color: "from-indigo-500 to-purple-600",
    },
    {
      id: "¿Qué hace diferente a Wiora de otras plataformas educativas?",
      icon: Globe,
      answer:
        "La mayoría de las plataformas ofrecen cursos prediseñados. Wiora, en cambio, parte de tu propio contenido y lo transforma en una experiencia estructurada, dinámica y adaptativa. Es una plataforma que se adapta a vos, no al revés.",
      question: "¿Qué hace diferente a Wiora de otras plataformas educativas?",
      color: "from-indigo-500 to-purple-600",
    },
    {
      id: "¿Necesito tener conocimientos técnicos para usar Wiora?",
      icon: Shield,
      question: "¿Necesito tener conocimientos técnicos para usar Wiora?",
      answer:
        "No. Wiora está pensada para que cualquier persona pueda usarla fácilmente. Solo subís tu material de estudio y la plataforma se encarga del resto. Es como tener un tutor digital que parte de lo que vos ya tenés.",
      color: "from-indigo-500 to-purple-600",
    },
  ];

  return (
    <section
      id="faq"
      className="py-24 px-4 bg-gradient-to-r from-indigo-900/30 to-purple-900/30"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Aquí encontrarás respuestas a las preguntas más comunes sobre Wiora.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-purple-300/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={item.id}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-300/20 px-6 hover:bg-white/10 transition-all duration-300"
                >
                  <AccordionTrigger className="text-white hover:text-purple-200 py-6 text-left">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg font-semibold">
                        {item.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-purple-200 leading-relaxed text-base px-14 pb-6 pointer-events-none">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-violet-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/30">
            <h3 className="text-xl font-bold text-white mb-4">
              ¿Tenés más preguntas?
            </h3>
            <p className="text-purple-200 mb-6">
              Únete a nuestra comunidad en Discord o escribinos directamente.
              Estamos aquí para ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/SdJz3DsQ"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Discord
                </button>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&to=wiora.app@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300">
                  Contacto
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
