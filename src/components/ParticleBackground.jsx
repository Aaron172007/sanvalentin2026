import { motion } from 'framer-motion'

export default function ParticleBackground() {
  const particles = [...Array(50)].map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
    type: Math.random() > 0.7 ? 'heart' : 'circle',
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 0.6, 0],
            rotate: particle.type === 'heart' ? [0, 360] : 0,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        >
          {particle.type === 'heart' ? (
            <span 
              className="text-valentine-pink"
              style={{ fontSize: `${particle.size * 4}px` }}
            >
              ❤️
            </span>
          ) : (
            <div
              className="rounded-full bg-gradient-to-br from-valentine-pink to-valentine-rose"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                boxShadow: '0 0 10px rgba(255, 105, 180, 0.5)',
              }}
            />
          )}
        </motion.div>
      ))}

      {/* Gradiente sutil de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-valentine-pink/5 to-transparent" />
    </div>
  )
}