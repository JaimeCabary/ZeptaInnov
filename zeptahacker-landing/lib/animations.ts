// lib/animations.ts
export const animationConfig = {
  // Global spring settings for consistency
  spring: {
    type: "spring" as const,
    mass: 1,
    damping: 25,
    stiffness: 120,
    restDelta: 0.001,
    restSpeed: 0.001,
  },
  
  // Smooth easing curves
  ease: {
    smooth: [0.25, 0.1, 0.25, 1],
    expressive: [0.34, 1.56, 0.64, 1],
    sharp: [0.4, 0, 0.6, 1],
  },
};

// Reusable animation variants
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      ...animationConfig.spring,
      duration: 1.2,
      ease: animationConfig.ease.smooth
    }
  }
};

export const slideIn = {
  hidden: (custom: number = 0) => ({
    opacity: 0,
    x: custom * 80,
    scale: 0.9,
    rotateY: custom * 15,
  }),
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      ...animationConfig.spring,
      duration: 1,
      ease: animationConfig.ease.smooth
    }
  }
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      ...animationConfig.spring,
      duration: 0.8,
      ease: animationConfig.ease.expressive
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

// Hover effects
export const hoverScale = {
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 300,
      duration: 0.2
    }
  }
};

export const hoverLift = {
  hover: {
    y: -8,
    rotateX: -2,
    boxShadow: "0 20px 40px rgba(245, 158, 11, 0.15)",
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 400,
    }
  }
};