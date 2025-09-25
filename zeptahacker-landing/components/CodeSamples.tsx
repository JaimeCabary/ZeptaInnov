// ===== CodeSamples.tsx - Updated colors to match Hero =====
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Copy, Check } from 'lucide-react'

const codeSamples = [
  {
    language: 'TypeScript',
    code: `// Instant deployment with Zeptahacker Innov
import { Zepthacker } from 'zepthacker-sdk';

const client = new Zepthacker({
  apiKey: process.env.ZEPTHACKER_API_KEY,
});

// Create a checkpoint
const checkpoint = await client.checkpoints.create({
  name: 'pre-feature-release',
  metadata: { version: '1.2.0' }
});

// Deploy with confidence
const deployment = await client.deployments.create({
  checkpointId: checkpoint.id,
  environment: 'production',
  strategy: 'blue-green'
});`,
  },
  {
    language: 'Python',
    code: `# AI-powered workflow automation
from zepthacker import ZepthackerClient

client = ZepthackerClient(api_key='your-api-key')

# Smart rollback to previous checkpoint
def handle_deployment_issue():
    checkpoints = client.checkpoints.list()
    last_stable = next(c for c in checkpoints if c.metadata['stable'])
    
    rollback = client.deployments.rollback(
        checkpoint_id=last_stable.id,
        reason='Performance regression detected'
    )
    return rollback

# AI suggests optimal deployment times
optimal_time = client.ai.suggest_deployment_time(
    historical_data=deployment_history,
    constraints=business_hours
)`,
  },
]

interface CodeSample {
  language: string;
  code: string;
}

export default function CodeSamples() {
  return (
    <section id="code" className="py-12 md:py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 px-2">
            <span className="bg-gradient-to-r from-metallic-gold to-neon-orange bg-clip-text text-transparent">
              Developer Experience
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Clean, intuitive API designed for developers who care about code quality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {codeSamples.map((sample, index) => (
            <CodeBlock key={sample.language} sample={sample} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CodeBlock({ sample, index }: { sample: CodeSample; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(sample.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-metallic-gold/20 to-neon-orange/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300"></div>
      
      <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-lg border border-metallic-gold/30 overflow-hidden">
        <div className="flex justify-between items-center px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border-b border-metallic-gold/20">
          <span className="text-metallic-gold font-mono font-semibold text-sm sm:text-base">
            {sample.language}
          </span>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-md bg-metallic-gold/10 border border-metallic-gold/30 hover:bg-metallic-gold/20 transition-colors text-xs sm:text-sm"
          >
            {copied ? (
              <Check className="w-3 h-3 sm:w-4 sm:h-4" />
            ) : (
              <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
            )}
            <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
            <span className="sm:hidden">{copied ? '✓' : 'Copy'}</span>
          </button>
        </div>
        
        <div className="p-3 sm:p-4 overflow-x-auto">
          <pre className="text-xs sm:text-sm leading-relaxed overflow-x-auto">
            <code className="language-typescript block min-w-max">
              {sample.code}
            </code>
          </pre>
        </div>
      </div>
    </motion.div>
  )
}