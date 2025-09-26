// ===== Stats.tsx - Fixed with Real Icons =====
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { FaUsers, FaDatabase, FaServer, FaCode, FaMicrosoft, FaGoogle, FaAmazon, FaStripe, FaShopify, FaSpotify } from 'react-icons/fa'

// Real CountUp component
function CountUp({ 
  end, 
  suffix = '', 
  duration = 2,
  decimals = 0 
}: {
  end: number;
  suffix?: string;
  duration?: number;
  decimals?: number;
}) {
  const [count, setCount] = useState(0)
  const isInView = useInView(useRef(null), { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const increment = end / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(start)
        }
      }, 1000 / 60)

      return () => clearInterval(timer)
    }
  }, [isInView, end, duration])

  return (
    <span>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  )
}

const stats = [
  { number: 25000, suffix: '+', label: 'Developers', icon: FaUsers, delay: 0.1 },
  { number: 10.5, suffix: 'M+', label: 'Queries Processed', icon: FaDatabase, delay: 0.2, decimals: 1 },
  { number: 99.9, suffix: '%', label: 'Uptime', icon: FaServer, delay: 0.3, decimals: 1 },
  { number: 500, suffix: '+', label: 'API Integrations', icon: FaCode, delay: 0.4 },
]

const trustedCompanies = [
  { name: 'Microsoft', icon: FaMicrosoft },
  { name: 'Google', icon: FaGoogle },
  { name: 'Amazon', icon: FaAmazon },
  { name: 'Stripe', icon: FaStripe },
  { name: 'Shopify', icon: FaShopify },
  { name: 'Spotify', icon: FaSpotify },
]

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="stats" className="py-20 px-4 relative bg-black border-t border-gray-800">
      {/* Binary Background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute text-orange-400 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div ref={ref} className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: stat.delay }}
              className="text-center group"
            >
              <div className="bg-gray-900/20 border border-gray-100 rounded-lg p-6 hover:border-amber-500 transition-colors">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-transparent rounded-lg">
                    <stat.icon className="w-6 h-6 text-amber-500" />
                  </div>
                </div>
                
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono">
                  {isInView && (
                    <CountUp
                      end={stat.number}
                      suffix={stat.suffix}
                      duration={2}
                      decimals={stat.decimals}
                    />
                  )}
                </div>
                <div className="text-gray-400 text-sm font-mono uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-300 font-mono">TRUSTED BY INDUSTRY LEADERS</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trustedCompanies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gray-900/10 border border-gray-300 rounded-lg p-4 hover:border-amber-500 transition-all"
              >
                <company.icon className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-white text-sm font-mono">{company.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}