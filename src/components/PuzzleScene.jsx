import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useDrag } from '@use-gesture/react'
import gsap from 'gsap'

export default function PuzzleScene({ onNext }) {
  const [pieces, setPieces] = useState([])
  const [completed, setCompleted] = useState(false)
  const [completedPieces, setCompletedPieces] = useState(0)

  const GRID_SIZE = 3
  const PIECE_SIZE = 100

  const correctLayout = ['0', '5', '1', '1', '2', '0', '2', '5', '❤️']

  useEffect(() => {
    initializePuzzle()
  }, [])

  const initializePuzzle = () => {
    const newPieces = []

    for (let row = 0; row < GRID_SIZE; row++) {
      for (let col = 0; col < GRID_SIZE; col++) {
        const index = row * GRID_SIZE + col
        const number = correctLayout[index]
        const isFixed = number === '❤️'

        newPieces.push({
          id: index,
          row,
          col,
          correctRow: row,
          correctCol: col,
          currentX: isFixed ? col * PIECE_SIZE : (Math.random() - 0.5) * 300,
          currentY: isFixed ? row * PIECE_SIZE : (Math.random() - 0.5) * 300 + 150,
          isPlaced: isFixed,
          isFixed: isFixed,
          number: number,
          orderNumber: index + 1,
        })
      }
    }

    const fixedPieces = newPieces.filter(p => p.isFixed)
    const movablePieces = newPieces.filter(p => !p.isFixed).sort(() => Math.random() - 0.5)

    setPieces([...fixedPieces, ...movablePieces])
  }

  const checkIfNear = (piece, currentX, currentY) => {
    const targetX = piece.correctCol * PIECE_SIZE
    const targetY = piece.correctRow * PIECE_SIZE

    const distance = Math.sqrt(
      Math.pow(currentX - targetX, 2) + Math.pow(currentY - targetY, 2)
    )

    return distance < 40
  }

  const isCorrectPosition = (piece, targetRow, targetCol) => {
    const targetIndex = targetRow * GRID_SIZE + targetCol
    const expectedNumber = correctLayout[targetIndex]

    return piece.number === expectedNumber
  }

  const handleDragEnd = (piece, finalX, finalY) => {
    const targetCol = Math.round(finalX / PIECE_SIZE)
    const targetRow = Math.round(finalY / PIECE_SIZE)

    if (targetRow < 0 || targetRow >= GRID_SIZE || targetCol < 0 || targetCol >= GRID_SIZE) {
      return
    }

    if (checkIfNear(piece, finalX, finalY) && isCorrectPosition(piece, targetRow, targetCol)) {
      const targetX = targetCol * PIECE_SIZE
      const targetY = targetRow * PIECE_SIZE

      const wasAlreadyPlaced = piece.isPlaced

      setPieces(prevPieces =>
        prevPieces.map(p =>
          p.id === piece.id
            ? { ...p, currentX: targetX, currentY: targetY, isPlaced: true }
            : p
        )
      )

      if (!wasAlreadyPlaced) {
        setCompletedPieces(prev => prev + 1)
      }

      if ('vibrate' in navigator) {
        navigator.vibrate(100)
      }

      const allPlaced = pieces.every(p =>
        p.id === piece.id ? true : p.isPlaced
      )

      if (allPlaced) {
        completePuzzle()
      }
    }
  }

  const completePuzzle = () => {
    setCompleted(true)

    if ('vibrate' in navigator) {
      navigator.vibrate([200, 100, 200])
    }

    createHeartRain()

    setTimeout(() => {
      onNext()
    }, 4000)
  }

  const createHeartRain = () => {
    const container = document.querySelector('.puzzle-celebration')

    for (let i = 0; i < 50; i++) {
      const heart = document.createElement('div')
      heart.innerHTML = '💖'
      heart.style.cssText = `
        position: absolute;
        font-size: ${Math.random() * 25 + 15}px;
        left: ${Math.random() * 100}%;
        top: -50px;
        pointer-events: none;
      `

      container.appendChild(heart)

      gsap.to(heart, {
        y: window.innerHeight + 100,
        x: (Math.random() - 0.5) * 100,
        rotation: Math.random() * 360,
        opacity: 0,
        duration: 3 + Math.random() * 2,
        ease: 'none',
        onComplete: () => heart.remove(),
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 relative overflow-hidden"
    >
      <div className="puzzle-celebration absolute inset-0 pointer-events-none z-50" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 px-4"
      >
        <h2 className="text-3xl md:text-5xl font-romantic text-valentine-red glow-text mb-2">
          {completed ? '¡Completado! 🎉' : 'Arma Nuestra Fecha'}
        </h2>
        <p className="text-lg md:text-xl text-valentine-rose font-modern">
          {completed
            ? '¡Eres increíble!'
            : `${completedPieces}/${GRID_SIZE * GRID_SIZE - 1} piezas colocadas`
          }
        </p>
      </motion.div>

      <div className="relative mb-24">
        <div
          className="relative bg-white/40 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border-2 border-valentine-pink/30"
          style={{
            width: GRID_SIZE * PIECE_SIZE + 32,
            height: GRID_SIZE * PIECE_SIZE + 32,
          }}
        >
          <div className="absolute inset-4 grid gap-0" style={{
            gridTemplateColumns: `repeat(${GRID_SIZE}, ${PIECE_SIZE}px)`,
            gridTemplateRows: `repeat(${GRID_SIZE}, ${PIECE_SIZE}px)`,
          }}>
            {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => (
              <div
                key={i}
                className="border-2 border-dashed border-valentine-pink/30 rounded-lg relative"
              >
                <span className="absolute top-1 left-1.5 text-sm text-valentine-pink/60 font-bold">
                  {i + 1}
                </span>
              </div>
            ))}
          </div>

          {pieces.map((piece) => (
            <PuzzlePiece
              key={piece.id}
              piece={piece}
              onDragEnd={handleDragEnd}
              pieceSize={PIECE_SIZE}
            />
          ))}

          {completed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-4 rounded-lg overflow-hidden bg-gradient-to-br from-pink-300 via-red-300 to-purple-300"
            >
              <div className="w-full h-full flex flex-col items-center justify-center relative">
                <div className="text-center">
                  <div className="text-7xl font-bold text-white drop-shadow-2xl mb-2">
                    05 · 11 · 2025
                  </div>
                  <div className="text-3xl text-white/90">💑</div>
                </div>
                <div className="absolute bottom-2 text-white/40 font-romantic text-xs">
                  Con amor para ti 💕
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {!completed && completedPieces === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-6 text-valentine-red font-modern"
          >
            Arrastra las piezas a su lugar correcto
          </motion.p>
        )}
      </div>

      {/* Botón Saltar - centrado abajo */}
      {!completed && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={onNext}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-valentine-red text-white px-8 py-3 rounded-full font-modern text-base shadow-lg hover:bg-valentine-red/90 transition-colors z-50"
        >
          Saltar ⏭️
        </motion.button>
      )}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            🧩
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function PuzzlePiece({ piece, onDragEnd, pieceSize }) {
  const [position, setPosition] = useState({
    x: piece.currentX,
    y: piece.currentY
  })

  useEffect(() => {
    setPosition({ x: piece.currentX, y: piece.currentY })
  }, [piece.currentX, piece.currentY])

  const bind = useDrag(
    ({ offset: [x, y], last }) => {
      if (piece.isFixed) return

      setPosition({ x, y })

      if (last) {
        onDragEnd(piece, x, y)
      }
    },
    {
      from: () => [position.x, position.y],
      bounds: { left: -300, right: 300, top: -300, bottom: 300 },
    }
  )

  const colors = [
    'from-pink-400 to-rose-400',
    'from-red-400 to-pink-400',
    'from-purple-400 to-pink-400',
    'from-rose-400 to-red-400',
    'from-pink-500 to-purple-400',
    'from-red-500 to-rose-400',
    'from-purple-500 to-pink-500',
    'from-rose-500 to-red-500',
    'from-pink-600 to-purple-500',
  ]

  return (
    <motion.div
      {...bind()}
      style={{
        width: pieceSize,
        height: pieceSize,
        x: position.x,
        y: position.y,
        touchAction: 'none',
        position: 'absolute',
        left: 16,
        top: 16,
      }}
      animate={{
        scale: piece.isPlaced ? 1 : 0.95,
        zIndex: piece.isPlaced ? 1 : 10,
      }}
      className={`${piece.isFixed || piece.isPlaced ? 'pointer-events-none cursor-default' : 'cursor-grab active:cursor-grabbing'
        }`}
    >
      <div className={`w-full h-full bg-gradient-to-br ${colors[piece.id]} rounded-lg shadow-xl border-2 border-white/50 flex items-center justify-center select-none relative ${piece.isPlaced || piece.isFixed ? 'opacity-100' : 'hover:shadow-2xl'
        }`}>
        <span className="absolute top-1 left-2 text-sm text-white/70 font-bold">
          {piece.orderNumber}
        </span>

        <span className="text-white font-bold text-6xl drop-shadow-lg">
          {piece.number}
        </span>

        {!piece.isPlaced && !piece.isFixed && (
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-lg" />
        )}
      </div>
    </motion.div>
  )
}