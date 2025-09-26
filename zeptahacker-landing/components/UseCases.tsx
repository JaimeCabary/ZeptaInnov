// ===== UseCases.tsx - Fixed with Real Icons =====
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaServer, 
  FaCloud, 
  FaCogs, 
  FaDatabase,
} from 'react-icons/fa'

interface UseCase {
  icon: any;
  title: string;
  description: string;
  tech: string[];
  gradient: string;
}

const useCases: UseCase[] = [
  {
    icon: FaServer,
    title: 'Multi-Environment Deployments',
    description: 'Deploy across dev, staging, and production with consistent configurations and automated pipelines',
    tech: ['Docker', 'K8s', 'CI/CD'],
    gradient: 'from-amber-500 to-amber-500',
  },
  {
    icon: FaCloud,
    title: 'Instant Restores',
    description: 'Recover from incidents in seconds with point-in-time restoration and automated backup systems',
    tech: ['AWS', 'GCP', 'Azure'],
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: FaCogs,
    title: 'AI Automation',
    description: 'Intelligent automation that learns from your deployment patterns and optimizes performance',
    tech: ['TensorFlow', 'ML', 'AI'],
    gradient: 'from-orange-500 to-orange-500',
  },
  {
    icon: FaDatabase,
    title: 'Data Management',
    description: 'Secure and scalable data operations with built-in backup, encryption, and compliance',
    tech: ['PostgreSQL', 'MongoDB', 'Redis'],
    gradient: 'from-orange-500 to-teal-500',
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 px-4 relative bg-black border-t border-gray-800">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-mono text-white">
            <span className="bg-gradient-to-r from-amber-500 to-orange-100 bg-clip-text text-transparent">
              $ use_cases --production
            </span>
          </h2>
          <p className="text-gray-400 text-lg font-mono max-w-3xl mx-auto">
             Real-world applications across enterprise infrastructure
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
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -5 }}
      className="group cursor-pointer"
    >
      <div className="bg-gray-900/10 border border-amber-400 rounded-lg p-8 h-full hover:border-amber-500 transition-all duration-300">
        <div className="flex items-start justify-between mb-6">
          <div className={`p-4 rounded-lg bg-transparent bg-opacity-10 border border-gray-600`}>
            <useCase.icon className="w-8 h-8 text-amber-200" />
          </div>
          
          <div className="flex space-x-2">
            {useCase.tech.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-black text-amber-400 text-xs font-mono rounded border border-gray-700">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-white font-mono">{useCase.title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">{useCase.description}</p>
        
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-amber-400 font-mono text-sm cursor-pointer"
          >
            <span>view_case_study</span>
            <span>→</span>
          </motion.div>
          
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-400 text-xs font-mono">LIVE</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}