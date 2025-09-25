'use client'

import { motion } from 'framer-motion'
import { MousePointer2, Zap, Orbit, Cpu, Sparkles, Brain } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState<any>(null)
  const vantaRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
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
          color: 0xff5500,
          backgroundColor: 0x0a0a0a,
          points: isMobile ? 12.0 : 20.0, // Reduce points on mobile
          maxDistance: isMobile ? 20.0 : 30.0, // Adjust for mobile
          spacing: isMobile ? 15.0 : 18.0,
        })
        setVantaEffect(effect)
      })
    }

    return () => {
      effect?.destroy?.()
    }
  }, [vantaEffect, isMobile])

  // Memometric data points
  const memometricStats = [
    { value: '4.2x', label: 'Faster Iteration', icon: Zap },
    { value: '99.9%', label: 'Uptime', icon: Cpu },
    { value: '∞', label: 'Scalability', icon: Orbit },
  ]

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Enhanced Vanta.js Background */}
      <div ref={vantaRef} className="absolute inset-0 z-0" />

      {/* Dynamic Mouse Tracker - Only on desktop */}
      {!isMobile && (
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-orange-500/5 to-amber-500/5 blur-3xl pointer-events-none z-0"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
      )}

      {/* Metallic Grid Pattern with Depth */}
      <div className="absolute inset-0 opacity-[0.15] z-0">
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(184,115,51,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(184,115,51,0.3)_1px,transparent_1px)] bg-[size:60px_60px]"
          style={{
            transform: isMobile ? 'none' : `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
      </div>

      {/* Huddih-inspired Geometric Elements - Hide on mobile */}
      {!isMobile && (
        <>
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 6, repeat: Infinity }
            }}
            className="absolute top-10 left-10 w-24 h-24 border-2 border-amber-600/40 rounded-full neon-border hidden md:block z-0"
          >
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full -translate-x-1/2 -translate-y-1/2" />
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
            className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-800 rounded-2xl rotate-45 neon-border hidden lg:block z-0"
          />

          {/* Memometric Floating Elements */}
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-40 left-1/4 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-700 rounded-lg glassmorphic border border-amber-500/30 hidden md:block z-0"
          >
            <Brain className="w-6 h-6 text-white m-3" />
          </motion.div>
        </>
      )}

      {/* Pulsing Core Element */}
      {!isMobile && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="w-32 h-32 border-2 border-amber-600/50 rounded-full neon-border"
          />
        </div>
      )}

      {/* Optimized Floating Particles - Reduce on mobile */}
      {[...Array(isMobile ? 8 : 15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -120, 0],
            x: [0, Math.random() * 80 - 40, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
          className="absolute w-1.5 h-1.5 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full hidden sm:block z-0"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Main Content Container - Perfect Centering */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center flex flex-col items-center justify-center"
        >
          {/* Enhanced Glassmorphic Badge */}
          <motion.div
            whileHover={{ scale: isMobile ? 1 : 1.02, y: isMobile ? 0 : -1 }}
            className="inline-flex items-center gap-3 mb-6 px-4 py-2 sm:px-6 sm:py-3 rounded-2xl glassmorphic border border-amber-500/30 shadow-xl max-w-xs sm:max-w-none mx-auto"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
            </motion.div>
            <span className="text-amber-100 font-semibold text-xs sm:text-sm tracking-wide whitespace-nowrap">
              NEXT-GEN DEVELOPER ECOSYSTEM
            </span>
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 animate-pulse" />
          </motion.div>

          {/* Main Heading with Improved Typography */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 tracking-tight leading-tight"
          >
            <span className="bg-gradient-to-r from-amber-300 via-orange-500 to-amber-600 bg-clip-text text-transparent block">
              Zepthacker
            </span>
            <motion.span
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent bg-size-200 block mt-2 sm:mt-4"
            >
              Innovation
            </motion.span>
          </motion.h1>

          {/* Enhanced Description Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="glassmorphic border border-amber-500/30 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 shadow-2xl w-full max-w-4xl mx-auto"
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-amber-50 leading-relaxed font-medium">
              Developer-first platform with{' '}
              <span className="text-amber-300 font-bold">quantum versioning</span>,{' '}
              <span className="text-orange-400 font-bold">neural checkpoints</span>, and{' '}
              <span className="text-amber-400 font-bold">AI-powered workflows</span>. 
              Build, deploy, and scale with unprecedented speed.
            </p>
          </motion.div>

          {/* Memometric Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 w-full max-w-md sm:max-w-2xl mx-auto"
          >
            {memometricStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: isMobile ? 1 : 1.05, y: isMobile ? 0 : -2 }}
                className="glassmorphic border border-amber-500/20 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center"
              >
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 mx-auto mb-1 sm:mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-amber-300">{stat.value}</div>
                <div className="text-xs sm:text-sm text-amber-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="flex justify-center mb-6 sm:mb-8 w-full"
          >
            <motion.button
              whileHover={{ 
                scale: isMobile ? 1 : 1.02,
                background: "linear-gradient(45deg, #f59e0b, #ea580c)",
                boxShadow: isMobile ? "none" : "0 20px 40px rgba(245, 158, 11, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg relative overflow-hidden group shadow-xl border-2 border-amber-400/50 w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              <motion.span
                animate={{ x: [-100, 100] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12"
              />
              <span className="relative z-10 flex items-center gap-2 justify-center">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                Start Building Free
              </span>
            </motion.button>
          </motion.div>

          {/* Interactive Hint - Hide on mobile */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="flex items-center justify-center gap-3 text-amber-200 glassmorphic border border-amber-500/30 px-4 py-2 rounded-full text-sm max-w-md mx-auto"
            >
              <MousePointer2 className="w-4 h-4 animate-bounce text-amber-400" />
              <span>Move cursor to interact with the neural network</span>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="glassmorphic border border-amber-500/30 w-8 h-14 sm:w-10 sm:h-16 rounded-full flex justify-center p-1 sm:p-2">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
            }
