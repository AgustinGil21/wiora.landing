"use client"

import { motion } from "framer-motion"

interface AnimatedKoalaProps {
  className?: string
}

const AnimatedKoala: React.FC<AnimatedKoalaProps> = ({ className }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="grad-body" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D6DAE3" />
            <stop offset="100%" stopColor="#B8BFD1" />
          </radialGradient>
          <radialGradient id="grad-ear-inner" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FDFBFF" />
            <stop offset="100%" stopColor="#E9EBF2" />
          </radialGradient>
          <radialGradient id="grad-face" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#E9EBF2" />
            <stop offset="100%" stopColor="#D6DAE3" />
          </radialGradient>
          <filter id="soft-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000000" floodOpacity="0.15" />
          </filter>
        </defs>

        <g filter="url(#soft-shadow)">
          <motion.g
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            {/* Left Ear */}
            <motion.g
              initial={{ rotate: -5 }}
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
              style={{ transformOrigin: "100px 150px" }}
            >
              <circle cx="100" cy="150" r="65" fill="url(#grad-body)" />
              <circle cx="115" cy="160" r="45" fill="url(#grad-ear-inner)" />
            </motion.g>

            {/* Right Ear */}
            <motion.g
              initial={{ rotate: 5 }}
              animate={{ rotate: [5, -5, 5] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              style={{ transformOrigin: "300px 150px" }}
            >
              <circle cx="300" cy="150" r="65" fill="url(#grad-body)" />
              <circle cx="285" cy="160" r="45" fill="url(#grad-ear-inner)" />
            </motion.g>

            {/* Head */}
            <circle cx="200" cy="210" r="120" fill="url(#grad-face)" />

            {/* Nose */}
            <path d="M 200 220 C 170 220, 160 260, 200 260 C 240 260, 230 220, 200 220 Z" fill="#5C6B80" />
            <circle cx="190" cy="230" r="5" fill="#FFFFFF" fillOpacity="0.4" />

            {/* Eyes */}
            <g>
              {/* Left Eye */}
              <motion.g
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2.5 }}
                style={{ transformOrigin: "center" }}
              >
                <ellipse cx="150" cy="200" rx="15" ry="20" fill="#3E4C5F" />
                <circle cx="145" cy="192" r="5" fill="white" />
              </motion.g>

              {/* Right Eye */}
              <motion.g
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2.7 }}
                style={{ transformOrigin: "center" }}
              >
                <ellipse cx="250" cy="200" rx="15" ry="20" fill="#3E4C5F" />
                <circle cx="255" cy="192" r="5" fill="white" />
              </motion.g>
            </g>

            {/* Blush */}
            <motion.g
              animate={{ opacity: [0, 0.8, 0] }}
              transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
            >
              <circle cx="120" cy="245" r="20" fill="#FFC0CB" opacity="0.7" />
              <circle cx="280" cy="245" r="20" fill="#FFC0CB" opacity="0.7" />
            </motion.g>
          </motion.g>
        </g>
      </svg>
    </motion.div>
  )
}

export default AnimatedKoala
