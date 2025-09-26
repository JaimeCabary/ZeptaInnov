// ===== CodeSamples.tsx - Light futuristic flip version =====
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Copy, Check } from 'lucide-react'

const codeSamples = [
  {
    language: 'TypeScript',
    code: `// Quantum deployment protocol
import { QuantumDeploy } from '@zeptahacker/core';

const quantum = new QuantumDeploy({
  apiKey: process.env.ZEPTA_QUANTUM_KEY,
  entropySource: 'quantum-random'
});

// Entanglement-based deployment
const singularity = await quantum.singularities.create({
  name: 'nebula-protocol-v2',
  quantumState: 'superposition',
  stability: 0.9997
});

// Multi-reality deployment strategy
await quantum.realities.deploy({
  singularityId: singularity.id,
  dimensions: ['prime', 'shadow', 'quantum'],
  coherenceCheck: true
});`,
  },
  {
    language: 'Python',
    code: `# Neural deployment intelligence
from zepthacker.quantum import NeuralDeploy

ai_deploy = NeuralDeploy(quantum_key='your-quantum-key')

# Predictive anomaly detection
def quantum_rollback_protocol():
    timelines = ai_deploy.timelines.analyze()
    optimal_reality = ai_deploy.ai.predict_optimal_state(
        quantum_data=timelines.quantum_states,
        entropy_levels=timelines.entropy_flux
    )
    
    # Chronosync deployment
    deployment = ai_deploy.chronosync.activate(
        reality_matrix=optimal_reality.matrix,
        temporal_stability= 0.9999
    )
    return deployment

# Quantum entanglement verification
quantum_verified = ai_deploy.entanglement.verify(
    particle_states=deployment.quantum_signature,
    coherence_threshold=9.8
)`,
  },
]

interface CodeSample {
  language: string;
  code: string;
}

// Better syntax highlighting with tokenization
function SyntaxHighlighter({ code, language }: { code: string; language: string }) {
  const tokenizeLine = (line: string) => {
    const tokens: { type: string; content: string }[] = [];
    let current = 0;
    
    // TypeScript token patterns
    const tsPatterns = {
      comment: /^\/\/.*/,
      string: /^(['"`])(?:[^\\]|\\.)*?\1/,
      keyword: /^\b(await|import|const|new|process|env|class|function|return|if|else|for|while)\b/,
      number: /^\b\d+(\.\d+)?\b/,
      function: /^\b\w+(?=\()/,
      property: /^\b\w+(?=\.)/,
      whitespace: /^\s+/,
      identifier: /^\w+/
    };

    // Python token patterns  
    const pyPatterns = {
      comment: /^#.*/,
      string: /^(['"])(?:[^\\]|\\.)*?\1/,
      keyword: /^\b(def|from|import|return|True|False|class|if|else|for|while|in)\b/,
      number: /^\b\d+(\.\d+)?\b/,
      function: /^\b\w+(?=\()/,
      whitespace: /^\s+/,
      identifier: /^\w+/
    };

    const patterns = language === 'TypeScript' ? tsPatterns : pyPatterns;

    while (current < line.length) {
      // Try each pattern in order
      let matched = false;
      
      for (const [type, pattern] of Object.entries(patterns)) {
        const match = line.slice(current).match(pattern);
        if (match) {
          tokens.push({ type, content: match[0] });
          current += match[0].length;
          matched = true;
          break;
        }
      }
      
      // If no pattern matched, take one character and continue
      if (!matched) {
        tokens.push({ type: 'unknown', content: line[current] });
        current++;
      }
    }
    
    return tokens;
  };

  const highlightSyntax = (line: string, index: number) => {
    const tokens = tokenizeLine(line);
    
    const getTokenClass = (type: string) => {
      switch (type) {
        case 'comment': return 'text-emerald-400/80';
        case 'string': return 'text-amber-300';
        case 'keyword': return 'text-purple-400 font-medium';
        case 'number': return 'text-amber-300';
        case 'function': return 'text-blue-300';
        case 'property': return 'text-yellow-200';
        case 'whitespace': return 'text-transparent'; // invisible but maintains spacing
        default: return 'text-gray-100';
      }
    };

    return (
      <div key={index} className="flex hover:bg-white/10 transition-colors duration-200">
        <span className="text-amber-400/60 select-none w-8 text-right pr-3 text-xs">
          {index + 1}
        </span>
        <span className="flex-1">
          {tokens.map((token, i) => (
            <span key={i} className={getTokenClass(token.type)}>
              {token.content}
            </span>
          ))}
        </span>
      </div>
    );
  };

  return (
    <div className="font-mono text-sm leading-relaxed">
      {code.split('\n').map((line, index) => highlightSyntax(line, index))}
    </div>
  );
}
export default function CodeSamples() {
  return (
    <section id="code" className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center'
        }}
      ></div>
      
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'url("/huddy bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
              <span className="bg-gradient-to-r from-amber-500 to-orange-100 bg-clip-text text-transparent">
                &gt; Developer_Interface()
              </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light tracking-wide">
            Clean, intuitive API designed for modern development workflows
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
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
    try {
      await navigator.clipboard.writeText(sample.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = sample.code
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // Different flip directions for variety
  const flipVariants = {
    hidden: { 
      opacity: 0, 
      rotateY: index % 2 === 0 ? -15 : 15,
      rotateX: 10,
      scale: 0.9,
      y: 50 
    },
    visible: { 
      opacity: 1, 
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={flipVariants}
      className="relative group perspective-1000"
      style={{ perspective: '1000px' }}
    >
      <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-amber-400/30 transition-all duration-500 group-hover:transform group-hover:scale-[1.02]">
        
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 bg-amber-200/10 border-b border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <span className="text-amber-300 font-mono font-medium text-sm tracking-wide">
              {sample.language}
            </span>
          </div>
          
          <button
            onClick={copyToClipboard}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg border font-mono text-xs transition-all duration-300 ${
              copied 
                ? 'bg-green-500/10 border-green-400/50 text-green-300' 
                : 'bg-gray-700/30 border-gray-400/50 text-gray-300 hover:bg-amber-500/10 hover:border-amber-400/30 hover:text-amber-300'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3 h-3" />
                <span>COPIED</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>COPY</span>
              </>
            )}
          </button>
        </div>
        
        {/* Code Content */}
        <div className="p-6 bg-gradient-to-br from-black/70 to-black/90">
          <div className="overflow-x-auto">
            <SyntaxHighlighter code={sample.code} language={sample.language} />
          </div>
        </div>
        
        {/* Subtle footer */}
        <div className="px-6 py-3 bg-amber-200/20 border-t border-gray-700/30">
          <div className="text-xs text-gray-200 font-mono tracking-wide">
            &gt; Ready for quantum deployment
          </div>
        </div>
      </div>
    </motion.div>
  )
}