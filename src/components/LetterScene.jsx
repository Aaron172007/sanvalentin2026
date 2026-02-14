import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export default function LetterScene({ onNext }) {
  const [envelopeOpened, setEnvelopeOpened] = useState(false)
  const [showLetter, setShowLetter] = useState(false)

  useEffect(() => {
    // Auto-abrir el sobre después de 1 segundo
    const timer = setTimeout(() => {
      openEnvelope()
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const openEnvelope = () => {
    setEnvelopeOpened(true)

    // Animar apertura del sobre con GSAP
    const tl = gsap.timeline()

    tl.to('.envelope-flap', {
      rotationX: -180,
      duration: 1.5,
      ease: 'power2.out',
    })
      .to('.envelope-body', {
        y: 0,
        duration: 0.3,
      }, '-=0.5')

    // Mostrar carta después de que se abra el sobre
    setTimeout(() => {
      setShowLetter(true)

      // Animar carta saliendo
      gsap.to('.letter-paper', {
        y: -128,  // <-- Cambia de -250 a -180 (sube menos)
        duration: 1.5,
        ease: 'power2.out',
      })
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
      className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 relative overflow-hidden"
    >
      {/* Corazones flotantes de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            💕
          </motion.div>
        ))}
      </div>

      {/* Sobre y carta */}
      <div className="relative z-10" style={{ perspective: '1000px' }}>
        {/* Sobre */}
        <div className="relative w-80 md:w-96">
          {/* Solapa del sobre */}
          <div
            className="envelope-flap absolute top-0 left-0 right-0 z-20"
            style={{
              transformStyle: 'preserve-3d',
              transformOrigin: 'top',
            }}
          >
            <div className="relative">
              {/* Triángulo de la solapa */}
              <div
                className="w-80 md:w-96 h-40 bg-gradient-to-b from-red-700 to-red-600 relative shadow-2xl"
                style={{
                  clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
                }}
              >
                {/* Textura del papel */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_transparent_20%,_rgba(0,0,0,0.1)_20%,_rgba(0,0,0,0.1)_80%,_transparent_80%)] bg-[length:10px_10px]" />

                {/* Brillo */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
              </div>

              {/* Sello de cera */}
              {!envelopeOpened && (
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
                  style={{ marginLeft: '-22px' }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg flex items-center justify-center">
                    <span className="text-2xl">💝</span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Cuerpo del sobre */}
          <div
            className="envelope-body relative mt-40 bg-gradient-to-b from-red-600 to-red-700 rounded-lg shadow-2xl overflow-hidden"
            style={{
              width: '320px',
              height: '250px',
            }}
          >
            {/* Textura */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_transparent_20%,_rgba(0,0,0,0.1)_20%,_rgba(0,0,0,0.1)_80%,_transparent_80%)] bg-[length:10px_10px]" />

            {/* Dirección decorativa */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white/60 font-romantic p-8">
              <p className="text-sm mb-2">Para:</p>
              <p className="text-lg">Mi Persona Favorita 💖</p>
            </div>

            {/* Carta dentro del sobre */}
            {showLetter && (
              <div
                className="letter-paper absolute inset-x-4 top-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg shadow-xl p-6 overflow-hidden"
                style={{
                  height: '220px',  // <-- Usa viewport height para que siempre quepa
   
                }}
              >
                {/* Textura de papel */}
                <div className="letter-paper absolute inset-x-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg shadow-xl p-2 overflow-hidden" />

                {/* Contenido de la carta */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="relative z-10 h-full overflow-y-auto px-1"
                >
                  <div className="space-y-4 text-gray-800">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="text-right text-sm text-gray-600 font-modern"
                    >
                      14 de Febrero de 2026
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="text-lg font-romantic text-valentine-red"
                    >
                      Para: Mi persona favorita 💖
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                      className="space-y-3 text-sm md:text-base leading-relaxed font-modern"
                    >
                      <p> Hoy mucho más que un día de San Valentín, celebro los 100 días que hemos compartido, los cuales me han sido muy significativos. Gracias por estar a mi lado, por mejorarme cada día y por ser siempre estar. Cada conversación, cada beso y cada abrazo me han demostrado tu gran amor y lo que estoy viviendo contigo me hace muy feliz. Te amo más de lo que uno se puede imaginar, y estoy emocionado por todos los momentos que nos esperan. ¡Feliz San Valentín mi amor y por muchos más días juntos! </p>

                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 }}
                      className="text-right font-romantic text-lg mt-8"
                    >
                      Con todo mi amor,
                      <br />
                      <span className="text-valentine-red">Aaron</span>
                    </motion.p>

                    {/* Corazones decorativos */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 2, duration: 0.5 }}
                      className="flex justify-center gap-2 text-2xl mt-4"
                    >
                      <span>💕</span>
                      <span>💖</span>
                      <span>💕</span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Borde decorativo */}
                <div className="absolute inset-0 border-2 border-valentine-gold/30 rounded-lg pointer-events-none" />
              </div>
            )}
          </div>
        </div>

        {/* Sombra */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-4 bg-black/20 rounded-full blur-2xl" />
      </div>

      {/* Partículas brillantes cuando se abre */}
      {envelopeOpened && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full"
              style={{
                left: '50%',
                top: '40%',
              }}
              animate={{
                x: (Math.random() - 0.5) * 400,
                y: (Math.random() - 0.5) * 400,
                opacity: [1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: Math.random() * 0.5,
              }}
            />
          ))}
        </div>
      )}

      {/* Texto de carga */}
      {!showLetter && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-20 text-center w-full px-4"
        >
          <p className="text-valentine-red font-romantic text-lg md:text-xl">
            Abriendo carta...
          </p>
        </motion.div>
      )}

      {/* Botón siguiente - AGREGAR AQUÍ */}
      {/* Botón siguiente */}
      {showLetter && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          onClick={onNext}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 px-8 py-3 bg-valentine-red text-white rounded-full font-romantic text-lg shadow-lg hover:bg-valentine-red/90 transition-colors z-50"
        >
          Continuar 💖
        </motion.button>
      )}

    </motion.div>

  )
}