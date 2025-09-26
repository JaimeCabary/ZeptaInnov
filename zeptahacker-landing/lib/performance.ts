// lib/performance.ts
export const performanceConfig = {
  // Optimized spring config for 60fps
  spring: {
    type: "spring" as const,
    mass: 0.8, // Lighter for better performance
    damping: 20, // Less damping for snappier response
    stiffness: 100, // Balanced stiffness
    restDelta: 0.01, // Larger delta for better performance
    restSpeed: 0.01,
  },
  
  // Performance-focused transitions
  transition: {
    duration: 0.3, // Shorter durations
    ease: [0.25, 0.46, 0.45, 0.94] // Optimized easing
  }
};

// Optimized animation variants
export const optimizedVariants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: performanceConfig.spring
    }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: performanceConfig.spring
    }
  }
};