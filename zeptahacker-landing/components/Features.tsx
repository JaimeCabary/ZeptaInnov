// ===== Features.tsx - Smooth Animations Version =====
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Code2, GitBranch, Clock, Zap, Brain, Shield, LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  image: string;
}

const features: Feature[] = [
  {
    icon: GitBranch,
    title: 'Advanced Versioning',
    description: 'Seamless branching and merging with intelligent conflict resolution',
    color: 'from-yellow-400 to-orange-500',
    image: '/26510.jpg',
  },
  {
    icon: Clock,
    title: 'Smart Checkpoints',
    description: 'Automatic save points with one-click restoration capabilities',
    color: 'from-orange-500 to-amber-600',
    image: '/3487595.jpg',
  },
  {
    icon: Zap,
    title: 'Instant Restores',
    description: 'Rollback to any previous state in milliseconds',
    color: 'from-amber-600 to-yellow-500',
    image: '/4609490.jpg',
  },
  {
    icon: Code2,
    title: 'API Integrations',
    description: 'Comprehensive REST API with SDKs for all major languages',
    color: 'from-yellow-500 to-orange-500',
    image: '/9059721.jpg',
  },
  {
    icon: Brain,
    title: 'AI Workflows',
    description: 'Machine learning-powered optimization and automation',
    color: 'from-orange-500 to-amber-500',
    image: '/cbbb8400-6edf-4f1f-a093-a75de0b5a684.jpg',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Military-grade encryption and compliance certifications',
    color: 'from-amber-500 to-yellow-500',
    image: '/26510.jpg',
  },
]

// Smooth animation variants
const cardVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    y: 80,
    rotateX: index % 3 === 0 ? -15 : index % 3 === 1 ? 15 : 0,
    rotateY: index % 2 === 0 ? -10 : 10,
    scale: 0.92,
    filter: "blur(8px)"
  }),
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      mass: 1,
      damping: 25,
      stiffness: 120,
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    rotateX: -2,
    rotateY: 2,
    transition: {
      type: "spring",
      mass: 0.8,
      damping: 15,
      stiffness: 300,
      duration: 0.3
    }
  }
}

const flipVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    rotateY: index % 2 === 0 ? -60 : 60,
    y: 60,
    scale: 0.88,
    filter: "blur(6px)"
  }),
  visible: {
    opacity: 1,
    rotateY: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      mass: 1.2,
      damping: 30,
      stiffness: 100,
      duration: 1.4,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

const slideVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? -80 : 80,
    y: index % 3 === 0 ? -40 : index % 3 === 1 ? 40 : 0,
    rotateZ: index % 4 === 0 ? -8 : index % 4 === 1 ? 8 : index % 4 === 2 ? -5 : 5,
    scale: 0.94,
    filter: "blur(4px)"
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotateZ: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      mass: 1,
      damping: 28,
      stiffness: 110,
      duration: 1.1,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

const floatVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.9,
    filter: "blur(10px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      mass: 1,
      damping: 22,
      stiffness: 100,
      duration: 1.3,
      ease: [0.34, 1.56, 0.64, 1]
    }
  },
  hover: {
    y: -6,
    scale: 1.01,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 400,
      duration: 0.2
    }
  }
}

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="features" className="py-20 px-4 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            backgroundPosition: 'center center'
          }}
        />
        
        {/* HUD Background Image */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/huddy bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        
        {/* Animated Scan Lines */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/50 to-transparent" 
               style={{ 
                 height: '2px', 
                 top: '20%',
                 animation: 'scan 3s ease-in-out infinite'
               }} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/50 to-transparent" 
               style={{ 
                 height: '1px', 
                 top: '50%', 
                 animation: 'scan 3s ease-in-out infinite 1s'
               }} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-600/50 to-transparent" 
               style={{ 
                 height: '1px', 
                 top: '80%', 
                 animation: 'scan 3s ease-in-out infinite 2s'
               }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
              <span className="bg-gradient-to-r from-amber-500 to-orange-100 bg-clip-text text-transparent">
                &gt; Powerful_Features()
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-mono">
              <code>// deploy_with_confidence(&quot;build&quot;, &quot;scale&quot;, &quot;innovate&quot;)</code>
            </p>
          </div>
        </motion.div>

        <motion.div 
          ref={containerRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
              }
            }
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        @keyframes scan {
          0% { transform: translateY(-100px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100px); opacity: 0; }
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Better font rendering for animations */
        * {
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  )
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  // Choose animation variant based on index for variety
  const getAnimationVariant = (index: number) => {
    const variants = [cardVariants, flipVariants, slideVariants, floatVariants];
    return variants[index % variants.length];
  }

  const variant = getAnimationVariant(index)

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      variants={variant}
      className="group preserve-3d"
    >
      <div className="bg-black/90 border border-gray-800 p-6 cursor-pointer relative overflow-hidden h-full backdrop-blur-sm preserve-3d transform-gpu">
        {/* Corner Accents */}
        <motion.div 
          className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-yellow-400 opacity-60"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.div 
          className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-orange-500 opacity-60"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-amber-600 opacity-60"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-yellow-400 opacity-60"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
        
        {/* Hover Border Effect */}
        <motion.div 
          className="absolute inset-0 border border-transparent"
          whileHover={{ borderColor: "rgba(255, 193, 7, 0.3)" }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10 h-full flex flex-col preserve-3d">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <motion.div 
                className="inline-flex p-2 rounded-md bg-gradient-to-r from-black to-gray-900 mr-3 border border-gray-700"
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 2,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <feature.icon className={`w-5 h-5 bg-gradient-to-r ${feature.color} bg-clip-text text-white`} />
              </motion.div>
              <motion.h3 
                className="text-lg font-bold text-white font-mono tracking-wide"
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                {feature.title}
              </motion.h3>
            </div>
            
            <motion.p 
              className="text-gray-300 leading-relaxed text-sm font-mono"
              whileHover={{ x: 1 }}
              transition={{ type: "spring", stiffness: 600 }}
            >
              {feature.description}
            </motion.p>
          </div>
          
          <motion.div 
            className="mt-4 h-32 bg-gray-900/80 rounded border border-gray-700 overflow-hidden relative transform-gpu"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, duration: 0.2 }}
          >
            {!imageLoaded && !imageError && (
              <motion.div 
                className="absolute inset-0 flex items-center justify-center bg-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div 
                  className="text-center"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="w-6 h-6 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                  <span className="text-gray-400 text-xs font-mono">LOADING_HUD...</span>
                </motion.div>
              </motion.div>
            )}
            
            {imageError && (
              <motion.div 
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <motion.span 
                  className="text-gray-500 text-xs text-center px-4 font-mono"
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  [HUD_INTERFACE]<br/>
                  <span className="text-yellow-400">PREVIEW_ACTIVE</span>
                </motion.span>
              </motion.div>
            )}
            
            <motion.img 
              src={feature.image} 
              alt={feature.title}
              className={`w-full h-full object-cover transform-gpu ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              initial={{ scale: 1.05, opacity: 0 }}
              animate={imageLoaded ? { scale: 1, opacity: 1 } : {}}
              transition={{ 
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                setImageError(true)
                setImageLoaded(false)
              }}
            />
            
            {/* Data Grid Overlay */}
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}
            />
            
            {/* Status Indicator */}
            <motion.div 
              className="absolute top-2 right-2 flex items-center space-x-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div 
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-green-400 text-xs font-mono">ONLINE</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}