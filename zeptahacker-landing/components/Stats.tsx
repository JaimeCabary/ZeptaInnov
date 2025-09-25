// ===== Stats.tsx - Updated colors to match Hero =====
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Mock CountUp component since it's not available
function CountUp({ end, suffix, duration, decimals }: {
  end: number;
  suffix?: string;
  duration: number;
  decimals?: number;
}) {
  return <span>{end}{suffix}</span>
}

const stats = [
  { number: 25000, suffix: '+', label: 'Developers' },
  { number: 10, suffix: 'M+', label: 'Queries Processed' },
  { number: 99.9, suffix: '%', label: 'Uptime' },
  { number: 500, suffix: '+', label: 'API Integrations' },
]

const trustedBy = [
  'TechCorp', 'InnovateLabs', 'FutureSystems', 'NextGen', 'AlphaTech', 'BetaSolutions'
]

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="stats" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-metallic-gold to-neon-orange bg-clip-text text-transparent mb-2">
                {isInView && (
                  <CountUp
                    end={stat.number}
                    suffix={stat.suffix}
                    duration={2}
                    decimals={stat.number % 1 !== 0 ? 1 : 0}
                  />
                )}
              </div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-300">Trusted by industry leaders</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {trustedBy.map((company) => (
              <motion.div
                key={company}
                whileHover={{ scale: 1.1, color: '#ff8c00' }}
                className="text-xl font-semibold text-gray-400 cursor-pointer transition-colors"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}