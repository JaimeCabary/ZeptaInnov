// components/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import { MousePointer2, Zap, Orbit } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState<any>(null)
  const vantaRef = useRef<HTMLDivElement>(null)

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
          color: 0xff5500, // Orange color
          backgroundColor: 0x0a0a0a,
          points: 15.0, // Increased points
          maxDistance: 25.0,
          spacing: 16.0,
        })
        setVantaEffect(effect)
      })
    }

    return () => {
      effect?.destroy?.()
    }
  }, [vantaEffect])

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Vanta.js Background */}
      <div ref={vantaRef} className="absolute inset-0" />

      {/* Animated Metallic Background */}
      <div className="absolute inset-0 bg-metallic-orange-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-orange/15 via-transparent to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,165,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,165,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-move"></div>
      </div>

      {/* Floating Animated Elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity }
        }}
        className="absolute top-20 left-20 w-20 h-20 border-2 border-neon-orange/30 rounded-full"
      >
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-neon-orange rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>

      <motion.div
        animate={{
          rotate: -360,
          y: [0, -30, 0],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity }
        }}
        className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-metallic-gold to-metallic-bronze rounded-lg rotate-45"
      ></motion.div>

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-32 left-1/4 w-8 h-8 bg-neon-amber rounded-full glassmorphic"
      ></motion.div>

      {/* Pulsing Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-20 h-20 border-2 border-neon-orange rounded-full"
        ></motion.div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Glassmorphic Badge */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-2xl glassmorphic border border-orange-500/20 shadow-lg"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Orbit className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-white font-semibold text-sm">Next-Gen Developer Platform</span>
            <Zap className="w-4 h-4 text-metallic-gold animate-pulse" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-metallic-gold via-neon-orange to-metallic-bronze bg-clip-text text-transparent">
              Zepthacker
            </span>
            <br />
            <motion.span
              animate={{ textShadow: [
                "0 0 0px #ffffff",
                "0 0 10px #ffffff",
                "0 0 0px #ffffff"
              ] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white"
            >
              Innov
            </motion.span>
          </motion.h1>

          {/* Glassmorphic Description Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="glassmorphic border border-orange-500/20 p-8 rounded-3xl mb-8 shadow-2xl"
          >
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Developer-first SaaS platform with advanced{' '}
              <span className="text-metallic-gold font-semibold">versioning</span>,{' '}
              <span className="text-neon-amber font-semibold">checkpoints</span>, and{' '}
              <span className="text-metallic-bronze font-semibold">AI workflows</span>. Build, deploy, and iterate faster
              than ever before.
            </p>
          </motion.div>

          {/* Animated CTA Button */}
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              background: "linear-gradient(45deg, #ff8c00, #ff5500)"
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-metallic-gold to-neon-orange text-black font-bold px-10 py-5 rounded-2xl text-lg relative overflow-hidden group shadow-lg"
          >
            <motion.span
              animate={{ x: [-100, 100] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12"
            />
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Start Building Free
            </span>
          </motion.button>

          {/* Interactive Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex items-center justify-center gap-4 text-gray-300 glassmorphic border border-orange-500/20 px-6 py-3 rounded-full"
          >
            <MousePointer2 className="w-5 h-5 animate-bounce text-neon-orange" />
            <span>Move your cursor to interact with the neural network</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="glassmorphic border border-orange-500/20 w-8 h-14 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-neon-orange rounded-full"
          ></motion.div>
        </div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="absolute w-1 h-1 bg-neon-orange rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </section>
  )
}

// 'use client'

// import { motion } from 'framer-motion'
// import { MousePointer2, Zap, Orbit, Cpu, Sparkles, Brain } from 'lucide-react'
// import { useEffect, useRef, useState } from 'react'

// export default function Hero() {
//   const [vantaEffect, setVantaEffect] = useState<any>(null)
//   const vantaRef = useRef<HTMLDivElement>(null)
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//     }
//     window.addEventListener('mousemove', handleMouseMove)
//     return () => window.removeEventListener('mousemove', handleMouseMove)
//   }, [])

//   useEffect(() => {
//     let effect: any

//     if (!vantaEffect && vantaRef.current) {
//       import('vanta/dist/vanta.net.min').then((VANTA) => {
//         effect = VANTA.default({
//           el: vantaRef.current,
//           mouseControls: true,
//           touchControls: true,
//           gyroControls: false,
//           minHeight: 200.0,
//           minWidth: 200.0,
//           scale: 1.0,
//           scaleMobile: 1.0,
//           color: 0xff5500,
//           backgroundColor: 0x0a0a0a,
//           points: 20.0,
//           maxDistance: 30.0,
//           spacing: 18.0,
//         })
//         setVantaEffect(effect)
//       })
//     }

//     return () => {
//       effect?.destroy?.()
//     }
//   }, [vantaEffect])

//   // Memometric data points
//   const memometricStats = [
//     { value: '4.2x', label: 'Faster Iteration', icon: Zap },
//     { value: '99.9%', label: 'Uptime', icon: Cpu },
//     { value: '∞', label: 'Scalability', icon: Orbit },
//   ]

//   return (
//     <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
//       {/* Enhanced Vanta.js Background - Fixed positioning */}
//       <div ref={vantaRef} className="absolute inset-0 z-0" />

//       {/* Dynamic Mouse Tracker - Fixed to not affect layout */}
//       <motion.div
//         className="fixed w-96 h-96 rounded-full bg-gradient-to-r from-orange-500/5 to-amber-500/5 blur-3xl pointer-events-none z-0"
//         animate={{
//           x: mousePosition.x - 192,
//           y: mousePosition.y - 192,
//         }}
//         transition={{ type: "spring", damping: 30, stiffness: 200 }}
//       />

//       {/* Metallic Grid Pattern with Depth */}
//       <div className="absolute inset-0 opacity-[0.15] z-0">
//         <div 
//           className="absolute inset-0 bg-[linear-gradient(rgba(184,115,51,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(184,115,51,0.3)_1px,transparent_1px)] bg-[size:60px_60px]"
//           style={{
//             transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
//           }}
//         />
//       </div>

//       {/* Huddih-inspired Geometric Elements */}
//       <motion.div
//         animate={{
//           rotate: 360,
//           scale: [1, 1.1, 1],
//         }}
//         transition={{
//           rotate: { duration: 25, repeat: Infinity, ease: "linear" },
//           scale: { duration: 6, repeat: Infinity }
//         }}
//         className="fixed top-10 left-10 w-24 h-24 border-2 border-amber-600/40 rounded-full neon-border hidden md:block z-0"
//       >
//         <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full -translate-x-1/2 -translate-y-1/2" />
//       </motion.div>

//       <motion.div
//         animate={{
//           rotate: -360,
//           y: [0, -40, 0],
//         }}
//         transition={{
//           rotate: { duration: 20, repeat: Infinity, ease: "linear" },
//           y: { duration: 8, repeat: Infinity }
//         }}
//         className="fixed top-32 right-20 w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-800 rounded-2xl rotate-45 neon-border hidden lg:block z-0"
//       />

//       {/* Memometric Floating Elements */}
//       <motion.div
//         animate={{
//           x: [0, 50, 0],
//           y: [0, -30, 0],
//           rotate: [0, 180, 360],
//         }}
//         transition={{
//           duration: 12,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//         className="fixed bottom-40 left-1/4 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-700 rounded-lg glassmorphic border border-amber-500/30 hidden md:block z-0"
//       >
//         <Brain className="w-6 h-6 text-white m-3" />
//       </motion.div>

//       {/* Pulsing Core Element */}
//       <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
//         <motion.div
//           animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
//           transition={{ duration: 6, repeat: Infinity }}
//           className="w-32 h-32 border-2 border-amber-600/50 rounded-full neon-border"
//         />
//       </div>

//       {/* Optimized Floating Particles */}
//       {[...Array(15)].map((_, i) => (
//         <motion.div
//           key={i}
//           animate={{
//             y: [0, -120, 0],
//             x: [0, Math.random() * 80 - 40, 0],
//             opacity: [0, 0.8, 0],
//             scale: [0, 1, 0],
//           }}
//           transition={{
//             duration: Math.random() * 8 + 6,
//             repeat: Infinity,
//             delay: Math.random() * 3,
//           }}
//           className="fixed w-1.5 h-1.5 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full hidden sm:block z-0"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//           }}
//         />
//       ))}

//       {/* Content Container - Properly Centered */}
//       <div className="relative z-10 w-full text-center px-4 sm:px-6 lg:px-8 flex justify-center">
//         <div className="max-w-7xl w-full">
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2 }}
//             className="flex flex-col items-center justify-center"
//           >
//             {/* Enhanced Glassmorphic Badge */}
//             <motion.div
//               whileHover={{ scale: 1.02, y: -1 }}
//               className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-2xl glassmorphic border border-amber-500/30 shadow-xl"
//             >
//               <motion.div
//                 animate={{ rotate: [0, 360] }}
//                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//               >
//                 <Sparkles className="w-5 h-5 text-amber-300" />
//               </motion.div>
//               <span className="text-amber-100 font-semibold text-sm tracking-wide">NEXT-GEN DEVELOPER ECOSYSTEM</span>
//               <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
//             </motion.div>

//             {/* Main Heading with Improved Typography */}
//             <motion.h1
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1.2, delay: 0.3 }}
//               className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
//             >
//               <span className="bg-gradient-to-r from-amber-300 via-orange-500 to-amber-600 bg-clip-text text-transparent leading-tight">
//                 Zepthacker
//               </span>
//               <br />
//               <motion.span
//                 animate={{ 
//                   backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
//                 }}
//                 transition={{ duration: 4, repeat: Infinity }}
//                 className="bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent bg-size-200"
//               >
//                 Innovation
//               </motion.span>
//             </motion.h1>

//             {/* Enhanced Description Card */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.2, delay: 0.6 }}
//               className="glassmorphic border border-amber-500/30 p-6 md:p-8 rounded-3xl mb-8 shadow-2xl max-w-5xl w-full"
//             >
//               <p className="text-lg sm:text-xl md:text-2xl text-amber-50 leading-relaxed font-medium">
//                 Developer-first platform with{' '}
//                 <span className="text-amber-300 font-bold">quantum versioning</span>,{' '}
//                 <span className="text-orange-400 font-bold">neural checkpoints</span>, and{' '}
//                 <span className="text-amber-400 font-bold">AI-powered workflows</span>. 
//                 Build, deploy, and scale with unprecedented speed.
//               </p>
//             </motion.div>

//             {/* Memometric Stats Grid */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.8 }}
//               className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl w-full"
//             >
//               {memometricStats.map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
//                   whileHover={{ scale: 1.05, y: -2 }}
//                   className="glassmorphic border border-amber-500/20 p-4 rounded-2xl text-center"
//                 >
//                   <stat.icon className="w-6 h-6 text-amber-400 mx-auto mb-2" />
//                   <div className="text-2xl font-bold text-amber-300">{stat.value}</div>
//                   <div className="text-sm text-amber-200">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* Enhanced CTA Button */}
//             <motion.button
//               whileHover={{ 
//                 scale: 1.02,
//                 background: "linear-gradient(45deg, #f59e0b, #ea580c)",
//                 boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)"
//               }}
//               whileTap={{ scale: 0.98 }}
//               className="bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg relative overflow-hidden group shadow-xl border-2 border-amber-400/50"
//             >
//               <motion.span
//                 animate={{ x: [-100, 100] }}
//                 transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop" }}
//                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12"
//               />
//               <span className="relative z-10 flex items-center gap-2 justify-center">
//                 <Zap className="w-5 h-5" />
//                 Start Building Free
//               </span>
//             </motion.button>

//             {/* Interactive Hint */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1.5, duration: 1 }}
//               className="mt-8 flex items-center justify-center gap-3 text-amber-200 glassmorphic border border-amber-500/30 px-4 py-2 rounded-full text-sm max-w-md"
//             >
//               <MousePointer2 className="w-4 h-4 animate-bounce text-amber-400" />
//               <span>Move cursor to interact with the neural network</span>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Enhanced Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2.5, duration: 1 }}
//         className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-10"
//       >
//         <div className="glassmorphic border border-amber-500/30 w-10 h-16 rounded-full flex justify-center p-2">
//           <motion.div
//             animate={{ y: [0, 24, 0] }}
//             transition={{ duration: 2.5, repeat: Infinity }}
//             className="w-2 h-2 bg-amber-400 rounded-full"
//           />
//         </div>
//       </motion.div>
//     </section>
//   )
// }