"use client"
import { useState, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface DropdownItem {
  key: string
  content: ReactNode
  onClick?: () => void
}

interface DropdownProps {
  trigger: {
    icon?: ReactNode
    label: string
  }
  items: DropdownItem[]
  className?: string
  dropdownClassName?: string
  animationType?: "scale" | "rotateX" | "slideDown"
  isScrolled?: boolean
}

export const Dropdown = ({
  trigger,
  items,
  className = "",
  dropdownClassName = "",
  animationType = "scale",
  isScrolled = false,
}: DropdownProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const getAnimationProps = () => {
    switch (animationType) {
      case "rotateX":
        return {
          initial: { opacity: 0, rotateX: -90 },
          animate: { opacity: 1, rotateX: 0 },
          exit: { opacity: 0, rotateX: -90 },
          style: { transformOrigin: "top" },
        }
      case "slideDown":
        return {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
        }
      default: // scale
        return {
          initial: { opacity: 0, y: -10, scale: 0.95 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: -10, scale: 0.95 },
        }
    }
  }

  const animationProps = getAnimationProps()

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.button
        className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors duration-200 font-medium lg:text-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {trigger.icon}
        {trigger.label}
        <motion.div animate={{ rotate: isHovered ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={animationProps.initial}
            animate={animationProps.animate}
            exit={animationProps.exit}
            transition={{ duration: 0.15 }}
            className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 backdrop-blur-sm rounded-2xl border border-purple-300/20 p-2 ${
              isScrolled ? "bg-purple-600/80" : "bg-white/5"
            } ${dropdownClassName}`}
            style={animationProps.style}
          >
            <div className="flex flex-col gap-2 text-xl">
              {items.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.content}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
