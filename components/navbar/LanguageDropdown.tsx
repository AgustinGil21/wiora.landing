"use client"
import { Globe } from "lucide-react"
import { motion } from "framer-motion"
import { Dropdown } from "./Dropdown"

const languages = [
  { code: "ES", name: "Español" },
  { code: "EN", name: "English" },
]

interface LanguageDropdownProps {
  selectedLanguage: string
  onLanguageSelect: (langCode: string) => void
  isScrolled: boolean
}

export const LanguageDropdown = ({ selectedLanguage, onLanguageSelect, isScrolled }: LanguageDropdownProps) => {
  const dropdownItems = languages.map((lang) => ({
    key: lang.code,
    content: (
      <motion.button
        onClick={() => onLanguageSelect(lang.code)}
        className={`flex items-center justify-center p-3 rounded-lg w-full text-center transition-all duration-200 hover:bg-white/10 ${
          selectedLanguage === lang.code ? "text-white bg-white/5" : "text-purple-200 hover:text-white"
        }`}
        whileHover={{ scale: 1.02, x: 5 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-sm font-medium">{lang.name}</span>
      </motion.button>
    ),
  }))

  return (
    <Dropdown
      trigger={{
        icon: <Globe className="w-4 h-4" />,
        label: selectedLanguage,
      }}
      items={dropdownItems}
      dropdownClassName="min-w-[150px]"
      animationType="rotateX"
      isScrolled={isScrolled}
    />
  )
}
