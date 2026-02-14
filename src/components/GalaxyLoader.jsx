import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

// Componente de galaxia 3D animada
function AnimatedGalaxy() {
  const galaxyRef = useRef()
  const particlesRef = useRef()

  useFrame((state) => {
    if (galaxyRef.current) {
      galaxyRef.current.rotation.y += 0.001
      galaxyRef.current.rotation.z += 0.0005
    }
    
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.0002
      particlesRef.current.rotation.y -= 0.0003
    }
  })

  // Crear partículas de la galaxia
  const particlesCount = 5000
  const positions = new Float32Array(particlesCount * 3)
  const colors = new Float32Array(particlesCount * 3)

  for (let i = 0; i < particlesCount; i++) {
    const i3 = i * 3
    
    // Posiciones en forma de espiral
    const radius = Math.random() * 5
    const spinAngle = radius * 2
    const branchAngle = (i % 3) * (Math.PI * 2) / 3
    
    positions[i3] = Math.cos(branchAngle + spinAngle) * radius
    positions[i3 + 1] = (Math.random() - 0.5) * 2
    positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius
    
    // Colores románticos
    const mixedColor = new THREE.Color()
    const innerColor = new THREE.Color('#ff6b9d')
    const outerColor = new THREE.Color('#c44569')
    
    mixedColor.lerpColors(innerColor, outerColor, radius / 5)
    
    colors[i3] = mixedColor.r
    colors[i3 + 1] = mixedColor.g
    colors[i3 + 2] = mixedColor.b
  }

  return (
    <group ref={galaxyRef}>
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particlesCount}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          vertexColors={true}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}

// Componente principal de la escena de carga
export default function GalaxyLoader({ onNext }) {
  const [showText, setShowText] = useState(false)
  const [canContinue, setCanContinue] = useState(false)

  useEffect(() => {
    // Mostrar texto después de 1 segundo
    const textTimer = setTimeout(() => setShowText(true), 1000)
    // Permitir continuar después de 3 segundos
    const continueTimer = setTimeout(() => setCanContinue(true), 3000)
    
    return () => {
      clearTimeout(textTimer)
      clearTimeout(continueTimer)
    }
  }, [])

  const handleClick = () => {
    if (canContinue) {
      onNext()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 1 }}
      className="w-full h-screen relative overflow-hidden bg-gradient-to-b from-black via-purple-900/20 to-black"
      onClick={handleClick}
    >
      {/* Canvas 3D con la galaxia */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="absolute inset-0"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ff6b9d" />
        
        {/* Estrellas de fondo */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        
        {/* Galaxia animada */}
        <AnimatedGalaxy />
        
        {/* Controles de órbita para efecto parallax */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>

      {/* Overlay con texto */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">

        <div className="absolute inset-0 bg-black/60 z-0" />

        {showText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center z-10 px-4"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-romantic text-white glow-text mb-4"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Hola!
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-valentine-pink font-modern"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Con cariño, para ti
            </motion.p>
          </motion.div>
        )}

        {canContinue && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-20 text-white/60 font-modern text-sm pointer-events-auto cursor-pointer"
          >
            {/* Adaptar texto según dispositivo */}
            <span className="hidden md:inline">Haz clic para continuar</span>
            <span className="md:hidden">Toca la pantalla para continuar</span>
          </motion.div>
        )}
      </div>
        
      {/* Partículas flotantes decorativas */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-valentine-pink rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}