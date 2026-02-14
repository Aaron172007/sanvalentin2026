import { motion } from 'framer-motion'

export default function LilyBouquet({ onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden"
    >
      {/* Estilos CSS para las flores animadas */}
      <style jsx>{`
        .flowers-bottom {
          position: fixed;
          bottom: 18vh;
          left: 50%;
          transform: translateX(-50%) scale(1);
          z-index: 2;
          pointer-events: none;
        }

        .flower {
          position: absolute;
          bottom: 10vmin;
          transform-origin: bottom center;
          animation-duration: 4s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }

        .flower--1 {
          left: -15vmin;
          animation-name: moving-flower-1;
        }

        .flower--2 {
          left: 50%;
          transform: rotate(20deg);
          animation-name: moving-flower-2;
        }

        .flower--3 {
          left: 50%;
          transform: rotate(-15deg);
          animation-name: moving-flower-3;
        }

        .flower__line {
          width: 1.5vmin;
          background-image: linear-gradient(to left, rgba(0, 0, 0, 0.2), transparent, rgba(255, 255, 255, 0.2)), 
          linear-gradient(to top, transparent 10%, #1aaa15, #064600);
          box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
          animation: grow-flower-tree 4s backwards;
        }

        .flower--1 .flower__line {
          height: 70vmin;
          animation-delay: 0.3s;
        }

        .flower--2 .flower__line {
          height: 60vmin;
          animation-delay: 0.6s;
        }

        .flower--3 .flower__line {
          height: 55vmin;
          animation-delay: 0.9s;
        }

        .flower__leafs {
          position: relative;
          animation: blooming-flower 2s backwards;
        }

        .flower__leafs--1 { animation-delay: 1.1s; }
        .flower__leafs--2 { animation-delay: 1.4s; }
        .flower__leafs--3 { animation-delay: 1.7s; }

        .flower__leafs::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          transform: translate(-50%, -100%);
          width: 8vmin;
          height: 8vmin;
          background-color: #FF69B4;
          filter: blur(10vmin);
        }

        .flower__leaf {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 8vmin;
          height: 11vmin;
          border-radius: 51% 49% 47% 53%/44% 45% 55% 69%;
          background-image: linear-gradient(to top, #FF1493, #FFB6C1);
          transform-origin: bottom center;
          opacity: 0.9;
          box-shadow: inset 0 0 2vmin rgba(255, 255, 255, 0.5);
        }

        .flower__leaf--1 {
          transform: translate(-10%, 1%) rotateY(40deg) rotateX(-50deg);
          background-image: linear-gradient(to top, #FF69B4, #FFB6C1);
        }

        .flower__leaf--2 {
          transform: translate(-50%, -4%) rotateX(40deg);
          background-image: linear-gradient(to top, #FF1493, #FF69B4);
        }

        .flower__leaf--3 {
          transform: translate(-90%, 0%) rotateY(45deg) rotateX(50deg);
          background-image: linear-gradient(to top, #C71585, #FF69B4);
        }

        .flower__leaf--4 {
          width: 8vmin;
          height: 8vmin;
          transform-origin: bottom left;
          border-radius: 4vmin 10vmin 4vmin 4vmin;
          transform: translate(0%, 18%) rotateX(70deg) rotate(-43deg);
          background-image: linear-gradient(to top, #FF1493, #FFB6C1);
          z-index: 1;
          opacity: 0.8;
        }

        .flower__white-circle {
          position: absolute;
          left: -3.5vmin;
          top: -3vmin;
          width: 9vmin;
          height: 4vmin;
          border-radius: 50%;
          background-color: #FFF0F5;
        }

        .flower__white-circle::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 45%;
          transform: translate(-50%, -50%);
          width: 60%;
          height: 60%;
          border-radius: inherit;
          background: linear-gradient(90deg, #FFD700, #FFC0CB);
        }

        .flower__line__leaf {
          --w: 7vmin;
          --h: calc(var(--w) + 2vmin);
          position: absolute;
          top: 20%;
          left: 90%;
          width: var(--w);
          height: var(--h);
          border-top-right-radius: var(--h);
          border-bottom-left-radius: var(--h);
          background-image: linear-gradient(to top, rgba(20, 122, 20, 0.4), #1aaa15);
        }

        .flower--1 .flower__line__leaf--1 {
          animation: blooming-leaf-right 0.8s 1.6s backwards;
          transform: rotate(70deg) rotateY(30deg);
        }

        .flower--1 .flower__line__leaf--2 {
          top: 45%;
          animation: blooming-leaf-right 0.8s 1.4s backwards;
          transform: rotate(70deg) rotateY(30deg);
        }

        .flower--1 .flower__line__leaf--3 {
          border-top-right-radius: 0;
          border-bottom-left-radius: 0;
          border-top-left-radius: var(--h);
          border-bottom-right-radius: var(--h);
          left: -460%;
          top: 12%;
          animation: blooming-leaf-left 0.8s 1.2s backwards;
          transform: rotate(-70deg) rotateY(30deg);
        }

        .flower--1 .flower__line__leaf--4 {
          border-top-right-radius: 0;
          border-bottom-left-radius: 0;
          border-top-left-radius: var(--h);
          border-bottom-right-radius: var(--h);
          left: -460%;
          top: 40%;
          animation: blooming-leaf-left 0.8s 1s backwards;
          transform: rotate(-70deg) rotateY(30deg);
        }

        .flower--2 .flower__line__leaf--1 {
          animation: blooming-leaf-right 0.8s 1.9s backwards;
          transform: rotate(70deg) rotateY(30deg);
        }

        .flower--2 .flower__line__leaf--2 {
          top: 45%;
          animation: blooming-leaf-right 0.8s 1.7s backwards;
          transform: rotate(70deg) rotateY(30deg);
        }

        .flower--2 .flower__line__leaf--3 {
          border-top-right-radius: 0;
          border-bottom-left-radius: 0;
          border-top-left-radius: var(--h);
          border-bottom-right-radius: var(--h);
          left: -460%;
          top: 12%;
          animation: blooming-leaf-left 0.8s 1.5s backwards;
          transform: rotate(-70deg) rotateY(30deg);
        }

        .flower--2 .flower__line__leaf--4 {
          border-top-right-radius: 0;
          border-bottom-left-radius: 0;
          border-top-left-radius: var(--h);
          border-bottom-right-radius: var(--h);
          left: -460%;
          top: 40%;
          animation: blooming-leaf-left 0.8s 1.3s backwards;
          transform: rotate(-70deg) rotateY(30deg);
        }

        .flower--3 .flower__line__leaf--1 {
          animation: blooming-leaf-right 0.8s 2.5s backwards;
          transform: rotate(70deg) rotateY(30deg);
        }

        .flower--3 .flower__line__leaf--2 {
          top: 45%;
          animation: blooming-leaf-right 0.8s 2.3s backwards;
          transform: rotate(70deg) rotateY(30deg);
        }

        .flower--3 .flower__line__leaf--3 {
          border-top-right-radius: 0;
          border-bottom-left-radius: 0;
          border-top-left-radius: var(--h);
          border-bottom-right-radius: var(--h);
          left: -460%;
          top: 12%;
          animation: blooming-leaf-left 0.8s 2.1s backwards;
          transform: rotate(-70deg) rotateY(30deg);
        }

        .flower--3 .flower__line__leaf--4 {
          border-top-right-radius: 0;
          border-bottom-left-radius: 0;
          border-top-left-radius: var(--h);
          border-bottom-right-radius: var(--h);
          left: -460%;
          top: 40%;
          animation: blooming-leaf-left 0.8s 1.9s backwards;
          transform: rotate(-70deg) rotateY(30deg);
        }

        .flower__light {
          position: absolute;
          bottom: 0vmin;
          width: 1vmin;
          height: 1vmin;
          background-color: #FFB6C1;
          border-radius: 50%;
          filter: blur(0.2vmin);
          animation: light-ans 4s linear infinite backwards;
        }

        .flower__light:nth-child(odd) {
          background-color: #FF69B4;
        }

        .flower__light:nth-child(3n) {
          background-color: #FF1493;
        }

        .flower__light--1 { left: -2vmin; animation-delay: 1s; }
        .flower__light--2 { left: 3vmin; animation-delay: 0.5s; }
        .flower__light--3 { left: -6vmin; animation-delay: 0.3s; }
        .flower__light--4 { left: 6vmin; animation-delay: 0.9s; }
        .flower__light--5 { left: -1vmin; animation-delay: 1.5s; }
        .flower__light--6 { left: -4vmin; animation-delay: 3s; }
        .flower__light--7 { left: 3vmin; animation-delay: 2s; }
        .flower__light--8 { left: -6vmin; animation-delay: 3.5s; }

        @keyframes moving-flower-1 {
          0%, 100% { transform: rotate(2deg); }
          50% { transform: rotate(-2deg); }
        }

        @keyframes moving-flower-2 {
          0%, 100% { transform: rotate(18deg); }
          50% { transform: rotate(14deg); }
        }

        @keyframes moving-flower-3 {
          0%, 100% { transform: rotate(-18deg); }
          50% { transform: rotate(-20deg) rotateY(-10deg); }
        }

        @keyframes grow-flower-tree {
          0% { height: 0; border-radius: 1vmin; }
        }

        @keyframes blooming-flower {
          0% { transform: scale(0); }
        }

        @keyframes blooming-leaf-right {
          0% {
            transform-origin: left;
            transform: rotate(70deg) rotateY(30deg) scale(0);
          }
        }

        @keyframes blooming-leaf-left {
          0% {
            transform-origin: right;
            transform: rotate(-70deg) rotateY(30deg) scale(0);
          }
        }

        @keyframes light-ans {
          0% {
            opacity: 0;
            transform: translateY(0vmin);
          }
          25% {
            opacity: 1;
            transform: translateY(-5vmin) translateX(-2vmin);
          }
          50% {
            opacity: 1;
            transform: translateY(-15vmin) translateX(2vmin);
            filter: blur(0.2vmin);
          }
          75% {
            transform: translateY(-20vmin) translateX(-2vmin);
            filter: blur(0.2vmin);
          }
          100% {
            transform: translateY(-30vmin);
            opacity: 0;
            filter: blur(1vmin);
          }
        }
      `}</style>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                ['#FFB6C1', '#FF69B4', '#DDA0DD', '#FFF'][Math.floor(Math.random() * 4)]
              }, transparent)`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Mensaje final */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mb-8 px-4 z-10 absolute top-[15%]"
      >
        <h1 className="text-4xl md:text-6xl font-romantic text-valentine-red glow-text mb-4">
          Para Ti
        </h1>
        <p className="text-xl md:text-2xl text-valentine-rose font-modern">
          Con todo mi amor 💕
        </p>
      </motion.div>



      {/* Mensaje final decorativo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="text-center px-4 z-10 absolute bottom-[18%]"
      >
        <p className="text-2xl md:text-3xl font-romantic text-valentine-red mb-4">
          Fin💝
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.reload()}
          className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-3 rounded-full font-modern font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Repetir
        </motion.button>
      </motion.div>

      {/* Brillos decorativos */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full z-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Flores animadas en la parte inferior */}
      <div className="flowers-bottom">
        {/* Flor 1 */}
        <div className="flower flower--1">
          <div className="flower__leafs flower__leafs--1">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        {/* Flor 2 */}
        <div className="flower flower--2">
          <div className="flower__leafs flower__leafs--2">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        {/* Flor 3 */}
        <div className="flower flower--3">
          <div className="flower__leafs flower__leafs--3">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}