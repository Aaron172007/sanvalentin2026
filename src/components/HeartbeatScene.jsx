import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function HeartbeatScene({ onNext }) {
  const [beats, setBeats] = useState(0)

  useEffect(() => {
    // Vibración en móvil cuando late el corazón
    const vibrateOnBeat = () => {
      if ('vibrate' in navigator) {
        navigator.vibrate(100)
      }
    }

    // Simular latidos
    const beatInterval = setInterval(() => {
      vibrateOnBeat()
      setBeats(prev => prev + 1)
    }, 800)

    // Ir a la siguiente escena después de varios latidos
    const timer = setTimeout(() => {
      onNext()
    }, 8000)

    return () => {
      clearInterval(beatInterval)
      clearTimeout(timer)
    }
  }, [onNext])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-red-900/20 relative overflow-hidden"
    >
      {/* Grid de fondo estilo monitor */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[linear-gradient(rgba(255,105,180,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,105,180,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Contenedor principal */}
      <div className="relative z-10 w-full max-w-4xl px-4">
        {/* Línea ECG */}
        <div className="relative h-64 flex items-center justify-center overflow-hidden">
          {/* Línea base */}
          <svg
            className="w-full h-full"
            viewBox="0 0 800 200"
            preserveAspectRatio="none"
          >
            {/* Gradiente para el brillo */}
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF1744" stopOpacity="0" />
                <stop offset="50%" stopColor="#FF1744" stopOpacity="1" />
                <stop offset="100%" stopColor="#FF1744" stopOpacity="0" />
              </linearGradient>
              
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Línea de latido animada */}
            <motion.path
              d="M 0 100 L 100 100 L 120 100 L 130 60 L 140 140 L 150 40 L 160 100 L 180 100 L 200 100 L 220 100 L 240 100 L 260 100 L 280 100 L 300 100 L 320 100 L 340 100 L 360 100 L 380 100 L 400 100 L 420 100 L 440 100 L 460 100 L 480 100 L 500 100 L 520 100 L 540 100 L 560 100 L 580 100 L 600 100 L 620 100 L 640 100 L 660 100 L 680 100 L 700 100 L 720 100 L 740 100 L 760 100 L 780 100 L 800 100"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: 1,
              }}
              transition={{
                pathLength: { duration: 2, ease: "linear", repeat: Infinity },
                opacity: { duration: 0.5 }
              }}
            />

            {/* Línea de latido que se repite */}
            <motion.path
              d="M 0 100 L 100 100 L 120 100 L 130 60 L 140 140 L 150 40 L 160 100 L 180 100 L 200 100"
              fill="none"
              stroke="#FF1744"
              strokeWidth="4"
              filter="url(#glow)"
              animate={{
                x: [-200, 800],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>

          {/* Corazón pulsante en el centro */}
          <motion.div
            className="absolute text-8xl md:text-9xl"
            animate={{
              scale: [1, 1.2, 1],
              filter: [
                'drop-shadow(0 0 20px rgba(255, 23, 68, 0.8))',
                'drop-shadow(0 0 40px rgba(255, 23, 68, 1))',
                'drop-shadow(0 0 20px rgba(255, 23, 68, 0.8))',
              ],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ❤️
          </motion.div>
        </div>

        {/* Texto principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-romantic text-white glow-text">
           Te amo
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-lg md:text-xl text-valentine-pink font-modern"
          >
            Cada latido es un recordatorio de lo mucho que significas para mí
          </motion.p>
        </motion.div>

        {/* Contador de latidos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute top-8 right-8 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-red-500/30"
        >
          <div className="text-center">
            <p className="text-red-400 text-sm font-modern mb-1">BPM</p>
            <motion.p
              key={beats}
              initial={{ scale: 1.5, color: '#FF1744' }}
              animate={{ scale: 1, color: '#FF4081' }}
              className="text-3xl font-bold font-modern"
            >
              {80 + (beats % 15)} 
            </motion.p>
          </div>
        </motion.div>

        {/* Partículas de corazón */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100],
                opacity: [0, 0.6, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            >
              💓
            </motion.div>
          ))}
        </div>

        {/* Ondas de pulso */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-red-500 rounded-full pointer-events-none"
            animate={{
              width: ['0px', '600px'],
              height: ['0px', '600px'],
              opacity: [0.8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.7,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Indicador de carga */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm font-modern"
      >
        Escuchando los latidos del corazón...
      </motion.div>
    </motion.div>
  )
}