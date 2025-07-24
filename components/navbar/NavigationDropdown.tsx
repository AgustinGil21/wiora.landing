"use client"
import { Navigation } from "lucide-react"
import { motion } from "framer-motion"
import { Dropdown } from "./Dropdown"

const navigationItems = [
  { name: "Características", href: "#features" },
  { name: "Cómo funciona", href: "#how-it-works" },
  { name: "Testimonios", href: "#testimonials" },
  { name: "Preguntas frecuentes", href: "#faq" },
]

interface NavigationDropdownProps {
  isScrolled: boolean
}

export const NavigationDropdown = ({ isScrolled }: NavigationDropdownProps) => {
  const handleNavigationClick = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const dropdownItems = navigationItems.map((item) => ({
    key: item.name,
    content: (
      <motion.button
        onClick={() => handleNavigationClick(item.href)}
        className="flex items-center gap-3 p-3 rounded-lg text-purple-200 hover:text-white transition-all duration-200 hover:bg-white/10 group text-left w-full"
        whileHover={{ scale: 1.05, x: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-sm font-medium">{item.name}</span>
      </motion.button>
    ),
  }))

  return (
    <Dropdown
      trigger={{
        icon: <Navigation className="w-4 h-4" />,
        label: "Navegación",
      }}
      items={dropdownItems}
      dropdownClassName="min-w-[220px]"
      animationType="scale"
      isScrolled={isScrolled}
    />
  )
}
