// ===== UseCases.tsx - Updated colors to match Hero =====
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Server, Cloud, Cpu, Database, LucideIcon } from 'lucide-react'

interface UseCase {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

const useCases: UseCase[] = [
  {
    icon: Server,
    title: 'Multi-Environment Deployments',
    description: 'Deploy across dev, staging, and production with consistent configurations',
    gradient: 'from-metallic-gold to-neon-orange',
  },
  {
    icon: Cloud,
    title: 'Instant Restores',
    description: 'Recover from incidents in seconds with point-in-time restoration',
    gradient: 'from-neon-orange to-metallic-bronze',
  },
  {
    icon: Cpu,
    title: 'AI Agents',
    description: 'Intelligent automation that learns from your deployment patterns',
    gradient: 'from-metallic-bronze to-neon-amber',
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Secure and scalable data operations with built-in backup',
    gradient: 'from-neon-amber to-metallic-gold',
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-orange to-metallic-bronze bg-clip-text text-transparent">
              Real-World Use Cases
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how Zeptahacker Innov transforms development workflows across industries
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <UseCasePanel key={useCase.title} useCase={useCase} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function UseCasePanel({ useCase, index }: { useCase: UseCase; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="glassmorphic neon-border p-8 group cursor-pointer relative overflow-hidden h-64"
    >
      <div className={`absolute inset-0 bg-transparent opacity-0 group-hover:bg-transparent transition-opacity duration-300`}></div>
      
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className={`inline-flex p-3 rounded-lg bg-transparent mb-4 w-fit`}>
          <useCase.icon className="w-6 h-6 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold mb-3 text-white">{useCase.title}</h3>
        <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
        
        <motion.div
          whileHover={{ x: 10 }}
          className="inline-flex items-center gap-2 mt-4 text-metallic-gold group-hover:text-neon-orange transition-colors"
        >
          <span className="font-semibold">Learn more</span>
          <span className="text-lg">→</span>
        </motion.div>
      </div>
    </motion.div>
  )
}