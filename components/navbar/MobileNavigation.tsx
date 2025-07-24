"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SocialMediaBtnsGroup } from "../SocialMediaBtnsGroup"

const navigationItems = [
  { name: "Características", href: "#features" },
  { name: "Cómo funciona", href: "#how-it-works" },
  { name: "Testimonios", href: "#testimonials" },
  { name: "Preguntas frecuentes", href: "#faq" },
]

const languages = [
  { code: "ES", name: "Español" },
  { code: "EN", name: "English" },
]

interface MobileNavigationProps {
  isOpen: boolean
  selectedLanguage: string
  onLanguageSelect: (langCode: string) => void
}

export const MobileNavigation = ({ isOpen, selectedLanguage, onLanguageSelect }: MobileNavigationProps) => {
  const handleNavigationClick = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "calc(100dvh - 64px)" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden fixed top-16 left-0 right-0 z-40 bg-purple-900/95 backdrop-blur-lg flex flex-col justify-between"
        >
          <div className="px-2 pt-2 pb-3 space-y-6 sm:px-3 flex flex-col items-center">
            {/* Mobile Navigation Items */}
            <div className="space-y-3 w-full max-w-[400px]">
              <h3 className="text-purple-200 font-medium text-sm uppercase tracking-wider text-center">Navegación</h3>
              <div className="flex flex-col gap-3">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavigationClick(item.href)}
                    className="flex items-center justify-center gap-3 p-3 rounded-md text-purple-200 hover:text-white transition-all duration-300 hover:bg-purple-800/50 hover:scale-105 text-xl font-medium w-full"
                  >
                    <span className="font-medium">{item.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mobile Language Switch */}
            <div className="space-y-3 w-full max-w-[400px]">
              <h3 className="text-purple-200 font-medium text-sm uppercase tracking-wider text-center">Idioma</h3>
              <div className="flex justify-center">
                <div className="relative bg-white/5 backdrop-blur-sm rounded-full p-1 border border-purple-300/20">
                  <motion.div
                    className="absolute top-1 bottom-1 bg-purple-600 rounded-full"
                    animate={{
                      left: selectedLanguage === "ES" ? "4px" : "50%",
                      width: selectedLanguage === "ES" ? "calc(50% - 4px)" : "calc(50% - 4px)",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <div className="relative flex">
                    <motion.button
                      onClick={() => onLanguageSelect("ES")}
                      className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 relative z-10 ${
                        selectedLanguage === "ES" ? "text-white" : "text-purple-200"
                      }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      Español
                    </motion.button>
                    <motion.button
                      onClick={() => onLanguageSelect("EN")}
                      className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 relative z-10 ${
                        selectedLanguage === "EN" ? "text-white" : "text-purple-200"
                      }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      English
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="flex flex-col gap-6">
            <SocialMediaBtnsGroup className="self-center" />
            <div className="pt-4 pb-3 border-t border-purple-700">
              <div className="mt-3 px-2 space-y-1 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="w-full max-w-[400px]"
                >
                  <Button className="w-full bg-white text-purple-900 hover:bg-purple-50 rounded-full px-6 py-2 font-medium hover:cursor-pointer">
                    Lista de espera
                  </Button>
                </motion.div>
              </div>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
