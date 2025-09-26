// ===== Ultra-Futuristic Footer =====
'use client'

import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail, Cpu, Network, Brain } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-yellow-500/20 bg-gradient-to-b from-black/50 to-black/80">
      {/* Quantum Energy Field */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
            animate={{
              y: [0, -150, 0],
              x: [0, Math.cos(i) * 80, 0],
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

      {/* Holographic Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-yellow-500"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content with Holographic Cards */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info with Neural Network Animation */}
          <motion.div 
            className="lg:col-span-2"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-black/40 backdrop-blur-2xl border border-yellow-500/30 rounded-3xl p-8 relative overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-10 bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-yellow-500/10 rounded-full"
              />
              <h3 className="text-3xl font-bold mb-4 relative z-10">
                <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                  ZEPTAHACKER QUANTUM
                </span>
              </h3>
              <p className="text-yellow-100 mb-6 max-w-md relative z-10 leading-relaxed">
                Pioneering the next evolution in quantum computing and neural network infrastructure. 
                Building tomorrow `&apos; s technology today.
              </p>
              
              {/* Social Links with Holographic Effect */}
              <div className="flex gap-4 relative z-10">
                {[
                  { icon: Github, href: "https://github.com/JaimeCabary", label: "GitHub" },
                  { icon: Twitter, href: "https://x.com/JaimeCabary", label: "Twitter" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Mail, href: "shazzyazuwike@gmail.com", label: "Email" }
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="group relative"
                  >
                    <div className="bg-gradient-to-br from-yellow-300/20 to-amber-500/20 p-3 rounded-2xl border border-yellow-500/30 backdrop-blur-2xl group-hover:border-white group-hover:bg-white/10">
                      <Icon className="w-6 h-6 text-amber-200 group-hover:text-white transition-colors" />
                    </div>
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-yellow-400 bg-black/80 px-2 py-1 rounded-md whitespace-nowrap"
                    >
                      {label}
                    </motion.span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-black/40 backdrop-blur-2xl border border-yellow-500/30 rounded-3xl p-6 h-full">
              <h4 className="font-bold text-yellow-300 mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5" />
                QUANTUM PRODUCTS
              </h4>
              <ul className="space-y-3">
                {['Neural Compute', 'Quantum DB', 'AI Orchestration', 'Quantum API', 'Holographic UI'].map((item) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: '#06b6d4' }}
                      className="text-yellow-100 hover:text-yellow-400 transition-colors font-mono text-sm block py-1"
                    >
                      &gt; {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-black/40 backdrop-blur-2xl border border-yellow-500/30 rounded-3xl p-6 h-full">
              <h4 className="font-bold text-yellow-300 mb-4 flex items-center gap-2">
                <Network className="w-5 h-5" />
                QUANTUM NETWORK
              </h4>
              <ul className="space-y-3">
                {['Quantum Labs', 'Research', 'Careers', 'Security', 'Contact'].map((item) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: '#8b5cf6' }}
                      className="text-yellow-100 hover:text-amber-400 transition-colors font-mono text-sm block py-1"
                    >
                      &gt; {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section with Animated Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-8 border-t border-yellow-500/20 flex flex-col lg:flex-row justify-between items-center"
        >
          {/* System Status */}
          <div className="flex items-center gap-4 mb-4 lg:mb-0">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-gradient-to-r from-o-400 to-yellow-400 rounded-full"
            />
            <span className="text-yellow-300 font-mono text-sm">SYSTEM STATUS: ONLINE</span>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-xs text-yellow-400/80 font-mono"
            >
              QUANTUM CORE ACTIVE
            </motion.div>
          </div>

          {/* Copyright with Holographic Effect */}
          <div className="text-center lg:text-right">
            <p className="text-yellow-200/80 text-sm font-mono mb-2">
              © {currentYear} ZEPTAHACKER QUANTUM • ALL SYSTEMS OPERATIONAL
            </p>
            <div className="flex gap-6 justify-center lg:justify-end">
              {['Quantum Policy', 'Neural Terms', 'AI Ethics'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ scale: 1.05, color: '#06b6d4' }}
                  className="text-yellow-300/70 hover:text-white text-xs font-mono transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Floating AI Assistant */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-4 right-4"
        >
          <div className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-2xl border border-yellow-500/30 rounded-2xl p-3">
            <Brain className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </footer>
  )
}