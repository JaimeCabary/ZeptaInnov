// types/framer-motion.d.ts
import { DOMAttributes } from 'react';

declare module 'framer-motion' {
  interface MotionProps extends DOMAttributes<unknown> {
    className?: string;
  }
}