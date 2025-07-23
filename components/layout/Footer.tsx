"use client";

import type React from "react";
import { useToast } from "@/hooks/use-toast";
import WioraLogo from "../WioraLogo";

const Footer = () => {
  const { toast } = useToast();

  const handleFeatureClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: "🚧 Esta función aún no está implementada",
      description:
        "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
      duration: 3000,
    });
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Características", href: "#features" },
    { name: "Cómo funciona", href: "#how-it-works" },
    { name: "Testimonios", href: "#testimonials" },
  ];

  return (
    <footer className="py-12 px-4 bg-purple-900/50 border-t border-purple-300/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">
                <WioraLogo />
              </span>
            </div>
            <p className="text-purple-200 mb-4 max-w-md">
              “Nunca consideres el estudio como una obligación, sino como una
              oportunidad para penetrar en el bello y maravilloso mundo del
              saber.”
            </p>
            <span className="text-purple-300"> — Albert Einstein</span>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 block">
              Producto
            </span>
            <ul className="flex flex-col  space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="text-purple-200 hover:text-white transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 block">Soporte</span>
            <ul className="flex flex-col space-y-2">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=wiora.app@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-white transition-colors font-medium"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleLinkClick(e, "#faq")}
                  className="text-purple-200 hover:text-white transition-colors font-medium"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-300/20 mt-8 pt-8 text-center">
          <p className="text-purple-200">
            © 2025 Wiora. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
