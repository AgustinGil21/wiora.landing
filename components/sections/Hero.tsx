"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, TrendingUp } from "lucide-react";
import { Brain } from "lucide-react";

const Hero = () => {
  const handleScrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stats = [
    {
      icon: Users,
      value: "62%",
      label:
        "De los estudiantes en línea se siente abrumado por la cantidad de contenido, lo cual impacta negativamente su capacidad de retención.",
    },
    {
      icon: TrendingUp,
      value: "270 Millones",
      label:
        "De personas en Latinoamérica ya incorporan herramientas como ChatGPT, y buscadores con IA para sus rutinas cotidianas,aprendizaje y estudio.",
    },
    {
      icon: BookOpen,
      value: "73%",
      label:
        "De los estudiantes siente inseguro al tomar decisiones debido al exceso de información, 9 de cada 10 reportan haber sufrido infoxicación.",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-10 pt-32 md:pt-16"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div
          className="text-center space-y-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <section
            className="flex flex-col justify-center items-center gap-8"
            style={{
              minHeight: "calc(100dvh - 64px)",
            }}
          >
            <div className="inline-flex items-center rounded-full border border-purple-300 bg-purple-800 px-3 py-1 text-sm text-white">
              <Brain className="w-4 h-4 mr-2" />
              Aprendizaje potenciado por IA
            </div>
            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-white via-purple-100 to-violet-200 bg-clip-text text-transparent">
                  Wiora transforma tus documentos en
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  experiencias de aprendizaje
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Carga tus PDFs y documentos. Nuestra IA crea procesos de
              aprendizaje personalizados, cuestionarios interactivos y rutas de
              estudio adaptadas a tu ritmo.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              variants={itemVariants}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleScrollToWaitlist}
                  size="lg"
                  className="bg-white hover:bg-purple-50 text-purple-600 px-8 py-6 text-lg rounded-full"
                >
                  Únete a la lista de espera
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <a href="/wiora-vision.pdf" download="Wiora product vision">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-purple-800 hover:text-white px-8 py-6 text-lg rounded-full"
                  >
                    Descargar carta de producto
                  </Button>
                </a>
              </div>
            </motion.div>
          </section>

          {/* Problem Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-8"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-purple-300/20 hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl mb-6">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-4">
                  {stat.value}
                </div>
                <div className="text-purple-200 text-sm leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Problem Statement */}
          <motion.div
            className="max-w-4xl mx-auto pt-8"
            variants={itemVariants}
          >
            <p className="text-lg text-purple-200 leading-relaxed">
              El problema no es la falta de contenido, sino el desorden. Wiora
              nace de esa necesidad: transformar el caos del conocimiento en un
              proceso de aprendizaje guiado, donde tu contenido se adapta a tu
              ritmo y objetivos.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
