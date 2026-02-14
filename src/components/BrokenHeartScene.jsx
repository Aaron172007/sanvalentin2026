import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export default function BrokenHeartScene({ onNext }) {
  const [answered, setAnswered] = useState(false)
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [noButtonSize, setNoButtonSize] = useState(1)
  const [noAttempts, setNoAttempts] = useState(0)
  const noButtonRef = useRef(null)

  const funnyMessages = [
    "¿Segura? 🥺",
    "Piénsalo otra vez 💭",
    "No seas así ❤️",
    "Dale una oportunidad 🌹",
    "Tú sabes que quieres 😊",
    "¡Vamos! 💕",
    "Solo di que sí 💝",
    "No me hagas esto 😢",
  ]

  const handleYes = () => {
    setAnswered(true)

    // Vibración de celebración
    if ('vibrate' in navigator) {
      navigator.vibrate([100, 50, 100, 50, 200])
    }

    // Animar unión de corazones - SE JUNTAN COMPLETAMENTE
    gsap.timeline()
      .to('.heart-left', {
        x: 80,  // <-- Cambiado de 50 a 80 para que se junten
        rotation: 0,
        duration: 1,
        ease: 'back.out(1.7)',
      })
      .to('.heart-right', {
        x: -80,  // <-- Cambiado de -50 a -80 para que se junten
        rotation: 0,
        duration: 1,
        ease: 'back.out(1.7)',
      }, '<')
      .to('.heart-left, .heart-right', {
        scale: 1.2,
        duration: 0.3,
      })
      .to('.heart-left, .heart-right', {
        scale: 1,
        duration: 0.3,
      })

    // Animar personajes
    gsap.to('.character-left', {
      x: 50,  // <-- Cambiado de 30 a 50
      rotation: -10,
      duration: 1,
      ease: 'back.out(1.7)',
    })
    gsap.to('.character-right', {
      x: -50,  // <-- Cambiado de -30 a -50
      rotation: 10,
      duration: 1,
      ease: 'back.out(1.7)',
    })

    createHeartExplosion()

    setTimeout(() => {
      onNext()
    }, 4000)
  }

  const handleNoHover = () => {
    setNoAttempts(prev => prev + 1)

    // Vibración
    if ('vibrate' in navigator) {
      navigator.vibrate([50, 30, 50])
    }

    // Animar el botón: solo rojo (sin agrandar)
    if (noButtonRef.current) {
      gsap.timeline()
        .to(noButtonRef.current, {
          backgroundColor: '#dc2626',  // Rojo más oscuro/intenso
          duration: 0.15,
          ease: 'power2.out',
        })
        .to(noButtonRef.current, {
          backgroundColor: '#ef4444',  // Volver al rojo original
          duration: 0.25,
          ease: 'power2.out',
        })
    }
  }

  const createHeartExplosion = () => {
    const container = document.querySelector('.celebration-container')

    for (let i = 0; i < 50; i++) {
      const heart = document.createElement('div')
      heart.className = 'celebration-heart'
      heart.innerHTML = ['❤️', '💕', '💖', '💗', '💓', '💝'][Math.floor(Math.random() * 6)]
      heart.style.cssText = `
        position: absolute;
        font-size: ${Math.random() * 30 + 20}px;
        left: 50%;
        top: 50%;
        pointer-events: none;
      `

      container.appendChild(heart)

      gsap.to(heart, {
        x: (Math.random() - 0.5) * 600,
        y: (Math.random() - 0.5) * 600 - 200,
        opacity: 0,
        rotation: Math.random() * 720,
        duration: 2 + Math.random(),
        ease: 'power2.out',
        onComplete: () => heart.remove(),
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8 }}
      className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 relative overflow-hidden"
    >
      {/* Container para celebración */}
      <div className="celebration-container absolute inset-0 pointer-events-none z-50" />

      {/* Corazones flotantes de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {['❤️', '💕', '💖'][Math.floor(Math.random() * 3)]}
          </motion.div>
        ))}
      </div>

      {/* Contenedor principal */}
      <div className="relative z-10 flex flex-col items-center px-4">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-romantic text-valentine-red mb-12 text-center glow-text"
        >
          ¿Quieres ser mi San Valentín?
        </motion.h2>

        {/* Corazón partido con personajes */}
        <div className="relative w-80 h-80 md:w-96 md:h-96 mb-12">
          {/* Mitad izquierda del corazón */}
          <motion.div
            className="heart-left absolute left-0 top-1/2 transform -translate-y-1/2"
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: answered ? 80 : 0,  // <-- Cambia de 50 a 80
              opacity: 1,
              rotate: answered ? 0 : -15,
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <svg width="160" height="200" viewBox="0 0 100 120" className="drop-shadow-2xl">
              <defs>
                <linearGradient id="heartGradientLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF6B9D" />
                  <stop offset="100%" stopColor="#FF1744" />
                </linearGradient>
              </defs>
              <path
                d="M 50 20 C 50 10, 40 0, 25 0 C 10 0, 0 10, 0 25 C 0 45, 20 65, 50 100 L 50 100 L 50 20 Z"
                fill="url(#heartGradientLeft)"
                stroke="#C2185B"
                strokeWidth="2"
              />
            </svg>
          </motion.div>

          {/* Personaje izquierdo */}
          <motion.div
            className="character-left absolute left-8 top-1/2 transform -translate-y-1/2 text-6xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: answered ? 50 : 0,  // <-- Cambia de 30 a 50
            }}
            transition={{ delay: 0.5, type: 'spring' }}
          >
            😊
          </motion.div>

          {/* Mitad derecha del corazón */}
          <motion.div
            className="heart-right absolute right-0 top-1/2 transform -translate-y-1/2"
            initial={{ x: 100, opacity: 0 }}
            animate={{
              x: answered ? -80 : 0,  // <-- Cambia de -50 a -80
              opacity: 1,
              rotate: answered ? 0 : 15,
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <svg width="160" height="200" viewBox="0 0 100 120" className="drop-shadow-2xl">
              <defs>
                <linearGradient id="heartGradientRight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF6B9D" />
                  <stop offset="100%" stopColor="#FF1744" />
                </linearGradient>
              </defs>
              <path
                d="M 50 20 C 50 10, 60 0, 75 0 C 90 0, 100 10, 100 25 C 100 45, 80 65, 50 100 L 50 100 L 50 20 Z"
                fill="url(#heartGradientRight)"
                stroke="#C2185B"
                strokeWidth="2"
              />
            </svg>
          </motion.div>

          {/* Personaje derecho */}
          <motion.div
            className="character-right absolute right-8 top-1/2 transform -translate-y-1/2 text-6xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: answered ? -50 : 0,  // <-- Cambia de -30 a -50
            }}
            transition={{ delay: 0.5, type: 'spring' }}
          >
            🥰
          </motion.div>

          {/* Partículas entre los corazones */}
          {!answered && (
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-valentine-rose rounded-full"
                  animate={{
                    x: [(Math.random() - 0.5) * 40, (Math.random() - 0.5) * 40],
                    y: [(Math.random() - 0.5) * 40, (Math.random() - 0.5) * 40],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Botones */}
        {!answered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 relative"  // <-- gap-6 a gap-4
          >
            {/* Botón SÍ */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleYes}
              className="premium-button bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            // <-- Cambiado: px-12 py-4 text-xl → px-8 py-3 text-lg
            >
              <span className="relative z-10 flex items-center gap-2">
                ✅ Sí
              </span>
            </motion.button>

            {/* Botón NO (esquivo) */}
            <motion.button
              ref={noButtonRef}
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              className="premium-button bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden whitespace-nowrap"
            // <-- Cambiado: px-12 py-4 text-xl → px-8 py-3 text-lg
            >
              <span className="relative z-10 flex items-center gap-2">
                ❌ {funnyMessages[Math.min(noAttempts, funnyMessages.length - 1)]}
              </span>
            </motion.button>
          </motion.div>
        )}

        {/* Mensaje de celebración */}
        {answered && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: 'spring' }}
            className="text-center mt-8"
          >
            <h3 className="text-4xl md:text-5xl font-romantic text-valentine-red glow-text mb-4">
              ¡Sabía que dirías que sí! 💝
            </h3>
            <p className="text-xl text-valentine-rose font-modern">
              ¡Te amooo!
            </p>
          </motion.div>
        )}
      </div>

      {/* Lluvia de corazones si responde sí */}
      {answered && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-50px',
              }}
              animate={{
                y: window.innerHeight + 100,
                rotate: 360,
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 2,
                ease: 'linear',
              }}
            >
              {['❤️', '💕', '💖', '💗', '💓', '💝'][Math.floor(Math.random() * 6)]}
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  )
}