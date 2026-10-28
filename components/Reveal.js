'use client'

import { motion, useReducedMotion } from 'framer-motion'

// Scroll'da yumuşak belirme; "azaltılmış hareket" tercihinde animasyonsuz render eder.
export const MotionSection = ({ children, ...props }) => {
  const reduce = useReducedMotion()
  if (reduce) return <section {...props}>{children}</section>
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.section>
  )
}
