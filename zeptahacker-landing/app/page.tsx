import Hero from '@/components/Hero'
import Features from '@/components/Features'
import UseCases from '@/components/UseCases'
import Stats from '@/components/Stats'
import CodeSamples from '@/components/CodeSamples'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <UseCases />
      <Stats />
      <CodeSamples />
      <Footer />
    </main>
  )
} 
