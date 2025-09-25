
// // ===== Features.tsx - Updated colors to match Hero =====
// 'use client'

// import { motion } from 'framer-motion'
// import { useInView } from 'framer-motion'
// import { useRef } from 'react'
// import { Code2, GitBranch, Clock, Zap, Brain, Shield, LucideIcon } from 'lucide-react'

// interface Feature {
//   icon: LucideIcon;
//   title: string;
//   description: string;
//   color: string;
// }

// const features: Feature[] = [
//   {
//     icon: GitBranch,
//     title: 'Advanced Versioning',
//     description: 'Seamless branching and merging with intelligent conflict resolution',
//     color: 'from-metallic-gold to-neon-orange',
//   },
//   {
//     icon: Clock,
//     title: 'Smart Checkpoints',
//     description: 'Automatic save points with one-click restoration capabilities',
//     color: 'from-neon-orange to-metallic-bronze',
//   },
//   {
//     icon: Zap,
//     title: 'Instant Restores',
//     description: 'Rollback to any previous state in milliseconds',
//     color: 'from-metallic-bronze to-neon-amber',
//   },
//   {
//     icon: Code2,
//     title: 'API Integrations',
//     description: 'Comprehensive REST API with SDKs for all major languages',
//     color: 'from-neon-amber to-metallic-gold',
//   },
//   {
//     icon: Brain,
//     title: 'AI Workflows',
//     description: 'Machine learning-powered optimization and automation',
//     color: 'from-metallic-gold to-neon-orange',
//   },
//   {
//     icon: Shield,
//     title: 'Enterprise Security',
//     description: 'Military-grade encryption and compliance certifications',
//     color: 'from-neon-orange to-metallic-bronze',
//   },
// ]

// export default function Features() {
//   return (
//     <section id="features" className="py-20 px-4 relative">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-6xl font-bold mb-4">
//               <span className="bg-gradient-to-r from-metallic-gold to-neon-orange bg-clip-text text-transparent">
//                 Powerful Features.
//               </span>
//             </h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Everything developers need to build, deploy, and scale applications with confidence
//             </p>
//           </div>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <FeatureCard key={feature.title} feature={feature} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
//   const ref = useRef<HTMLDivElement>(null)
//   const isInView = useInView(ref, { once: true, margin: '-100px' })

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       whileHover={{ scale: 1.05, y: -10 }}
//     >
//       <div className="glassmorphic neon-border p-8 group cursor-pointer relative overflow-hidden">
//         <div
//   className={`absolute inset-0 bg-transparent group-hover:bg-transparent transition-all duration-300`}
// ></div>

        
//         <div className="relative z-10">
//            <div className="inline-flex p-3 rounded-lg bg-transparent mb-4">
//                 <feature.icon className={`w-6 h-6 ${feature.color}`} />
//             </div>
          
//           <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
//           <p className="text-gray-300 leading-relaxed">{feature.description}</p>
          
//           <div className="mt-6 h-32 bg-gray-800/50 rounded-lg flex items-center justify-center">
//             <span className="text-gray-400 text-sm">
//               Animation placeholder - Add Lottie/GIF
//             </span>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }



// ===== Features.tsx - Enhanced version with image optimization =====
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Code2, GitBranch, Clock, Zap, Brain, Shield, LucideIcon } from 'lucide-react'
import Image from 'next/image'

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
    color: 'from-metallic-gold to-neon-orange',
    image: '/26510.jpg',
  },
  {
    icon: Clock,
    title: 'Smart Checkpoints',
    description: 'Automatic save points with one-click restoration capabilities',
    color: 'from-neon-orange to-metallic-bronze',
    image: '/3487595.jpg',
  },
  {
    icon: Zap,
    title: 'Instant Restores',
    description: 'Rollback to any previous state in milliseconds',
    color: 'from-metallic-bronze to-neon-amber',
    image: '/4609490.jpg',
  },
  {
    icon: Code2,
    title: 'API Integrations',
    description: 'Comprehensive REST API with SDKs for all major languages',
    color: 'from-neon-amber to-metallic-gold',
    image: '/9059721.jpg',
  },
  {
    icon: Brain,
    title: 'AI Workflows',
    description: 'Machine learning-powered optimization and automation',
    color: 'from-metallic-gold to-neon-orange',
    image: '/cbbb8400-6edf-4f1f-a093-a75de0b5a684.jpg',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Military-grade encryption and compliance certifications',
    color: 'from-neon-orange to-metallic-bronze',
    image: '/26510.jpg',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-metallic-gold to-neon-orange bg-clip-text text-transparent">
                Powerful Features.
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything developers need to build, deploy, and scale applications with confidence
            </p>
          </div>
        </motion.div>'use client'

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
    color: 'from-metallic-gold to-neon-orange',
    image: '/26510.jpg',
  },
  {
    icon: Clock,
    title: 'Smart Checkpoints',
    description: 'Automatic save points with one-click restoration capabilities',
    color: 'from-neon-orange to-metallic-bronze',
    image: '/3487595.jpg',
  },
  {
    icon: Zap,
    title: 'Instant Restores',
    description: 'Rollback to any previous state in milliseconds',
    color: 'from-metallic-bronze to-neon-amber',
    image: '/4609490.jpg',
  },
  {
    icon: Code2,
    title: 'API Integrations',
    description: 'Comprehensive REST API with SDKs for all major languages',
    color: 'from-neon-amber to-metallic-gold',
    image: '/9059721.jpg',
  },
  {
    icon: Brain,
    title: 'AI Workflows',
    description: 'Machine learning-powered optimization and automation',
    color: 'from-metallic-gold to-neon-orange',
    image: '/cbbb8400-6edf-4f1f-a093-a75de0b5a684.jpg',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Military-grade encryption and compliance certifications',
    color: 'from-neon-orange to-metallic-bronze',
    image: '/26510.jpg',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-metallic-gold to-neon-orange bg-clip-text text-transparent">
                Powerful Features.
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything developers need to build, deploy, and scale applications with confidence
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
    >
      <div className="glassmorphic neon-border p-8 group cursor-pointer relative overflow-hidden h-full">
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex-1">
            <div className="inline-flex p-3 rounded-lg bg-transparent mb-4">
              <feature.icon className={`w-6 h-6 text-transparent bg-gradient-to-r ${feature.color} bg-clip-text`} />
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
            <p className="text-gray-300 leading-relaxed">{feature.description}</p>
          </div>
          
          {/* Fixed HUD Image Container */}
          <div className="mt-6 h-32 bg-gray-800/50 rounded-lg overflow-hidden relative">
            {/* Loading State */}
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-metallic-gold border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            {/* Error State */}
            {imageError && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-400 text-sm text-center px-4">
                  HUD Preview<br/>
                  <span className="text-xs">Image not available</span>
                </span>
              </div>
            )}
            
            {/* Image */}
            <img 
              src={feature.image} 
              alt={feature.title}
              className={`w-full h-full object-cover transition-all duration-500 ${
                imageLoaded ? 'opacity-100 scale-100 group-hover:scale-110' : 'opacity-0 scale-105'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                setImageError(true)
                setImageLoaded(false)
              }}
            />
            
            {/* Overlay Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300" />
            
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-metallic-gold to-neon-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            
            {/* HUD Corner Elements */}
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-metallic-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-neon-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
        }
