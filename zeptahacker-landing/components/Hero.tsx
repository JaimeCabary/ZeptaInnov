'use client'

import { motion } from 'framer-motion'
import { MousePointer2, Zap, Cpu, Brain, GitBranch, Satellite, Network, Rocket } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState<any>(null)
  const vantaRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowHeight, setWindowHeight] = useState(800) // Default height for SSR

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    // Set the actual window height once component mounts
    setWindowHeight(window.innerHeight)
    
    // Handle window resize
    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    let effect: any

    if (!vantaEffect && vantaRef.current) {
      import('vanta/dist/vanta.net.min').then((VANTA) => {
        effect = VANTA.default({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xffffff, // Changed to yellow/orange to match footer
          backgroundColor: 0x000000,
          points: 12.0,
          maxDistance: 30.0,
          spacing: 18.0,
        })
        setVantaEffect(effect)
      })
    }

    return () => {
      effect?.destroy?.()
    }
  }, [vantaEffect])

  // Quantum stats matching footer theme
  const quantumStats = [
    { value: '10ms', label: 'Quantum Build', icon: Zap },
    { value: '99.9%', label: 'Neural Uptime', icon: Cpu },
    { value: '∞', label: 'AI Scalability', icon: GitBranch },
  ]

  // Quantum code snippets
  const quantumSnippets = [
    'quantum.deploy()',
    'neural.activate()',
    'ai.train()',
    'quantum.compute()',
    'hologram.render()',
    'quantum.entangle()'
  ]

  return (
    <section className="min-h-screen relative overflow-hidden py-16 md:py-20">
      {/* Vanta.js Background with Yellow/Amber Theme */}
      <div ref={vantaRef} className="absolute inset-0 z-0" />

      {/* Quantum Energy Field - Matching Footer */}
      <div className="absolute inset-0 z-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-100 rounded-full"
            animate={{
              y: [0, -120, 0],
              x: [0, Math.cos(i) * 60, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Holographic Grid - Matching Footer */}
      <div className="absolute inset-0 opacity-[0.02] z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-white"/>
        </svg>
      </div>

      {/* Dynamic Mouse Tracker */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-yellow-500/5 to-amber-500/5 blur-3xl pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Quantum Code Rain */}
      <div className="absolute inset-0 opacity-[0.08] z-0 font-mono text-xs">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-100, windowHeight + 100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute text-yellow-300 whitespace-pre"
            style={{
              left: `${Math.random() * 100}%`,
              top: -100,
            }}
          >
            {quantumSnippets[Math.floor(Math.random() * quantumSnippets.length)]}
          </motion.div>
        ))}
      </div>

      {/* Quantum Orbital Elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity }
        }}
        className="absolute top-24 left-10 w-20 h-20 border-2 border-yellow-500/40 rounded-lg hidden md:block z-0"
      >
        <Satellite className="w-8 h-8 text-yellow-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      <motion.div
        animate={{
          rotate: -360,
          y: [0, -40, 0],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 8, repeat: Infinity }
        }}
        className="absolute top-32 right-20 w-16 h-16 bg-transparent rounded-lg rotate-45  hidden lg:block z-0"
      >
        <Network className="w-6 h-6 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45" />
      </motion.div>

      {/* Quantum Core Pulsar */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="w-40 h-40 border-2 border-yellow-600/50 rounded-2xl rotate-45"
        />
        <motion.div
          animate={{ scale: [1, 2, 1], opacity: [0.1, 0.05, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="w-40 h-40 border-2 border-amber-600/30 rounded-2xl rotate-45 absolute inset-0"
        />
      </div>

      {/* Binary Quantum Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 60 - 30, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
          className="absolute w-2 h-2 bg-transparent rounded-sm  sm:block z-0 font-mono text-xs flex items-center justify-center text-yellow-100 font-bold"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {Math.random() > 0.5 ? '1' : '0'}
        </motion.div>
      ))}

      {/* Main Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen py-4 md:py-12" style={{ marginTop: '-64px' }}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center"
          >
            {/* Quantum Access Badge */}
            <motion.div
              whileHover={{ scale: 1.02, y: -1 }}
              className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-2xl bg-black/40 backdrop-blur-sm border border-yellow-500/30 shadow-xl"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Rocket className="w-5 h-5 text-yellow-300" />
              </motion.div>
              <span className="text-yellow-100 font-mono font-semibold text-sm tracking-wide">QUANTUM ACCESS ACTIVATED</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-yellow-400 rounded-full"
              />
            </motion.div>

            {/* Main Heading with Quantum Theme */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight font-mono"
            >
              <span className="bg-gradient-to-r from-orange-500  to-orange-100 bg-clip-text text-transparent leading-tight block">
                ZEPTAHACKER
              </span>
              <motion.span
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="bg-gradient-to-r from-yellow-100 via-amber-600 to-yellow-300 bg-clip-text text-transparent bg-[length:200%_100%] block text-2xl sm:text-3xl md:text-4xl mt-4"
              >
                QUANTUM COMPUTE PLATFORM
              </motion.span>
            </motion.h1>

            {/* Quantum Description Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="bg-black/40 backdrop-blur-sm border border-yellow-500/30 p-6 md:p-8 rounded-3xl mb-8 shadow-2xl max-w-4xl mx-auto relative overflow-hidden"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-10 bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-yellow-500/10 rounded-full"
              />
              
              <div className="relative z-10">
                {/* Terminal Header */}
                <div className="flex gap-2 mb-4 pb-3 border-b border-yellow-500/20">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-auto text-xs text-yellow-400 font-mono">~/quantum/mainframe</span>
                </div>
                
                <p className="text-base sm:text-lg md:text-xl text-yellow-50 leading-relaxed font-mono">
                  <span className="text-yellow-200">quantum</span>{' '}
                  <span className="text-amber-100">mainframe</span> {'=>'} {'{'}
                  <br />
                  <span className="text-yellow-100 ml-4">architecture</span>: <span className="text-amber-200">&apos;neural-net&apos;</span>,
                  <br />
                  <span className="text-yellow-100 ml-4">processing</span>: <span className="text-amber-200">&apos;quantum-parallel&apos;</span>,
                  <br />
                  <span className="text-yellow-100 ml-4">ai_core</span>: <span className="text-amber-200">&apos;consciousness.v2&apos;</span>
                  <br />
                  {'}'};
                </p>
              </div>
            </motion.div>

            {/* Quantum Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto"
            >
              {quantumStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-black/40 backdrop-blur-sm border border-yellow-500/20 p-4 rounded-2xl text-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-amber-400/5"></div>
                  <stat.icon className="w-6 h-6 text-yellow-400 mx-auto mb-2 relative z-10" />
                  <div className="text-2xl font-bold text-yellow-300 font-mono relative z-10">{stat.value}</div>
                  <div className="text-sm text-yellow-200 font-mono relative z-10">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Quantum Activation Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="flex justify-center mb-8"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  background: "linear-gradient(45deg, #f59e0b, #d97706)",
                  boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg relative overflow-hidden group shadow-xl border-2 border-yellow-400/50 font-mono"
              >
                <motion.span
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12"
                />
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  <Brain className="w-5 h-5" />
                  INITIATE QUANTUM DEPLOYMENT
                </span>
              </motion.button>
            </motion.div>

            {/* Neural Interface Hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="flex items-center justify-center gap-3 text-yellow-200 bg-black/20 backdrop-blur-sm border border-yellow-500/30 px-4 py-3 rounded-2xl text-sm max-w-md mx-auto font-mono"
            >
              <MousePointer2 className="w-4 h-4 animate-bounce text-yellow-400" />
              <span>NEURAL INTERFACE ACTIVE • READY FOR INPUT</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Quantum Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="bg-black/40 backdrop-blur-sm border border-yellow-500/30 w-10 h-16 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="w-2 h-2 bg-yellow-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}