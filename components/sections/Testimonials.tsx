"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Kiara Vexina",
      role: "Estudiante de la UCA",
      content:
        "Me entusiasma mucho la idea. Me la paso organizando apuntes, videos y libros sin saber si voy bien. Si una IA puede armarme un camino y darme feedback, eso cambia todo.",
      category: "Estudiante",
    },
    {
      name: "Marcos Femia",
      role: "Estudiante de la UB ",
      content:
        "Siempre me costó empezar a estudiar porque no sabía cómo organizar todo lo que tenía. Esta idea de convertir mis propios apuntes en un recorrido guiado me parece genial. No es más contenido, es una guía.",
      category: "Estudiante",
    },
    {
      name: "Maximo Glaus",
      role: "Autodidacta",
      content:
        "No es que me falte voluntad para aprender, sino una herramienta que me ayude a organizar, priorizar y transformar ese contenido en un proceso más amigable y adaptado.",
      category: "Estudiante Autodidacta",
    },
  ];

  const t = useTranslations("Testimonials");

  return (
    <section id="testimonials" className="py-18 px-4">
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
            {t("description")}
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc13Mka5OWnv3SRle2meX1xVmOQc8xCq0FzvEzAxpcui7hbLw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-white hover:bg-purple-50 text-purple-600 px-8 py-7 text-lg my-5 rounded-full font-semibold w-full md:w-auto text-wrap">
              Ayudanos a seguir validando Wiora ahora!
            </Button>
          </a>
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
              <p className="text-purple-100 italic mb-8 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>
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
            <h3 className="text-2xl font-bold text-white mb-6">
              Nuestro compromiso
            </h3>
            <p className="text-purple-200 leading-relaxed text-lg mb-6">
              "Cada botón, cada paso, cada función de Wiora nace de situaciones
              reales. No estamos adivinando lo que el estudiante necesita: lo
              vivimos. Por eso no creamos una plataforma perfecta, sino una que
              escucha y evoluciona con vos."
            </p>
            <p className="text-purple-300 font-medium">- Equipo de Wiora</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
