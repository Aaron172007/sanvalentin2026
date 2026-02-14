import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import GalaxyLoader from './components/GalaxyLoader'
import GiftScene from './components/GiftScene'
import LetterScene from './components/LetterScene'
import HeartbeatScene from './components/HeartbeatScene'
import BrokenHeartScene from './components/BrokenHeartScene'
import PuzzleScene from './components/PuzzleScene'
import LilyBouquet from './components/LilyBouquet'
import AudioManager from './components/AudioManager'
import ParticleBackground from './components/ParticleBackground'
import './index.css'

function App() {
  const [currentScene, setCurrentScene] = useState(0)
  const [musicPlaying, setMusicPlaying] = useState(false)

  // Escenas de la experiencia
  const scenes = [
    { id: 0, component: GalaxyLoader, name: 'galaxy' },
    { id: 1, component: GiftScene, name: 'gift' },
    { id: 2, component: LetterScene, name: 'letter' },
    { id: 3, component: HeartbeatScene, name: 'heartbeat' },
    { id: 4, component: BrokenHeartScene, name: 'brokenHeart' },
    { id: 5, component: PuzzleScene, name: 'puzzle' },
    { id: 6, component: LilyBouquet, name: 'lily' },
  ]

  const CurrentSceneComponent = scenes[currentScene].component

  const nextScene = () => {
    if (currentScene < scenes.length - 1) {
      setCurrentScene(prev => prev + 1)
    }
  }

  const startMusic = () => {
    setMusicPlaying(true)
  }

  // Prevenir scroll en móvil
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black custom-cursor">
      {/* Audio Manager */}
      <AudioManager isPlaying={musicPlaying} />
      
      {/* Fondo de partículas (siempre activo) */}
      {currentScene > 0 && <ParticleBackground />}
      
      {/* Escenas con transiciones */}
      <AnimatePresence mode="wait">
        <CurrentSceneComponent 
          key={currentScene}
          onNext={nextScene}
          onMusicStart={startMusic}
        />
      </AnimatePresence>

      {/* Indicador de progreso (opcional) */}
      {currentScene > 0 && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex gap-2">
          {scenes.slice(1).map((scene, index) => (
            <div
              key={scene.id}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index + 1 === currentScene
                  ? 'bg-valentine-rose w-8'
                  : index + 1 < currentScene
                  ? 'bg-valentine-pink'
                  : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default App