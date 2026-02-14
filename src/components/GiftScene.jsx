import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useDrag } from '@use-gesture/react'
import gsap from 'gsap'

export default function GiftScene({ onNext, onMusicStart }) {
  const [ribbonPulled, setRibbonPulled] = useState(false)
  const [giftOpened, setGiftOpened] = useState(false)
  const [stretchDistance, setStretchDistance] = useState(0)
  const ribbonRef = useRef(null)
  const stretchRectRef = useRef(null)

  // Drag para el moño - solo hacia abajo
  const bind = useDrag(
    ({ movement: [mx, my], last }) => {
      // Solo permitir movimiento hacia abajo
      const adjustedY = Math.max(0, my)
      const adjustedX = mx
      setStretchDistance(adjustedY)

      if (ribbonRef.current) {
        gsap.to(ribbonRef.current, {
          y: adjustedY,
          duration: 0.05,
          ease: 'none'
        })
      }

      if (stretchRectRef.current) {
        // El rectángulo se estira y rota siguiendo el mouse
        const angle = Math.atan2(adjustedY, adjustedX) * (180 / Math.PI)
        const distance = Math.sqrt(adjustedX * adjustedX + adjustedY * adjustedY)

        gsap.to(stretchRectRef.current, {
          height: distance,
          rotation: angle + 90, // +90 porque el rectángulo va vertical
          duration: 0.05,
          ease: 'none'
        })
      }

      // Si jaló suficiente y soltó
      if (last && adjustedY > 80) {
        handleRibbonPull()
      } else if (last) {
        // Volver a posición original
        setStretchDistance(0)
        gsap.to(ribbonRef.current, {
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.5)',
        })
        gsap.to(stretchRectRef.current, {
          height: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.5)',
        })
      }
    },
    {
      filterTaps: true,
      axis: 'y',
    }
  )

  const handleRibbonPull = () => {
    setRibbonPulled(true)

    // Animar moño y rectángulo desvaneciéndose
    gsap.timeline()
      .to(ribbonRef.current, {
        y: stretchDistance + 150,
        opacity: 0,
        scale: 0.5,
        duration: 0.6,
        ease: 'power2.in',
      })
      .to(stretchRectRef.current, {
        opacity: 0,
        duration: 0.4,
      }, '<')

    setTimeout(() => {
      openGift()
    }, 400)
  }

  const openGift = () => {
    setGiftOpened(true)
    onMusicStart()

    // Animar apertura
    const tl = gsap.timeline()

    tl.to('.gift-lid', {
      y: -15,
      duration: 0.25,
      ease: 'power1.out',
    })
      .to('.gift-lid', {
        rotateX: -125,
        y: -60,
        z: -40,
        duration: 0.9,
        ease: 'back.out(1.2)',
      })
      .to('.gift-box', {
        y: -8,
        duration: 0.15,
      }, '-=0.5')
      .to('.gift-box', {
        y: 0,
        duration: 0.2,
        ease: 'bounce.out'
      })

    createHeartExplosion()

    setTimeout(() => {
      onNext()
    }, 3000)
  }

  const createHeartExplosion = () => {
    const container = document.querySelector('.hearts-container')
    if (!container) return

    for (let i = 0; i < 40; i++) {
      const heart = document.createElement('div')
      heart.innerHTML = '❤️'
      heart.style.cssText = `
        position: absolute;
        font-size: ${Math.random() * 25 + 20}px;
        left: 50%;
        top: 50%;
        pointer-events: none;
      `
      container.appendChild(heart)

      gsap.to(heart, {
        x: (Math.random() - 0.5) * 600,
        y: (Math.random() - 0.5) * 600,
        opacity: 0,
        rotation: Math.random() * 720,
        duration: 2 + Math.random(),
        ease: 'power2.out',
        onComplete: () => heart.remove()
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 relative overflow-hidden"
    >
      <div className="hearts-container absolute inset-0 pointer-events-none z-50" />

      {/* Partículas de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-valentine-rose/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80],
              opacity: [0.2, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-16 md:top-24 text-center z-10"
      >
        <h2 className="text-2xl md:text-4xl font-romantic text-valentine-red mb-1">
          Jala el lazo hacia abajo 🎀
        </h2>
      </motion.div>

      {/* Regalo */}
      <div className="relative flex flex-col items-center" style={{ perspective: '1200px' }}>

        {/* Rectángulo que se estira DETRÁS del moño */}
        {!ribbonPulled && (
          <div
            ref={stretchRectRef}
            className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none z-40"
            style={{
              top: '48px', // Justo debajo del moño
              width: '45px',
              height: '0px',
              background: 'linear-gradient(to bottom, #FBBF24, #F59E0B)',
              borderRadius: '5px',
              boxShadow: '0 2px 10px rgba(251, 191, 36, 0.4)',
            }}
          />
        )}

        {/* MOÑO - más bajo y arriba de la tapa */}
        {!ribbonPulled && (
          <div
            {...bind()}
            ref={ribbonRef}
            className="relative z-40 cursor-grab active:cursor-grabbing -mb-12"
            style={{ touchAction: 'none' }}
          >
            <div className="relative">
              {/* Loop izquierdo */}
              <motion.div
                animate={{ scaleX: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -left-9 top-0 w-10 h-14 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-lg shadow-xl"
                style={{
                  transform: 'rotate(-22deg)',
                  boxShadow: '0 4px 15px rgba(234, 179, 8, 0.5), inset -2px -2px 6px rgba(0,0,0,0.15)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent rounded-lg" />
              </motion.div>

              {/* Loop derecho */}
              <motion.div
                animate={{ scaleX: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
                className="absolute -right-9 top-0 w-10 h-14 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-lg shadow-xl"
                style={{
                  transform: 'rotate(22deg)',
                  boxShadow: '0 4px 15px rgba(234, 179, 8, 0.5), inset 2px -2px 6px rgba(0,0,0,0.15)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent rounded-lg" />
              </motion.div>

              {/* Centro del moño - esfera */}
              <div className="relative w-12 h-12 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full shadow-2xl"
                style={{
                  boxShadow: '0 6px 20px rgba(234, 179, 8, 0.6), inset -2px -2px 8px rgba(0,0,0,0.25), inset 2px 2px 6px rgba(255,255,255,0.4)',
                }}
              >
                <div className="absolute top-2 left-3 w-5 h-5 bg-white/50 rounded-full blur-sm" />

                {/* Indicador */}
                <motion.div
                  animate={{ y: [0, 8, 0], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 text-2xl"
                >
                  👇
                </motion.div>
              </div>
            </div>
          </div>
        )}

        {/* TAPA - más ancha que la caja y más abajo */}
        <motion.div
          className="gift-lid relative z-30 mb-[-50px] "
          style={{
            transformStyle: 'preserve-3d',
            transformOrigin: 'center bottom',
          }}
        >
          <div className="w-60 h-16 md:w-72 md:h-20 bg-gradient-to-br from-red-600 via-red-500 to-red-700 rounded-t-xl shadow-2xl relative overflow-hidden"
            style={{
              boxShadow: '0 -6px 25px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.2), inset 0 -2px 10px rgba(0,0,0,0.2)',
            }}
          >
            {/* Patrón diagonal */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_12px,rgba(139,0,0,0.15)_12px,rgba(139,0,0,0.15)_24px)]" />

            {/* Brillo superior */}
            <div className="absolute top-0 left-6 right-6 h-6 bg-gradient-to-b from-white/20 to-transparent rounded-t-xl" />

            {/* Borde inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-red-800/60" />

            {/* Cinta horizontal en tapa */}
            <div className="absolute top-1/2 left-0 right-0 h-5 bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-400 transform -translate-y-1/2 shadow-md" />
          </div>
        </motion.div>

        {/* CAJA - más pequeña que la tapa */}
        <div className="gift-box w-52 h-52 md:w-64 md:h-64 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-lg shadow-2xl relative overflow-hidden"
          style={{
            boxShadow: '0 12px 35px rgba(0,0,0,0.35), inset 0 2px 8px rgba(0,0,0,0.15)',
          }}
        >
          {/* Patrón diagonal */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_12px,rgba(139,0,0,0.15)_12px,rgba(139,0,0,0.15)_24px)]" />

          {/* Cinta vertical */}
          <div className="absolute left-1/2 top-0 bottom-0 w-11 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 transform -translate-x-1/2 shadow-lg" />

          {/* Cinta horizontal */}
          <div className="absolute top-1/2 left-0 right-0 h-11 bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-400 transform -translate-y-2 shadow-lg" />

          {/* Brillo frontal */}
          <div className="absolute top-0 left-10 right-10 h-20 bg-gradient-to-b from-white/15 to-transparent" />

          {/* Corazón interior */}
          {giftOpened && (
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                className="text-8xl"
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                💝
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Sombra */}
        <div className="absolute -bottom-8 w-60 md:w-72 h-8 bg-black/20 rounded-full blur-2xl" />
      </div>
    </motion.div>
  )
}