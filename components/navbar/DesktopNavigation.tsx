"use client"
import { NavigationDropdown } from "./NavigationDropdown"
import { SocialDropdown } from "./SocialDropdown"
import { LanguageDropdown } from "./LanguageDropdown"

interface DesktopNavigationProps {
  selectedLanguage: string
  onLanguageSelect: (langCode: string) => void
  isScrolled: boolean
}

export const DesktopNavigation = ({ selectedLanguage, onLanguageSelect, isScrolled }: DesktopNavigationProps) => {
  return (
    <div className="hidden md:flex items-center space-x-6">
      <NavigationDropdown isScrolled={isScrolled} />
      <SocialDropdown isScrolled={isScrolled} />
      <LanguageDropdown
        selectedLanguage={selectedLanguage}
        onLanguageSelect={onLanguageSelect}
        isScrolled={isScrolled}
      />
    </div>
  )
}
