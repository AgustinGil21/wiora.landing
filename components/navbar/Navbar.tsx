"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, XIcon } from "lucide-react"
import { DesktopNavigation } from "./DesktopNavigation"
import { MobileNavigation } from "./MobileNavigation"
import WioraLogo from "../WioraLogo"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("ES")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLanguageSelect = (langCode: string) => {
    setSelectedLanguage(langCode)
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-purple-600/80 backdrop-blur-lg border-b border-purple-400/20" : "bg-purple-600"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Desktop Navigation */}
            <div className="flex items-center">
              {/* Logo */}
              <WioraLogo textClassName="!text-xl lg:!text-2xl" iconClassName="!h-10 !w-10 lg:!h-12 lg:!w-12"/>

              {/* Vertical Separator */}
              <div className="hidden md:block mx-6 h-8 w-0.5 bg-purple-300/30"></div>

              {/* Desktop Navigation */}
              <DesktopNavigation
                selectedLanguage={selectedLanguage}
                onLanguageSelect={handleLanguageSelect}
                isScrolled={isScrolled}
              />
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-white text-purple-900 hover:bg-purple-50 rounded-full px-6 py-2 font-medium">
                  Lista de espera
                </Button>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-purple-200 hover:text-white hover:bg-purple-700/50 focus:outline-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <XIcon className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <MobileNavigation isOpen={isOpen} selectedLanguage={selectedLanguage} onLanguageSelect={handleLanguageSelect} />
    </>
  )
}

export default Navbar
